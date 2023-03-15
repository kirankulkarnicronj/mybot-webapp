import React from "react";
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

function Navbar() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleclick = () => {
    window.location.href = "https://discord.gg/y9NGNwT8Ed";
  };
  return (
    <AppBar position="static" className="navbarheader">
      <CssBaseline />
      <Container>
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
              >
                Join Discord
              </Button>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
