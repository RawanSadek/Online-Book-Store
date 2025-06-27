import { Box, IconButton, Typography } from '@mui/material'
import { FaBloggerB, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter} from "react-icons/fa6";


export default function Contact() {

    return (
        <Box
      sx={{
        backgroundColor: "#393280",
        color: "#fff",
        px: 5,
        py: 1,
        display: "flex",
        // flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <FaPhone />
        <Typography variant="body1">+91 8374902234</Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton size="small" sx={{color:'white'}} >
          <FaFacebookF />
        </IconButton>
        <IconButton size="small" sx={{color:'white'}} >
          <FaInstagram />
        </IconButton>
        <IconButton size="small" sx={{color:'white'}} >
         <FaLinkedinIn />
        </IconButton>
        <IconButton size="small" sx={{color:'white'}} >
         <FaTwitter />
        </IconButton>
        <IconButton size="small" sx={{color:'white'}}>
         <FaBloggerB />
        </IconButton>
      </Box>
    </Box>
    )
}
