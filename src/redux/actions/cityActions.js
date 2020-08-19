import {
  SET_CITY,
  SET_COLLECTIONS,
  LOADING_TOGGLE,
  SET_TOP_RES,
  SET_NEARBY_RES_ID,
  TOGGLE_SIDEBAR,
  SET_CUISINES,
  SET_CATEGORIES,
  SET_LOCATION,
  BY_LOCATION,
  SET_USER_CITY,
  SET_ESTABLISHMENTS,
  SET_FAVOURITES,
} from "../actionTypes";

import { fetchTopCollections } from "./collectionsAction";
import { fetchTopRes } from "./citiesTopResActions";
import { fetchFavouritesInside } from "./favouritesAction";
import config from "../../config";
import axios from "axios";

export const fetchCity = (cityName, userId) => {
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
        const homeRes = res;
        dispatch({ type: SET_CITY, payload: res.data.location_suggestions[0] });
        localStorage.setItem("foodtopia-city", cityName);
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
        if (userId) {
          fetchFavouritesInside(userId).then((res) => {
            dispatch({ type: SET_FAVOURITES, payload: res });
            fetchTopRes(homeRes.data.location_suggestions[0].id).then((res) => {
              dispatch({
                type: SET_TOP_RES,
                payload: res.best_rated_restaurant,
              });
              dispatch({
                type: SET_NEARBY_RES_ID,
                payload: res.nearby_res,
              });
            });
          });
        } else {
          fetchTopRes(homeRes.data.location_suggestions[0].id).then((res) => {
            dispatch({ type: SET_TOP_RES, payload: res.best_rated_restaurant });
            dispatch({
              type: SET_NEARBY_RES_ID,
              payload: res.nearby_res,
            });
          });
        }
        fetchCuisines(res.data.location_suggestions[0].id).then((res) => {
          dispatch({ type: SET_CUISINES, payload: res.cuisines });
        });
        fetchEstablishments(res.data.location_suggestions[0].id).then((res) => {
          dispatch({ type: SET_ESTABLISHMENTS, payload: res.establishments });
        });
      })
      .catch((err) => {
        console.error(err);
        dispatch({ type: LOADING_TOGGLE });
      });
  };
};
export const fetchCategories = () => {
  return (dispatch) => {
    axios
      .get(`https://developers.zomato.com/api/v2.1/categories`, {
        headers: {
          "user-key": config.API_KEY1,
        },
      })
      .then((res) => {
        dispatch({ type: SET_CATEGORIES, payload: res.data.categories });
      })
      .catch((err) => {
        console.error(err);
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

export const fetchEstablishments = (cityId) => {
  return axios
    .get(
      `https://developers.zomato.com/api/v2.1/establishments?city_id=${cityId}`,
      {
        headers: {
          "user-key": config.API_KEY1,
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const setLocation = (lat, long) => {
  return (dispatch) => {
    const loc = { lat: lat, long: long };
    dispatch({ type: SET_LOCATION, payload: loc });
  };
};

export const fetchCityOnCoOrdinates = (lat, long) => {
  return (dispatch) => {
    axios(
      `https://developers.zomato.com/api/v2.1/cities?lat=${lat}&lon=${long}`,
      {
        headers: {
          "user-key": config.API_KEY1,
        },
      }
    )
      .then((res) => {
        dispatch({
          type: SET_USER_CITY,
          payload: res.data.location_suggestions[0],
        });
        dispatch({ type: BY_LOCATION });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const byLocation = () => {
  return (dispatch) => {
    dispatch({ type: BY_LOCATION });
  };
};
