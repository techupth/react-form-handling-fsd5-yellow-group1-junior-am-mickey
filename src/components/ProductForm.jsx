import { useState } from "react";

function ProductForm() {
  let [inputName, setInputName] = useState("");
  let [inputImageLink, setInputImageLink] = useState("");
  let [inputPrice, setInputPrice] = useState("");
  let [inputDescription, setInputDescription] = useState("");
  function handleCreate(event) {
    event.preventDefault();
    // const alertObject = {
    //   name: inputName,
    //   price: inputPrice,
    //   image: inputImageLink,
    //   description: inputDescription,
    // };
    alert(`
          "name": "${inputName}",
          "price": "${inputPrice}",
          "image": "${inputImageLink}",
          'description': "${inputDescription}"
          `);
  }
  return (
    <form className="post-form" onSubmit={handleCreate}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              setInputName(event.target.value);
            }}
            value={inputName}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {
              setInputImageLink(event.target.value);
            }}
            value={inputImageLink}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {
              setInputPrice(event.target.value);
            }}
            value={inputPrice}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {
              setInputDescription(event.target.value);
            }}
            value={inputDescription}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
