import cityReducer from "./reducers/cityReducer";
import collectionsReducer from "./reducers/collectionsReducer";
import citiesTopResReducer from "./reducers/citiesTopResReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cityReducer,
  collectionsReducer,
  citiesTopResReducer,
});

export default rootReducer;
