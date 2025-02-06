import axios from "axios";
import React, { useEffect, useState } from "react";
import { bUrl } from "../../constant";
import "../../css/crud.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ReadAllProduct = () => {
  let [product, setProduct] = useState([]);

  let navigate = useNavigate();

  const getData = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/product`,
        method: "get",
      });

      setProduct(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const handleView = (id) => {
    return (e) => {
      navigate(`/product/${id}`);
    };
  };

  const handleDelete = (id) => {
    return async (e) => {
      try {
        let result = await axios({
          url: `${bUrl}/product/${id}`,
          method: "delete",
        });
        //deletes the data in the database
        getData();
        //reloads the data from the backend to frontend and rerenders the page
        // invalidation

        toast.success(result.data.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  };

  const handleUpdate = (id) => (e) => {
    navigate(`/product/update/${id}`);
  };

  console.log(product);

  return (
    <div>
      <h2>products</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Product Image</th>
            <th>BUTTON</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.productImage}</td>

              <td>
                <button onClick = {handleView(item._id)}>View</button>
                <button onClick= {handleUpdate(item._id)}>Update</button>
                <button onClick= {handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadAllProduct;
