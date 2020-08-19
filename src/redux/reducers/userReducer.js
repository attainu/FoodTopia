import {
  SET_USER,
  LOADING_TOGGLE,
  LOGIN_ERROR,
  SIGNUP_STATUS,
  LOG_OUT_USER,
} from "../actionTypes";

const initialState = {
  user: JSON.parse(localStorage.getItem("foodtopia-user")) || null,
  loading: false,
  loginError: "",
  signUpStatus: "",
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    case LOADING_TOGGLE:
      return {
        ...state,
        loading: !state.loading,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: payload,
      };
    case SIGNUP_STATUS:
      return {
        ...state,
        signUpStatus: payload,
      };
    case LOG_OUT_USER:
      return {
        ...state,
        user: localStorage.getItem("foodtopia-user") || null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
