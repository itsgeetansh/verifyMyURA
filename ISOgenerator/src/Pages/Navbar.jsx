import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: '#7469B6', height: '100%' }}>
      <Typography variant="h5" sx={{ my: 2, color: 'white' }}>
        URA<strong>.</strong>
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/Home">
            <ListItemText primary="Home" sx={{ color: 'white' }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/About">
            <ListItemText primary="About" sx={{ color: 'white' }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/Services">
            <ListItemText primary="All Certificate" sx={{ color: 'white' }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/GetCertificate">
            <ListItemText primary="Verify Certificate" sx={{ color: 'white' }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/Contact">
            <ListItemText primary="Contact" sx={{ color: 'white' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "#7469B6" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }} // Display only on mobile
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/Home"
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'white', fontWeight: 500 }}
          >
            URA<strong>.</strong>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button
              component={Link}
              to="/Home"
              sx={{
                color: 'white',
                fontWeight: 500,
                marginLeft: 2,
                marginRight:2,
                textDecoration: 'none',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '-2px',
                  left: '50%',
                  backgroundColor: 'white',
                  transition: 'all 0.3s ease-in-out',
                },
                '&:hover:after': {
                  width: '100%',
                  left: '0',
                },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/About"
              sx={{
                color: 'white',
                fontWeight: 500,
                marginLeft: 2,
                marginRight:2,
                textDecoration: 'none',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '-2px',
                  left: '50%',
                  backgroundColor: 'white',
                  transition: 'all 0.3s ease-in-out',
                },
                '&:hover:after': {
                  width: '100%',
                  left: '0',
                },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/Services"
              sx={{
                color: 'white',
                fontWeight: 500,
                marginLeft: 2,
                marginRight: 2,
                textDecoration: 'none',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '-2px',
                  left: '50%',
                  backgroundColor: 'white',
                  transition: 'all 0.3s ease-in-out',
                },
                '&:hover:after': {
                  width: '100%',
                  left: '0',
                },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              All Certificates
            </Button>
            <Button
              component={Link}
              to="/GetCertificate"
              sx={{
                color: 'white',
                fontWeight: 500,
                marginLeft: 2,
                marginRight: 2,
                textDecoration: 'none',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '-2px',
                  left: '50%',
                  backgroundColor: 'white',
                  transition: 'all 0.3s ease-in-out',
                },
                '&:hover:after': {
                  width: '100%',
                  left: '0',
                },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              Verify Certificates
            </Button>
            <Button
              component={Link}
              to="/Contact"
              sx={{
                color: 'white',
                fontWeight: 500,
                marginLeft: 2,
                marginRight: 15,
                textDecoration: 'none',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '-2px',
                  left: '50%',
                  backgroundColor: 'white',
                  transition: 'all 0.3s ease-in-out',
                },
                '&:hover:after': {
                  width: '100%',
                  left: '0',
                },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', bgcolor: '#7469B6', color: 'white' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box sx={{ mt: 8 }}>
        {/* The rest of your page content */}
      </Box>
    </>
  );
}
