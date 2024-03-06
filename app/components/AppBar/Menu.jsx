import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Hidden from "@mui/material/Hidden";
import { Box, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import "../../../public/css/appBar_SIS_G.css";

const navItems = ["Inicio", "Acerca de", "Contacto", "Servicios"];
const navLinks = ["", "AboutUs", "ContactUs", "Services"];

const theme = createTheme();

const BoxTheme = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (item) => {
    setSelectedItem(item); 
    handleClose(); 
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <AppBar sx={{ bgcolor: "#F2EEEE", boxShadow: 0 }}>
          <Toolbar>
            <Typography variant="h2" id="title_sis_g">
              <Link href="/">SIS_G</Link>
            </Typography>

            <Hidden mdUp>
              <IconButton
                size="large"
                edge="start"
                color="#00BD56"
                aria-label="menu"
                onClick={handleClick}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                {navItems.map((item, key) => (
                  <MenuItem
                    key={item}
                    onClick={() => handleMenuItemClick(item)}
                  >
                    <Link href={`/${navLinks[key]}`}>{item}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Hidden>

            <Stack
              direction="row"
              gap={5}
              justifyContent="center"
              alignItems="center"
            >
              <Hidden mdDown>
                {navItems.map((item, key) => (
                  <Link href={`/${navLinks[key]}`} key={item}>
                    <Typography
                      variant="h6"
                      className={`appBar_sis_g ${selectedItem === item ? 'item_appBar_sis_g' : ''}`}
                    >
                      {item}
                    </Typography>
                  </Link>
                ))}
                 {/* <MenuServicios/> */}
                <Button variant="contained" className="button_login_sis_g">
                  Login
                </Button>
              </Hidden>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default BoxTheme;
