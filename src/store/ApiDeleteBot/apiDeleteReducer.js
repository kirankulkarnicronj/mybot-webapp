// import * as types from "./ApiFormTypes";

// const INITIAL_STATE = {
//   apifetch: [],
//   isfetchingdata: false,
//   getapifetch: [],
//   isGetapifetch: false,
//   isdeleteapifetch: false,
//   isSendByNameData: false,
//   getSendByNameData: [],
// };

// export function FetchApiReducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case types.APIFORMKEY:
//       return {
//         ...state,
//         isfetchingdata: false,
//       };

//     case types.APIFORMKEY_SUCCESS:
//       return {
//         ...state,
//         isfetchingdata: true,
//         apifetch: action.payload,
//       };

//     case types.APIFORMKEY_ERROR:
//       return {
//         ...state,
//         isfetchingdata: false,
//       };

//     default:
//       return state;
//   }
// }
