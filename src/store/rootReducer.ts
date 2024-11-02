import { combineReducers, UnknownAction } from "redux";
import auth from "./slices/auth";

const staticReducers = {
  auth,
};

const rootReducer =
  (asyncReducers?: AsyncReducers) =>
  (state: IRootState, action: UnknownAction) => {
    const combinedReducer = combineReducers({
      ...staticReducers,
      ...asyncReducers,
    });
    return combinedReducer(state, action);
  };

export default rootReducer;
