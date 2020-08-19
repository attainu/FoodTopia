import fire from "../../firebaseConfig";
import { SET_FAVOURITES } from "../actionTypes";
export const fetchFavourites = (userId) => {
  return (dispatch) => {
    fire
      .firestore()
      .collection("fav_res")
      .doc(userId)
      .get()
      .then((doc) => {
        // snapshot.forEach((res) => {
        //   console.log(res.data());
        // });
        const formattedArr = [];
        for (let res of doc.data().fav_res_arr) {
          console.log(JSON.parse(res));
          formattedArr.push(JSON.parse(res));
        }
        if (doc.data().fav_res_arr.length === formattedArr.length) {
          dispatch({ type: SET_FAVOURITES, payload: formattedArr });
        } else {
          return;
        }
      });
  };
};

export const addToFav = (userID, restaurant) => {
  return (dispatch) => {
    fire
      .firestore()
      .collection("fav_res")
      .doc(userID)
      .get()
      .then((doc) => {
        const oldArr = doc.data().fav_res_arr;
        oldArr.push(JSON.stringify(restaurant));
        fire
          .firestore()
          .collection("fav_res")
          .doc(userID)
          .update({
            fav_res_arr: oldArr,
          })
          .then(() => {
            console.log("UPDATED SUCCESSFULLY");
          });
      });
  };
};
