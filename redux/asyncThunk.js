const fetch = require("node-fetch");
const { createStore, applyMiddleware } = require("redux");
const thunkMiddleWare = require("redux-thunk");

// initial state
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

// action creators
const fetchRequested = () => {
  return {
    type: "post/loading",
  };
};
const fetchDataLoaded = (posts) => {
  return {
    type: "post/loadedSuccessfully",
    payload: posts,
  };
};
const fetchingError = (error) => {
  return {
    type: "post/error",
    payload: error,
  };
};

// reducer function
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "post/loading":
      return {
        ...state,
        loading: true,
        posts: [],
        error: "",
      };
    case "post/loadedSuccessfully":
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: "",
      };
    case "post/error":
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload.message,
      };
    default:
      return state;
  }
};

// thunk function
const fetchApi = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchRequested());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const post = await response.json();

      dispatch(fetchDataLoaded(post));
    } catch (err) {
      dispatch(fetchingError(err));
    }
  };
};

// create store
const store = createStore(
  postReducer,
  applyMiddleware(thunkMiddleWare.default)
);

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch
store.dispatch(fetchApi());
