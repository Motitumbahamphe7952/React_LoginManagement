import React from 'react'
import "../../css/crud.css";

const FormProduct = ({
    name,
    price,
    quantity,
    productimage,
    setName,
    setPrice,
    setQuantity,
    setProductImage,
    handleSubmit,
    buttonName,
}) => {
  return (
    <form className="create-user-form" onSubmit={handleSubmit}>
    <div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="productimage">ProductImage</label>
        <input
          type="text"
          id="productimage"
          value={productimage}
          onChange={(e) => {
            setProductImage(e.target.value);
          }}
        />
      </div>
    </div>
    <div>
      <button className="submit-btn" type="submit">
        {buttonName}
      </button>
    </div>
  </form>
  )
}

export default FormProduct