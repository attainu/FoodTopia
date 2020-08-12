import { SET_CURRENT_RES, SET_REVIEWS, LOADING_TOGGLE } from "../actionTypes";
import axios from "axios";
export const fetchCurrentRes = (resId) => {
  return (dispatch) => {
    axios(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${resId}`, {
      headers: {
        "user-key": "24e231a1f7e682b075d9c7b00457e3bb",
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: SET_CURRENT_RES, payload: res.data });
        fetchReviews(resId).then((res) => {
          dispatch({ type: SET_REVIEWS, payload: res });
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const fetchReviews = (resId, start = 0) => {
  return axios
    .get(
      `https://developers.zomato.com/api/v2.1/reviews?res_id=${resId}&start=${start}`,
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
