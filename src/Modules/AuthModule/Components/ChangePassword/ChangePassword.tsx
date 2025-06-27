import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Item from "@mui/material/Grid";
import { loginPasswordValidation, regPasswordValidation } from '../../../../Constants/VALIDATIONS'
import { AUTH_URLs } from '../../../../Constants/END_POINTS'

export default function ChangePassword() {
  let navigate = useNavigate()

  let { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

  interface FormInputs {
    password: string
    password_new: string
  }

  let OnSubmit = async (data:FormInputs)=>{
    const token = localStorage.getItem('accessToken')
    console.log(token)
      try {
        await axios.post(`${AUTH_URLs.change}`,data, {headers: {Authorization: `Bearer ${token}`}})
        toast.success("Your password has successfully changed.")
        navigate('/login')
        
      } catch (error) {
        console.log(error)
        toast.error("Something wrong happened !")
      }
    }

  return (
    <>
      <div className="text-start mb-4">
        <Typography variant="body1" color='textSecondary'>Welcome back!</Typography>
        <Typography component={'h4'} variant="h4">Change Your Password Easily</Typography>
      </div>

      <Box component="form" onSubmit={handleSubmit(OnSubmit)}>
        <TextField type='password' id="password" variant="outlined" className='w-100' label="Old Password *" {...register('password', loginPasswordValidation)} error={!!errors.password} helperText={errors.password?.message}/>
        <TextField type='password' id="password_new" variant="outlined" className='w-100 my-3' label="New Password *" {...register('password_new', regPasswordValidation)} error={!!errors.password_new} helperText={errors.password_new?.message}/>

          <Item><Button type='submit' variant="contained" className='orange-bg' fullWidth sx={{ padding: '14px', fontSize: '20px', marginTop:"40px"}}>SAVE</Button></Item>

      </Box>
    </>
  )
}
