import {
  SET_CURRENT_RES,
  SET_REVIEWS,
  LOADING_TOGGLE,
  RESET,
  RESET_RES,
} from "../actionTypes";
import axios from "axios";
export const fetchCurrentRes = (resId) => {
  return (dispatch) => {
    dispatch({ type: RESET_RES, payload: null });
    dispatch({ type: LOADING_TOGGLE });
    axios(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${resId}`, {
      headers: {
        "user-key": "24e231a1f7e682b075d9c7b00457e3bb",
      },
    })
      .then((res) => {
        console.log(JSON.stringify(res.data));
        dispatch({ type: SET_CURRENT_RES, payload: res.data });
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
        console.log("----------------------" + err.message);
        dispatch({ type: LOADING_TOGGLE });
      });
  };
};
