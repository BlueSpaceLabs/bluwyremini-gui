import React from "react";
import useAuthentication from "../../../useAuthentication";

const LoginUI = () => {
  const {
    inputUserName,
    setInputUserName,
    inputUserPassword,
    setInputUserPassword,
    handleLoginClick,
  } = useAuthentication();

  return (
    <React.Fragment>
      <h1>Login</h1>
      <div>
        <label style={{ marginRight: "10px" }}>Username:</label>
        <input
          type="text"
          value={inputUserName}
          onChange={(e) => setInputUserName(e.target.value)}
          style={{ padding: "5px", marginRight: "20px" }}
        />
      </div>
      <div>
        <label style={{ marginRight: "10px" }}>Password:</label>
        <input
          type="password"
          value={inputUserPassword}
          onChange={(e) => setInputUserPassword(e.target.value)}
          style={{ padding: "5px", marginRight: "20px" }}
        />
      </div>
      <br />
      <button
        onClick={handleLoginClick}
        style={{ padding: "10px", fontSize: "16px" }}
      >
        Login
      </button>
    </React.Fragment>
  );
};

export default LoginUI;
