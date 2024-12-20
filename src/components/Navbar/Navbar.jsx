import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";


import { ReactComponent as HomeIcon} from '../../assets/overviewIcon.svg';
import { ReactComponent as GroupIcon} from '../../assets/patientsIcon.svg';
import { ReactComponent as CalendarMonthIcon} from '../../assets/calendarIcon.svg';
import { ReactComponent as MessageIcon} from '../../assets/chatIcon.svg';
import { ReactComponent as CreditCardIcon} from '../../assets/creditCardIcon.svg';
import { ReactComponent as SettingsIcon} from '../../assets/settingsIcon.svg';
import { ReactComponent as MoreIcon} from '../../assets/more_vert_icon.svg';
import { ReactComponent as LogoImg} from '../../assets/TestLogo.svg';

import userImg from '../../assets/senior-woman-doctor-and-portrait-smile-for-health.png';

import "./Navbar.module.scss";

const pages = [
  { name: "Overview", icon: <HomeIcon sx={{fontSize:'14px'}} /> },
  { name: "Patients", icon: <GroupIcon  sx={{fontSize:'14px'}} /> },
  { name: "Schedule", icon: <CalendarMonthIcon sx={{fontSize:'14px'}}  /> },
  { name: "Message", icon: <MessageIcon sx={{fontSize:'14px'}}   /> },
  { name: "Transactions", icon: <CreditCardIcon sx={{fontSize:'14px'}}  /> },
];

const settings = [
  { name: "Profile", icon: <AdbIcon /> },
  { name: "Account", icon: <AdbIcon /> },
  { name: "Dashboard", icon: <AdbIcon /> },
  { name: "Logout", icon: <AdbIcon /> },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <React.Fragment>
      <AppBar position="static" color="transparent" sx={{ boxShadow: "none", paddingTop: "20px" }}>
        <Container maxWidth="xl" sx={{ borderRadius: "70px", backgroundColor: "#ffffff", paddingTop:"4px", paddingBottom:"3px" }}>
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "center" }}>
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
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    {page.icon}
                    <Typography sx={{ textAlign: "center", ml: 1,   }}>{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <LogoImg sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center", gap:'10px',  }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#072635", display: "flex", alignItems:"center", justifyContent: "flex-start", textTransform:'capitalize' }}
                >
                  {page.icon}
                  <Typography sx={{ ml: 1, fontSize:'14px', fontWeight:'bold' }}>{page.name}</Typography>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: 'flex' }}>
                <Stack direction='row' gap={1}>
                    <img src={userImg} alt="" width='44px' height='44px'/>
                    <Stack direction='column' gap={0} sx={{ display: { xs: "none", md: "block" } }}>
                        <Typography sx={{color:'#000', fontSize:'14px', fontWeight: 'bold'}}>Dr. Jose Simmons</Typography>
                        <Typography sx={{color:'#ccc', fontSize:'14px'}}>General Practitioner</Typography> 
                    </Stack>
                </Stack>
            <Divider orientation="vertical" variant="middle" flexItem sx={{mx: 1, my: 0}} />
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu}  sx={{p: 1, '&:hover': {backgroundColor:'transparent'}}}>
                  <SettingsIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                    {setting.icon}
                    <Typography sx={{ textAlign: "center", ml: 1 }}>{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              <IconButton sx={{p: 1, '&:hover': {backgroundColor:'transparent'}}} >
                <MoreIcon />
              </IconButton>
            </Box>
           
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
