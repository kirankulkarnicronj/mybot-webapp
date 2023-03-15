import React, { useState } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
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
