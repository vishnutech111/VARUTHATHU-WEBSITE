// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaShoppingBag,
//   FaTruck,
//   FaTag,
// } from "react-icons/fa";

// import "./Cart.css";

// const CartSummary = () => {

//   /* Dummy Cart Data */
//   const subtotal = 520;
//   const shipping = 40;
//   const discount = 50;

//   const total =
//     subtotal + shipping - discount;

//   return (
//     <div className="cart-summary">

//       {/* Heading */}
//       <div className="summary-header">

//         <FaShoppingBag />

//         <h2>Order Summary</h2>

//       </div>

//       {/* Coupon */}
//       <div className="coupon-box">

//         <input
//           type="text"
//           placeholder="Enter coupon code"
//         />

//         <button>

//           <FaTag />

//           Apply

//         </button>

//       </div>

//       {/* Summary Details */}
//       <div className="summary-details">

//         <div className="summary-row">
//           <span>Subtotal</span>
//           <p>₹{subtotal}</p>
//         </div>

//         <div className="summary-row">
//           <span>
//             <FaTruck />

//             Shipping
//           </span>

//           <p>₹{shipping}</p>
//         </div>

//         <div className="summary-row discount-row">
//           <span>Discount</span>
//           <p>- ₹{discount}</p>
//         </div>

//       </div>

//       {/* Total */}
//       <div className="summary-total">

//         <span>Total</span>

//         <h3>₹{total}</h3>

//       </div>

//       {/* Checkout Button */}
//       <Link
//         to="/checkout"
//         className="checkout-btn"
//       >
//         Proceed To Checkout
//       </Link>

//       {/* Secure Checkout */}
//       <p className="secure-text">
//         100% Secure Payments with Razorpay
//       </p>

//     </div>
//   );
// };

// export default CartSummary;
import React, {
  useContext,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

/* Context */
import {
  CartContext,
} from "../../context/CartContext";

/* Styles */
import "./Cart.css";

const CartSummary = () => {

  /* =========================
      CONTEXT
  ========================== */

  const cartContext =
    useContext(CartContext);

  const cartItems =
    cartContext?.cartItems || [];

  const cartTotal =
    cartContext?.cartTotal || 0;

  const shippingCharge =
    cartContext?.shippingCharge || 0;

  const discount =
    cartContext?.discount || 0;

  const finalTotal =
    cartContext?.finalTotal || 0;

  const applyCoupon =
    cartContext?.applyCoupon;

  /* =========================
      STATE
  ========================== */

  const [couponCode,
    setCouponCode] =
    useState("");

  const [message,
    setMessage] =
    useState("");

  /* =========================
      APPLY COUPON
  ========================== */

  const handleApplyCoupon =
    () => {

      if (!couponCode) {

        setMessage(
          "Please enter coupon code"
        );

        return;
      }

      if (applyCoupon) {

        const response =
          applyCoupon(couponCode);

        setMessage(
          response.message
        );
      }
    };

  return (

    <div className="cart-summary">

      {/* =========================
          TITLE
      ========================== */}

      <h2 className="summary-title">

        Order Summary

      </h2>

      {/* =========================
          ITEMS
      ========================== */}

      <div className="summary-row">

        <span>

          Items

        </span>

        <span>

          {cartItems.length}

        </span>

      </div>

      <div className="summary-row">

        <span>

          Subtotal

        </span>

        <span>

          ₹{cartTotal}

        </span>

      </div>

      <div className="summary-row">

        <span>

          Shipping

        </span>

        <span>

          ₹{shippingCharge}

        </span>

      </div>

      <div className="summary-row discount">

        <span>

          Discount

        </span>

        <span>

          - ₹{discount}

        </span>

      </div>

      {/* =========================
          COUPON
      ========================== */}

      <div className="coupon-box">

        <input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) =>
            setCouponCode(
              e.target.value
            )
          }
        />

        <button
          onClick={
            handleApplyCoupon
          }
        >

          Apply

        </button>

      </div>

      {/* Coupon Message */}

      {message && (

        <p className="coupon-message">

          {message}

        </p>

      )}

      {/* =========================
          TOTAL
      ========================== */}

      <div className="summary-total">

        <span>

          Total

        </span>

        <span>

          ₹{finalTotal}

        </span>

      </div>

      {/* =========================
          CHECKOUT
      ========================== */}

      <Link
        to="/checkout"
        className="checkout-btn"
      >

        Proceed To Checkout

      </Link>

    </div>
  );
};

export default CartSummary;