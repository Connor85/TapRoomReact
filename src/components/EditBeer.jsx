import React from "react";
import PropTypes from "prop-types";

function EditBeer(props) {
  let _name = props.keg.name;
  let _brewer = props.keg.brewer;
  let _description = props.keg.description;
  let _abv = props.keg.abv;
  let _price = props.keg.price;
  let _remaining = props.keg.remaining;

  function handleEditBeerFormSubmission(event) {
    event.preventDefault();

    props.handleFinishEditingBeer({
      name: _name.value,
      brewer: _brewer.value,
      description: _description.value,
      abv: _abv.value,
      price: _price.value,
      remaining: _remaining.value
    });
    _name.value = "";
    _brewer.value = "";
    _description.value = "";
    _abv.value = "";
    _price.value = "";
    _remaining.value = "";
  }

  return (
    <div>
      <style jsx>{`
        h1 {
          text-align: center;
          margin-top: 20px;
          margin-bottom: 40px;
        }

        input,
        textarea {
          display: block;
          margin-bottom: 20px;
          margin-left: 100px;
          width: 200px;
          height: 30px;
          border-radius: 5px;
        }

        button {
          border-radius: 5px;
          width: 70px;
          height: 30px;
          background-color: #f08080;
          margin-left: 100px;
        }
      `}</style>
      <div>
        <h1>Edit Beer</h1>
        <form onSubmit={handleEditBeerFormSubmission}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            defaultValue={_name}
            ref={input => {
              _name = input;
            }}
          />
          <input
            type="text"
            id="brewer"
            placeholder="brewer"
            defaultValue={_brewer}
            ref={input => {
              _brewer = input;
            }}
          />
          <textarea
            id="description"
            placeholder="Describe the Beer"
            defaultValue={_description}
            ref={input => {
              _description = input;
            }}
          />
          <input
            type="text"
            id="abv"
            placeholder="abv"
            defaultValue={_abv}
            ref={input => {
              _abv = input;
            }}
          />
          <input
            type="text"
            id="price"
            placeholder="price"
            defaultValue={_price}
            ref={input => {
              _price = input;
            }}
          />
          <input
            type="number"
            id="remaining"
            placeholder="remaining"
            defaultValue={_remaining}
            ref={input => {
              _remaining = input;
            }}
          />
          <button type="submit">Add!</button>
        </form>
      </div>
    </div>
  );
}

EditBeer.propTypes = {
  handleFinishEditingBeer: PropTypes.func
};

export default EditBeer;
