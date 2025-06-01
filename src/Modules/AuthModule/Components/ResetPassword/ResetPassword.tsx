import { Box, Button, Checkbox, Grid, Stack, TextField, Typography } from '@mui/material'
import Item from '@mui/material/Box'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AUTH_URLs } from '../../../../Constants/END_POINTS'
import { emailValidation, otpValidation, regPasswordValidation } from '../../../../Constants/VALIDATIONS'

export default function ResetPassword() {
  let navigate = useNavigate()

  interface FormInputs {
    email: string
    otp: string
    password: string
  }
  let { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

  let OnSubmit = async (data: FormInputs) => {
    try {
      let response = await axios.post(AUTH_URLs.reset, data)
      toast.success(response?.data?.message)
      localStorage.setItem('accessToken', response?.data?.data?.accessToken)
      navigate('/login')

    } catch (error) {
      console.log(error)
    }
    // console.log(data);
  }

  return (
    <>
      <div className="text-start mb-4">
        <Typography variant="body1" color='textSecondary'>Welcome back!</Typography>
        <h3>Reset your password</h3>
      </div>


      <Box onSubmit={handleSubmit(OnSubmit)} component="form">
        <TextField type='email' id="email" autoComplete='email' variant="outlined" className='w-100' label="Email *" {...register('email', emailValidation)} error={!!errors.email} helperText={errors.email?.message} />
        <TextField type='text' id="otp" variant="outlined" className='w-100 my-4' label="OTP *" {...register('otp', otpValidation)} error={!!errors.otp} helperText={errors.otp?.message} />
        <TextField type='password' id="password" autoComplete='password' variant="outlined" className='w-100 mb-4' label="New Password *" {...register('password', regPasswordValidation)} error={!!errors.password} helperText={errors.password?.message} />

        <Grid container>
          <Item display="flex" alignItems="center">
            <Checkbox />
            <Typography variant="body2" className="blue-text">Remember me</Typography>
          </Item>
        </Grid>

        <Stack spacing={2} marginY='20px'>
          <Item><Button type='submit' variant="contained" className='orange-bg' fullWidth sx={{ padding: '14px', fontSize: '20px' }}>SEND</Button></Item>
          <Item onClick={() => navigate('/register')}><Button variant="outlined" className='blue-text' fullWidth sx={{ padding: '14px', fontSize: '20px' }}>LOGIN</Button></Item>
        </Stack>
      </Box>

    </>
  )
}
