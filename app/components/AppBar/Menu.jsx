import React, { useState } from "react";
import { Box, Toolbar, IconButton, Typography, Button, AppBar, Stack, Hidden, Drawer, Divider, ListItemIcon,  ListItemButton, useMediaQuery, } from "@mui/material";
import { createTheme, useTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkIcon from "@mui/icons-material/Work";
import Link from "next/link";
import "../../../public/css/appBar_SIS_G.css";

const navItems = ["Inicio", "Acerca de", "Contacto", "Servicios"];
const navLinks = ["", "AboutUs", "ContactUs", "Services"];
const iconsItems = [HomeIcon, InfoIcon, ContactMailIcon, WorkIcon];

const theme = createTheme();

const BoxTheme = () => {
  const [open, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <AppBar sx={{ bgcolor: "#F2EEEE", boxShadow: 0 }}>
          <Toolbar>
            <Typography variant="h2" id="title_sis_g" className={isSmallScreen && "title_sis_g"}>
              <Link href="/">SIS_G</Link>
            </Typography>

            <Hidden mdUp>
              <IconButton
                size="large"
                edge="start"
                color="#00BD56"
                aria-label="menu drawer"
                onClick={toggleDrawer(true)}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
                <Box sx={{ p: 2, height: 1, }}
                >
                  <IconButton sx={{ mb: 2 }}>
                    <CloseIcon onClick={toggleDrawer(false)} />
                  </IconButton>

                  <Divider sx={{ mb: 2 }} />
                  <Box sx={{ mb: 2 }}>
                    {navItems.map((item, index) => (
                      <ListItemButton key={item}>
                        <ListItemIcon className="item_appBar_sis_g">
                          {React.createElement(iconsItems[index])}
                        </ListItemIcon>
                        <Link href={`/${navLinks[index]}`}>{item}</Link>
                      </ListItemButton>
                    ))}
                  </Box>
                  <Box className="button_login_sis_g">
                    <Button variant="contained" className="button_login_sis_g">
                      Login
                    </Button>
                  </Box>
                </Box>
              </Drawer>
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
                    <Typography variant="h6" className={`appBar_sis_g`}>
                      {item}
                    </Typography>
                  </Link>
                ))}
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
