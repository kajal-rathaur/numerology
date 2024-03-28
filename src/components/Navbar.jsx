import { React, useState } from "react";
import '../App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from '@mui/material';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const NavbarPage = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#171836', marginBottom: "10px"}} >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex', color: '#a18b5c' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#a18b5c',
                textDecoration: 'none',
              }}>ASTRO-NUMERO</Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left', }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' }, }}
              >
                <MenuItem onClick={handleCloseNavMenu}><Typography textAlign="center"><Link href="/">Home</Link></Typography></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><Typography textAlign="center"><Link href="/calculate">Calculation</Link></Typography></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><Typography textAlign="center"><Link href="/information">Information</Link></Typography></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><Typography textAlign="center"><Link href="/consult">Consultation</Link></Typography></MenuItem>
              </Menu>
            </Box>

            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: '#a18b5c' }} />

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#a18b5c',
                textDecoration: 'none',
              }}>Astro-Numero</Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} href="/">Home</Button>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} href="/calculate">Calculation</Button>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} href="/information">Information</Button>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} href="/consult">Consultation</Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>

  );
}
export default NavbarPage;