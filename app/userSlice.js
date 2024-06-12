import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

const initialState = {
  currentUser: null,
  isAuthenticated: false,
};

export const registerUserAsync = createAsyncThunk(
  "user/registerUserAsync",
  async (user) => {
    try {
      const response = await api.post(`http://192.168.43.144:8080/api/create-user`, user);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  "user/loginUserAsync",
  async (user) => {
    try {
      const response = await api.post(`http://192.168.43.144:8080/api/sign-in`, user);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        console.error("Registration failed:", action.error.message);
        alert("Registration failed. Please try again.");
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        console.error("Login failed:", action.error.message);
        alert("Login failed. Please try again.");
      });
  },
});

export const selectUser = (state) => state.user;

export default userSlice.reducer;


