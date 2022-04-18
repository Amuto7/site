import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  let css ={
    width : '10px',height: '10px',borderRadius: '50%',margin: '0 10px 0 2px',cursor:'pointer'
  }
  let colorCss ={
    backgroundColor: props.colorSet,
    color: props.colorSett
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-`} style={colorCss}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={colorCss}>
            Navbar
          </a>
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
                <Link className="nav-link active" aria-current="page" to="/" style={colorCss}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={colorCss}>
                  Sign Up
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={colorCss}
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/Travel">
                      Travel
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
            </ul>
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      {/* <label htmlFor="bb">Blue mode</label>
      <div style={css} onClick={props.bmode} id='bb'></div>
      <div style={css} id='myp' onClick={props.gmode}></div>
      <label htmlFor="myp">Green mode</label> */}

            <div className={`form-check form-switch text-`} style={colorCss}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={() => props.funT('bark')}
                
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
               Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
