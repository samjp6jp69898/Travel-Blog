import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self")
  }

  return (
    <>
      <nav className={color ? "navbar navbar-sc" : "navbar"}>
        <div className="navbar-container">
          <Link
            to="/"
            className={color ? "navbar-logo navbar-logo-sc" : "navbar-logo"}
            onClick={closeMobileMenu}
          >
            ταξίδι
            <i class="fa-brands fa-avianex"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {user ? (
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/home"
                  className={color ? "nav-links nav-links-sc" : "nav-links"}
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={color ? "nav-links nav-links-sc" : "nav-links"}
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/adventure"
                  className={color ? "nav-links nav-links-sc" : "nav-links"}
                  onClick={closeMobileMenu}
                >
                  Adventure
                </Link>
              </li>

              <li className="nav-item">
                <img src={user.photos[0].value} alt="" className="avatar"></img>
              </li>
              <li className="nav-item">
                <p className="noncursor">{user.displayName}</p>
              </li>
              <li className="nav-item" onClick={logout}>
                <Link
                  to="/home"
                  className={color ? "nav-links nav-links-sc" : "nav-links"}
                  onClick={closeMobileMenu}
                >
                  Log out
                </Link>
              </li>
            </ul>
          ) : (
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/home"
                  className={color ? "nav-links nav-links-sc" : "nav-links"}
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={color ? "nav-links nav-links-sc" : "nav-links"}
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/adventure"
                  className={color ? "nav-links nav-links-sc" : "nav-links"}
                  onClick={closeMobileMenu}
                >
                  Adventure
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/login"
                  className={color ? "nav-links nav-links-sc" : "nav-links"}
                  onClick={closeMobileMenu}
                >
                  <i class="fa-solid fa-user"></i>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
