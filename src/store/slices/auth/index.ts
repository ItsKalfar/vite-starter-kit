import { combineReducers } from "@reduxjs/toolkit";
import user from "./userSlice";
import session from "./sessionSlice";

const reducer = combineReducers({
  session,
  user,
});

export default reducer;
