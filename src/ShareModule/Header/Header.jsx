import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { profile_pic } from "../../Helper/Helper";
import { handelLogout } from "../../Redux/authSlice";

const pages = ["HOME","ABOUT", "CREATE", "LIST"];
const settings = ["Login", "Register","Profile"];

function Header() {
  const { isLogin } = useSelector((state) => state.authKey);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(handelLogout());
    window.location.reload();
    navigate("/");
  };

  const [loginusername, setLoginUserName] = React.useState("");
  const [logintoken, setToken] = React.useState("");
  const [loginimage, setImage] = React.useState("");

  const name = localStorage.getItem("first_name");
  const token = localStorage.getItem("token");
  const image = localStorage.getItem("profile_pic");

  React.useEffect(() => {
    setLoginUserName(name);
    setToken(token);
    setImage(image);
  }, [name, token, image]);

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
    <AppBar
      position="fixed"
      sx={{ background: "linear-gradient(135deg, #ff512f, #dd2476)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="https://i.pinimg.com/originals/de/f8/c3/def8c32218ff550de986ca3dfe09cac8.gif"
            alt="Logo"
            style={{
              display: "none",
              marginRight: "1rem",
              height: "45px",
              borderRadius: "5px",
              width: "10px",
            }}
            className="desktop-logo"
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "0.2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CloudBite
          </Typography>

        
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
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
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => {
                      handleCloseNavMenu();
                      if (logintoken) {
                        navigate(`/${page.toLowerCase()}`);
                      } else {
                        navigate("/login");
                      }
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <img
            src="https://i.pinimg.com/originals/de/f8/c3/def8c32218ff550de986ca3dfe09cac8.gif"
            alt="Logo"
            style={{
              display: "flex",
              marginRight: "1rem",
              height: "35px",
              borderRadius: "5px",
            }}
            className="mobile-logo"
          />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "0.1rem",
              color: "inherit",
              fontSize: "18px",
              textDecoration: "none",
            }}
          >
            CloudBite
          </Typography>

        
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  if (logintoken) {
                    navigate(`/${page.toLowerCase()}`);
                  } else {
                    navigate("/login");
                  }
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

        
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                mr: 1,
                color: "white",
                fontWeight: "bold",
                display: { xs: "none", sm: "block" },
              }}
            >
              {loginusername}
            </Typography>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="User Avatar"
                  src={
                    loginimage
                      ? profile_pic(loginimage)
                      : "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
                  }
                />
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link
                      to={`/${setting.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {setting === "Login" && logintoken ? (
                        <button
                          onClick={logout}
                          style={{
                            width: "100px",
                            height: "35px",
                            borderRadius: "5%",
                            border: "2px solid white",
                            background:
                              "linear-gradient(135deg, #ff512f, #dd2476)",
                            color: "white",
                          }}
                        >
                          Logout
                        </button>
                      ) : (
                        <button
                          style={{
                            width: "100px",
                            height: "35px",
                            borderRadius: "5%",
                            border: "2px solid white",
                            background:
                              "linear-gradient(135deg, #ff512f, #dd2476)",
                            color: "white",
                          }}
                        >
                          {setting}
                        </button>
                      )}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
