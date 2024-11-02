import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {
  avatar: "",
  userName: "",
  email: "",
  userRoles: [],
};

const userSlice = createSlice({
  name: "auth/user",
  initialState,
  reducers: {
    setUserDetails(state, action: PayloadAction<User>) {
      state.avatar = action.payload?.avatar;
      state.userName = action.payload?.userName;
      state.email = action.payload?.email;
      state.userRoles = action.payload?.userRoles;
    },
  },
});

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;
