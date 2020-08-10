import { SET_TOP_RES, LOADING_TOGGLE } from "../actionTypes";

const initialState = {
  topRestaurantsSome: null,
  topRestaurantsAll: null,
  loading: false,
};

const citiesTopResReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TOP_RES:
      let topResSome = payload.filter((collection, index) => index < 4);
      return {
        ...state,
        topRestaurantsSome: topResSome,
        topRestaurantsAll: payload,
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

export default citiesTopResReducer;
