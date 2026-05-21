// import React from "react";

// import { useParams } from "react-router-dom";

// /* Components */
// import ProductDetailsCard from "../components/products/ProductDetailsCard";

// import FadeAnimation from "../components/animations/FadeAnimation";

// import ProductList from "../components/products/ProductList";

// /* Icons */
// import {
//   FaChevronRight,
//   FaHome,
// } from "react-icons/fa";

// const ProductDetails = () => {

//   const { id } = useParams();

//   return (
//     <div className="w-full bg-white min-h-screen">

//       {/* Breadcrumb */}
//       <section
//         className="
//           w-full
//           bg-[#fff8dc]
//           py-6
//         "
//       >

//         <div
//           className="
//             w-[90%]
//             max-w-[1300px]
//             mx-auto
//             flex
//             items-center
//             flex-wrap
//             gap-3
//             text-sm
//             text-gray-600
//           "
//         >

//           <FaHome />

//           <span>
//             Home
//           </span>

//           <FaChevronRight
//             className="text-xs"
//           />

//           <span>
//             Products
//           </span>

//           <FaChevronRight
//             className="text-xs"
//           />

//           <span
//             className="
//               text-[#1a1a1a]
//               font-semibold
//             "
//           >
//             Product Details
//           </span>

//         </div>

//       </section>

//       {/* Product Details */}
//       <section
//         className="
//           w-[90%]
//           max-w-[1300px]
//           mx-auto
//           py-16
//         "
//       >

//         <FadeAnimation>

//           <ProductDetailsCard
//             productId={id}
//           />

//         </FadeAnimation>

//       </section>

//       {/* Related Products */}
//       <section
//         className="
//           w-[90%]
//           max-w-[1300px]
//           mx-auto
//           pb-24
//         "
//       >

//         {/* Heading */}
//         <div
//           className="
//             text-center
//             mb-14
//           "
//         >

//           <span
//             className="
//               inline-block
//               bg-[#f7d046]
//               text-[#1a1a1a]
//               px-5
//               py-2
//               rounded-full
//               text-sm
//               font-bold
//               mb-5
//             "
//           >
//             You May Also Like
//           </span>

//           <h2
//             className="
//               text-4xl
//               md:text-5xl
//               font-bold
//               text-[#1a1a1a]
//               mb-5
//             "
//           >
//             Related Products
//           </h2>

//           <p
//             className="
//               max-w-2xl
//               mx-auto
//               text-gray-600
//               leading-8
//             "
//           >
//             Explore more traditional Kerala
//             snacks crafted with authentic taste
//             and premium ingredients.
//           </p>

//         </div>

//         {/* Products */}
//         <FadeAnimation>

//           <ProductList />

//         </FadeAnimation>

//       </section>

//     </div>
//   );
// };

// export default ProductDetails;





import React, {
  useContext,
  useEffect,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

/* Context */
import {
  ProductContext,
} from "../context/ProductContext";

import {
  CartContext,
} from "../context/CartContext";

/* Components */
import ProductDetailsCard from "../components/products/ProductDetailsCard";

import Loader from "../components/common/Loader";

import Button from "../components/common/Button";

import FadeAnimation from "../components/animations/FadeAnimation";

/* Icons */
// import {
//   FaArrowLeft,
//   FaShoppingCart,
// } from "react-icons/fa";

const ProductDetails = () => {

  /* =========================
      PARAMS
  ========================== */

  const { id } =
    useParams();

  /* =========================
      CONTEXT
  ========================== */

  const {
    singleProduct,
    getSingleProduct,
    loading,
    error,
  } = useContext(
    ProductContext
  );

  const {
    addToCart,
  } = useContext(
    CartContext
  );

  /* =========================
      LOAD PRODUCT
  ========================== */

  useEffect(() => {

    if (id) {

      getSingleProduct(id);
    }

  }, [id, getSingleProduct]);

  /* =========================
      ADD TO CART
  ========================== */

  const handleAddToCart =
    () => {

      if (singleProduct) {

        addToCart(
          singleProduct
        );
      }
    };

  /* =========================
      LOADING
  ========================== */

  if (loading) {

    return (

      <div
        className="
          w-full
          min-h-screen
          flex
          items-center
          justify-center
          bg-white
        "
      >

        <Loader />

      </div>
    );
  }

  /* =========================
      ERROR
  ========================== */

  if (error) {

    return (

      <div
        className="
          w-full
          min-h-screen
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-5
        "
      >

        <h2
          className="
            text-3xl
            font-bold
            text-red-500
            mb-4
          "
        >

          {error}

        </h2>

        <Link
          to="/products"
        >

          <Button
            text="Back To Products"
          />

        </Link>

      </div>
    );
  }

  /* =========================
      NO PRODUCT
  ========================== */

  if (!singleProduct) {

    return null;
  }

  return (

    <div
      className="
        w-full
        bg-white
        min-h-screen
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
            BACK BUTTON
        ========================== */}

        <FadeAnimation>

          <Link
            to="/products"
            className="
              inline-flex
              items-center
              gap-3
              text-gray-700
              hover:text-black
              transition
              mb-10
              font-medium
            "
          >

            {/* <FaArrowLeft /> */}

            Back To Products

          </Link>

        </FadeAnimation>

        {/* =========================
            PRODUCT DETAILS
        ========================== */}

        <FadeAnimation>

          <ProductDetailsCard
            product={
              singleProduct
            }
            onAddToCart={
              handleAddToCart
            }
          />

        </FadeAnimation>

        {/* =========================
            EXTRA INFO
        ========================== */}

        <section
          className="
            mt-20
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
          "
        >

          {/* Shipping */}

          <div
            className="
              bg-[#fffdf4]
              rounded-3xl
              p-8
              shadow-sm
            "
          >

            <h3
              className="
                text-2xl
                font-bold
                mb-4
                text-[#1a1a1a]
              "
            >

              Fast Delivery

            </h3>

            <p
              className="
                text-gray-600
                leading-8
              "
            >

              Quick and safe
              delivery across India
              with secure packaging.

            </p>

          </div>

          {/* Quality */}

          <div
            className="
              bg-[#fffdf4]
              rounded-3xl
              p-8
              shadow-sm
            "
          >

            <h3
              className="
                text-2xl
                font-bold
                mb-4
                text-[#1a1a1a]
              "
            >

              Premium Quality

            </h3>

            <p
              className="
                text-gray-600
                leading-8
              "
            >

              Made with authentic
              ingredients and
              traditional Kerala
              recipes.

            </p>

          </div>

          {/* Cart */}

          <div
            className="
              bg-[#fffdf4]
              rounded-3xl
              p-8
              shadow-sm
            "
          >

            <h3
              className="
                text-2xl
                font-bold
                mb-4
                text-[#1a1a1a]
              "
            >

              Easy Checkout

            </h3>

            <p
              className="
                text-gray-600
                leading-8
                mb-6
              "
            >

              Add your favorite
              snacks to cart and
              complete your order
              easily.

            </p>

            <button
              onClick={
                handleAddToCart
              }
              className="
                inline-flex
                items-center
                gap-3
                bg-[#f7d046]
                hover:bg-[#e5bf33]
                text-black
                px-6
                py-3
                rounded-full
                font-semibold
                transition
              "
            >

              {/* <FaShoppingCart /> */}

              Add To Cart

            </button>

          </div>

        </section>

      </div>

    </div>
  );
};

export default ProductDetails;