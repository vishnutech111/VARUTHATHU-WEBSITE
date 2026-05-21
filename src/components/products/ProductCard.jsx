// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaStar,
//   FaShoppingCart,
//   FaHeart,
// } from "react-icons/fa";

// import "./Product.css";

// const ProductCard = ({ product }) => {

//   const {
//     _id,
//     name,
//     image,
//     price,
//     category,
//     ratings,
//   } = product;

//   return (
//     <div className="product-card">

//       {/* Wishlist */}
//       <button className="wishlist-btn">
//         <FaHeart />
//       </button>

//       {/* Product Image */}
//       <Link
//         to={`/products/${_id}`}
//         className="product-image"
//       >
//         <img src={image} alt={name} />
//       </Link>

//       {/* Product Details */}
//       <div className="product-details">

//         <span className="product-category">
//           {category}
//         </span>

//         <Link
//           to={`/products/${_id}`}
//           className="product-name"
//         >
//           {name}
//         </Link>

//         {/* Rating */}
//         <div className="product-rating">

//           <FaStar className="star-icon" />

//           <span>
//             {ratings || 4.5}
//           </span>

//         </div>

//         {/* Price + Cart */}
//         <div className="product-bottom">

//           <h3 className="product-price">
//             ₹{price}
//           </h3>

//           <button className="add-cart-btn">

//             <FaShoppingCart />

//             Add

//           </button>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default ProductCard;



import React, {
  useContext,
} from "react";

import {
  Link,
} from "react-router-dom";

// import {
//   FaShoppingCart,
//   FaStar,
// } from "react-icons/fa";

/* Context */
import {
  CartContext,
} from "../../context/CartContext";

/* Styles */
import "./Product.css";

const ProductCard = ({
  product,
}) => {

  /* =========================
      CONTEXT
  ========================== */

  const cartContext =
    useContext(CartContext);

  const addToCart =
    cartContext?.addToCart;

  /* =========================
      SAFETY CHECK
  ========================== */

  if (!product) {

    return null;
  }

  /* =========================
      DATA
  ========================== */

  const {
    _id,
    name,
    image,
    price,
    category,
    rating,
  } = product;

  /* =========================
      ADD TO CART
  ========================== */

  const handleAddToCart =
    () => {

      if (addToCart) {

        addToCart(product);
      }
    };

  return (

    <div className="product-card">

      {/* =========================
          IMAGE
      ========================== */}

      <Link
        to={`/products/${_id}`}
        className="product-image-wrapper"
      >

        <img
          src={
            image ||
            "/images/default-product.jpg"
          }
          alt={name}
          className="product-image"
        />

      </Link>

      {/* =========================
          CONTENT
      ========================== */}

      <div className="product-content">

        {/* Category */}

        <span className="product-category">

          {category || "Snacks"}

        </span>

        {/* Name */}

        <Link
          to={`/products/${_id}`}
          className="product-name"
        >

          {name}

        </Link>

        {/* Rating */}

        <div className="product-rating">

          {/* <FaStar /> */}

          <span>

            {rating || 4.5}

          </span>

        </div>

        {/* Price + Cart */}

        <div className="product-bottom">

          <h3 className="product-price">

            ₹{price}

          </h3>

          <button
            className="add-cart-btn"
            onClick={handleAddToCart}
          >

            {/* <FaShoppingCart /> */}

            Add

          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;