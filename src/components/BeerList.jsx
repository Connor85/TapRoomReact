import React from "react";
import PropTypes from "prop-types";
import Beer from "./Beer";
import Navigation from "./Navigation";

const masterKegList = [
  {
    name: "Ruby Zozzle",
    brewer: "Hi-Wheel",
    description: "Sparkling Wine & Grapefruit",
    abv: "6.8%",
    price: "7",
    remaining: "20"
  },
  {
    name: "Tart N Juicy",
    brewer: "Epic",
    description: "Sour IPA",
    abv: "4.5%",
    price: "6",
    remaining: "60"
  },
  {
    name: "Hamm's",
    brewer: "Miller/Coors",
    description: "American Lager",
    abv: "4.7%",
    price: "3",
    remaining: "65"
  },
  {
    name: "Prismatic",
    brewer: "Ninkasi",
    description: "Juicy IPA",
    abv: "5.9%",
    price: "6",
    remaining: "75"
  },
  {
    name: "Juicy Haze",
    brewer: "New Belgium",
    description: "India Pale Ale",
    abv: "7.5%",
    price: "6",
    remaining: "18"
  },
  {
    name: "8 Hop",
    brewer: "New Belgium",
    description: "Pale Ale",
    abv: "5.5%",
    price: "6",
    remaining: "58"
  }
];

function BeerList() {
  return (
    <div>
      <style jsx>{`
        h1 {
          margin-top: 20px;
          font-weight: bold;
          font-size: 50px;
          text-align: center;
        }
        th {
          font-size: 30px;
          font-weight: bold;
          padding-right: 40px;
          padding-left: 40px;
        }
        table {
          margin: 40px auto;
          border-bottom: 2px solid black;
        }
      `}</style>
      <div class="container">
        <Navigation />
        <h1>Beer's on Tap</h1>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">brewer</th>
              <th scope="col">abv</th>
              <th scope="col">price</th>
            </tr>
          </thead>
          <tbody>
            {masterKegList.map((keg, index) => (
              <Beer
                name={keg.name}
                brewer={keg.brewer}
                description={keg.description}
                abv={keg.abv}
                price={keg.price}
                remaining={keg.remaining}
                key={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BeerList;
