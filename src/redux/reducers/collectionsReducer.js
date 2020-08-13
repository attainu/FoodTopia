import {
  SET_COLLECTIONS,
  SET_CURRENT_COLLECTION,
  LOADING_TOGGLE,
  RESET,
} from "../actionTypes";

const initialState = {
  topCollections: null,
  allCollections: null,
  currentCollection: null,
  loading: false,
};

const collectionsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_COLLECTIONS:
      let topCollections = payload.filter((collection, index) => index < 4);
      return {
        ...state,
        allCollections: payload,
        topCollections: topCollections,
      };
    case SET_CURRENT_COLLECTION:
      return {
        ...state,
        currentCollection: payload,
      };
    case LOADING_TOGGLE:
      return {
        ...state,
        loading: !state.loading,
      };

    case RESET:
      return {
        ...state,
        currentCollection: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default collectionsReducer;
