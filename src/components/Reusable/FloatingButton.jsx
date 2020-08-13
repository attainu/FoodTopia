import React from "react";
import {
  Container,
  Button,
  lightColors,
  darkColors,
} from "react-floating-action-button";
import { Link } from "react-router-dom";

const FloatingButton = () => {
  return (
    <div className="floating-home">
      <Link to="/home">
        <Button
          tooltip="Home"
          styles={{
            backgroundColor: "coral",
            color: lightColors.white,
          }}
          icon="fa fa-home"
        />
      </Link>
    </div>
  );
};

export default FloatingButton;