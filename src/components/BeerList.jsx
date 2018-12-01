import React from "react";
import PropTypes from "prop-types";
import Beer from "./Beer";

function BeerList(props) {
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
        <h1>Beer's on Tap</h1>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">brewer</th>
              <th scope="col">abv</th>
              <th scope="col">price</th>
              <th scope="col">Pints Left</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.beerList
              .sort((a, b) => b.price - a.price)
              .map((keg, index) => (
                <Beer
                  name={keg.name}
                  brewer={keg.brewer}
                  description={keg.description}
                  abv={keg.abv}
                  price={keg.price}
                  remaining={keg.remaining}
                  key={index}
                  index={index}
                  onSellingBeer={props.sellPint}
                  onDeletingBeer={props.deleteBeer}
                  onEditingBeer={props.onEditingBeer}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array
};
export default BeerList;
