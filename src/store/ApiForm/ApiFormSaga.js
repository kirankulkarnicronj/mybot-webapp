import { call, put } from "redux-saga/effects";
import * as ACTIONS from "./ApiFormAction";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./ApiFormTypes";
import apiJunction from "../../utils/api";
import { serverAddress } from "../../config";
export function* apiFormKey(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      url: `${serverAddress}/api/v1/farm/validate`,
      body: {
        apiFarmKey: action.payload.inputvalue,
      },
    });
    if (result && result.data) {
      yield put(ACTIONS.apiFormKeySuccess(result));
    }
  } catch (e) {
    yield put(ACTIONS.apiFormKeyError(e.response));
  }
}

export function* apiFormKeySaga() {
  yield takeLatest(TYPES.APIFORMKEY, apiFormKey);
}
