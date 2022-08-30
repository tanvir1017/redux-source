const store = require("./app/configureStore");
const { counterActions } = require("./features/counter/counterSlice");
const {
  dynamicCounterActions,
} = require("./features/dynamicCounter/dynamicCounter");
const { fetchPost } = require("./features/fetchPosts/posts");

// console.log(store.getState());
// subscribe store
store.subscribe(() => {
  //   console.log(store.getState());
});

// dispatch actions

store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.decrement());

store.dispatch(fetchPost());
// store.dispatch(dynamicCounterActions.increment(3));
// store.dispatch(dynamicCounterActions.decrement(8));
