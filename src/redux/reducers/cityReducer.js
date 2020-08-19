import {
  SET_CITY,
  LOADING_TOGGLE,
  TOGGLE_SIDEBAR,
  SET_CUISINES,
  SET_CATEGORIES,
  SET_LOCATION,
  BY_LOCATION,
  SET_USER_CITY,
  SET_ESTABLISHMENTS,
} from "../actionTypes";

const initialState = {
  selectedCity: "",
  selectedCityId: null,
  loading: false,
  sideBarstate: false,
  cuisines: null,
  currentLocation: null,
  byLocation: false,
  userCity: null,
  userCityId: null,
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
    case SET_CUISINES:
      return {
        ...state,
        cuisines: payload,
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sideBarstate: !state.sideBarstate,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case SET_ESTABLISHMENTS:
      return {
        ...state,
        establishments: payload,
      };
    case SET_LOCATION:
      return {
        ...state,
        currentLocation: payload,
      };
    case SET_USER_CITY:
      return {
        ...state,
        userCity: payload.name,
        userCityId: payload.id,
      };
    case BY_LOCATION:
      return {
        ...state,
        byLocation: !state.byLocation,
      };
    default:
      return {
        ...state,
      };
  }
};

export default cityReducer;
