import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ISessionState = {
  signedIn: false,
  token: null,
};

const sessionSlice = createSlice({
  name: "auth/session",
  initialState,
  reducers: {
    setUserSignedIn(state, action: PayloadAction<string>) {
      state.signedIn = true;
      state.token = action.payload;
    },
    setUserSignedOut(state) {
      state.signedIn = false;
      state.token = null;
    },
  },
});

export const { setUserSignedIn, setUserSignedOut } = sessionSlice.actions;
export default sessionSlice.reducer;
