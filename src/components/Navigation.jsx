import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <style jsx>{`
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: #333;
        }

        li {
          float: left;
        }

        ul:first-child {
          display: block;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }

        /* Change the link color to #111 (black) on hover */
        li a:hover {
          background-color: #111;
        }
      `}</style>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beerlist">Beer List</Link>
        </li>
        <li>
          <Link to="/newbeer">Add a Beer</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
