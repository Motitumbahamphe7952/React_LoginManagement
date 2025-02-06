import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bUrl } from "../../constant";

const ProductDetails = () => {
  let params = useParams();
  let [product, setProduct] = useState({});

  const getData = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/product/${params.id}`,
        method: "get",
      });

      setProduct(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(product);

  return (
    <div>
      <br />
      ProductDetails
      <br />
      <div
        style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
      >
        <p>Name is {product.name}</p>
        <p>Price is {product.price}</p>
        <p>Quantity is {product.quantity}</p>
        <p>ProductImage is {product.productImage}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
