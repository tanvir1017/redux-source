// import slice or create slice with @reduxjs/toolkit
const { createSlice } = require("@reduxjs/toolkit");

// initial State
const initialState = {
  count: 0,
};

// counterSlice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
  },
});

// export
module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;
