// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaShoppingCart,
//   FaUser,
//   FaTimes,
// } from "react-icons/fa";

// import "./Navbar.css";

// const MobileMenu = ({ menuOpen, setMenuOpen }) => {

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <div className={`mobile-menu ${menuOpen ? "show-menu" : ""}`}>

//       {/* Close Button */}
//       <div className="mobile-menu-top">
//         <h2 className="mobile-logo">Varuthathu</h2>

//         <button className="close-btn" onClick={closeMenu}>
//           <FaTimes />
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <div className="mobile-menu-links">

//         <Link to="/" onClick={closeMenu}>
//           Home
//         </Link>

//         <Link to="/products" onClick={closeMenu}>
//           Products
//         </Link>

//         <Link to="/ourstory" onClick={closeMenu}>
//           Our Story
//         </Link>

//         <Link to="/blogs" onClick={closeMenu}>
//           Blogs
//         </Link>

//         <Link to="/contactus" onClick={closeMenu}>
//           Contact Us
//         </Link>

//       </div>

//       {/* Bottom Icons */}
//       <div className="mobile-bottom-icons">

//         <Link to="/cart" onClick={closeMenu}>
//           <FaShoppingCart />
//           <span>Cart</span>
//         </Link>

//         <Link to="/login" onClick={closeMenu}>
//           <FaUser />
//           <span>Account</span>
//         </Link>

//       </div>

//     </div>
//   );
// };

// export default MobileMenu;




import React, {
  useContext,
} from "react";

import {
  Link,
  NavLink,
} from "react-router-dom";

import {
  FaTimes,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";

/* Context */
import {
  AuthContext,
} from "../../context/AuthContext";

import {
  CartContext,
} from "../../context/CartContext";

/* Styles */
import "./MobileMenu.css";

const MobileMenu = ({
  menuOpen,
  setMenuOpen,
}) => {

  /* =========================
      CONTEXT
  ========================== */

  const authContext =
    useContext(AuthContext);

  const cartContext =
    useContext(CartContext);

  /* Safety */
  const user =
    authContext?.user || null;

  const logout =
    authContext?.logout;

  const cartItems =
    cartContext?.cartItems || [];

  /* =========================
      CLOSE MENU
  ========================== */

  const closeMenu = () => {

    setMenuOpen(false);
  };

  /* =========================
      LOGOUT
  ========================== */

  const handleLogout = () => {

    if (logout) {

      logout();
    }

    closeMenu();
  };

  return (

    <div
      className={`mobile-menu ${
        menuOpen
          ? "active"
          : ""
      }`}
    >

      {/* =========================
          TOP BAR
      ========================== */}

      <div className="mobile-menu-top">

        <h2 className="mobile-logo">

          Varuthathu

        </h2>

        <button
          className="close-btn"
          onClick={closeMenu}
        >

          <FaTimes />

        </button>

      </div>

      {/* =========================
          NAVIGATION
      ========================== */}

      <nav className="mobile-nav-links">

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
          ACTIONS
      ========================== */}

      <div className="mobile-actions">

        {/* Cart */}

        <Link
          to="/cart"
          className="mobile-action-btn"
          onClick={closeMenu}
        >

          <FaShoppingCart />

          <span>

            Cart (
            {cartItems.length}
            )

          </span>

        </Link>

        {/* User */}

        {user ? (

          <>

            <Link
              to="/profile"
              className="mobile-action-btn"
              onClick={closeMenu}
            >

              <FaUser />

              <span>

                Profile

              </span>

            </Link>

            <button
              className="mobile-logout-btn"
              onClick={handleLogout}
            >

              Logout

            </button>

          </>

        ) : (

          <Link
            to="/login"
            className="mobile-action-btn"
            onClick={closeMenu}
          >

            <FaUser />

            <span>

              Login

            </span>

          </Link>

        )}

      </div>

    </div>
  );
};

export default MobileMenu;