import { SET_COLLECTIONS } from "../actionTypes";

const initialState = {
  topCollections: null,
  allCollections: null,
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
    default:
      return {
        ...state,
      };
  }
};

export default collectionsReducer;
