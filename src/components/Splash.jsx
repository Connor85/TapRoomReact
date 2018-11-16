import React from "react";
import { Link } from "react-router-dom";

function Splash() {
  return (
    <div>
      <h1>Welcome to Connor's Tap Room</h1>
      <Link to="/beerlist">Beer List</Link>
    </div>
  );
}

export default Splash;
