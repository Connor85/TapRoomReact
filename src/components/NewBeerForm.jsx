import React from "react";

function NewBeerForm() {
  return (
    <div>
      <style jsx>{`
        h1 {
          text-align: center;
          margin-top: 20px;
          margin-bottom: 20px;
        }

        input,
        textarea {
          display: block;
          margin-bottom: 20px;
          margin-left: 100px;
          width: 200px;
          height: 30px;
        }
      `}</style>
      <div>
        <h1>Add a New Beer</h1>
        <form>
          <input type="text" id="name" placeholder="Names" />
          <input type="text" id="brewer" placeholder="brewer" />
          <textarea id="description" placeholder="Describe the Beer" />
          <input type="number" id="abv" placeholder="abv" />
          <input type="text" id="price" placeholder="price" />
          <button type="submit">Add!</button>
        </form>
      </div>
    </div>
  );
}

export default NewBeerForm;
