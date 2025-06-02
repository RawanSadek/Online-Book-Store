import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { FaBloggerB, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter} from "react-icons/fa6";


export default function Contact() {

    function ResponsiveAppBar() {
        const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
        const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

        const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorElNav(event.currentTarget);
        };
        const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorElUser(event.currentTarget);
        };

        const handleCloseNavMenu = () => {
            setAnchorElNav(null);
        };

        const handleCloseUserMenu = () => {
            setAnchorElUser(null);
        };

    }
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
        <Typography variant="body2">+91 8374902234</Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton size="small" color="inherit" >
          <FaFacebookF />
        </IconButton>
        <IconButton size="small" color="inherit" >
          <FaInstagram />
        </IconButton>
        <IconButton size="small" color="inherit" >
         <FaLinkedinIn />
        </IconButton>
        <IconButton size="small" color="inherit" >
         <FaTwitter />
        </IconButton>
        <IconButton size="small" color="inherit">
         <FaBloggerB />
        </IconButton>
      </Box>
    </Box>
    )
}
