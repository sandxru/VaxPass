import React from "react";
function Login(props) {
  return (
    <div
      style={{
        margin: "0 auto",
        paddingTop: "45vh",
      }}
    >
      {" "}
      <center>
        <img id="logo" src="./logo.png" width={'150px'} alt="vaxpass-logo" />
        <h5 id="h5">Connect a Metamask Wallet to Log In</h5>
      </center>
    </div>
  );
}

export default Login;
