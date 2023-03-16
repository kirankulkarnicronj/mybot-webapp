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
          <MenuItem value={"Ascending"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="14"
              viewBox="0 0 19 14"
            >
              <g id="sort-ascending" transform="translate(-3 -6)">
                <path
                  id="Path_42259"
                  data-name="Path 42259"
                  d="M3,17a1,1,0,0,1,1-1h6a1,1,0,0,1,0,2H4A1,1,0,0,1,3,17Z"
                  fill="#fe9933"
                  fill-rule="evenodd"
                />
                <path
                  id="Path_42260"
                  data-name="Path 42260"
                  d="M3,12a1,1,0,0,1,1-1h9a1,1,0,0,1,0,2H4A1,1,0,0,1,3,12Z"
                  fill="#fe9933"
                  fill-rule="evenodd"
                />
                <path
                  id="Path_42261"
                  data-name="Path 42261"
                  d="M18,10a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V11A1,1,0,0,1,18,10Z"
                  fill="#fe9933"
                  fill-rule="evenodd"
                />
                <path
                  id="Path_42262"
                  data-name="Path 42262"
                  d="M14.293,15.293a1,1,0,0,1,1.414,0L18,17.586l2.293-2.293a1,1,0,1,1,1.414,1.414l-3,3a1,1,0,0,1-1.414,0l-3-3A1,1,0,0,1,14.293,15.293Z"
                  fill="#fe9933"
                  fill-rule="evenodd"
                />
                <path
                  id="Path_42263"
                  data-name="Path 42263"
                  d="M3,7A1,1,0,0,1,4,6H16a1,1,0,0,1,0,2H4A1,1,0,0,1,3,7Z"
                  fill="#fe9933"
                  fill-rule="evenodd"
                />
              </g>
            </svg>
            Ascending
          </MenuItem>
          <MenuItem value={"Descending"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="14"
              viewBox="0 0 19 14"
            >
              <g id="sort-descending" transform="translate(-3 -4)">
                <g id="Group_47475" data-name="Group 47475">
                  <path
                    id="Path_42264"
                    data-name="Path 42264"
                    d="M16,18H4a1,1,0,0,1,0-2H16a1,1,0,0,1,0,2Z"
                    fill="#fe9933"
                  />
                </g>
                <g id="Group_47476" data-name="Group 47476">
                  <path
                    id="Path_42265"
                    data-name="Path 42265"
                    d="M13,13H4a1,1,0,0,1,0-2h9a1,1,0,0,1,0,2Z"
                    fill="#fe9933"
                  />
                </g>
                <g id="Group_47477" data-name="Group 47477">
                  <path
                    id="Path_42266"
                    data-name="Path 42266"
                    d="M10,8H4A.945.945,0,0,1,3,7,.945.945,0,0,1,4,6h6a.945.945,0,0,1,1,1A.945.945,0,0,1,10,8Z"
                    fill="#fe9933"
                  />
                </g>
                <g id="Group_47478" data-name="Group 47478">
                  <path
                    id="Path_42267"
                    data-name="Path 42267"
                    d="M18,14a.945.945,0,0,1-1-1V5a1,1,0,0,1,2,0v8A.945.945,0,0,1,18,14Z"
                    fill="#fe9933"
                  />
                </g>
                <g id="Group_47479" data-name="Group 47479">
                  <path
                    id="Path_42268"
                    data-name="Path 42268"
                    d="M21,9a.908.908,0,0,1-.7-.3L18,6.4,15.7,8.7a.99.99,0,0,1-1.4-1.4l3-3a.967.967,0,0,1,1.4,0l3,3a.967.967,0,0,1,0,1.4A.908.908,0,0,1,21,9Z"
                    fill="#fe9933"
                  />
                </g>
              </g>
            </svg>
            Descending
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
