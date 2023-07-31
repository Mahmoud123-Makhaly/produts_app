import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = ({ cart, search, setSearch, allproducts, setAllProducts }) => {
  //   const handleSearch = (e) => {
  //   const newProdusts = allproducts.filter((item)=>{
  // return ()
  //   })
  //   };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const newProdusts = allproducts.filter((product) =>
    //   product.title.toLowerCase().includes(search.toLowerCase())
    // );
    // setAllProducts(newProdusts);
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container">
        <Link
          to="/"
          className="navbar-brand"
          href="#"
          style={{ color: "#fd5959 " }}
        >
          Product List
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Home Page
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/productList"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Product List
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              defaultValue={search}
              onChange={handleSearch}
            />
            <p className="cart">
              <AiOutlineBell />
              <span>{cart}</span>
            </p>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
