import React from "react";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

export default function SearchwithIcon({ searchvalue, searchdata }) {
  let handlevalue = (e) => {
    searchvalue(e.target.value);
  };
  return (
    <Box sx={{ marginY: 1, width: "100%" }}>
      <TextField
        placeholder="Search using bot name"
        style={{backgroundColor:"white" ,borderColor:"white"}}
        type="text"
        variant="outlined"
        fullWidth
        size="medium"
        onChange={(e) => handlevalue(e)}
        value={searchdata}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <svg
                id="search"
                xmlns="http://www.w3.org/2000/svg"
                width="24.889"
                height="24.885"
                viewBox="0 0 24.889 24.885"
              >
                <path
                  id="Path_33312"
                  data-name="Path 33312"
                  d="M10.017,20.059a9.993,9.993,0,0,0,6.141-2.109l6.621,6.621a1.245,1.245,0,0,0,1.76-1.76l-6.621-6.621a10.011,10.011,0,1,0-7.9,3.87ZM4.7,4.728a7.524,7.524,0,1,1,0,10.64h0a7.5,7.5,0,0,1-.039-10.6Z"
                  transform="translate(0 -0.035)"
                  fill="#fe9933"
                />
              </svg>
            </InputAdornment>
          ),

          endAdornment: searchdata && (
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => searchvalue("")}
            >
              <CancelRoundedIcon />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
}
