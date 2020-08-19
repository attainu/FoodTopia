const {
  LOADING_TOGGLE,
  SET_SEARCH_RESULT,
  SET_CURRENT_QUERY,
  SET_TYPE_SEARCH_RESULTS,
} = require("../actionTypes");

const initialState = {
  currentQuery: "",
  searchResult: null,
  loading: false,
  typeSearchRes: null,
};

const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_QUERY:
      return {
        ...state,
        currentQuery: payload,
      };
    case SET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: payload,
      };
    case SET_TYPE_SEARCH_RESULTS:
      return {
        typeSearchRes: payload,
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

export default searchReducer;
