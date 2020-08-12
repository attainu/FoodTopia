import config from "../../config";
import axios from "axios";
import { SET_NEARBY_RES } from "../actionTypes";

export const fetchTopRes = (city_id) => {
  return axios
    .get(
      `https://developers.zomato.com/api/v2.1/location_details?entity_id=${city_id}&entity_type=city`,
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

export const fetchNearbyRes = (resIdArray) => {
  const nearByRes = [];
  return new Promise(() => {
    for (let resId of resIdArray) {
      axios
        .get(
          `https://developers.zomato.com/api/v2.1/restaurant?res_id=${resId}`,
          {
            headers: {
              "user-key": config.API_KEY1,
            },
          }
        )
        .then((res) => {
          nearByRes.push(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }).then(() => {
    return nearByRes;
  });
};
