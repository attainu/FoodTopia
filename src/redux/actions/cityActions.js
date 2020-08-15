import {
  SET_CITY,
  SET_COLLECTIONS,
  LOADING_TOGGLE,
  SET_TOP_RES,
  SET_NEARBY_RES_ID,
  TOGGLE_SIDEBAR,
  SET_CUISINES,
} from "../actionTypes";

import { fetchTopCollections } from "./collectionsAction";
import { fetchTopRes, fetchNearbyRes } from "./citiesTopResActions";
import config from "../../config";
import axios from "axios";

export const fetchCity = (cityName) => {
  const formattedQuery = cityName.replace(" ", "%20");
  return (dispatch) => {
    dispatch({ type: LOADING_TOGGLE });
    axios
      .get(
        `https://developers.zomato.com/api/v2.1/cities?q=${formattedQuery}`,
        {
          headers: {
            "user-key": config.API_KEY1,
          },
        }
      )
      .then((res) => {
        dispatch({ type: SET_CITY, payload: res.data.location_suggestions[0] });
        fetchTopCollections(res.data.location_suggestions[0].id)
          .then((res) => {
            dispatch({
              type: SET_COLLECTIONS,
              payload: res.data.collections,
            });
            dispatch({ type: LOADING_TOGGLE });
          })
          .catch((err) => {
            console.error(err);
            dispatch({ type: LOADING_TOGGLE });
          });
        fetchCuisines(res.data.location_suggestions[0].id).then((res) => {
          console.log(res);
          dispatch({ type: SET_CUISINES, payload: res.cuisines });
        });
        fetchTopRes(res.data.location_suggestions[0].id).then((res) => {
          dispatch({ type: SET_TOP_RES, payload: res.best_rated_restaurant });
          dispatch({
            type: SET_NEARBY_RES_ID,
            payload: res.nearby_res,
          });

          // fetchNearbyRes(res.nearby_res).then((res) => {
          //   console.log(res);
          // });
        });
      })
      .catch((err) => {
        console.error(err);
        dispatch({ type: LOADING_TOGGLE });
      });
  };
};

export const toggleSideBar = () => {
  return (dispatch) => {
    window.scrollTo(0, 0);

    dispatch({ type: TOGGLE_SIDEBAR });
  };
};

export const fetchCuisines = (cityId) => {
  return axios
    .get(`https://developers.zomato.com/api/v2.1/cuisines?city_id=${cityId}`, {
      headers: {
        "user-key": config.API_KEY1,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};
