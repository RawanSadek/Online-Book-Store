import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import logo from '../../../../assets/logo.png'

export default function Login() {
  return (
    <>
      <Box sx={{ backgroundColor: '#E74C3C', color: 'white', padding: '80px' }}>
        <Container sx={{marginBottom:'80px'}}>
          <Grid container spacing={10}>
            <Grid size={{ xs: 12, md: 4 }} >
              <Box>
                <img src={logo} alt="" className="w-25 text-white" />
                <Typography variant="body1" className="my-4 fw-light">
                  Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <Grid container>
                  <Grid size={3} >
                    <IconButton aria-label="facebook" sx={{ color: 'white' }}>
                      <FaFacebook size={32} />
                    </IconButton>
                  </Grid>

                  <Grid size={3} >
                    <IconButton aria-label="linkedin" sx={{ color: 'white' }}>
                      <FaLinkedin size={32} />
                    </IconButton>
                  </Grid>

                  <Grid size={3} >
                    <IconButton aria-label="twitter" sx={{ color: 'white' }}>
                      <FaTwitter size={32} />
                    </IconButton>
                  </Grid>

                  <Grid size={3} >
                    <IconButton aria-label="youtube" sx={{ color: 'white' }}>
                      <FaYoutube size={32} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" sx={{mb:'30px'}}>
                COMPANY
              </Typography>
              <Box>
                <Typography variant="body2" component="a" href="#" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1 }}>
                  HOME
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1 }}>
                  ABOUT US
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1 }}>
                  BOOKS
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1 }}>
                  NEW RELEASE
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1 }}>
                  CONTACT US
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1 }}>
                  BLOG
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" sx={{mb:'30px'}}>
                IMPORTANT LINKS
              </Typography>
              <Box>
                <Typography variant="body2" component="a" href="#" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1 }}>
                  Privacy
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1 }}>
                  FAQs
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1 }}>
                  Terms of Service
                </Typography>
                <Typography variant="caption" sx={{ mt: 2 }}>
                  © 2022 Arihant. All Rights Reserved.
                </Typography>
                <Typography variant="caption">
                  Privacy | Terms of Service
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Grid container sx={{width:'90%', margin:'auto'}}>
          <Grid size={{xs:12, lg:10}}>
            <Typography>© 2022 Arihant. All Rights Reserved.</Typography>
          </Grid>
          <Grid size={{xs:12, lg:2}}>
            <Typography sx={{marginLeft:'auto'}}>Privacy | Terms of Service</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}