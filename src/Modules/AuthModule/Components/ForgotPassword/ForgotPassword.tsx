import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AUTH_URLs } from "../../../../Constants/END_POINTS";
import { emailValidation } from "../../../../Constants/VALIDATIONS";

export default function ForgotPassword() {
  let navigate = useNavigate()

  interface FormInputs {
    email: string
    password: string
  }
  let { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

  let OnSubmit = async (data: FormInputs) => {
    try {
      await axios.post(AUTH_URLs.forgot, data)
      navigate('/reset')

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="text-start mb-5">
        <Typography variant="body1" color='textSecondary'>Welcome back!</Typography>
        <h3>Forgot Password</h3>
      </div>
      <Box component='form' onSubmit={handleSubmit(OnSubmit)}>
        <TextField type='email' id="email" autoComplete='email' variant="outlined" className='w-100 mb-4' label="Enter your email *" {...register('email', emailValidation)} error={!!errors.email} helperText={errors.email?.message} />
        <Button type='submit' variant="contained" className='orange-bg' fullWidth sx={{ padding: '14px', fontSize: '20px' }}>Send</Button>
      </Box>
    </>
  )
}
