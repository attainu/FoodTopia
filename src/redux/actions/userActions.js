import {
  SET_USER,
  LOADING_TOGGLE,
  LOGIN_ERROR,
  SIGNUP_STATUS,
  LOG_OUT_USER,
} from "../actionTypes";
import fire from "../../firebaseConfig";

export const userLogin = (email, password) => {
  return (dispatch) => {
    dispatch({ type: LOADING_TOGGLE });
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        dispatch({ type: LOGIN_ERROR, payload: "" });
        dispatch({ type: SET_USER, payload: u.user });
        dispatch({ type: LOADING_TOGGLE });
        dispatch({ type: SIGNUP_STATUS, payload: "" });
        localStorage.setItem("foodtopia-user", JSON.stringify(u.user));
      })
      .catch((err) => {
        console.error(err);
        if (
          err.message ===
          "The password is invalid or the user does not have a password."
        ) {
          dispatch({
            type: LOGIN_ERROR,
            payload:
              "The password is invalid or the user does not have a password.",
          });
        } else if (err.code === "auth/user-not-found") {
          dispatch({ type: LOGIN_ERROR, payload: "auth/user-not-found" });
        }
        dispatch({ type: LOADING_TOGGLE });
      });
  };
};

export const signUpUser = (userName, email, password) => {
  return (dispatch) => {
    dispatch({ type: LOADING_TOGGLE });
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        const user = fire.auth().currentUser;
        user.updateProfile({
          displayName: userName,
        });
        return user;
      })
      .then((user) => {
        dispatch({ type: SIGNUP_STATUS, payload: "success" });
        fire
          .firestore()
          .collection("fav_res")
          .doc(user.uid)
          .set({ fav_res_arr: [], cart: [] });
        dispatch({ type: LOADING_TOGGLE });
      })
      .catch((err) => {
        if (
          err.message ===
          "The email address is already in use by another account."
        ) {
          dispatch({
            type: SIGNUP_STATUS,
            payload: "The email address is already in use by another account.",
          });
        }
        dispatch({ type: LOADING_TOGGLE });
      });
  };
};

export const signUpStatus = () => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_STATUS, payload: "" });
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch({ type: LOG_OUT_USER });
    localStorage.removeItem("foodtopia-user");
    window.location.reload();
  };
};
