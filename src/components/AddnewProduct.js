import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddnewProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || price === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong , you must filling up the inputs!",
      });
      return;
    }
    navigate("/productList");
    const newProduct = {
      title,
      price,
    };

    fetch("http://localhost:3500/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    //sweet alert
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "New Product Added",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="container AddProduct">
      <form onSubmit={handleSubmit}>
        <div className="form-group my-4">
          <label className="my-1" for="exampleInputEmail1">
            Enter Product Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Price</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary my-3">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddnewProduct;
