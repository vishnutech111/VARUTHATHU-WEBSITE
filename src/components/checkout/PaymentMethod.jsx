// import React, { useState } from "react";

// import {
//   FaCreditCard,
//   FaMoneyBillWave,
//   FaMobileAlt,
//   FaLock,
// } from "react-icons/fa";

// import "./Checkout.css";

// const PaymentMethod = () => {

//   const [selectedMethod, setSelectedMethod] =
//     useState("razorpay");

//   return (
//     <div className="payment-method-container">

//       {/* Heading */}
//       <div className="payment-header">

//         <h2>
//           Payment Method
//         </h2>

//         <p>
//           Choose your preferred payment option.
//         </p>

//       </div>

//       {/* Payment Options */}
//       <div className="payment-options">

//         {/* Razorpay */}
//         <div
//           className={
//             selectedMethod === "razorpay"
//               ? "payment-card active-payment"
//               : "payment-card"
//           }
//           onClick={() =>
//             setSelectedMethod("razorpay")
//           }
//         >

//           <div className="payment-left">

//             <FaCreditCard />

//             <div>

//               <h3>
//                 Razorpay
//               </h3>

//               <p>
//                 UPI, Cards, Net Banking & Wallets
//               </p>

//             </div>

//           </div>

//           <input
//             type="radio"
//             checked={selectedMethod === "razorpay"}
//             readOnly
//           />

//         </div>

//         {/* UPI */}
//         <div
//           className={
//             selectedMethod === "upi"
//               ? "payment-card active-payment"
//               : "payment-card"
//           }
//           onClick={() =>
//             setSelectedMethod("upi")
//           }
//         >

//           <div className="payment-left">

//             <FaMobileAlt />

//             <div>

//               <h3>
//                 UPI Payment
//               </h3>

//               <p>
//                 Google Pay, PhonePe, Paytm
//               </p>

//             </div>

//           </div>

//           <input
//             type="radio"
//             checked={selectedMethod === "upi"}
//             readOnly
//           />

//         </div>

//         {/* COD */}
//         <div
//           className={
//             selectedMethod === "cod"
//               ? "payment-card active-payment"
//               : "payment-card"
//           }
//           onClick={() =>
//             setSelectedMethod("cod")
//           }
//         >

//           <div className="payment-left">

//             <FaMoneyBillWave />

//             <div>

//               <h3>
//                 Cash On Delivery
//               </h3>

//               <p>
//                 Pay when your order arrives
//               </p>

//             </div>

//           </div>

//           <input
//             type="radio"
//             checked={selectedMethod === "cod"}
//             readOnly
//           />

//         </div>

//       </div>

//       {/* Security Message */}
//       <div className="secure-payment">

//         <FaLock />

//         <span>
//           Secure encrypted payments powered by Razorpay
//         </span>

//       </div>

//       {/* Place Order */}
//       <button className="place-order-btn">

//         Place Order

//       </button>

//     </div>
//   );
// };

// export default PaymentMethod;

import React from "react";

// import {
//   FaMoneyBillWave,
//   FaCreditCard,
//   FaUniversity,
//   FaMobileAlt,
// } from "react-icons/fa";

/* Styles */
import "./Checkout.css";

const PaymentMethod = ({
  paymentMethod,
  setPaymentMethod,
}) => {

  /* =========================
      METHODS
  ========================== */

  const methods = [
    {
      id: "cod",
      name: "Cash On Delivery",
      // icon: <FaMoneyBillWave />,
    },

    {
      id: "card",
      name: "Credit / Debit Card",
      // icon: <FaCreditCard />,
    },

    {
      id: "upi",
      name: "UPI Payment",
      // icon: <FaMobileAlt />,
    },

    {
      id: "netbanking",
      name: "Net Banking",
      // icon: <FaUniversity />,
    },
  ];

  return (

    <div className="payment-method">

      {/* =========================
          TITLE
      ========================== */}

      <h3 className="payment-title">

        Select Payment Method

      </h3>

      {/* =========================
          METHODS
      ========================== */}

      <div className="payment-grid">

        {methods.map((method) => (

          <div
            key={method.id}
            className={
              paymentMethod ===
              method.id
                ? "payment-card active"
                : "payment-card"
            }
            onClick={() =>
              setPaymentMethod(
                method.id
              )
            }
          >

            <div className="payment-icon">

              {method.icon}

            </div>

            <span>

              {method.name}

            </span>

          </div>

        ))}

      </div>

      {/* =========================
          INFO
      ========================== */}

      <div className="payment-info">

        {paymentMethod === "cod" && (

          <p>

            Pay with cash when your
            order is delivered.

          </p>

        )}

        {paymentMethod === "card" && (

          <p>

            Secure card payment using
            your debit or credit card.

          </p>

        )}

        {paymentMethod === "upi" && (

          <p>

            Pay instantly using any
            UPI app like GPay,
            PhonePe, or Paytm.

          </p>

        )}

        {paymentMethod ===
          "netbanking" && (

          <p>

            Use your bank account for
            direct online payment.

          </p>

        )}

      </div>

    </div>
  );
};

export default PaymentMethod;