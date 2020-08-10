import { SET_CITY, LOADING_TOGGLE } from "../actionTypes";

const initialState = {
  selectedCity: "",
  selectedCityId: null,
  loading: false,
};

const cityReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CITY:
      return {
        ...state,
        selectedCity: payload.name,
        selectedCityId: payload.id,
      };
    case LOADING_TOGGLE: {
      return {
        ...state,
        loading: !state.loading,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default cityReducer;
