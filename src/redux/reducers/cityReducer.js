import { SET_CITY, LOADING_TOGGLE, TOGGLE_SIDEBAR } from "../actionTypes";

const initialState = {
  selectedCity: "",
  selectedCityId: null,
  loading: false,
  sideBarstate: false,
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
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sideBarstate: !state.sideBarstate,
      };
    default:
      return {
        ...state,
      };
  }
};

export default cityReducer;
