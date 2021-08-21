import React, {useState, useEffect} from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'

import useStyles from './styles'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import { commerce } from '../../lib/commerce'




const steps=['Shipping Address', 'Payment Details']




const Checkout=(id)=>{
    const [activeStep, setActiveStep]=useState(0);

    const [shippingData, setShippingData]= useState({})

    const [checkoutToken, setCheckoutToken]= useState(null)
    

     const classes=useStyles();

     useEffect(()=>{
         const generateToken =async()=>{
             try{
                 const token =await commerce.checkout.generateToken(id, {type:'cart'} )
                 console.log(token);

                 setCheckoutToken(token)
             }catch(error){

             }
         }

         generateToken();
     },[])

     const nextStep =() =>setActiveStep((prevActivestep)=>prevActivestep+1);

     const backStep =() =>setActiveStep((prevActivestep)=>prevActivestep-1);




     const next=(data)=>{
         setShippingData(data)
         nextStep();
     }

    

    const Confirmation =()=>(
        <> <div>
            <Typography varient="h5">Thank you for your purchase</Typography>
            <Divider className={classes.divider}/>
            <Typography variant="subtitle2">Order ref:ref</Typography>
            </div>
            <br/>
            <Button variant="outlined" type="button">Back to Home</Button>
        </>
    )

    const Form =()=>activeStep===0?<AddressForm  next={next}/>:<PaymentForm shippingData={shippingData} backStep={backStep} nextStep={nextStep}/>

    return(
        <>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography varient="h4" align="center">Checkout</Typography>

                    <Stepper activeStep={activeStep} className={classes.Stepper}
                    >
                        {
                            steps.map((step)=>(
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))
                        }

                    </Stepper>
                    {activeStep===steps.length? <Confirmation/> : <Form/>}

                </Paper>

            </main>

    
        </>
    )
}
export default Checkout

