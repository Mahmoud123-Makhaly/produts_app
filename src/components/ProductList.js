import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductList = ({ setCart, fetchAllProducts, allproducts }) => {
  //handle delete function
  const handleDelete = async (id) => {
    Swal.fire({
      title: `Are you sure to Delete Product #${id}`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3500/items/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => fetchAllProducts());
      }
    });
  };
  const handeleSortByHigher = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        allproducts.sort((a, b) => b.price - a.price);

        Swal.fire("Saved!", "", "success");
      }
    });
  };
  const handeleSortByLower = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        allproducts.sort((a, b) => a.price - b.price);
      }
    });
  };
  return (
    <div className="product-list">
      <div className="container">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/addproduct" className="btn btn-success my-2 ms-3">
            Add New Products
          </Link>
          <div className="product-list-btns">
            <button
              onClick={handeleSortByHigher}
              className="btn btn-info mx-3 my-1"
            >
              sort by higher price
            </button>
            <button onClick={handeleSortByLower} className="btn btn-info mx-3">
              sort by Lower price
            </button>
          </div>
        </div>
        <table className="table table-striped my-2">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Price</th>
              <th scope="col">Title</th>
              <th scope="col" style={{ textAlign: "center" }}>
                actions
              </th>
            </tr>
          </thead>
          <tbody>
            {allproducts.length ? (
              allproducts.map((item) => {
                return (
                  <tr key={item.id}>
                    <th scope="col">{item.id}</th>
                    <th scope="col">{item.price} $</th>
                    <th scope="col">{item.title.slice(0, 15)} ...</th>
                    <th scope="col" className="actions">
                      <Link to={`/product/${item.id}`} className="btn btn-info">
                        View
                      </Link>
                      <button
                        className="btn btn-danger mx-1 delete"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                      <Link
                        to={`/Edit/${item.id}`}
                        className="btn btn-primary edit"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => setCart((prev) => prev + 1)}
                        type="button"
                        class="btn btn-dark addToCart mx-1"
                      >
                        Add To cart
                      </button>
                    </th>
                  </tr>
                );
              })
            ) : (
              <div
                style={{ width: "100%" }}
                className="alert alert-danger text-center my-3"
                role="alert"
              >
                No Data Found
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
