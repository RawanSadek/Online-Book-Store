import { Checkbox, Grid, TextField, Typography } from '@mui/material'
import Item from '@mui/material/Grid'
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
        <TextField id="email" variant="outlined" className='w-100' label="Email*" />
        <TextField id="password" variant="outlined" className='w-100 my-4' label="Password*" />
        <div className="row justify-content-between">
          <div className="col-3 text-start p-0">
            <Checkbox color='secondary' />
            <Typography variant="body1" color='secondary' display="inline">Remember me</Typography>
          </div>
          <div className="col-4 text-end">
            <Typography variant="body1" color='secondary' display="inline">Forgot password?</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
