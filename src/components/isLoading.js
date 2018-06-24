import React from "react";

const isLoading = (props, Component) => {
  is(!props.isLoading) {
    return "Loading..."
  }

  return () => <Component {...props}>;
};

export default isLoading;
