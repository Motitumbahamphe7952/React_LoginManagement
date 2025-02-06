import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { bUrl } from "../../constant";
import FormProduct from "./FormProduct";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [quantity, setQuantity] = useState("");
  let [productimage, setProductImage] = useState("");

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: name,
      price: price,
      quantity: quantity,
      productImage: productimage,
    };

    //hit api
    // url,method,data

    try {
      let result = await axios({
        url: `${bUrl}/product`,
        method: "post",
        data: data,
      });
      setName("");
      setPrice("");
      setQuantity("");
      setProductImage("");

      navigate("/product");
      
      // console.log(result.data.message);
      toast.success(result.data.message);
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
      <FormProduct
        name={name}
        price={price}
        quantity={quantity}
        productimage={productimage}
        setName={setName}
        setPrice={setPrice}
        setQuantity={setQuantity}
        setProductImage={setProductImage}
        handleSubmit={handleSubmit}
        buttonName="Create"
      ></FormProduct>
  );
};
export default CreateProduct;
