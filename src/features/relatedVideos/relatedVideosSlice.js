import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedvideosApi";

// initial state
const initialState = {
  isLoading: false,
  relatedVideos: [],
  isError: false,
  error: "",
};

// creating thunk function
export const fetchRelatedVideos = createAsyncThunk(
  "videos/fetchRelatedVideos",
  async ({ id, tags }) => {
    const videos = await getRelatedVideos({ id, tags });
    return videos;
  }
);

// creating slice function
const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
