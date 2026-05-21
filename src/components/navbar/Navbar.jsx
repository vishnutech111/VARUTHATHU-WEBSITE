// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaShoppingCart,
//   FaUser,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="navbar">
//       <div className="navbar-container">

//         {/* Logo */}
//         <Link to="/" className="logo">
//           <span>Varuthathu</span>
//         </Link>

//         {/* Desktop Menu */}
//         <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
//           <Link to="/" onClick={toggleMenu}>Home</Link>
//           <Link to="/products" onClick={toggleMenu}>Products</Link>
//           <Link to="/ourstory" onClick={toggleMenu}>Our Story</Link>
//           <Link to="/blogs" onClick={toggleMenu}>Blogs</Link>
//           <Link to="/contactus" onClick={toggleMenu}>Contact Us</Link>

//           {/* Mobile Icons */}
//           <div className="mobile-icons">
//             <Link to="/cart" onClick={toggleMenu}>
//               <FaShoppingCart />
//             </Link>

//             <Link to="/login" onClick={toggleMenu}>
//               <FaUser />
//             </Link>
//           </div>
//         </nav>

//         {/* Right Icons */}
//         <div className="nav-icons">

//           <Link to="/cart" className="icon">
//             <FaShoppingCart />
//             <span className="cart-count">0</span>
//           </Link>

//           <Link to="/login" className="icon">
//             <FaUser />
//           </Link>

//         </div>

//         {/* Mobile Menu Button */}
//         <div className="menu-toggle" onClick={toggleMenu}>
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </div>

//       </div>
//     </header>
//   );
// };

// export default Navbar;




















import React, {
  useContext,
  useState,
} from "react";

import {
  Link,
  NavLink,
} from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

/* Context */
import {
  CartContext,
} from "../../context/CartContext";

import {
  AuthContext,
} from "../../context/AuthContext";

/* Styles */
import "./Navbar.css";

const Navbar = () => {

  const [menuOpen,
    setMenuOpen] =
    useState(false);

  /* =========================
      CONTEXT
  ========================== */

  const cartContext =
    useContext(CartContext);

  const authContext =
    useContext(AuthContext);

  /* Safety */
  const cartItems =
    cartContext?.cartItems || [];

  const user =
    authContext?.user || null;

  const logout =
    authContext?.logout;

  /* =========================
      TOGGLE MENU
  ========================== */

  const toggleMenu = () => {

    setMenuOpen(
      !menuOpen
    );
  };

  /* =========================
      CLOSE MENU
  ========================== */

  const closeMenu = () => {

    setMenuOpen(false);
  };

  return (

    <header className="navbar">

      <div className="navbar-container">

        {/* =========================
            LOGO
        ========================== */}

        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >

          Varuthathu

        </Link>

        {/* =========================
            NAV LINKS
        ========================== */}

        <nav
          className={`nav-links ${
            menuOpen
              ? "active"
              : ""
          }`}
        >

          <NavLink
            to="/"
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            onClick={closeMenu}
          >
            Products
          </NavLink>

          <NavLink
            to="/ourstory"
            onClick={closeMenu}
          >
            Our Story
          </NavLink>

          <NavLink
            to="/blogs"
            onClick={closeMenu}
          >
            Blogs
          </NavLink>

          <NavLink
            to="/contactus"
            onClick={closeMenu}
          >
            Contact Us
          </NavLink>

        </nav>

        {/* =========================
            RIGHT SIDE
        ========================== */}

        <div className="nav-right">

          {/* Cart */}

          <Link
            to="/cart"
            className="icon-btn"
          >

            <FaShoppingCart />

            <span className="cart-count">

              {cartItems.length}

            </span>

          </Link>

          {/* User */}

          {user ? (

            <div className="user-area">

              <Link
                to="/profile"
                className="icon-btn"
              >

                <FaUser />

              </Link>

              <button
                className="logout-btn"
                onClick={logout}
              >

                Logout

              </button>

            </div>

          ) : (

            <Link
              to="/login"
              className="icon-btn"
            >

              <FaUser />

            </Link>

          )}

          {/* Mobile Toggle */}

          <button
            className="menu-toggle"
            onClick={toggleMenu}
          >

            {menuOpen
              ? <FaTimes />
              : <FaBars />}

          </button>

        </div>

      </div>

    </header>
  );
};

export default Navbar;




