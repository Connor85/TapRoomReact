import React from "react";

function Beer(props) {
  function handleSellingBeer() {
    props.onSellingBeer(props.index);
  }
  function handleDeletingBeer() {
    props.onDeletingBeer(props.index);
  }
  function handleEditingBeer() {
    props.onEditingBeer(props.index);
  }
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

        button {
          margin: 10px;
        }
      `}</style>
      <td>{props.name}</td>
      <td>{props.brewer}</td>
      <td>{props.abv}</td>
      <td>${props.price}</td>
      <td>
        {props.remaining}
        <button className="btn btn-success" onClick={handleSellingBeer}>
          Sell Pint
        </button>
        <button className="btn btn-warning" onClick={handleDeletingBeer}>
          Delete
        </button>
        <button className="btn btn-info" onClick={handleEditingBeer}>
          Edit
        </button>
      </td>
    </tr>
  );
}

export default Beer;
