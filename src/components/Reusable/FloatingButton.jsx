import React from "react";
import { Button, lightColors } from "react-floating-action-button";
import { Link } from "react-router-dom";

const FloatingButton = () => {
  return (
    <div className="floating-home">
      <Link to="/home">
        <Button
          tooltip="Home"
          styles={{
            backgroundColor: "black",
            color: lightColors.white,
            width: "40px",
            height: "40px",
          }}
          icon="fa fa-home"
        />
      </Link>
    </div>
  );
};

export default FloatingButton;
