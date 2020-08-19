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

export const fetchNearBy2 = (resId, nearByRes) => {
  axios
    .get(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${resId}`, {
      headers: {
        "user-key": config.API_KEY1,
      },
    })
    .then((res) => {
      nearByRes.push(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {

//     // This rule allows anyone with your database reference to view, edit,
//     // and delete all data in your Firestore database. It is useful for getting
//     // started, but it is configured to expire after 30 days because it
//     // leaves your app open to attackers. At that time, all client
//     // requests to your Firestore database will be denied.
//     //
//     // Make sure to write security rules for your app before that time, or else
//     // all client requests to your Firestore database will be denied until you Update
//     // your rules
//     match /{document=**} {
//       allow read, write: if request.time < timestamp.date(2020, 9, 13);
//     }
//   }
// }
