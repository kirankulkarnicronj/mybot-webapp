import { combineReducers } from "redux";

import { FetchApiReducer } from "../ApiForm/ApiFormReducer";
import { FetchApiDashboardReducer } from "../ApiformDashboard/ApiformDashboardReducer";

export default combineReducers({
  FetchApiReducer,
  FetchApiDashboardReducer,
});
