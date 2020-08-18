import { SET_USER, LOADING_TOGGLE } from "../actionTypes";

const initialState = {
  user: localStorage.getItem("foodtopia-user") || null,
  loading: false,
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
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
