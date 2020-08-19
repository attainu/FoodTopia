//login form

import React, { Component } from "react";
import fire from "../firebaseConfig";
import { SIGNUP_STATUS } from "../redux/actionTypes";
class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  componentDidMount() {
    fire
      .firestore()
      .collection("fav_res")
      .doc("new_doc")
      .get()
      .then((doc) => {
        // snapshot.forEach((res) => {
        //   console.log(res.data());
        // });
        console.log(doc.data());
      });
    // fire
    //   .firestore()
    //   .collection("fav_res")
    //   .doc("JYO5S9GEluEd0vHuOoF9")
    //   .update({
    //     cart: [2],
    //   });
    // fire.firestore().collection("fav_res").doc("new_doc").set({ user: [] });
  }

  signUp = () => {
    const email = this.state.email;
    const password = this.state.password;
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        return data;
      })
      .then((data) => {
        console.log(data.user.uid);
        fire
          .firestore()
          .collection("fav_res")
          .doc(data.user.uid)
          .set({ res_arr: [], cart: [] });
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
      });
  };

  login = () => {
    const email = this.state.email;
    const password = this.state.password;
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully logged in ", u.user.uid);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
          />
          <input type="submit" value="Login" onClick={this.login} />
          <input type="submit" value="SigUp" onClick={this.signUp} />
        </form>
      </div>
    );
  }
}
export default LoginForm;

// "{"R":{"has_menu_status":{"delivery":1,"takeaway":-1},"res_id":51232,"is_grocery_store":false},"apikey":"48e7f3bd752c204971c6da9496451dfd","id":"51232","name":"Meghana Foods","url":"https://www.zomato.com/bangalore/meghana-foods-jayanagar?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1","location":{"address":"52, 1st Floor, 33rd Cross, 4th Block, Jayanagar, Bangalore","locality":"Jayanagar","city":"Bangalore","city_id":4,"latitude":"12.9261873368","longitude":"77.5845278800","zipcode":"560041","country_id":1,"locality_verbose":"Jayanagar, Bangalore"},"switch_to_order_menu":0,"cuisines":"Biryani, Andhra, North Indian, Seafood","timings":"11:30am – 4pm, 6:30pm – 11pm (Mon-Sun)","average_cost_for_two":600,"price_range":2,"currency":"Rs.","highlights":["Credit Card","No Alcohol Available","Cash","Takeaway Available","Lunch","Delivery","Dinner","Debit Card","Air Conditioned","Indoor Seating","Table booking recommended","Reopened"],"offers":[],"opentable_support":0,"is_zomato_book_res":0,"mezzo_provider":"OTHER","is_book_form_web_view":0,"book_form_web_view_url":"","book_again_url":"","thumb":"https://b.zmtcdn.com/data/pictures/1/50691/92d9b4053ef0965120828b4fa4eecc3b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A","user_rating":{"aggregate_rating":"4.3","rating_text":"Very Good","rating_color":"5BA829","rating_obj":{"title":{"text":"4.3"},"bg_color":{"type":"lime","tint":"700"}},"votes":39975},"all_reviews_count":2457,"photos_url":"https://www.zomato.com/bangalore/meghana-foods-jayanagar/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop","photo_count":816,"menu_url":"https://www.zomato.com/bangalore/meghana-foods-jayanagar/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop","featured_image":"https://b.zmtcdn.com/data/pictures/1/50691/92d9b4053ef0965120828b4fa4eecc3b.jpg","has_online_delivery":1,"is_delivering_now":1,"store_type":"","include_bogo_offers":true,"deeplink":"zomato://restaurant/51232","order_url":"https://www.zomato.com/bangalore/meghana-foods-jayanagar/order?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1","order_deeplink":"","is_table_reservation_supported":0,"has_table_booking":0,"events_url":"https://www.zomato.com/bangalore/meghana-foods-jayanagar/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1","phone_numbers":"080 22448080, 080 40970707","all_reviews":{"reviews":[{"review":[]},{"review":[]},{"review":[]},{"review":[]},{"review":[]}]},"establishment":["Casual Dining"]}"
