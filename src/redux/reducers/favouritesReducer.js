import { SET_FAVOURITES, SET_CART_ITEMS, LOADING_TOGGLE } from "../actionTypes";

const initialState = {
  favourites: null,
  loading: false,
  cartItems: null,
};

const favouritesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_FAVOURITES:
      return { ...state, favourites: payload };
    case SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case LOADING_TOGGLE:
      return { ...state, loading: !state.loading };
    default:
      return {
        ...state,
      };
  }
};

export default favouritesReducer;
