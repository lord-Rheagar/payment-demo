import React,{useState, useEffect} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography  } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './CustomTextField';
import { commerce } from '../lib/commerce';

const AddressForm =({next})=>{
    
     

    const methods = useForm();
  
    return(
        <>
              <Typography varient ="h6" gutterBottom>Shipping Address</Typography>

              <FormProvider {...methods}>
                 <form onSubmit={methods.handleSubmit((data)=>next({data}))}>
                     <Grid container spacing ={3}>
                        <FormInput required name='firstName' label ='First Name'/>
                        <FormInput required name='lastName' label ='Last Name'/>
                        <FormInput required name='address1' label ='Address'/>
                        <FormInput required name='email' label ='Email'/>
                        <FormInput required name='city' label ='City'/>
                      
                        <FormInput required name='ZIP' label ='ZIP/Postal Code'/>
                        <FormInput required name='country' label ='Country'/>
                        <FormInput required name='state' label ='State'/>
                       
                      

                     </Grid>
                     <br/>

                     <div style={{display:'flex', justifyContent:'space-between'}}>
                         <Button varient="outlined">Back to Cart</Button>
                         <Button type="submit" varient="contained" color="primary">Next</Button>
                     </div>

                 </form>
              </FormProvider>
        </>
    )
}

export default AddressForm