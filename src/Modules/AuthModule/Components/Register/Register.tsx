import { Box, Button, Checkbox, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import Item from '@mui/material/Grid'
import logo from '../../../../assets/booksLogo.png'
import { useNavigate } from 'react-router-dom'

export default function Register() {

  let navigate = useNavigate()

  return (
    <>
      <div className="text-start mb-4">
        <Typography variant="body1" color='textSecondary'>Create new account</Typography>
        <h3>Register</h3>
      </div>

      <Box component="form">

        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <TextField type='text' id="fName" variant="outlined" sx={{ width: '49%' }} label="First Name *" />
          <TextField type='text' id="lName" variant="outlined" sx={{ width: '49%' }} label="Last Name *" />
        </Box>
        <TextField type='email' id="email" variant="outlined" className='w-100' label="Email *" />
        <TextField type='password' id="password" variant="outlined" className='w-100 my-4' label="Password *" />

        <FormControl fullWidth variant="outlined">
          <InputLabel id="role-label">Role *</InputLabel>
          <Select
            labelId="role-label"
            id="role"
            label="Role *"
            defaultValue=""
          >
            <MenuItem value={1}>Admin</MenuItem>
            <MenuItem value={2}>Customer</MenuItem>
          </Select>
        </FormControl>

        <Stack spacing={2} marginY='20px'>
          <Item onClick={() => navigate('/login')}><Button variant="contained" className='orange-bg' fullWidth sx={{ padding: '14px', fontSize: '20px' }}>REGISTER</Button></Item>
          <Item onClick={() => navigate('/login')}><Button variant="outlined" className='blue-text' fullWidth sx={{ padding: '14px', fontSize: '20px' }}>LOGIN</Button></Item>
        </Stack>
      </Box>
    </>

  )
}
