import * as React from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import "./drawer.css";

export default function Dropdown({ selectDropDown, selectedvalue }) {
  const handleChange = (event) => {
    selectDropDown(event.target.value);
  };

  return (
    <Box sx={{ marginY: 1, width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Please select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedvalue}
          label="Please select"
          onChange={handleChange}
        >
          <MenuItem value={"Membership"}>Membership</MenuItem>
          <MenuItem value={"Bot Name"}>Bot Name</MenuItem>
          <MenuItem value={"Banned Status"}>Banned Status</MenuItem>
          <MenuItem value={"Last Check-In"}>Last Check-In</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
