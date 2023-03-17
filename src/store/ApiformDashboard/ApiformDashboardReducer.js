import * as types from "./ApiformDashboardTypes";

const INITIAL_STATE = {
  apifetch: [],
  isfetchinginfo: false,
};

export function FetchApiDashboardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.APIFORMKEY_DASHBOARD:
      return {
        ...state,
        isfetchinginfo: false,
      };

    case types.APIFORMKEY_DASHBOARD_SUCCESS:
      return {
        ...state,
        isfetchinginfo: true,
        apifetch: action.payload,
      };

    case types.APIFORMKEY_DASHBOARD_ERROR:
      return {
        ...state,
        isfetchinginfo: false,
      };

    default:
      return state;
  }
}
