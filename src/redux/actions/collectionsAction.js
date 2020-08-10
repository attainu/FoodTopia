import config from "../../config";
import axios from "axios";

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
