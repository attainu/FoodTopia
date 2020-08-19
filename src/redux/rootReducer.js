import cityReducer from "./reducers/cityReducer";
import collectionsReducer from "./reducers/collectionsReducer";
import citiesTopResReducer from "./reducers/citiesTopResReducer";
import indiResReducer from "./reducers/indiResReducer";
import searchReducer from "./reducers/searchReducer";
import userReducer from "./reducers/userReducer";
import favouritesReducer from "./reducers/favouritesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cityReducer,
  collectionsReducer,
  citiesTopResReducer,
  indiResReducer,
  searchReducer,
  userReducer,
  favouritesReducer,
});

export default rootReducer;
