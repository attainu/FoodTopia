import config from "../../config";
import axios from "axios";
import { SET_CURRENT_COLLECTION, LOADING_TOGGLE } from "../actionTypes";

export const fetchTopCollections = (cityId) => {
  return axios
    .get(
      `https://developers.zomato.com/api/v2.1/collections?city_id=${cityId}`,
      {
        headers: {
          "user-key": config.API_KEY1,
        },
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const fetchCurrentCollection = (collectionId, cityId) => {
  return (dispatch) => {
    dispatch({ type: LOADING_TOGGLE });
    axios
      .get(
        `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&collection_id=${collectionId}`,
        {
          headers: {
            "user-key": config.API_KEY1,
          },
        }
      )
      .then((res) => {
        dispatch({ type: SET_CURRENT_COLLECTION, payload: res.data });
        dispatch({ type: LOADING_TOGGLE });
      })
      .catch((err) => {
        console.error(err);
        dispatch({ type: LOADING_TOGGLE });
      });
  };
};
