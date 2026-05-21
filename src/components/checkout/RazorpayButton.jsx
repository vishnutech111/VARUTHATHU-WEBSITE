import React from "react";
import { FaLock } from "react-icons/fa";

import "./Checkout.css";

const RazorpayButton = ({
  amount = 499,
  customerName = "Customer",
  customerEmail = "customer@gmail.com",
  customerPhone = "9999999999",
}) => {

  const handlePayment = async () => {

    try {

      /* Load Razorpay Script */
      const res = await loadRazorpayScript();

      if (!res) {
        alert("Razorpay SDK failed to load.");
        return;
      }

      /* Create Order From Backend */
      const response = await fetch(
        "http://localhost:5000/api/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount,
          }),
        }
      );

      const data = await response.json();

      /* Razorpay Options */
      const options = {
        key: "YOUR_RAZORPAY_KEY_ID",

        amount: data.amount,
        currency: data.currency,

        name: "Varuthathu Co.",

        description:
          "Traditional Kerala Snacks",

        image:
          "/logo192.png",

        order_id: data.id,

        handler: async function (response) {

          console.log(
            "Payment Success:",
            response
          );

          alert(
            "Payment Successful!"
          );

          /* Verify Payment API Here */

        },

        prefill: {
          name: customerName,
          email: customerEmail,
          contact: customerPhone,
        },

        theme: {
          color: "#F7D046",
        },
      };

      /* Open Razorpay */
      const paymentObject =
        new window.Razorpay(options);

      paymentObject.open();

    } catch (error) {

      console.log(error);

    }
  };

  /* Load Razorpay Script */
  const loadRazorpayScript = () => {

    return new Promise((resolve) => {

      const script =
        document.createElement("script");

      script.src =
        "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);

    });
  };

  return (
    <button
      className="razorpay-btn"
      onClick={handlePayment}
    >

      <FaLock />

      Pay ₹{amount}

    </button>
  );
};

export default RazorpayButton;



// import React, {
//   useState,
// } from "react";

// // import {
// //   FaLock,
// // } from "react-icons/fa";

// /* Utils */
// import initializeRazorpay from "../../utils/razorpay";

// /* Styles */
// import "./Checkout.css";

// const RazorpayButton = ({
//   amount = 0,
//   user = {},
//   onSuccess,
//   onError,
// }) => {

//   /* =========================
//       STATE
//   ========================== */

//   const [loading,
//     setLoading] =
//     useState(false);

//   /* =========================
//       HANDLE PAYMENT
//   ========================== */

//   const handlePayment =
//     async () => {

//       try {

//         setLoading(true);

//         /* Load Razorpay SDK */
//         const res =
//           await initializeRazorpay();

//         if (!res) {

//           alert(
//             "Razorpay SDK Failed To Load"
//           );

//           return;
//         }

//         /* =========================
//             DEMO ORDER DATA
//         ========================== */

//         const options = {

//           key:
//             process.env
//               .REACT_APP_RAZORPAY_KEY ||
//             "rzp_test_xxxxxxxx",

//           amount:
//             amount * 100,

//           currency: "INR",

//           name:
//             "Varuthathu Co.",

//           description:
//             "Order Payment",

//           image:
//             "/logo192.png",

//           handler: function (
//             response
//           ) {

//             console.log(
//               "Payment Success:",
//               response
//             );

//             if (onSuccess) {

//               onSuccess(response);
//             }
//           },

//           prefill: {

//             name:
//               user?.name || "",

//             email:
//               user?.email || "",

//             contact:
//               user?.phone || "",
//           },

//           notes: {

//             company:
//               "Varuthathu Co.",
//           },

//           theme: {

//             color: "#f7d046",
//           },

//           modal: {

//             ondismiss:
//               function () {

//                 console.log(
//                   "Payment Cancelled"
//                 );
//               },
//           },
//         };

//         /* Open Razorpay */

//         const paymentObject =
//           new window.Razorpay(
//             options
//           );

//         paymentObject.on(
//           "payment.failed",
//           function (response) {

//             console.log(
//               "Payment Failed:",
//               response.error
//             );

//             if (onError) {

//               onError(
//                 response.error
//               );
//             }
//           }
//         );

//         paymentObject.open();

//       } catch (error) {

//         console.log(error);

//       } finally {

//         setLoading(false);
//       }
//     };

//   return (

//     <button
//       className="razorpay-btn"
//       onClick={handlePayment}
//       disabled={loading}
//     >

//       {/* <FaLock /> */}

//       {loading
//         ? "Processing..."
//         : `Pay ₹${amount}`}

//     </button>
//   );
// };

// export default RazorpayButton;