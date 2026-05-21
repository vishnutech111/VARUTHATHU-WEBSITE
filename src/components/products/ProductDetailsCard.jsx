// import React, { useState } from "react";
// import {
//   FaStar,
//   FaShoppingCart,
//   FaHeart,
//   FaMinus,
//   FaPlus,
// } from "react-icons/fa";

// import "./Product.css";

// /* Sample Product Image */
// import BananaChips from "../../assets/products/banana-chips.png";

// const ProductDetailsCard = () => {

//   const [quantity, setQuantity] = useState(1);

//   const increaseQty = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQty = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   /* Dummy Product Data */
//   const product = {
//     name: "Classic Banana Chips",
//     image: BananaChips,
//     price: 120,
//     category: "Banana Chips",
//     ratings: 4.8,
//     reviews: 128,
//     description:
//       "Crispy traditional Kerala banana chips made in small batches using premium coconut oil. Lightly salted and perfectly crunchy for an authentic snacking experience.",
//     stock: true,
//   };

//   return (
//     <section className="product-details-section">

//       <div className="product-details-container">

//         {/* Product Image */}
//         <div className="details-image">

//           <img
//             src={product.image}
//             alt={product.name}
//           />

//         </div>

//         {/* Product Info */}
//         <div className="details-content">

//           <span className="details-category">
//             {product.category}
//           </span>

//           <h1>
//             {product.name}
//           </h1>

//           {/* Ratings */}
//           <div className="details-rating">

//             <FaStar className="details-star" />

//             <span>
//               {product.ratings}
//             </span>

//             <p>
//               ({product.reviews} Reviews)
//             </p>

//           </div>

//           {/* Price */}
//           <h2 className="details-price">
//             ₹{product.price}
//           </h2>

//           {/* Description */}
//           <p className="details-description">
//             {product.description}
//           </p>

//           {/* Stock */}
//           <div className="stock-status">

//             {product.stock ? (
//               <span className="in-stock">
//                 In Stock
//               </span>
//             ) : (
//               <span className="out-stock">
//                 Out of Stock
//               </span>
//             )}

//           </div>

//           {/* Quantity */}
//           <div className="quantity-section">

//             <h4>Quantity</h4>

//             <div className="quantity-box">

//               <button onClick={decreaseQty}>
//                 <FaMinus />
//               </button>

//               <span>{quantity}</span>

//               <button onClick={increaseQty}>
//                 <FaPlus />
//               </button>

//             </div>

//           </div>

//           {/* Buttons */}
//           <div className="details-buttons">

//             <button className="details-cart-btn">

//               <FaShoppingCart />

//               Add To Cart

//             </button>

//             <button className="details-wishlist-btn">

//               <FaHeart />

//             </button>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default ProductDetailsCard;




import React, {
  useContext,
  useState,
} from "react";

// import {
//   FaShoppingCart,
//   FaStar,
//   FaBolt,
//   FaHeart,
// } from "react-icons/fa";

/* Context */
import {
  CartContext,
} from "../../context/CartContext";

/* Styles */
import "./Product.css";

const ProductDetailsCard = ({
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
      STATE
  ========================== */

  const [quantity,
    setQuantity] =
    useState(1);

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
    name,
    image,
    price,
    description,
    category,
    stock,
    rating,
  } = product;

  /* =========================
      QUANTITY
  ========================== */

  const increaseQuantity =
    () => {

      setQuantity(
        quantity + 1
      );
    };

  const decreaseQuantity =
    () => {

      if (quantity > 1) {

        setQuantity(
          quantity - 1
        );
      }
    };

  /* =========================
      ADD TO CART
  ========================== */

  const handleAddToCart =
    () => {

      if (!addToCart) return;

      addToCart({
        ...product,
        quantity,
      });
    };

  return (

    <div className="product-details-card">

      {/* =========================
          IMAGE
      ========================== */}

      <div className="details-card-image">

        <img
          src={
            image ||
            "/images/default-product.jpg"
          }
          alt={name}
        />

      </div>

      {/* =========================
          CONTENT
      ========================== */}

      <div className="details-card-content">

        {/* Category */}

        <span className="details-category">

          {category || "Snacks"}

        </span>

        {/* Title */}

        <h2 className="details-title">

          {name}

        </h2>

        {/* Rating */}

        <div className="details-rating">

          {/* <FaStar /> */}

          <span>

            {rating || 4.5}

          </span>

        </div>

        {/* Price */}

        <h3 className="details-price">

          ₹{price}

        </h3>

        {/* Description */}

        <p className="details-description">

          {description ||
            "Authentic Kerala snack made with traditional ingredients and crispy taste."}

        </p>

        {/* Stock */}

        <div className="details-stock">

          <strong>

            Availability :

          </strong>

          <span
            className={
              stock > 0
                ? "in-stock"
                : "out-stock"
            }
          >

            {stock > 0
              ? "In Stock"
              : "Out Of Stock"}

          </span>

        </div>

        {/* =========================
            QUANTITY
        ========================== */}

        <div className="quantity-wrapper">

          <button
            onClick={
              decreaseQuantity
            }
          >

            -

          </button>

          <span>

            {quantity}

          </span>

          <button
            onClick={
              increaseQuantity
            }
          >

            +

          </button>

        </div>

        {/* =========================
            BUTTONS
        ========================== */}

        <div className="details-buttons">

          <button
            className="cart-btn"
            onClick={
              handleAddToCart
            }
          >

            {/* <FaShoppingCart /> */}

            Add To Cart

          </button>

          <button
            className="buy-btn"
          >

            {/* <FaBolt /> */}

            Buy Now

          </button>

          <button
            className="wishlist-btn"
          >

            {/* <FaHeart /> */}

          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetailsCard;