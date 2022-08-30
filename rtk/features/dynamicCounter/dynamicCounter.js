//create store
const { createSlice } = require("@reduxjs/toolkit");
const { counterActions } = require("../counter/counterSlice");

// initialState
const initialState = {
  count: 0,
};

// reducer
const dynamicCounterSlice = createSlice({
  name: "dynamicCounter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
  },
  // extraReducers: {
  //   ["counter/increment"]: (state, action) => {
  //     state.count++;
  //   },
  // },
  extraReducers: (builder) =>
    builder.addCase(counterActions.increment, (state, action) => {
      state.count += 1;
    }),
});

// module exports
module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;
