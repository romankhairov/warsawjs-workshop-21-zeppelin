import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => ({
  username: user.username,
});

const isLoading = (Component) => connect(mapStateToProps)(({username, ...props}) => (
  username !== "" ? <Component {...props} /> : <Redirect to="/" />
));

export default isLoggedIn;
