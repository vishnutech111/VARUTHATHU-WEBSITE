// import React from "react";

// import { Link } from "react-router-dom";

// /* Components */
// import CartItem from "../components/cart/CartItem";
// import CartSummary from "../components/cart/CartSummary";

// import EmptyState from "../components/common/EmptyState";

// import FadeAnimation from "../components/animations/FadeAnimation";

// /* Icons */
// import {
//   FaShoppingCart,
//   FaArrowLeft,
// } from "react-icons/fa";

// const Cart = () => {

//   /* Dummy Cart Data */
//   const cartItems = [
//     {
//       id: 1,
//       name: "Banana Chips",
//       price: 120,
//       quantity: 2,
//       image:
//         "/src/assets/products/chips1.jpg",
//     },
//     {
//       id: 2,
//       name: "Tapioca Chips",
//       price: 150,
//       quantity: 1,
//       image:
//         "/src/assets/products/chips2.jpg",
//     },
//   ];

//   /* Empty Cart */
//   const isCartEmpty =
//     cartItems.length === 0;

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

//               <FaShoppingCart
//                 className="
//                   text-3xl
//                   text-[#1a1a1a]
//                 "
//               />

//             </div>

//           </div>

//           <h1
//             className="
//               text-4xl
//               md:text-5xl
//               font-bold
//               text-[#1a1a1a]
//               mb-5
//             "
//           >
//             Your Cart
//           </h1>

//           <p
//             className="
//               max-w-2xl
//               mx-auto
//               text-gray-600
//               leading-8
//             "
//           >
//             Review your selected snacks,
//             update quantities, and proceed
//             to secure checkout.
//           </p>

//         </FadeAnimation>

//       </section>

//       {/* Cart Content */}
//       <section
//         className="
//           w-[90%]
//           max-w-[1400px]
//           mx-auto
//           py-20
//         "
//       >

//         {isCartEmpty ? (

//           <EmptyState
//             title="Your Cart Is Empty"
//             description="
//               Looks like you haven't added
//               any delicious snacks yet.
//             "
//             buttonText="Continue Shopping"
//           />

//         ) : (

//           <div
//             className="
//               grid
//               grid-cols-1
//               xl:grid-cols-3
//               gap-10
//             "
//           >

//             {/* Left */}
//             <div
//               className="
//                 xl:col-span-2
//                 space-y-6
//               "
//             >

//               {/* Back */}
//               <Link
//                 to="/products"
//                 className="
//                   inline-flex
//                   items-center
//                   gap-3
//                   text-[#1a1a1a]
//                   font-semibold
//                   hover:text-[#f7d046]
//                   transition
//                   mb-4
//                 "
//               >

//                 <FaArrowLeft />

//                 Continue Shopping

//               </Link>

//               {/* Cart Items */}
//               {cartItems.map((item) => (

//                 <FadeAnimation
//                   key={item.id}
//                 >

//                   <CartItem item={item} />

//                 </FadeAnimation>

//               ))}

//             </div>

//             {/* Right */}
//             <div>

//               <FadeAnimation>

//                 <CartSummary
//                   cartItems={cartItems}
//                 />

//               </FadeAnimation>

//             </div>

//           </div>

//         )}

//       </section>

//     </div>
//   );
// };

// export default Cart;



import React, {
  useContext,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

/* Context */
import {
  CartContext,
} from "../context/CartContext";

/* Components */
import CartItem from "../components/cart/CartItem";

import CartSummary from "../components/cart/CartSummary";

import EmptyState from "../components/common/EmptyState";

import FadeAnimation from "../components/animations/FadeAnimation";

/* Icons */
// import {
//   FaShoppingCart,
//   FaArrowLeft,
// } from "react-icons/fa";

const Cart = () => {

  /* =========================
      CONTEXT
  ========================== */

  const {
    cartItems,
    clearCart,
  } = useContext(
    CartContext
  );

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
          //   <FaShoppingCart />
          // }
          title="Your Cart Is Empty"
          description="
            Looks like you have not
            added any snacks yet.
          "
          buttonText="Shop Products"
          buttonLink="/products"
        />

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
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-5
              mb-12
            "
          >

            {/* Title */}

            <div>

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
                  mb-4
                "
              >

                Shopping Cart

              </span>

              <h1
                className="
                  text-4xl
                  md:text-5xl
                  font-bold
                  text-[#1a1a1a]
                "
              >

                Your Cart

              </h1>

            </div>

            {/* Actions */}

            <div
              className="
                flex
                flex-wrap
                gap-4
              "
            >

              <Link
                to="/products"
                className="
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-gray-300
                  px-6
                  py-3
                  rounded-full
                  font-medium
                  hover:bg-gray-100
                  transition
                "
              >

                {/* <FaArrowLeft /> */}

                Continue Shopping

              </Link>

              <button
                onClick={
                  clearCart
                }
                className="
                  bg-red-500
                  hover:bg-red-600
                  text-white
                  px-6
                  py-3
                  rounded-full
                  font-medium
                  transition
                "
              >

                Clear Cart

              </button>

            </div>

          </div>

        </FadeAnimation>

        {/* =========================
            CART CONTENT
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
              CART ITEMS
          ========================== */}

          <div
            className="
              lg:col-span-2
              flex
              flex-col
              gap-6
            "
          >

            {cartItems.map(
              (item, index) => (

                <FadeAnimation
                  key={item._id}
                  delay={
                    index * 0.1
                  }
                >

                  <CartItem
                    item={item}
                  />

                </FadeAnimation>
              )
            )}

          </div>

          {/* =========================
              CART SUMMARY
          ========================== */}

          <div>

            <FadeAnimation>

              <CartSummary
                onCheckout={() =>
                  navigate(
                    "/checkout"
                  )
                }
              />

            </FadeAnimation>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Cart;