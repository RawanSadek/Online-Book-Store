import { Avatar, Box, Grid, Typography } from "@mui/material";
import { MdOutlineLockReset } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Profile() {

  let profileData = JSON.parse(String(localStorage.getItem('profile')));

  return (
    <>

      <Grid container spacing={3} margin={'20px'} padding={'20px'}>
        <Grid size={{ xs: 10, md: 6 }} sx={{borderRight:'1px solid grey'}}>
          <Box textAlign={"center"}>
            <Avatar sx={{ width: '150px', height: '150px', marginX: 'auto' }} />
            <Typography variant="h4" marginY={"20px"}>{`${profileData.first_name} ${profileData.last_name}`}</Typography>
            <Typography variant="body1" fontSize={'18px'} marginY={"20px"}>{`${profileData.role}`}</Typography>
            <MdOutlineLockReset className="me-2 fs-5 text-info" /><Link to={'/change'} className="text-decoration-none text-info">Change Password</Link>
          </Box>
        </Grid>

        <Grid size={{ xs: 10, md: 6 }} marginX={'auto'}>
          <Grid container spacing={5} >
            <Grid size={{ xs: 10, md: 6 }} marginX={'auto'}>
              <Box sx={{ p: 2, borderRadius: 2, marginBottom: '40px' }} marginX={'auto'}>
                <Typography sx={{ fontSize: '20px', mb: 1, fontWeight: 'bold' }}>Email:</Typography>
                <Typography variant="body1" sx={{ fontSize: '20px', mb: 1, marginLeft: '20px', color:'grey' }}>{profileData.email}</Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 10, md: 6 }} marginX={'auto'}>
              <Box sx={{ p: 2, borderRadius: 2, marginBottom: '40px' }}>
                <Typography sx={{ fontSize: '20px', mb: 1, fontWeight: 'bold' }}>Country:</Typography>
                <Typography variant="body1" sx={{ fontSize: '20px', mb: 1, marginLeft: '20px', color:'grey' }}>Egypt</Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid size={{ xs: 10, md: 6 }} marginX={'auto'}>
              <Box sx={{ p: 2, borderRadius: 2, marginBottom: '40px' }}>
                <Typography sx={{ fontSize: '20px', mb: 1, fontWeight: 'bold' }}>City:</Typography>
                <Typography variant="body1" sx={{ fontSize: '20px', mb: 1, marginLeft: '20px', color:'grey' }}>Cairo</Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 10, md: 6 }} marginX={'auto'}>
              <Box sx={{ p: 2, borderRadius: 2, marginBottom: '40px' }}>
                <Typography sx={{ fontSize: '20px', mb: 1, fontWeight: 'bold' }}>Phone:</Typography>
                <Typography variant="body1" sx={{ fontSize: '20px', mb: 1, marginLeft: '20px', color:'grey' }}>+2011334844949</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
