
import axios from "axios";
import React, { useEffect, useState } from "react";
import { bUrl } from "../../constant";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import FormProduct from "./FormProduct";

const UpdateProduct = () => {
  let [name, setName] = useState("");
  let [price, setprice] = useState("");
  let [quantity, setquantity] = useState("");
  let [productImage, setproductImage] = useState("");

  let params = useParams();
  let navigate = useNavigate();

  const getData = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/product/${params.id}`,
        method: "get",
      });
      let data = result.data.result;
      setName(data.name);
      setprice(data.price);
      setquantity(data.quantity);
      setproductImage(data.productImage);

    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: name,
      price: price,
      quantity: quantity,
      productImage: productImage,
    };

    //hit api

    try {
      let result = await axios({
        url: `${bUrl}/product/${params.id}`,
        method: "patch",
        data: data,
      });

      navigate(`/product/${params.id}`);

      toast.success(result.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <FormProduct
    name={name}
    price={price}
    quantity={quantity}
    productimage={productImage}
    setName={setName}
    setPrice={setprice}
    setQuantity={setquantity}
    setProductImage={setproductImage}
    handleSubmit={handleSubmit}
    buttonName="Update"
    ></FormProduct>
  );
};

export default UpdateProduct;
