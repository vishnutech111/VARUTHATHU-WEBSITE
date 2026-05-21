// import React from "react";
// import { Link } from "react-router-dom";

// import {
//   FaInstagram,
//   FaFacebookF,
//   FaTwitter,
//   FaYoutube,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">

//       <div className="footer-container">

//         {/* Company Info */}
//         <div className="footer-section">

//           <h2 className="footer-logo">
//             Varuthathu <span>Co.</span>
//           </h2>

//           <p className="footer-description">
//             Traditional Kerala snacks made with care, consistency,
//             and authentic taste. Still simple. Still honest.
//             Just snacks. Done right.
//           </p>

//           <div className="footer-socials">

//             <a href="/">
//               <FaInstagram />
//             </a>

//             <a href="/">
//               <FaFacebookF />
//             </a>

//             <a href="/">
//               <FaTwitter />
//             </a>

//             <a href="/">
//               <FaYoutube />
//             </a>

//           </div>

//         </div>

//         {/* Quick Links */}
//         <div className="footer-section">

//           <h3>Quick Links</h3>

//           <ul>

//             <li>
//               <Link to="/">Home</Link>
//             </li>

//             <li>
//               <Link to="/products">Products</Link>
//             </li>

//             <li>
//               <Link to="/ourstory">Our Story</Link>
//             </li>

//             <li>
//               <Link to="/blogs">Blogs</Link>
//             </li>

//             <li>
//               <Link to="/contactus">Contact Us</Link>
//             </li>

//           </ul>

//         </div>

//         {/* Categories */}
//         <div className="footer-section">

//           <h3>Products</h3>

//           <ul>

//             <li>
//               <Link to="/products">
//                 Banana Chips
//               </Link>
//             </li>

//             <li>
//               <Link to="/products">
//                 Tapioca Chips
//               </Link>
//             </li>

//             <li>
//               <Link to="/products">
//                 Jackfruit Chips
//               </Link>
//             </li>

//             <li>
//               <Link to="/products">
//                 Mixture
//               </Link>
//             </li>

//             <li>
//               <Link to="/products">
//                 Kerala Snacks
//               </Link>
//             </li>

//           </ul>

//         </div>

//         {/* Contact */}
//         <div className="footer-section">

//           <h3>Contact</h3>

//           <div className="contact-item">
//             <FaPhoneAlt />
//             <span>+91 77363 52517</span>
//           </div>

//           <div className="contact-item">
//             <FaEnvelope />
//             <span>support@varuthathu.com</span>
//           </div>

//           <div className="contact-item">
//             <FaMapMarkerAlt />
//             <span>Kerala, India</span>
//           </div>

//         </div>

//       </div>

//       {/* Bottom Footer */}
//       <div className="footer-bottom">

//         <p>
//           © 2026 Varuthathu Co. All Rights Reserved.
//         </p>

//       </div>

//     </footer>
//   );
// };

// export default Footer;

import React from "react";

import {
  Link,
} from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

/* Styles */
import "./Footer.css";

const Footer = () => {

  const currentYear =
    new Date().getFullYear();

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* =========================
            BRAND
        ========================== */}

        <div className="footer-column">

          <h2 className="footer-logo">

            Varuthathu

          </h2>

          <p className="footer-text">

            Authentic Kerala snacks made
            with quality ingredients and
            traditional taste people love.

          </p>

          {/* Social Links */}

          <div className="footer-socials">

            <a
              href="/"
              className="social-icon"
            >

              <FaFacebookF />

            </a>

            <a
              href="/"
              className="social-icon"
            >

              <FaInstagram />

            </a>

            <a
              href="/"
              className="social-icon"
            >

              <FaTwitter />

            </a>

            <a
              href="/"
              className="social-icon"
            >

              <FaYoutube />

            </a>

          </div>

        </div>

        {/* =========================
            QUICK LINKS
        ========================== */}

        <div className="footer-column">

          <h3 className="footer-title">

            Quick Links

          </h3>

          <ul className="footer-links">

            <li>
              <Link to="/">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products">
                Products
              </Link>
            </li>

            <li>
              <Link to="/ourstory">
                Our Story
              </Link>
            </li>

            <li>
              <Link to="/blogs">
                Blogs
              </Link>
            </li>

            <li>
              <Link to="/contactus">
                Contact Us
              </Link>
            </li>

          </ul>

        </div>

        {/* =========================
            CUSTOMER SUPPORT
        ========================== */}

        <div className="footer-column">

          <h3 className="footer-title">

            Customer Support

          </h3>

          <ul className="footer-links">

            <li>
              <Link to="/profile">
                My Account
              </Link>
            </li>

            <li>
              <Link to="/cart">
                Cart
              </Link>
            </li>

            <li>
              <Link to="/checkout">
                Checkout
              </Link>
            </li>

            <li>
              <Link to="/login">
                Login
              </Link>
            </li>

            <li>
              <Link to="/signup">
                Signup
              </Link>
            </li>

          </ul>

        </div>

        {/* =========================
            CONTACT
        ========================== */}

        <div className="footer-column">

          <h3 className="footer-title">

            Contact Info

          </h3>

          <div className="footer-contact">

            <p>

              <FaPhoneAlt />

              <span>

                +91 98765 43210

              </span>

            </p>

            <p>

              <FaEnvelope />

              <span>

                support@varuthathu.com

              </span>

            </p>

            <p>

              <FaMapMarkerAlt />

              <span>

                Kerala, India

              </span>

            </p>

          </div>

        </div>

      </div>

      {/* =========================
          BOTTOM
      ========================== */}

      <div className="footer-bottom">

        <p>

          © {currentYear}
          {" "}
          Varuthathu.
          All Rights Reserved.

        </p>

      </div>

    </footer>
  );
};

export default Footer;