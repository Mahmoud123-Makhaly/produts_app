import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = ({ fetchAllProducts }) => {
  const [product, setProduct] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const params = useParams();
  const fetchProductDetails = async () => {
    await fetch(`http://localhost:3500/items/${params.id}`).then((res) =>
      res.json().then((data) => {
        setProduct(data);
        fetchAllProducts();
      })
    );
  };
  useEffect(() => {
    fetchProductDetails();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/productList");
    const newProduct = {
      title,
      price,
    };
    fetch(`http://localhost:3500/items/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="edit-product">
      <div className="container AddProduct">
        <form onSubmit={handleSubmit}>
          <div className="form-group my-4">
            <label className="my-1" for="exampleInputEmail1">
              Edit Product Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Edit Product Title"
              defaultValue={product.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Edit Price</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Edit Price"
              defaultValue={product.price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary my-3">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
