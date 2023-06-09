import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";
import DrawerComponent from "../Drawer/Drawer";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DiscordIcon from "../svgIcons/DiscordIcon"
import LogoutIcon from "../svgIcons/LogOutIcon";

function Navbar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [backtohome, setBacktoHome] = useState(false);
  const handleclick = () => {
    window.location.href = "https://discord.gg/y9NGNwT8Ed";
  };
  useEffect(() => {
    if (location.pathname !== "/") {
      setBacktoHome(true);
    } else {
      setBacktoHome(false);
    }
  }, [location]);

  const handlebackclick = () => {
    navigate("/");
  };
  return (
    <AppBar position="static" className="navbarheader">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h5" className="logo">
          MyBotTracker
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className="navlinks">
     
            <Button
              variant="contained"
              onClick={handleclick}
              className="navbarsubmitbutton"
              startIcon={<DiscordIcon/>}
            >
              Join Discord
            </Button>
            {backtohome && (
              <Button
                variant="contained"
                onClick={handlebackclick}
                className="navbarsubmitbutton"
                startIcon={<LogoutIcon/>}
              >
                Logout
              </Button>
            )}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
