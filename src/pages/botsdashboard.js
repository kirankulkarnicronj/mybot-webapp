import {
  Typography,
  Button,
  FormGroup,
  FormControl,
  Container,
  Box,
  FormControlLabel,
  Switch,
  Stack,
  Grid,
} from "@mui/material";
import SearchwithIcon from "../component/SearchwithIcon";
import Dropdown from "../component/Dropdown";
import { ArrowBack, Refresh } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import "./botsdashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../component/cards/Cards";
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 62,
  height: 32,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(30px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#FE9933",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 25,
    height: 27,
  },
  "& .MuiSwitch-track": {
    borderRadius: 60 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#FE9933",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function BotsDashboard() {
  const navigate = useNavigate();
  const [selectedvalue, setSeletedvalue] = useState();
  const [searchdata, setSearchData] = useState();
  let onSelectvalue = (args) => {
    setSeletedvalue(args);
  };
  let handlesearch = (values) => {
    setSearchData(values);
  };
  let handleBoxClick = () => {
    navigate("/");
  };
  return (
    <Box className="botsdashboardContainer">
      <Box className="botsdashboardicon" onClick={handleBoxClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25.118"
          height="21.541"
          viewBox="0 0 25.118 21.541"
        >
          <g id="arrow" transform="translate(0 -31.842)">
            <g
              id="Group_41243"
              data-name="Group 41243"
              transform="translate(0 31.842)"
            >
              <path
                id="Path_34870"
                data-name="Path 34870"
                d="M23.608,40.849a1.8,1.8,0,0,0-.311-.023H5.577l.386-.18a3.594,3.594,0,0,0,1.015-.719l4.969-4.969a1.86,1.86,0,0,0,.261-2.381,1.8,1.8,0,0,0-2.7-.234L.527,41.329a1.8,1.8,0,0,0,0,2.542h0l8.986,8.986a1.8,1.8,0,0,0,2.7-.18,1.86,1.86,0,0,0-.261-2.381l-4.96-4.978a3.594,3.594,0,0,0-.9-.656l-.539-.243H23.2a1.86,1.86,0,0,0,1.9-1.51A1.8,1.8,0,0,0,23.608,40.849Z"
                transform="translate(0 -31.842)"
                fill="#fe9933"
              />
            </g>
          </g>
        </svg>
      </Box>
      <FormGroup aria-label="position">
        <Stack
          direction={{ sm: "column", xl: "row" }}
          spacing={10}
          alignItems="center"
        >
          <Box sx={{ marginY: 1 }}>
            <Button
              variant="contained"
              className="refreshbotton"
              endIcon={<Refresh lg={{ color: "#000" }} />}
            >
              Refresh
            </Button>
          </Box>

          <Box sx={{ marginY: 1 }}>
            <Stack
              direction={{ sm: "column", xl: "row" }}
              spacing={10}
              alignItems="center"
            >
              <SearchwithIcon
                searchvalue={handlesearch}
                searchdata={searchdata}
              />
              <Dropdown
                selectDropDown={onSelectvalue}
                selectedvalue={selectedvalue}
              />
            </Stack>
          </Box>

          <Box sx={{ marginY: 1 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Hide Bot Name</Typography>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
            </Stack>
          </Box>
        </Stack>
      </FormGroup>
      <Typography mt={10} variant="h5" component="h1">
        Result for BOT NAME #2
      </Typography>
      <Box mt={5}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4}>
            <Cards />
          </Grid>
          <Grid item xs={4}>
            <Cards />
          </Grid>
          <Grid item xs={4}>
            <Cards />
          </Grid>
          <Grid item xs={4}>
            <Cards />
          </Grid>
          <Grid item xs={4}>
            <Cards />
          </Grid>
          <Grid item xs={4}>
            <Cards />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default BotsDashboard;
