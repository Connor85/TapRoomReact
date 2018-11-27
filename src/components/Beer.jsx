import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Beer(props) {
  return (
    <tr class="row">
      <style jsx>{`
        .row {
          margin: 40px auto;
        }
        td {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
      <td>{props.name}</td>
      <td>{props.brewer}</td>
      <td>{props.abv}</td>
      <td>${props.price}</td>
    </tr>
  );
}

export default Beer;
