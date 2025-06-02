import { Button, Checkbox, Grid, Stack, TextField, Typography } from '@mui/material'
import Item from '@mui/material/Grid'
import Box from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'
import {AUTH_URLs} from '../../../../Constants/END_POINTS'
import { emailValidation, loginPasswordValidation } from '../../../../Constants/VALIDATIONS'
import { useContext } from 'react'
import { AuthContext } from '../../../../Contexts/AuthContext/AuthContext'

export default function Login() {
  
  let navigate = useNavigate()
  let {saveUserData}:any = useContext(AuthContext);

  interface FormInputs {
    email: string
    password: string
  }
  let { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

  let OnSubmit = async (data:FormInputs)=>{
    try {
      let response = await axios.post(AUTH_URLs.login,data)
      localStorage.setItem('accessToken',response?.data?.data?.accessToken)
      saveUserData()
      toast.success("Welcome to the Book Store")
      navigate('/dashboard')
      
    } catch (error) {
      toast.error("Wrong email or password !")
      console.log(error)
    }
  }

  return (
    <>
      <div className="text-start mb-4">
        <Typography variant="body1" color='textSecondary'>Welcome back!</Typography>
        <h3>Login to your account</h3>
      </div>


      <Box onSubmit={handleSubmit(OnSubmit)} component="form">
        <TextField type='email' id="email" autoComplete='email' variant="outlined" className='w-100' label="Email *" {...register('email', emailValidation)} error={!!errors.email} helperText={errors.email?.message}/>
        <TextField type='password' id="password" autoComplete='password' variant="outlined" className='w-100 my-4' label="Password *" {...register('password', loginPasswordValidation)} error={!!errors.password} helperText={errors.password?.message}/>

        <Grid container sx={{ justifyContent: 'space-between' }}>
          <Item display="flex" alignItems="center">
            <Checkbox />
            <Typography variant="body2" className="blue-text">Remember me</Typography>
          </Item>

          <Item onClick={() => navigate('/forgot')} display="flex" alignItems="center" sx={{ cursor: 'pointer' }}>
            <Typography variant="body2" className="blue-text">Forgot password?</Typography>
          </Item>
        </Grid>

        <Stack spacing={2} marginY='20px'>
          <Item><Button type='submit' variant="contained" className='orange-bg' fullWidth sx={{ padding: '14px', fontSize: '20px' }}>LOGIN</Button></Item>
          <Item onClick={() => navigate('/register')}><Button variant="outlined" className='blue-text' fullWidth sx={{ padding: '14px', fontSize: '20px' }}>REGISTER</Button></Item>
        </Stack>
      </Box>

    </>
  )
}
