import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
export default function SearchwithIcon() {
  const [value, setValue] = useState("");

  return (
    <TextField
      placeholder="Search"
      type="text"
      variant="outlined"
      fullWidth
      size="small"
      onChange={(e) => setValue(e.target.value)}
      value={value}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),

        endAdornment: value && (
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setValue("")}
          >
            <CancelRoundedIcon />
          </IconButton>
        ),
      }}
    />
  );
}
