import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar  bg-white px-5">
        <div className="container-fluid">
          <h1 className="text-primary">Learning DSA </h1>

          <div className="d-flex list-unstyled fs-4">
            <li className="me-5 ">
              <a className="text-decoration-none " href="/home">
                Home
              </a>
            </li>
            <li className="me-5">
              <a className="text-decoration-none " href="/about">
                About
              </a>
            </li>
            <li className="me-5">
              <a className="text-decoration-none " href="/contact">
                Contact
              </a>
            </li>
          </div>
          <img
            src="https://images.unsplash.com/photo-1602024290243-cb6c7609dd6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Logo"
            width="90"
            height="100"
            className="d-inline-block align-text-top rounded rounded-circle"
          />
        </div>
      </nav>
      <hr width="100%" color="gray" />
    </>
  );
};

export default Header;
