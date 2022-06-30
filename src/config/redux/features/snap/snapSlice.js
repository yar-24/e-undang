import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import snapService from "./snapService";

// Get pay from localStorage
const snaps = JSON.parse(localStorage.getItem("snaps"));

const initialState = {
  snaps: snaps ? snaps : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

//create pay
export const postSnap = createAsyncThunk(
  "snap/create",
  async (snapData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await snapService.postSnap(snapData, token);
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

// Get user goals
// export const getPays = createAsyncThunk(
//   'snap/gets',
//   async (_, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token;
//       return await payService.getPays(token)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// get pay
// export const getPay = createAsyncThunk(
//   "snap/get",
//   async (_, thunkAPI) => {
//     try {
//       // const token = thunkAPI.getState().auth.user.token;
//       const id = thunkAPI.getState().pay.pays.data.id
//       return await payService.getPay(id)
//     } catch (error){
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// )

export const snapSlice = createSlice({
  name: "snap",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postSnap.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postSnap.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.snaps = action.payload
      })
      .addCase(postSnap.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const {reset} = snapSlice.actions
export default snapSlice.reducer
