import React from "react";

function Beer(props) {
  // function handleDownVoteClick() {
  //   props.onSellingBeer(props.beer);
  // }
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
      <td>
        {props.remaining}
        <button onClick={props.onSellingBeer}>Sell Pint</button>
      </td>
    </tr>
  );
}

export default Beer;
