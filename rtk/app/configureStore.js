const { configureStore } = require("@reduxjs/toolkit");
const counterSlice = require("../features/counter/counterSlice");
const dynamicCounterSlice = require("../features/dynamicCounter/dynamicCounter");
const postsSlice = require("../features/fetchPosts/posts");
const { createLogger } = require("redux-logger");
const logger = createLogger();

const store = configureStore({
  reducer: {
    counter: counterSlice,
    dynamicCounter: dynamicCounterSlice,
    postsSlice: postsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// export configureStore
module.exports = store;
