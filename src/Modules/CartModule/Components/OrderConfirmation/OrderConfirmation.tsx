import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom';

export default function OrderConfirmation() {

    const location = useLocation();
    console.log('state', location.state);

    let navigate = useNavigate();

    return (
        <Box sx={{ width: '40%', boxShadow: '0px 0px 10px 5px rgba(240, 240, 240)', borderRadius: '10px', padding: '30px', margin: '20px', marginX: 'auto', textAlign: 'center' }}>
            <FaCheckCircle color='green' size={70} />
            <Typography variant='h3' sx={{ marginY: '20px' }}>Order Confirmed!</Typography>
            <Typography variant='body1' sx={{ fontSize: '20px', color: 'grey' }}>Your order has been placed successfully. Thank you for shopping with us!</Typography>
            <Divider sx={{ marginY: '30px' }} />
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Order Number:</Typography>
            <Typography variant='body1' sx={{ fontSize: '20px', color: 'grey' }}>{location.state.orderID}</Typography>
            <Typography variant='h5' sx={{ marginTop: '10px', fontWeight: 'bold' }}>Total price:</Typography>
            <Typography variant='body1' sx={{ fontSize: '20px', color: 'grey' }}>${location.state.totalPrice}</Typography>
            <Divider sx={{ marginTop: '30px' }} />
            <Button onClick={() => (navigate('/dashboard'))} sx={{bgcolor:'#ED553B', color:'white', width:'100%'}}>Back to Home</Button>
        </Box>
    )
}
