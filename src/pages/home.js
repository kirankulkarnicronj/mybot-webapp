import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import "./home.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Home() {
  const history = useHistory();
  const [inputvalue, setinputvalue] = useState("");

  const [errormessage, setErrorMessage] = useState(false);
  const handlechange = (e) => {
    setinputvalue(e.target.value);
  };

  const handlebutton = async () => {
    const resp = await axios.post(
      `http://osrsbottrackerbackend-env.eba-msbngixc.us-east-1.elasticbeanstalk.com/osrsbottracker/api/v1/farm/validate`,
      { apiFarmKey: inputvalue },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(resp.data.success);
    if (resp.data.success) {
      setErrorMessage(false);
      history.push("/bots");
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <div className="App-header">
      {errormessage ? <MsgBox msg={"Invalid Api Farm Key"} /> : ""}
      <div className="buttonwraper">
        <TextField
          id="outlined-basic"
          label="Enter your apiFarmKey"
          variant="outlined"
          onChange={handlechange}
          value={inputvalue}
        />
        <Button
          variant="contained"
          onClick={handlebutton}
          className="submitbutton"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
const MsgBox = ({ msg }) => {
  return (
    <div>
      <div className="errorMsgBody">{msg}</div>
    </div>
  );
};
export default Home;
