import {
  LOADING_TOGGLE,
  SET_SEARCH_RESULT,
  SET_CURRENT_QUERY,
  SET_TYPE_SEARCH_RESULTS,
} from "../actionTypes";
import axios from "axios";
import config from "../../config";

export const searchOnQuery = (query, cityId, start = 0) => {
  const queryFormatted = query.replace(" ", "%20");
  return (dispatch) => {
    dispatch({ type: LOADING_TOGGLE });
    axios
      .get(
        `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&q=${queryFormatted}&start=${start}`,
        { headers: { "user-key": config.API_KEY1 } }
      )
      .then((res) => {
        dispatch({ type: SET_SEARCH_RESULT, payload: res.data });
        dispatch({ type: LOADING_TOGGLE });
        dispatch({ type: SET_CURRENT_QUERY, payload: queryFormatted });
      })
      .catch((err) => {
        console.error(err);
        dispatch({ type: LOADING_TOGGLE });
      });
  };
};

export const typeSearch = (type, cityId, typeId, start = 0) => {
  return (dispatch) => {
    dispatch({ type: LOADING_TOGGLE });
    const url = () => {
      switch (type) {
        case "cuisine":
          return `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&start=${start}&cuisines=${typeId}`;
        case "category":
          return `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&start=${start}&category=${typeId}`;
        case "establishment":
          return `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&start=${start}&establishment_type=${typeId}`;
        default:
          return;
      }
    };
    if (url()) {
      axios
        .get(url(), {
          headers: {
            "user-key": config.API_KEY1,
          },
        })
        .then((res) => {
          console.log(res.data);
          dispatch({ type: LOADING_TOGGLE });
          dispatch({ type: SET_TYPE_SEARCH_RESULTS, payload: res.data });
        })
        .catch((err) => {
          console.error(err);
          dispatch({ type: LOADING_TOGGLE });
        });
    }
  };
};
