import {
  SET_CURRENT_RES,
  LOADING_TOGGLE,
  SET_REVIEWS,
  RESET,
} from "../actionTypes";

const initialState = {
  currentRes: null,
  loading: false,
  reviews: null,
};

const indiResReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_RES:
      return {
        ...state,
        currentRes: payload,
      };
    case SET_REVIEWS:
      return {
        ...state,
        reviews: payload,
      };
    case LOADING_TOGGLE:
      return {
        ...state,
        loading: !state.loading,
      };
    case RESET:
      return {
        ...state,
        reviews: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default indiResReducer;
