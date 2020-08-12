import {
  SET_TOP_RES,
  LOADING_TOGGLE,
  SET_NEARBY_RES,
  SET_NEARBY_RES_ID,
} from "../actionTypes";

const initialState = {
  topRestaurantsSome: null,
  topRestaurantsAll: null,
  loading: false,
  nearbyResIds: null,
  nearbyRes: null,
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
    case SET_NEARBY_RES_ID: {
      return {
        ...state,
        nearbyResIds: payload,
      };
    }
    case SET_NEARBY_RES: {
      return {
        ...state,
        nearbyRes: payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default citiesTopResReducer;
