import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { videoDetailsApi } from "./videoDetailsApi";

const initialState = {
  isLoading: false,
  videoDetails: [],
  isError: false,
  error: "",
};

export const fetchVideoDetails = createAsyncThunk(
  "videoDetails/fetchVideoDetails",
  async (videId) => {
    const videoDetails = await videoDetailsApi(videId);
    return videoDetails;
  }
);

const videoDetailsSlice = createSlice({
  name: "videoDetails",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoDetails.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideoDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videoDetails = action.payload;
      })
      .addCase(fetchVideoDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.videoDetails = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videoDetailsSlice.reducer;
