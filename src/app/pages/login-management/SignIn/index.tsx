import React from "react";
import { SignInPageUI } from "./SignInUI";
import LoginUI from "./LoginUI";

const SignInPage = () => {
  console.log("SignInPage");
  return (
    <React.Fragment>
      <SignInPageUI />

      {/* <LoginUI /> */}
    </React.Fragment>
  );
};

export default SignInPage;
