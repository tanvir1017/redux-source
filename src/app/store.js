import { configureStore } from "@reduxjs/toolkit";
import filterAndSearchReducer from "../features/filterAndSearch/filterAndSearchSlice";
import paginationReducer from "../features/pagination/paginationSlice";
import relatedVideosReducer from "../features/relatedVideos/relatedVideosSlice";
import tagsReducer from "../features/tags/tagsSlice";
import VideosReducer from "../features/video/Videos";
import videoDetailsReducer from "../features/videoDetails/videoDetailsSlice";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    videos: VideosReducer,
    tags: tagsReducer,
    videoDetails: videoDetailsReducer,
    relatedVideos: relatedVideosReducer,
    filter: filterAndSearchReducer,
  },
});
