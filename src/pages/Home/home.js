import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import "./home.css";
import { useNavigate } from "react-router-dom";
import * as ApiFormAction from "../../store/ApiForm/ApiFormAction";
import { useDispatch, useSelector } from "react-redux";
function Home() {
  const navigate = useNavigate();
  const [inputvalue, setinputvalue] = useState("");
  const dispatch = useDispatch();
  const [errormessage, setErrorMessage] = useState(false);
  const [button, setbuttonAction] = useState(false);
  const handlechange = (e) => {
    setinputvalue(e.target.value);
  };

  const datavalue = useSelector(
    (state) => state?.FetchApiReducer?.apifetch?.data
  );
  useEffect(() => {
    if (datavalue && datavalue.success === true && button) {
      setErrorMessage(false);

      navigate("/bots");
    } else if (datavalue && datavalue.success === false && button) {
      setErrorMessage(true);
    }
  }, [datavalue]);

  const handlebutton = async () => {
    await setbuttonAction(true);
    let payload = { inputvalue };
    dispatch(ApiFormAction.apiFormKey(payload));
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
