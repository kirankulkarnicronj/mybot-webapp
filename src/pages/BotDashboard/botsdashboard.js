import {
  Typography,
  Button,
  Box,
  FormControlLabel,
  Switch,
  Stack,
  Grid,
} from "@mui/material";
import SearchwithIcon from "../../component/search/SearchwithIcon";
import Dropdown from "../../component/selectdropdown/Dropdown";
import {
  Refresh,
  KeyboardArrowRight,
  KeyboardArrowLeft,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import "./botsdashboard.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../../component/cards/Cards";
import * as ApiformDashboardAction from "../../store/ApiformDashboard/ApiformDashboardAction";
import { useDispatch, useSelector } from "react-redux";
import RefreshIcon from "../../component/svgIcons/RefreshIcon";
import DecendingIcon from "../../component/svgIcons/DecendingIcon";
import AscIcon from "../../component/svgIcons/AscIcon";

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
  const dispatch = useDispatch();

  const [player, setPlayer] = useState();
  const [selectedvalue, setSeletedvalue] = useState("Bot Name");
  const [selectedvalueEnum, setSeletedValueEnum] = useState("BOT_NAME");
  const [searchdata, setSearchData] = useState();
  const [sorting, setSorting] = useState();
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(24);
  const [checked, setChecked] = useState();
  // const [clickCount, setClickCount] = useState(0);
  const [refreshdata, setRefreshdata] = useState(false);
  const [error, setErrorHandle] = useState("");

  const handleApi = () => {
    let payload = {
      order: sorting || "ASC",
      page: page,
      size: size,
      sortFilter: selectedvalueEnum,
    };

    dispatch(ApiformDashboardAction.apiFormKeyDashboard(payload));
  };
  useEffect(() => {
    setPlayer([]);
    handleApi();
  }, [page, sorting, refreshdata, selectedvalueEnum]);

  const playerdata = useSelector(
    (state) => state?.FetchApiDashboardReducer?.apifetch?.data?.players
  );
  const paginationdata = useSelector(
    (state) => state?.FetchApiDashboardReducer?.apifetch?.data
  );

  useEffect(() => {
    if (playerdata) {
      setPlayer(playerdata);
    }
  }, [playerdata]);

  const onSelectvalue = (args) => {
    console.log("Arguments", args);
    if (args === "Membership") {
      const value1 = "MEMBERSHIP";
      setSeletedValueEnum(value1);
      setSeletedvalue(args);
    } else if (args === "Bot Name") {
      const value1 = "BOT_NAME";
      setSeletedValueEnum(value1);
      setSeletedvalue(args);
    } else if (args === "Banned Status") {
      const value1 = "BAN_STATUS";
      setSeletedValueEnum(value1);
      setSeletedvalue(args);
    } else if (args === "Last Check-In") {
      const value1 = "LAST_CHECK_IN";
      setSeletedValueEnum(value1);
      setSeletedvalue(args);
    }
  };
  const handlesearch = (values) => {
    // Access input value
    const query = values;

    // Create copy of item list
    var updatedList = [...player];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    if (!values) {
      setPlayer(playerdata);
    } else {
      setPlayer(updatedList);
    }
    setSearchData(values);
  };
  const handleBoxClick = () => {
    navigate("/");
  };
  const handleRefresh = () => {
    // setClickCount(clickCount + 1);
    // if (clickCount >= 4) {
    //   setErrorHandle("Refresh clicked too many times");
    // } else {
    // setErrorHandle("");
    if (page === 0) {
      window.location.reload();
    }
    setRefreshdata(true);
    setPage(0);
    // }
  };
  const handleDecentOrder = () => {
    setSorting("DESC");
  };
  const handleAscOrder = () => {
    setSorting("ASC");
  };
  const handleback = () => {
    setPage((prev) => (prev == 0 ? prev : prev - 1));
  };
  const handlenext = () => {
    setPage((prev) => prev + 1);
  };
  const handleSwitch = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <Box className="botsdashboardContainer">
      <Box className="botsdashboardicon" onClick={handleBoxClick}>
        <RefreshIcon />
      </Box>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 2, md: 12 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={4}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} md={4} sm={4}>
              <Button
                variant="contained"
                className="refreshbotton"
                onClick={handleRefresh}
                endIcon={<Refresh lg={{ color: "#000" }} />}
              >
                Refresh
              </Button>
            </Grid>
            <Grid item xs={6} md={3} sm={4}>
              <Button
                variant="contained"
                onClick={handleDecentOrder}
                className="sortingbotton"
              >
                <DecendingIcon />
              </Button>
            </Grid>
            <Grid item xs={6} md={3} sm={4}>
              {" "}
              <Button
                variant="contained"
                onClick={handleAscOrder}
                className="sortingbotton"
              >
                <AscIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Box>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 2, md: 12 }}
            >
              <Grid item xs={6}>
                {" "}
                <SearchwithIcon
                  searchvalue={handlesearch}
                  searchdata={searchdata}
                />
              </Grid>
              <Grid item xs={6}>
                {" "}
                <Dropdown
                  selectDropDown={onSelectvalue}
                  selectedvalue={selectedvalue}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent={"center"}
            >
              <Typography>Hide Bot Name</Typography>
              <FormControlLabel
                control={<IOSSwitch onChange={handleSwitch} sx={{ m: 1 }} />}
              />
            </Stack>
          </Box>
        </Grid>
      </Grid>

      {searchdata && (
        <Typography mt={10} variant="h5" component="h1">
          Result for {searchdata}
        </Typography>
      )}
      {error ? (
        <Typography style={{ color: "red", textAlign: "center" }} mt={4}>
          {error}
        </Typography>
      ) : (
        ""
      )}

      <Box mt={5}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          alignItems="center"
          justifyContent="center"
        >
          {player?.length > 0 ? (
            player.map((item) => {
              return (
                <Grid item>
                  <Cards itemdata={item} checked={checked} />
                </Grid>
              );
            })
          ) : (
            <Typography mt={10} variant="h2" marginX={"auto"}>
              <img src={"/assets/loader/spinner.gif"} alt="loading..." />
            </Typography>
          )}
        </Grid>
      </Box>
      {/* pagination */}
      <Box className="paginationWrapper">
        <Stack
          direction={{ sm: "row", md: "row" }}
          spacing={3}
          alignItems="center"
        >
          <Button
            variant="contained"
            className="paginatiobutton"
            onClick={handleback}
          >
            <KeyboardArrowLeft />
          </Button>
          <Typography>
            Page {paginationdata?.currentPage || "0"} out of &nbsp;
            {paginationdata?.totalPages || "0"}
          </Typography>
          <Button
            variant="contained"
            className="paginatiobutton"
            onClick={handlenext}
          >
            <KeyboardArrowRight />
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
export default BotsDashboard;
