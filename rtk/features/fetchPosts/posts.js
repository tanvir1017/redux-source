const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// InitialState
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

// fetchPost
const fetchPost = createAsyncThunk("posts/fetchPost", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await response.json();
  return posts;
});

// reducer or slice
const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.loading = true;
      state.posts = [];
      state.error = "";
    });

    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    });
  },
});

module.exports = postsSlice.reducer;
module.exports.fetchPost = fetchPost;
