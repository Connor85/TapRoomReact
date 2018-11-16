import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Beer(props) {
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
}

export default Beer;
