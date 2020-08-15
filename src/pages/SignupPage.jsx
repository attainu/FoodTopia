import React from "react";
import LoginForm from "../components/LoginForm";
const SignupPage = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  scrollTop();
  return (
    <div style={{ paddingTop: "200px", overflow: "scroll", height: "70vh" }}>
      <LoginForm />
    </div>
  );
};

export default SignupPage;
