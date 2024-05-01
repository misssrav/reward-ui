import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link as MuiLink } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  var token = localStorage.getItem("rh_token");
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);
  const navigate = useNavigate();

  //const [btnName, setBtnName] = useState(token ? "Logout" : "Login");
  // const headerBtnClicked = () => {
  //   if (btnName === "Login") {
  //     navigate("/login");
  //   } else {
  //     localStorage.clear("rh_token");
  //     navigate("/login");
  //   }
  // };

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
  const handleLogin = () => {
    //setIsLoggedIn(true); // Simulate login process
    navigate("/login");
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Simulate logout process
    handleCloseUserMenu();
    localStorage.clear("rh_tokr");
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              //letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Reward Hub
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              sx={{
                display: { xs: "block", md: "none" },
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <MuiLink
                  component={Link}
                  to="/"
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  Home
                </MuiLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <MuiLink
                  component={Link}
                  to="/about"
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  About Us
                </MuiLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <MuiLink
                  component={Link}
                  to="/collect-points"
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  Collect Points
                </MuiLink>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Reward Hub
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-start",
              gap: 1,
            }}
          >
            <MuiLink
              component={Link}
              to="/"
              color="inherit"
              sx={{ textDecoration: "none", marginRight: 3 }}
            >
              Home
            </MuiLink>
            <MuiLink
              component={Link}
              to="/about"
              color="inherit"
              sx={{ textDecoration: "none", marginRight: 3 }}
            >
              About Us
            </MuiLink>
            <MuiLink
              component={Link}
              to="/collect-points"
              color="inherit"
              sx={{ textDecoration: "none" }}
            >
              Collect Points
            </MuiLink>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {isLoggedIn ? (
                <>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <MuiLink
                      component={Link}
                      to="/profile"
                      sx={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography textAlign="center">Profile</Typography>
                    </MuiLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <MuiLink
                      component={Link}
                      to="/account"
                      sx={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography textAlign="center">Account</Typography>
                    </MuiLink>
                  </MenuItem>
                  {/* <MenuItem onClick={handleCloseUserMenu}>
                <MuiLink
                  component={Link}
                  to="/dashboard"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography textAlign="center">Dashboard</Typography>
                </MuiLink>
              </MenuItem> */}
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>{" "}
                  </MenuItem>
                </>
              ) : (
                <MenuItem onClick={handleLogin}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
