// import React from "react";

// /* Components */
// import CheckoutForm from "../components/checkout/CheckoutForm";

// import PaymentMethod from "../components/checkout/PaymentMethod";

// import RazorpayButton from "../components/checkout/RazorpayButton";

// import FadeAnimation from "../components/animations/FadeAnimation";

// /* Icons */
// import {
//   FaLock,
//   FaCheckCircle,
// } from "react-icons/fa";

// const Checkout = () => {

//   /* Dummy Order Data */
//   const orderSummary = {
//     subtotal: 390,
//     shipping: 40,
//     total: 430,
//   };

//   return (
//     <div className="w-full bg-white min-h-screen">

//       {/* Header */}
//       <section
//         className="
//           w-full
//           bg-[#fff8dc]
//           py-20
//           px-5
//           text-center
//         "
//       >

//         <FadeAnimation>

//           {/* Icon */}
//           <div
//             className="
//               flex
//               justify-center
//               mb-5
//             "
//           >

//             <div
//               className="
//                 w-20
//                 h-20
//                 rounded-full
//                 bg-[#f7d046]
//                 flex
//                 items-center
//                 justify-center
//               "
//             >

//               <FaLock
//                 className="
//                   text-3xl
//                   text-[#1a1a1a]
//                 "
//               />

//             </div>

//           </div>

//           {/* Heading */}
//           <h1
//             className="
//               text-4xl
//               md:text-5xl
//               font-bold
//               text-[#1a1a1a]
//               mb-5
//             "
//           >
//             Secure Checkout
//           </h1>

//           {/* Description */}
//           <p
//             className="
//               max-w-2xl
//               mx-auto
//               text-gray-600
//               leading-8
//             "
//           >
//             Complete your order securely
//             using Razorpay payment gateway
//             and enjoy authentic Kerala snacks.
//           </p>

//         </FadeAnimation>

//       </section>

//       {/* Checkout Content */}
//       <section
//         className="
//           w-[90%]
//           max-w-[1400px]
//           mx-auto
//           py-20
//         "
//       >

//         <div
//           className="
//             grid
//             grid-cols-1
//             lg:grid-cols-3
//             gap-10
//           "
//         >

//           {/* Left Side */}
//           <div
//             className="
//               lg:col-span-2
//               space-y-10
//             "
//           >

//             {/* Shipping Form */}
//             <FadeAnimation>

//               <CheckoutForm />

//             </FadeAnimation>

//             {/* Payment Method */}
//             <FadeAnimation>

//               <PaymentMethod />

//             </FadeAnimation>

//           </div>

//           {/* Right Side */}
//           <div>

//             <FadeAnimation>

//               <div
//                 className="
//                   bg-white
//                   rounded-3xl
//                   p-8
//                   shadow-lg
//                   border
//                   border-gray-100
//                   sticky
//                   top-28
//                 "
//               >

//                 {/* Title */}
//                 <h2
//                   className="
//                     text-2xl
//                     font-bold
//                     text-[#1a1a1a]
//                     mb-8
//                   "
//                 >
//                   Order Summary
//                 </h2>

//                 {/* Items */}
//                 <div
//                   className="
//                     space-y-5
//                     border-b
//                     border-gray-200
//                     pb-6
//                     mb-6
//                   "
//                 >

//                   <div
//                     className="
//                       flex
//                       justify-between
//                       text-gray-600
//                     "
//                   >

//                     <span>
//                       Subtotal
//                     </span>

//                     <span>
//                       ₹{orderSummary.subtotal}
//                     </span>

//                   </div>

//                   <div
//                     className="
//                       flex
//                       justify-between
//                       text-gray-600
//                     "
//                   >

//                     <span>
//                       Shipping
//                     </span>

//                     <span>
//                       ₹{orderSummary.shipping}
//                     </span>

//                   </div>

//                 </div>

//                 {/* Total */}
//                 <div
//                   className="
//                     flex
//                     justify-between
//                     items-center
//                     mb-8
//                   "
//                 >

//                   <h3
//                     className="
//                       text-2xl
//                       font-bold
//                       text-[#1a1a1a]
//                     "
//                   >
//                     Total
//                   </h3>

