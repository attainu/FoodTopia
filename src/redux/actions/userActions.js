import { SET_USER, LOADING_TOGGLE } from "../actionTypes";
import fire from "../../firebaseConfig";

export const userLogin = (email, password) => {
  return (dispatch) => {
    dispatch({ type: LOADING_TOGGLE });
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        dispatch({ type: SET_USER, payload: u.user });
        dispatch({ type: LOADING_TOGGLE });
        localStorage.setItem("foodtopia-user", JSON.stringify(u.user));
      })
      .catch((err) => {
        console.error(err);
        if (
          err.message ===
          "The password is invalid or the user does not have a password."
        ) {
          alert("Incorrect Password, try again with the correct password");
        }
        dispatch({ type: LOADING_TOGGLE });
      });
  };
};
