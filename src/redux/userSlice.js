import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  name: "",
  email: "",
  accessToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { userId, name, email, accessToken } = action.payload;
      state.userId = userId;
      state.name = name;
      state.email = email;
      state.accessToken = accessToken;
    },
    logout: (state) => {
      state.userId = null;
      state.name = "";
      state.email = "";
      state.accessToken = "";
    },
  },
});

export const { addUser, logout } = userSlice.actions;

export default userSlice.reducer;
