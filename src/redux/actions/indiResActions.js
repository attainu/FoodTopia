import {
  SET_CURRENT_RES,
  SET_REVIEWS,
  LOADING_TOGGLE,
  RESET,
  RESET_RES,
} from "../actionTypes";
import axios from "axios";
import { fetchFavouritesInside } from "./favouritesAction";
export const fetchCurrentRes = (resId, userId) => {
  return (dispatch) => {
    dispatch({ type: RESET_RES, payload: null });
    dispatch({ type: LOADING_TOGGLE });
    axios(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${resId}`, {
      headers: {
        "user-key": "24e231a1f7e682b075d9c7b00457e3bb",
      },
    })
      .then((res) => {
        const currentRes = res.data;
        if (userId) {
          fetchFavouritesInside(userId).then((res) => {
            if (res.length === 0) {
              dispatch({
                type: SET_CURRENT_RES,
                payload: { ...currentRes, isInFav: false },
              });
            }
            let count = 0;
            for (let each of res) {
              if (each.id === currentRes.id) {
                count = +1;
              } else {
                count = 0;
              }
              if (count > 0) {
                dispatch({
                  type: SET_CURRENT_RES,
                  payload: { ...currentRes, isInFav: true },
                });
              } else {
                dispatch({
                  type: SET_CURRENT_RES,
                  payload: { ...currentRes, isInFav: false },
                });
                count = 0;
              }
            }
          });
        } else {
          dispatch({
            type: SET_CURRENT_RES,
            payload: { ...currentRes, isInFav: false },
          });
        }
        dispatch({ type: LOADING_TOGGLE });

        fetchReviews(resId).then((res) => {
          dispatch({ type: SET_REVIEWS, payload: res });
        });
      })
      .catch((err) => {
        console.error(err);
        console.log("----------------------" + err);
        dispatch({ type: LOADING_TOGGLE });
      });
  };
};

export const fetchReviews = (resId, start = 0) => {
  return axios
    .get(
      `https://developers.zomato.com/api/v2.1/reviews?res_id=${resId}&start=${start}&count=5`,
      {
        headers: { "user-key": "24e231a1f7e682b075d9c7b00457e3bb" },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const fetchMoreReviews = (resId, start) => {
  return (dispatch) => {
    dispatch({ type: RESET, payload: null });
    dispatch({ type: LOADING_TOGGLE });
    axios
      .get(
        `https://developers.zomato.com/api/v2.1/reviews?res_id=${resId}&start=${start}&count=5`,
        {
          headers: { "user-key": "24e231a1f7e682b075d9c7b00457e3bb" },
        }
      )
      .then((res) => {
        dispatch({ type: SET_REVIEWS, payload: res.data });
        dispatch({ type: LOADING_TOGGLE });
      })
      .catch((err) => {
        console.error("----------------------" + err.message);
        dispatch({ type: LOADING_TOGGLE });
      });
  };
};
