import cityReducer from "./reducers/cityReducer";
import collectionsReducer from "./reducers/collectionsReducer";
import citiesTopResReducer from "./reducers/citiesTopResReducer";
import indiResReducer from "./reducers/indiResReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cityReducer,
  collectionsReducer,
  citiesTopResReducer,
  indiResReducer,
});

export default rootReducer;
