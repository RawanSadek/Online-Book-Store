import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import Item from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { emailValidation, nameValidation, regPasswordValidation } from '../../../../Constants/VALIDATIONS'
import axios from 'axios'
import { AUTH_URLs } from '../../../../Constants/END_POINTS'
import { toast } from 'react-toastify'

export default function Register() {

  let navigate = useNavigate()

  let { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

  interface FormInputs {
    first_name: string
    last_name: string
    email: string
    password: string
    role: string
  }

  let OnSubmit = async (data:FormInputs)=>{
      try {
        await axios.post(`${AUTH_URLs.register}`,data)
        // localStorage.setItem('accessToken',response?.data?.data?.accessToken)
        toast.success("Your registration is successfully completed")
        navigate('/login')
        
      } catch (error) {
        console.log(error)
        toast.error("Something wrong happened !")
      }
    }

  return (
    <>
      <div className="text-start mb-4">
        <Typography variant="body1" color='textSecondary'>Create new account</Typography>
        <Typography component={'h4'} variant="h4">Rigester</Typography>
      </div>

      <Box component="form" onSubmit={handleSubmit(OnSubmit)}>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <TextField type='text' id="fName" variant="outlined" sx={{ width: '49%' }} label="First Name *" {...register('first_name', nameValidation)} error={!!errors.first_name} helperText={errors.first_name?.message} />
          <TextField type='text' id="lName" variant="outlined" sx={{ width: '49%' }} label="Last Name *" {...register('last_name', nameValidation)} error={!!errors.last_name} helperText={errors.last_name?.message}/>
        </Box>
        <TextField type='email' id="email" variant="outlined" className='w-100' label="Email *" {...register('email', emailValidation)} error={!!errors.email} helperText={errors.email?.message}/>
        <TextField type='password' id="password" variant="outlined" className='w-100 my-4' label="Password *" {...register('password', regPasswordValidation)} error={!!errors.password} helperText={errors.password?.message}/>

        <FormControl fullWidth variant="outlined">
          <InputLabel id="role-label">Role *</InputLabel>
          <Select
            labelId="role-label"
            id="role"
            label="Role *"
            defaultValue=""
            {...register('role', {required: "role is required !"})} error={!!errors.role}
          >
            <MenuItem disabled value={'Admin'}>Admin</MenuItem>
            <MenuItem value={'Customer'}>Customer</MenuItem>
          </Select>
        </FormControl>

        <Stack spacing={2} marginY='20px'>
          <Item><Button type='submit' variant="contained" className='orange-bg' fullWidth sx={{ padding: '14px', fontSize: '20px' }}>REGISTER</Button></Item>
          <Item onClick={()=>navigate('/login')}><Button variant="outlined" className='blue-text' fullWidth sx={{ padding: '14px', fontSize: '20px' }}>LOGIN</Button></Item>
        </Stack>
      </Box>
    </>

  )
}
