import { Box, Button, Checkbox, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import Item from '@mui/material/Grid'
import logo from '../../assets/booksLogo.png'

export default function Register() {
  return (
    <div className='vh-100 row justify-content-center align-items-center'>
      <div className='w-75 col-12 text-center'>

        <img src={logo} alt="logo" />
        <div className="text-start my-5">
          <Typography variant="body1" color='textSecondary'>Create new account</Typography>
          <h3>Register</h3>
        </div>

        <Box component="form">
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
              <MenuItem value={1}>Customer</MenuItem>
              <MenuItem value={2}>User</MenuItem>
            </Select>
          </FormControl>

          <Stack spacing={2} marginY='20px'>
            <Item><Button variant="contained" className='orange-bg' fullWidth sx={{ padding: '14px', fontSize: '20px' }}>LOGIN</Button></Item>
            <Item><Button variant="outlined" className='blue-text' fullWidth sx={{ padding: '14px', fontSize: '20px' }}>REGISTER</Button></Item>
          </Stack>
        </Box>
      </div>
    </div>
  )
}
