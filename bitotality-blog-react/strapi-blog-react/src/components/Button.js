import React, { Component, Fragment } from "react";

const Button = (props) => {

    const color = `btn btn-${props.color}`
  return (
    <Fragment>
      <button type="button" className={color}>
        Primary
      </button>
    </Fragment>
  );
};

export default Button;
