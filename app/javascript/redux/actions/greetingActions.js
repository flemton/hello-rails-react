import axios from "axios";

export const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get("/random_greeting");
    dispatch({
      type: "FETCH_GREETING_SUCCESS",
      payload: response.data.greeting,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_GREETING_FAILURE",
      error: "Failed to fetch greeting",
    });
  }
};
