import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState([]);
  const params = useParams();
  const fetchProductDetails = async () => {
    await fetch(`http://localhost:3500/items/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  };
  useEffect(() => {
    fetchProductDetails();
  }, []);
  return (
    <div className="product-detils container">
      <div class="card">
        <img
          class="card-img-top"
          src={productDetails.image}
          alt="Card image cap"
        />
        <div class="card-body my-4">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/productList" href="#" class="btn btn-primary">
            Back To ProductList
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
