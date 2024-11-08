import {
  configureStore,
  Action,
  Reducer,
  Store,
  UnknownAction,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import { PERSIST_STORE_NAME } from "@/constants/app.constants";

const persistConfig = {
  key: PERSIST_STORE_NAME,
  keyPrefix: "",
  storage,
  whitelist: ["auth"],
};

interface ICustomStore extends Store<IRootState, UnknownAction> {
  asyncReducers?: AsyncReducers;
}

const store: ICustomStore = configureStore({
  reducer: persistReducer(persistConfig, rootReducer() as Reducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

store.asyncReducers = {};

export const persistor = persistStore(store);

export function injectReducer<S>(key: string, reducer: Reducer<S, Action>) {
  if (store.asyncReducers) {
    if (store.asyncReducers[key]) {
      return false;
    }
    store.asyncReducers[key] = reducer;
    store.replaceReducer(
      persistReducer(persistConfig, rootReducer(store.asyncReducers) as Reducer)
    );
  }
  persistor.persist();
  return store;
}

export type AppDispatch = typeof store.dispatch;

export default store;