//                   <span
//                     className="
//                       text-3xl
//                       font-bold
//                       text-[#1a1a1a]
//                     "
//                   >
//                     ₹{orderSummary.total}
//                   </span>

//                 </div>

//                 {/* Razorpay */}
//                 <RazorpayButton
//                   amount={orderSummary.total}
//                 />

//                 {/* Secure Note */}
//                 <div
//                   className="
//                     mt-6
//                     flex
//                     items-center
//                     gap-3
//                     text-sm
//                     text-gray-500
//                   "
//                 >

//                   <FaCheckCircle
//                     className="
//                       text-[#f7d046]
//                     "
//                   />

//                   Secure payment powered by
//                   Razorpay

//                 </div>

//               </div>

//             </FadeAnimation>

//           </div>

//         </div>

//       </section>

//     </div>
//   );
// };

// export default Checkout;


import React, {
  useContext,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

/* Context */
import {
  CartContext,
} from "../context/CartContext";

import {
  AuthContext,
} from "../context/AuthContext";

/* Components */
import CheckoutForm from "../components/checkout/CheckoutForm";

import PaymentMethod from "../components/checkout/PaymentMethod";

import RazorpayButton from "../components/checkout/RazorpayButton";

import EmptyState from "../components/common/EmptyState";

import FadeAnimation from "../components/animations/FadeAnimation";

/* Icons */
// import {
//   FaCreditCard,
//   FaShoppingBag,
//   FaLock,
// } from "react-icons/fa";

const Checkout = () => {

  /* =========================
      CONTEXT
  ========================== */

  const {
    cartItems,
    cartTotal,
    shippingCharge,
    discount,
    finalTotal,
    clearCart,
  } = useContext(
    CartContext
  );

  const {
    user,
  } = useContext(
    AuthContext
  );

  /* =========================
      STATES
  ========================== */

  const [
    paymentMethod,
    setPaymentMethod,
  ] = useState(
    "razorpay"
  );

  const [
    orderPlaced,
    setOrderPlaced,
  ] = useState(false);

  /* =========================
      NAVIGATION
  ========================== */

  const navigate =
    useNavigate();

  /* =========================
      EMPTY CART
  ========================== */

  if (
    !cartItems ||
    cartItems.length === 0
  ) {

    return (

      <div
        className="
          w-full
          min-h-screen
          bg-white
          flex
          items-center
          justify-center
          px-5
        "
      >

        <EmptyState
          // icon={
          //   <FaShoppingBag />
          // }
          title="No Items For Checkout"
          description="
            Your shopping cart is
            currently empty.
          "
          buttonText="Shop Products"
          buttonLink="/products"
        />

      </div>
    );
  }

  /* =========================
      PAYMENT SUCCESS
  ========================== */

  const handlePaymentSuccess =
    () => {

      clearCart();

      setOrderPlaced(true);

      setTimeout(() => {

        navigate("/");

      }, 3000);
    };

  /* =========================
      ORDER SUCCESS
  ========================== */

  if (orderPlaced) {

    return (

      <div
        className="
          w-full
          min-h-screen
          flex
          items-center
          justify-center
          bg-white
          px-5
        "
      >

        <div
          className="
            max-w-xl
            text-center
          "
        >

          <div
            className="
              w-24
              h-24
              rounded-full
              bg-green-100
              flex
              items-center
              justify-center
              mx-auto
              mb-8
            "
          >

            {/* <FaLock
              className="
                text-4xl
                text-green-600
              "
            /> */}

          </div>

          <h2
            className="
              text-4xl
              font-bold
              mb-5
              text-[#1a1a1a]
            "
          >

            Order Placed Successfully

          </h2>

          <p
            className="
              text-gray-600
              leading-8
              text-lg
            "
          >

            Thank you for shopping
            with Varuthathu Co.
            Your delicious snacks
            will arrive soon.

          </p>

        </div>

      </div>
    );
  }

  return (

    <div
      className="
        w-full
        min-h-screen
        bg-white
        py-16
        px-5
        md:px-10
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
        "
      >

        {/* =========================
            HEADER
        ========================== */}

        <FadeAnimation>

          <div
            className="
              text-center
              mb-16
            "
          >

            <span
              className="
                inline-block
                bg-[#f7d046]
                text-black
                px-5
                py-2
                rounded-full
                text-sm
                font-bold
                mb-5
              "
            >

              Secure Checkout

            </span>

            <h1
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-[#1a1a1a]
                mb-5
              "
            >

              Complete Your Order

            </h1>

            <p
              className="
                text-gray-600
                max-w-2xl
                mx-auto
                leading-8
              "
            >

              Fill in your delivery
              information and choose
              your payment method.

            </p>

          </div>

        </FadeAnimation>

        {/* =========================
            CHECKOUT CONTENT
        ========================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-10
          "
        >

          {/* =========================
              LEFT SIDE
          ========================== */}

          <div
            className="
              lg:col-span-2
              flex
              flex-col
              gap-10
            "
          >

            {/* Checkout Form */}

            <FadeAnimation>

              <div
                className="
                  bg-[#fffdf4]
                  rounded-3xl
                  p-8
                  shadow-sm
                "
              >

                <CheckoutForm
                  user={user}
                />

              </div>

            </FadeAnimation>

            {/* Payment Method */}

            <FadeAnimation delay={0.2}>

              <div
                className="
                  bg-[#fffdf4]
                  rounded-3xl
                  p-8
                  shadow-sm
                "
              >

                <PaymentMethod
                  paymentMethod={
                    paymentMethod
                  }
                  setPaymentMethod={
                    setPaymentMethod
                  }
                />

              </div>

            </FadeAnimation>

          </div>

          {/* =========================
              RIGHT SIDE
          ========================== */}

          <div>

            <FadeAnimation delay={0.3}>

              <div
                className="
                  bg-[#fffdf4]
                  rounded-3xl
                  p-8
                  shadow-sm
                  sticky
                  top-28
                "
              >

                {/* Title */}

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mb-8
                  "
                >

                  {/* <FaCreditCard
                    className="
                      text-2xl
                      text-[#f7d046]
                    "
                  /> */}

                  <h2
                    className="
                      text-2xl
                      font-bold
                      text-[#1a1a1a]
                    "
                  >

                    Order Summary

                  </h2>

                </div>

                {/* Items */}

                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    mb-8
                  "
                >

                  {cartItems.map(
                    (item) => (

                      <div
                        key={item._id}
                        className="
                          flex
                          justify-between
                          items-center
                          gap-4
                        "
                      >

                        <div>

                          <h4
                            className="
                              font-semibold
                              text-[#1a1a1a]
                            "
                          >

                            {item.name}

                          </h4>

                          <p
                            className="
                              text-sm
                              text-gray-500
                            "
                          >

                            Qty :
                            {" "}
                            {item.quantity}

                          </p>

                        </div>

                        <span
                          className="
                            font-bold
                            text-[#1a1a1a]
                          "
                        >

                          ₹
                          {item.price *
                            item.quantity}

                        </span>

                      </div>
                    )
                  )}

                </div>

                {/* Totals */}

                <div
                  className="
                    border-t
                    border-gray-200
                    pt-6
                    space-y-4
                  "
                >

                  <div
                    className="
                      flex
                      justify-between
                    "
                  >

                    <span>
                      Subtotal
                    </span>

                    <span>
                      ₹
                      {cartTotal}
                    </span>

                  </div>

                  <div
                    className="
                      flex
                      justify-between
                    "
                  >

                    <span>
                      Shipping
                    </span>

                    <span>
                      ₹
                      {shippingCharge}
                    </span>

                  </div>

                  <div
                    className="
                      flex
                      justify-between
                    "
                  >

                    <span>
                      Discount
                    </span>

                    <span>
                      - ₹
                      {discount}
                    </span>

                  </div>

                  <div
                    className="
                      flex
                      justify-between
                      text-2xl
                      font-bold
                      pt-4
                      border-t
                      border-gray-200
                    "
                  >

                    <span>
                      Total
                    </span>

                    <span>
                      ₹
                      {finalTotal}
                    </span>

                  </div>

                </div>

                {/* Payment Button */}

                <div
                  className="
                    mt-10
                  "
                >

                  <RazorpayButton
                    amount={
                      finalTotal
                    }
                    onSuccess={
                      handlePaymentSuccess
                    }
                  />

                </div>

              </div>

            </FadeAnimation>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Checkout;