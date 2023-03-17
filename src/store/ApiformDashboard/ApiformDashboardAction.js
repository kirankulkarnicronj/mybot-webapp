import * as types from "./ApiformDashboardTypes";

export function apiFormKeyDashboard(payload) {
  return {
    type: types.APIFORMKEY_DASHBOARD,
    payload: payload,
  };
}
export function apiFormKeyDashboardSuccess(payload) {
  return {
    type: types.APIFORMKEY_DASHBOARD_SUCCESS,
    payload: payload,
  };
}
export function apiFormKeyDashboardError(error) {
  return {
    type: types.APIFORMKEY_DASHBOARD_ERROR,
    payload: error,
  };
}
