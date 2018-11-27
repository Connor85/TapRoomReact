import React from "react";
import { Link } from "react-router-dom";

function Splash() {
  return (
    <div>
      <h1 className="jumbotron">Welcome to Connor's Tap Room</h1>
      <Link to="/beerlist">Beer List</Link> |{" "}
      <Link to="/newbeer">Add a Beer</Link>
    </div>
  );
}

export default Splash;
