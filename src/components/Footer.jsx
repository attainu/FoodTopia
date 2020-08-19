import React from "react";
import "../Styles/Footer.css";

function Footer() {
  const removeDefault = (e) => {
    e.preventDefault();
  };
  return (
    <footer className="my-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 text-center">
            <h5>About FoodTopia</h5>
            <ul>
              <li>
                <a href="/#" onClick={removeDefault}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/#" onClick={removeDefault}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 text-center">
            <h5>Support</h5>
            <ul>
              <li>
                <a href="/#" onClick={removeDefault}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="/#" onClick={removeDefault}>
                  Help Desk
                </a>
              </li>
              <li>
                <a href="/#" onClick={removeDefault}>
                  Forums
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 text-center">
            <h5>Download Apps</h5>
            <ul>
              <li>
                <a href="/#" onClick={removeDefault}>
                  Google Play
                </a>
              </li>
              <li>
                <a href="/#" onClick={removeDefault}>
                  App Store
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="social-networks text-center">
        <a
          href="/#"
          style={{ display: "inline" }}
          className="twitter"
          onClick={removeDefault}
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          href="/#"
          style={{ display: "inline" }}
          className="facebook"
          onClick={removeDefault}
        >
          <i className="fa fa-facebook -f"></i>
        </a>
        <a
          href="/#"
          style={{ display: "inline" }}
          className="google"
          onClick={removeDefault}
        >
          <i className="fa fa-google-plus"></i>
        </a>
      </div>
      <div className="text-center footer-copyright">
        <p>Copyright &copy; 2020 FoodTopia</p>
      </div>
    </footer>
  );
}

export default Footer;
