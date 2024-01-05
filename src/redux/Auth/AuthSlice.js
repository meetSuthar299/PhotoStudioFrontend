import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../Auth/AuthService";
import { toast } from "react-toastify";

const initialState = {
    isLoggedIn: false,
    user: null,
    users: [],
    twoFactor: false,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  };

  // Register User
export const register = createAsyncThunk(
    "auth/register",
    async (userData, thunkAPI) => {
      try {
        return await authService.register(userData);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      RESET_AUTH(state) {
        state.twoFactor = false;
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = "";
      },
    },
    extraReducers: (builder) => {}
})

export default authSlice.reducer;