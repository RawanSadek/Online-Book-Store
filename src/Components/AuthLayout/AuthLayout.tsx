import { Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import authImg from '../../assets/bookstorimg.jpg'

export default function AuthLayout() {
  return (

    <Grid container justifyContent="center">
      <Grid size={{ sm: 12, md: 6 }} order={{xs: 2, sm: 2, md: 0 }} >
        <Item><img src={authImg} alt="book store image" className='w-100 vh-100' /></Item>
      </Grid>
      <Grid size={{ sm: 12, md: 6 }} order={{xs: 1, sm: 1, md: 2 }} overflow='scroll'>
        <Item> <Outlet /></Item>
      </Grid>
    </Grid>
  )
}
