import { AppBar, Avatar, Badge, Box, Divider, Drawer, IconButton, Link, List, ListItemText, Toolbar, Tooltip, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { LuLogOut, LuUserRound } from "react-icons/lu";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { VscHeart } from "react-icons/vsc";
import { IoMenuOutline } from "react-icons/io5";
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export default function NavBar() {

  let navigate = useNavigate();

  const navItems = ['HOME', 'BOOKS', 'NEW RELEASE'];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const mdDevice = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open: any) => () => {
    setDrawerOpen(open);
  };


  let location = useLocation();
  let pathname = location.pathname;
  console.log(pathname)

  const drawer = (
    <Box
      sx={{ width: 250 , padding: "30px"}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((text) => (
          <ListItemText
            primary={text}
            sx={{
              fontWeight: pathname == `/dashboard/${text.toLocaleLowerCase()}` ? 'bold' : 'normal',
              color: pathname == `/dashboard/${text.toLocaleLowerCase()}` ? 'orangered' : 'black',
              marginBottom: 2
            }}
          />
        ))}
      </List>
    </Box>
  );
  return (

    <>
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0', px: 3, py: 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>

          <Avatar />

          {mdDevice ? (
            <IconButton onClick={toggleDrawer(true)} edge="start">
              <IoMenuOutline />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

              {navItems.map((item) => (
                <React.Fragment key={item}>
                  {item !== "HOME" && <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />}
                  <Link href={`/dashboard/${item.toLocaleLowerCase()}`} underline="none"
                    sx={{
                      fontWeight: 600,
                      color: pathname == `/dashboard/${item.toLocaleLowerCase()}` ? 'rgb(239,107,74)' : 'black',
                      letterSpacing: 1,
                    }}
                  > {item}
                  </Link>
                </React.Fragment>
              ))}
            </Box>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Tooltip title="Profile">
              <IconButton onClick={()=>navigate('profile')}>
                <LuUserRound color='#393280' />
              </IconButton>
            </Tooltip>

            <Divider orientation="vertical" flexItem />

            <Tooltip title="Cart">
              <IconButton onClick={()=>{navigate('/dashboard/cart')}}>
                <LiaShoppingBagSolid color='#393280' />
              </IconButton>
            </Tooltip>

            <Divider orientation="vertical" flexItem />

            <Tooltip title="Favourites">
              <IconButton>
                <VscHeart color='#393280' />
              </IconButton>
            </Tooltip>

            <Divider orientation="vertical" flexItem />

            <Tooltip title="Logout">
              <IconButton onClick={()=>navigate('/')}>
                <LuLogOut color='#393280' />
              </IconButton>
            </Tooltip>

          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </>
  )
}
