import fire from "../../firebaseConfig";
import { SET_FAVOURITES, LOADING_TOGGLE } from "../actionTypes";
export const fetchFavourites = (userId) => {
  return (dispatch) => {
    dispatch({ type: LOADING_TOGGLE });
    fire
      .firestore()
      .collection("fav_res")
      .doc(userId)
      .get()
      .then((doc) => {
        const formattedArr = [];
        for (let res of doc.data().fav_res_arr) {
          console.log(JSON.parse(res));
          formattedArr.push(JSON.parse(res));
        }
        if (doc.data().fav_res_arr.length === formattedArr.length) {
          dispatch({ type: SET_FAVOURITES, payload: formattedArr });
          dispatch({ type: LOADING_TOGGLE });
        } else {
          return;
        }
      })
      .catch((err) => {
        console.error(err);
        dispatch({ type: LOADING_TOGGLE });
      });
  };
};

export const fetchFavouritesInside = (userId) => {
  return fire
    .firestore()
    .collection("fav_res")
    .doc(userId)
    .get()
    .then((doc) => {
      const formattedArr = [];
      for (let res of doc.data().fav_res_arr) {
        formattedArr.push(JSON.parse(res));
      }
      return formattedArr;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const addToFav = (userID, restaurant) => {
  return (dispatch) => {
    dispatch({ type: LOADING_TOGGLE });
    fire
      .firestore()
      .collection("fav_res")
      .doc(userID)
      .get()
      .then((doc) => {
        const oldArr = doc.data().fav_res_arr;
        oldArr.push(restaurant);
        fire
          .firestore()
          .collection("fav_res")
          .doc(userID)
          .update({
            fav_res_arr: oldArr,
          })
          .then(() => {
            const formattedArr = [];
            for (let res of oldArr) {
              formattedArr.push(JSON.parse(res));
            }

            dispatch({ type: SET_FAVOURITES, payload: formattedArr });
            dispatch({ type: LOADING_TOGGLE });
          })
          .catch((err) => {
            console.error(err);
            dispatch({ type: LOADING_TOGGLE });
          });
      });
  };
};

export const deleteFromFav = (userID, restaurantId) => {
  return (dispatch) => {
    dispatch({ type: LOADING_TOGGLE });
    fire
      .firestore()
      .collection("fav_res")
      .doc(userID)
      .get()
      .then((doc) => {
        const oldArr = doc.data().fav_res_arr;
        const formattedArr = [];
        for (let res of oldArr) {
          formattedArr.push(JSON.parse(res));
        }
        const filteredArr = formattedArr.filter((res) => {
          return res.id != restaurantId;
        });
        const newFilteredArr = [];
        for (let res of filteredArr) {
          newFilteredArr.push(JSON.stringify(res));
        }
        fire
          .firestore()
          .collection("fav_res")
          .doc(userID)
          .update({
            fav_res_arr: newFilteredArr,
          })
          .then(() => {
            fire
              .firestore()
              .collection("fav_res")
              .doc(userID)
              .get()
              .then((doc) => {
                const oldArr = doc.data().fav_res_arr;
                const formattedArr = [];
                for (let res of oldArr) {
                  formattedArr.push(JSON.parse(res));
                }

                dispatch({ type: SET_FAVOURITES, payload: formattedArr });
                dispatch({ type: LOADING_TOGGLE });
              });
          })
          .catch((err) => {
            console.error(err);
            dispatch({ type: LOADING_TOGGLE });
          });
      });
  };
};
