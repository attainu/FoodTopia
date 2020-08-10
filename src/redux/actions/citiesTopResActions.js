import config from "../../config";
import axios from "axios";

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
      console.log(res.data);
      return res.data.best_rated_restaurant;
    })
    .catch((err) => {
      console.error(err);
    });
};
