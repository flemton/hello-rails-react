const initialState = {
  greeting: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GREETING_SUCCESS":
      return { ...state, greeting: action.payload };
    case "FETCH_GREETING_FAILURE":
      return { ...state, greeting: `Error: ${action.error}` };
    default:
      return state;
  }
};

export default rootReducer;
