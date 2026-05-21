// import React, { useState } from "react";
// import {
//   FaUser,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaCity,
// } from "react-icons/fa";

// import "./Checkout.css";

// const CheckoutForm = () => {

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//   });

//   const handleChange = (e) => {

//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(formData);
//   };

//   return (
//     <div className="checkout-form-container">

//       {/* Heading */}
//       <div className="checkout-heading">

//         <h2>
//           Delivery Information
//         </h2>

//         <p>
//           Fill in your details to complete the order.
//         </p>

//       </div>

//       {/* Form */}
//       <form
//         className="checkout-form"
//         onSubmit={handleSubmit}
//       >

//         {/* Full Name */}
//         <div className="form-group">

//           <label>
//             Full Name
//           </label>

//           <div className="input-box">

//             <FaUser />

//             <input
//               type="text"
//               name="fullName"
//               placeholder="Enter your full name"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//             />

//           </div>

//         </div>

//         {/* Email */}
//         <div className="form-group">

//           <label>
//             Email Address
//           </label>

//           <div className="input-box">

//             <FaEnvelope />

//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//           </div>

//         </div>

//         {/* Phone */}
//         <div className="form-group">

//           <label>
//             Phone Number
//           </label>

//           <div className="input-box">

//             <FaPhoneAlt />

//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter phone number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />

//           </div>

//         </div>

//         {/* Address */}
//         <div className="form-group">

//           <label>
//             Address
//           </label>

//           <div className="input-box textarea-box">

//             <FaMapMarkerAlt />

//             <textarea
//               name="address"
//               placeholder="Enter delivery address"
//               rows="4"
//               value={formData.address}
//               onChange={handleChange}
//               required
//             />

//           </div>

//         </div>

//         {/* City + State */}
//         <div className="double-input">

//           {/* City */}
//           <div className="form-group">

//             <label>
//               City
//             </label>

//             <div className="input-box">

//               <FaCity />

//               <input
//                 type="text"
//                 name="city"
//                 placeholder="City"
//                 value={formData.city}
//                 onChange={handleChange}
//                 required
//               />

//             </div>

//           </div>

//           {/* State */}
//           <div className="form-group">

//             <label>
//               State
//             </label>

//             <div className="input-box">

//               <FaMapMarkerAlt />

//               <input
//                 type="text"
//                 name="state"
//                 placeholder="State"
//                 value={formData.state}
//                 onChange={handleChange}
//                 required
//               />

//             </div>

//           </div>

//         </div>

//         {/* Pincode */}
//         <div className="form-group">

//           <label>
//             Pincode
//           </label>

//           <div className="input-box">

//             <FaMapMarkerAlt />

//             <input
//               type="number"
//               name="pincode"
//               placeholder="Enter pincode"
//               value={formData.pincode}
//               onChange={handleChange}
//               required
//             />

//           </div>

//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="save-address-btn"
//         >
//           Save Address
//         </button>

//       </form>

//     </div>
//   );
// };

// export default CheckoutForm;

import React, {
  useContext,
  useState,
} from "react";

import {
  CartContext,
} from "../../context/CartContext";

/* Styles */
import "./Checkout.css";

const CheckoutForm = () => {

  /* =========================
      CONTEXT
  ========================== */

  const cartContext =
    useContext(CartContext);

  const cartItems =
    cartContext?.cartItems || [];

  const finalTotal =
    cartContext?.finalTotal || 0;

  const clearCart =
    cartContext?.clearCart;

  /* =========================
      STATE
  ========================== */

  const [formData,
    setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      paymentMethod: "cod",
    });

  const [loading,
    setLoading] =
    useState(false);

  const [success,
    setSuccess] =
    useState("");

  /* =========================
      HANDLE CHANGE
  ========================== */

  const handleChange =
    (e) => {

      setFormData({
        ...formData,
        [e.target.name]:
          e.target.value,
      });
    };

  /* =========================
      HANDLE SUBMIT
  ========================== */

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      if (
        cartItems.length === 0
      ) {

        setSuccess(
          "Your cart is empty"
        );

        return;
      }

      try {

        setLoading(true);

        /* =========================
            DEMO ORDER
        ========================== */

        const orderData = {
          customer:
            formData,
          products:
            cartItems,
          total:
            finalTotal,
        };

        console.log(
          "Order Placed:",
          orderData
        );

        /* Clear Cart */
        clearCart?.();

        /* Success */
        setSuccess(
          "Order placed successfully!"
        );

        /* Reset Form */
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          paymentMethod: "cod",
        });

      } catch (error) {

        console.log(error);

        setSuccess(
          "Order failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="checkout-form-container">

      {/* =========================
          TITLE
      ========================== */}

      <h2 className="checkout-title">

        Checkout Details

      </h2>

      {/* =========================
          FORM
      ========================== */}

      <form
        className="checkout-form"
        onSubmit={handleSubmit}
      >

        {/* Name */}

        <div className="form-group">

          <label>

            Full Name

          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

        </div>

        {/* Email */}

        <div className="form-group">

          <label>

            Email Address

          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

        </div>

        {/* Phone */}

        <div className="form-group">

          <label>

            Phone Number

          </label>

          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

        </div>

        {/* Address */}

        <div className="form-group">

          <label>

            Address

          </label>

          <textarea
            name="address"
            placeholder="Enter delivery address"
            value={formData.address}
            onChange={handleChange}
            required
          />

        </div>

        {/* City */}

        <div className="form-group">

          <label>

            City

          </label>

          <input
            type="text"
            name="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={handleChange}
            required
          />

        </div>

        {/* State */}

        <div className="form-group">

          <label>

            State

          </label>

          <input
            type="text"
            name="state"
            placeholder="Enter state"
            value={formData.state}
            onChange={handleChange}
            required
          />

        </div>

        {/* Pincode */}

        <div className="form-group">

          <label>

            Pincode

          </label>

          <input
            type="text"
            name="pincode"
            placeholder="Enter pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />

        </div>

        {/* Payment Method */}

        <div className="form-group">

          <label>

            Payment Method

          </label>

          <select
            name="paymentMethod"
            value={
              formData.paymentMethod
            }
            onChange={handleChange}
          >

            <option value="cod">

              Cash On Delivery

            </option>

            <option value="online">

              Online Payment

            </option>

          </select>

        </div>

        {/* Total */}

        <div className="checkout-total">

          <span>

            Total Amount

          </span>

          <strong>

            ₹{finalTotal}

          </strong>

        </div>

        {/* Submit */}

        <button
          type="submit"
          className="place-order-btn"
          disabled={loading}
        >

          {loading
            ? "Processing..."
            : "Place Order"}

        </button>

        {/* Success Message */}

        {success && (

          <p className="checkout-message">

            {success}

          </p>

        )}

      </form>

    </div>
  );
};

export default CheckoutForm;