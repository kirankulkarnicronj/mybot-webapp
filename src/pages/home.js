import React, { useEffect, useState } from "react";
import { Typography, TextField, makeStyles, Button } from "@material-ui/core";
import "./home.css";
const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#FE9933",
    color: "#fff",
    marginLeft: "18px",
    width: "151px",
    height: "55px",
  },
}));
function Home() {
  const classes = useStyles();
  const [inputvalue, setinputvalue] = useState("");
  const handlechange = (e) => {
    setinputvalue(e.target.value);
  };
  return (
    <div className="App-header">
      <div className="buttonwraper">
        <TextField
          id="outlined-basic"
          label="Enter your apiFarmKey"
          variant="outlined"
          onChange={handlechange}
          value={inputvalue}
        />
        <Button variant="contained" className={classes.button}>
          Submit
        </Button>
      </div>
    </div>
  );
}
export default Home;
