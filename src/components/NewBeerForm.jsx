import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewBeerForm(props) {
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({
      name: _name.value,
      brewer: _brewer.value,
      description: _description.value,
      abv: _abv.value,
      price: _price.value,
      remaining: 124,
      id: v4()
    });
    _name.value = "";
    _brewer.value = "";
    _description.value = "";
    _abv.value = "";
    _price.value = "";
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
        <h1>Add a New Beer</h1>
        <form onSubmit={handleNewBeerFormSubmission}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            ref={input => {
              _name = input;
            }}
          />
          <input
            type="text"
            id="brewer"
            placeholder="brewer"
            ref={input => {
              _brewer = input;
            }}
          />
          <textarea
            id="description"
            placeholder="Describe the Beer"
            ref={input => {
              _description = input;
            }}
          />
          <input
            type="number"
            id="abv"
            placeholder="abv"
            ref={input => {
              _abv = input;
            }}
          />
          <input
            type="text"
            id="price"
            placeholder="price"
            ref={input => {
              _price = input;
            }}
          />
          <button type="submit">Add!</button>
        </form>
      </div>
    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;
