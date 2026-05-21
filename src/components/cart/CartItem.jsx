// import React, { useState } from "react";
// import {
//   FaPlus,
//   FaMinus,
//   FaTrash,
// } from "react-icons/fa";

// import "./Cart.css";

// /* Sample Product Image */
// import BananaChips from "../../assets/products/banana-chips.png";

// const CartItem = () => {

//   const [quantity, setQuantity] = useState(1);

//   const increaseQty = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQty = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   /* Dummy Product */
//   const product = {
//     name: "Classic Banana Chips",
//     image: BananaChips,
//     category: "Banana Chips",
//     price: 120,
//   };

//   return (
//     <div className="cart-item">

//       {/* Product Image */}
//       <div className="cart-image">

//         <img
//           src={product.image}
//           alt={product.name}
//         />

//       </div>

//       {/* Product Details */}
//       <div className="cart-details">

//         <span className="cart-category">
//           {product.category}
//         </span>

//         <h3>
//           {product.name}
//         </h3>

//         <p className="cart-price">
//           ₹{product.price}
//         </p>

//       </div>

//       {/* Quantity */}
//       <div className="cart-quantity">

//         <button onClick={decreaseQty}>
//           <FaMinus />
//         </button>

//         <span>{quantity}</span>

//         <button onClick={increaseQty}>
//           <FaPlus />
//         </button>

//       </div>

//       {/* Total */}
//       <div className="cart-total">

//         ₹{product.price * quantity}

//       </div>

//       {/* Remove */}
//       <button className="remove-btn">

//         <FaTrash />

//       </button>

//     </div>
//   );
// };

// export default CartItem;

import React, {
  useContext,
} from "react";

// import {
//   FaTrash,
//   FaPlus,
//   FaMinus,
// } from "react-icons/fa";

/* Context */
import {
  CartContext,
} from "../../context/CartContext";

/* Styles */
import "./Cart.css";

const CartItem = ({
  item,
}) => {

  /* =========================
      CONTEXT
  ========================== */

  const cartContext =
    useContext(CartContext);

  const removeFromCart =
    cartContext?.removeFromCart;

  const updateQuantity =
    cartContext?.updateQuantity;

  /* =========================
      SAFETY CHECK
  ========================== */

  if (!item) {

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
    quantity,
    category,
  } = item;

  /* =========================
      TOTAL PRICE
  ========================== */

  const totalPrice =
    price * quantity;

  return (

    <div className="cart-item">

      {/* =========================
          IMAGE
      ========================== */}

      <div className="cart-item-image">

        <img
          src={
            image ||
            "/images/default-product.jpg"
          }
          alt={name}
        />

      </div>

      {/* =========================
          DETAILS
      ========================== */}

      <div className="cart-item-details">

        <span className="cart-category">

          {category || "Snacks"}

        </span>

        <h3 className="cart-name">

          {name}

        </h3>

        <p className="cart-price">

          ₹{price}

        </p>

      </div>

      {/* =========================
          QUANTITY
      ========================== */}

      <div className="cart-quantity">

        <button
          onClick={() =>
            updateQuantity?.(
              _id,
              "decrease"
            )
          }
        >

          {/* <FaMinus /> */}

        </button>

        <span>

          {quantity}

        </span>

        <button
          onClick={() =>
            updateQuantity?.(
              _id,
              "increase"
            )
          }
        >

          {/* <FaPlus /> */}

        </button>

      </div>

      {/* =========================
          TOTAL
      ========================== */}

      <div className="cart-total">

        ₹{totalPrice}

      </div>

      {/* =========================
          REMOVE
      ========================== */}

      <button
        className="remove-btn"
        onClick={() =>
          removeFromCart?.(_id)
        }
      >

        {/* <FaTrash /> */}

      </button>

    </div>
  );
};

export default CartItem;