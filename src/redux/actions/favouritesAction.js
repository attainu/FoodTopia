import fire from "../../firebaseConfig";

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
        console.log(doc.data());
      });
  };
};
