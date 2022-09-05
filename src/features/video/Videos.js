import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./VideosApi";

// initial state
const initialState = {
  isLoading: false,
  videos: [],
  isError: false,
  error: "",
};

// creating thunk function
export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags, searchText, pageNumber }) => {
    const videos = await getVideos({ tags, searchText, pageNumber });
    return videos;
  }
);

// creating slice function
const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
