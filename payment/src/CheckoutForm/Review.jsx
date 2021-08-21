import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review =()=>{
    return (
        <>
        <Typography variant="h6" gutterBottom>Order Summery</Typography>
        <List disablePadding>
            <ListItem style={{padding:'10px 0'}}>
                <ListItemText primary="Kettle" secondary ="Quantity: 1"/>
                <Typography varient ="body2">₹100</Typography>
            </ListItem>

            <ListItem style={{padding:'10px 0'}}>
                <ListItemText primary="Bat" secondary ="Quantity: 1"/>
                <Typography varient ="body2">₹100</Typography>
            </ListItem>

            <listItem style={{padding:'10px 0'}}>
                <ListItemText primary="Total"/>
                <Typography varient="subtitle1" stytle={{fontWeight:700}}>₹200</Typography>

            </listItem>

        </List>
        </>
    )
}

export default Review