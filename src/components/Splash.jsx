import React from "react";
import { Link } from "react-router-dom";

function Splash() {
  return (
    <div>
      <style jsx>{`
        h1 {
          margin-top: 20px;
          font-weight: bold;
          font-size: 50px;
          text-align: center;
        }
      `}</style>
      <h1 className="jumbotron">Welcome to Connor's Tap Room</h1>
    </div>
  );
}

export default Splash;
