import {
  Typography,
  Button,
  FormGroup,
  Box,
  FormControlLabel,
  Switch,
  Stack,
  Grid,
} from "@mui/material";
import SearchwithIcon from "../component/SearchwithIcon";
import Dropdown from "../component/Dropdown";
import {
  Refresh,
  KeyboardArrowRight,
  KeyboardArrowLeft,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import "./botsdashboard.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../component/cards/Cards";
import * as ApiformDashboardAction from "../store/ApiformDashboard/ApiformDashboardAction";
import { useDispatch, useSelector } from "react-redux";
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
  const [selectedvalue, setSeletedvalue] = useState();
  const [searchdata, setSearchData] = useState();
  const [sorting, setSorting] = useState();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(6);
  const [checked, setChecked] = useState();
  const [refreshdata, setRefreshdata] = useState(false);

  const handleApi = () => {
    let payload = {
      order: sorting || "ASC",
      page: page,
      size: size,
      sortFilter: "BAN_STATUS",
    };

    dispatch(ApiformDashboardAction.apiFormKeyDashboard(payload));
  };
  useEffect(() => {
    setPlayer([]);
    handleApi();
  }, [page, sorting, refreshdata]);

  const playerdata = useSelector(
    (state) => state?.FetchApiDashboardReducer?.apifetch?.data?.players
  );
  const paginationdata = useSelector(
    (state) => state?.FetchApiDashboardReducer?.apifetch?.data
  );

  useEffect(() => {
    if (playerdata) {
      setPlayer(playerdata);
    } else {
      navigate("/");
    }
  }, [playerdata]);

  const onSelectvalue = (args) => {
    setSeletedvalue(args);
  };
  const handlesearch = (values) => {
    setSearchData(values);
  };
  const handleBoxClick = () => {
    navigate("/");
  };
  const handleRefresh = () => {
    setRefreshdata(true);
    setPage(1);
  };
  const handleDecentOrder = () => {
    setSorting("DESC");
  };
  const handleAscOrder = () => {
    setSorting("ASC");
  };
  const handleback = () => {
    setPage((prev) => (prev == 1 ? prev : prev - 1));
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
          spacing={6}
          alignItems="center"
        >
          <Stack
            direction={{ sm: "column", xl: "row" }}
            spacing={5}
            alignItems="center"
          >
            <Box>
              <Button
                variant="contained"
                className="refreshbotton"
                onClick={handleRefresh}
                endIcon={<Refresh lg={{ color: "#000" }} />}
              >
                Refresh
              </Button>
            </Box>

            <Box>
              <Button
                variant="contained"
                onClick={handleDecentOrder}
                className="sortingbotton"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26.182"
                  height="19.291"
                  viewBox="0 0 26.182 19.291"
                >
                  <g id="sort-descending" transform="translate(-2.998 -4)">
                    <g
                      id="Group_47475"
                      data-name="Group 47475"
                      transform="translate(3.001 20.535)"
                    >
                      <path
                        id="Path_42264"
                        data-name="Path 42264"
                        d="M20.913,18.756H4.378a1.378,1.378,0,1,1,0-2.756H20.913a1.378,1.378,0,0,1,0,2.756Z"
                        transform="translate(-3 -16)"
                        fill="#fff"
                      />
                    </g>
                    <g
                      id="Group_47476"
                      data-name="Group 47476"
                      transform="translate(3.001 13.645)"
                    >
                      <path
                        id="Path_42265"
                        data-name="Path 42265"
                        d="M16.779,13.756H4.378a1.378,1.378,0,1,1,0-2.756h12.4a1.378,1.378,0,1,1,0,2.756Z"
                        transform="translate(-3 -11)"
                        fill="#fff"
                      />
                    </g>
                    <g
                      id="Group_47477"
                      data-name="Group 47477"
                      transform="translate(2.998 6.753)"
                    >
                      <path
                        id="Path_42266"
                        data-name="Path 42266"
                        d="M12.646,8.756H4.379A1.3,1.3,0,0,1,3,7.379,1.3,1.3,0,0,1,4.379,6h8.267a1.3,1.3,0,0,1,1.378,1.378,1.3,1.3,0,0,1-1.378,1.378Z"
                        transform="translate(-2.998 -5.998)"
                        fill="#fff"
                      />
                    </g>
                    <g
                      id="Group_47478"
                      data-name="Group 47478"
                      transform="translate(22.289 4)"
                    >
                      <path
                        id="Path_42267"
                        data-name="Path 42267"
                        d="M18.379,17.779A1.3,1.3,0,0,1,17,16.4V5.378a1.378,1.378,0,1,1,2.756,0V16.4a1.3,1.3,0,0,1-1.378,1.378Z"
                        transform="translate(-16.998 -4)"
                        fill="#fff"
                      />
                    </g>
                    <g
                      id="Group_47479"
                      data-name="Group 47479"
                      transform="translate(18.171 4)"
                    >
                      <path
                        id="Path_42268"
                        data-name="Path 42268"
                        d="M23.642,10.889a1.251,1.251,0,0,1-.965-.413L19.508,7.307l-3.169,3.169A1.364,1.364,0,1,1,14.41,8.547l4.134-4.134a1.332,1.332,0,0,1,1.929,0l4.134,4.134a1.332,1.332,0,0,1,0,1.929A1.251,1.251,0,0,1,23.642,10.889Z"
                        transform="translate(-14.01 -4)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </svg>
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                onClick={handleAscOrder}
                className="sortingbotton"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.983"
                  height="19.145"
                  viewBox="0 0 25.983 19.145"
                >
                  <g id="sort-ascending" transform="translate(-3 -6)">
                    <path
                      id="Path_42259"
                      data-name="Path 42259"
                      d="M3,17.368A1.368,1.368,0,0,1,4.368,16h8.205a1.368,1.368,0,1,1,0,2.735H4.368A1.368,1.368,0,0,1,3,17.368Z"
                      transform="translate(0 3.675)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                    <path
                      id="Path_42260"
                      data-name="Path 42260"
                      d="M3,12.368A1.368,1.368,0,0,1,4.368,11H16.675a1.368,1.368,0,1,1,0,2.735H4.368A1.368,1.368,0,0,1,3,12.368Z"
                      transform="translate(0 1.838)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                    <path
                      id="Path_42261"
                      data-name="Path 42261"
                      d="M18.368,10a1.368,1.368,0,0,1,1.368,1.368v10.94a1.368,1.368,0,0,1-2.735,0V11.368A1.368,1.368,0,0,1,18.368,10Z"
                      transform="translate(5.145 1.47)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                    <path
                      id="Path_42262"
                      data-name="Path 42262"
                      d="M14.4,15.4a1.368,1.368,0,0,1,1.934,0l3.136,3.136L22.606,15.4a1.367,1.367,0,1,1,1.934,1.934l-4.1,4.1a1.368,1.368,0,0,1-1.934,0l-4.1-4.1a1.368,1.368,0,0,1,0-1.934Z"
                      transform="translate(4.043 3.308)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                    <path
                      id="Path_42263"
                      data-name="Path 42263"
                      d="M3,7.368A1.368,1.368,0,0,1,4.368,6h16.41a1.368,1.368,0,0,1,0,2.735H4.368A1.368,1.368,0,0,1,3,7.368Z"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                  </g>
                </svg>
              </Button>
            </Box>
          </Stack>

          <Box sx={{ marginY: 1 }}>
            <Stack
              direction={{ sm: "column", xl: "row" }}
              spacing={8}
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
                control={<IOSSwitch onChange={handleSwitch} sx={{ m: 1 }} />}
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
          {player?.length > 0 ? (
            player.map((item) => {
              return (
                <Grid item xs={4}>
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
          direction={{ sm: "row", xl: "row" }}
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
            Page {paginationdata?.currentPage || "1"} out of
            {paginationdata?.totalPages || "1"}
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
