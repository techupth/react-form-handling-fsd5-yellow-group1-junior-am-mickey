import { useState } from "react";

function ProductForm() {
  const [nameInputtext, setNameInputtext] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const infoForm = {
      name: nameInputtext,
      price: priceInput,
      image: imageInput,
      description: descriptionText,
    };
    alert(JSON.stringify(infoForm));
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {
              setNameInputtext(e.target.value);
            }}
            value={nameInputtext}
            required
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
            onChange={(e) => {
              setImageInput(e.target.value);
            }}
            value={imageInput}
            required
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
            onChange={(e) => {
              setPriceInput(e.target.value);
            }}
            value={priceInput}
            required
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
            onChange={(e) => {
              setDescriptionText(e.target.value);
            }}
            value={descriptionText}
            required
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
