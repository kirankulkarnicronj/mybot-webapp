import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DrawerComponent from "./Drawer";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
function Navbar() {
  const theme = useTheme();
  const history = useHistory();
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
    history.goBack();
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
            {backtohome && (
              <Button
                variant="contained"
                onClick={handlebackclick}
                className="navbarsubmitbutton"
              >
                Back to Homepage
              </Button>
            )}
            <Button
              variant="contained"
              onClick={handleclick}
              className="navbarsubmitbutton"
            >
              Join Discord
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
