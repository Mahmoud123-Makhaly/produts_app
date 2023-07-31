import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [homeProducts, setHomeProducts] = useState([]);
  const fetchAllProducts = async () => {
    await fetch(`http://localhost:3500/topRated`)
      .then((res) => res.json())
      .then((data) => setHomeProducts(data));
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <div className="container homePage">
      <h2 style={{ color: "#fd5959" }} className="text-center">
        Top Rated Products
      </h2>
      <div className="row">
        {homeProducts.map((item) => {
          return (
            <div className="col-md-4">
              {" "}
              <div className="card my-3">
                <img
                  className="card-img-top"
                  src={item.image}
                  alt={item.title}
                />
                <div className="card-body">
                  <p
                    style={{ color: "#fd5959" }}
                    className="card-text text-center"
                  >
                    <h4>{item.category}</h4>
                    <p>{item.title.slice(0, 15)}...</p>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
