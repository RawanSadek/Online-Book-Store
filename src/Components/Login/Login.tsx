import { Button, Checkbox, Grid, Stack, TextField, Typography } from '@mui/material'
import Item from '@mui/material/Grid'
import Box from '@mui/material/Grid'
import logo from '../../assets/booksLogo.png'

export default function Login() {
  return (
    <div className='vh-100 row justify-content-center align-items-center'>
      <div className='w-75 col-12 text-center'>
        <img src={logo} alt="logo" />
        <div className="text-start my-5">
          <Typography variant="body1" color='textSecondary'>Welcome back!</Typography>
          <h3>Login to your account</h3>
        </div>
        <TextField id="email" variant="outlined" className='w-100' label="Email *" />
        <TextField id="password" variant="outlined" className='w-100 my-4' label="Password *" />

        <Grid container sx={{ justifyContent: 'space-between' }}>
          <Item display="flex" alignItems="center">
            <Checkbox />
            <Typography variant="body2" className="blue-text">Remember me</Typography>
          </Item>

          <Item display="flex" alignItems="center">
            <Typography variant="body2" className="blue-text">Forgot password?</Typography>
          </Item>
        </Grid>

        <Stack spacing={2} marginY='20px'>
          <Item><Button variant="contained" className='orange-bg' fullWidth sx={{padding:'14px', fontSize:'20px'}}>LOGIN</Button></Item>
          <Item><Button variant="outlined" className='blue-text' fullWidth sx={{padding:'14px', fontSize:'20px'}}>REGISTER</Button></Item>
        </Stack>
        
      </div>
    </div>
  )
}
