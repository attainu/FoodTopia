import cityReducer from "./reducers/cityReducer";
import collectionsReducer from "./reducers/collectionsReducer";
import citiesTopResReducer from "./reducers/citiesTopResReducer";
import indiResReducer from "./reducers/indiResReducer";
import searchReducer from "./reducers/searchReducer";
import userReducer from "./reducers/userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cityReducer,
  collectionsReducer,
  citiesTopResReducer,
  indiResReducer,
  searchReducer,
  userReducer,
});

export default rootReducer;
