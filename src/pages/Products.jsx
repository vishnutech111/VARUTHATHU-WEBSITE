// import React, { useState } from "react";

// /* Components */
// import ProductList from "../components/products/ProductList";
// import ProductFilter from "../components/products/ProductFilter";
// import SearchBar from "../components/common/SearchBar";
// import FadeAnimation from "../components/animations/FadeAnimation";

// /* Icons */
// import {
//   FaSlidersH,
// } from "react-icons/fa";

// const Products = () => {

//   const [search, setSearch] =
//     useState("");

//   return (
//     <div className="w-full bg-white min-h-screen">

//       {/* Hero Section */}
//       <section
//         className="
//           w-full
//           bg-[#fff8dc]
//           py-24
//           px-5
//           text-center
//         "
//       >

//         <FadeAnimation>

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
//             Our Products
//           </span>

//           <h1
//             className="
//               text-4xl
//               md:text-6xl
//               font-bold
//               text-[#1a1a1a]
//               mb-6
//             "
//           >
//             Authentic Kerala Snacks
//           </h1>

//           <p
//             className="
//               max-w-3xl
//               mx-auto
//               text-gray-600
//               leading-8
//               text-lg
//             "
//           >
//             Explore our collection of
//             traditional Kerala chips and snacks
//             made with consistency, real
//             ingredients, and authentic taste.
//           </p>

//         </FadeAnimation>

//       </section>

//       {/* Products Section */}
//       <section
//         className="
//           w-[90%]
//           max-w-[1400px]
//           mx-auto
//           py-20
//         "
//       >

//         {/* Top Bar */}
//         <div
//           className="
//             flex
//             flex-col
//             lg:flex-row
//             gap-6
//             items-start
//             lg:items-center
//             justify-between
//             mb-12
//           "
//         >

//           {/* Search */}
//           <div className="w-full lg:w-[400px]">

//             <SearchBar
//               placeholder="Search snacks..."
//               onSearch={setSearch}
//             />

//           </div>

//           {/* Filter */}
//           <div
//             className="
//               flex
//               items-center
//               gap-3
//             "
//           >

//             <FaSlidersH
//               className="
//                 text-[#f7d046]
//                 text-xl
//               "
//             />

//             <h3
//               className="
//                 text-xl
//                 font-bold
//                 text-[#1a1a1a]
//               "
//             >
//               Filter Products
//             </h3>

//           </div>

//         </div>

//         {/* Filter Component */}
//         <div className="mb-12">

//           <ProductFilter />

//         </div>

//         {/* Product List */}
//         <FadeAnimation>

//           <ProductList
//             searchTerm={search}
//           />

//         </FadeAnimation>

//       </section>

//     </div>
//   );
// };

// export default Products;




import React, {
  useContext,
  useEffect,
  useState,
} from "react";

/* Context */
import {
  ProductContext,
} from "../context/ProductContext";

/* Components */
import ProductCard from "../components/products/ProductCard";

import ProductFilter from "../components/products/ProductFilter";

import SearchBar from "../components/common/SearchBar";

import Loader from "../components/common/Loader";

import EmptyState from "../components/common/EmptyState";

import FadeAnimation from "../components/animations/FadeAnimation";
import "./Products.css";
/* Icons */
import {
  FaBoxOpen,
} from "react-icons/fa";

const Products = () => {

  /* =========================
      CONTEXT
  ========================== */

  const {
    products,
    loading,
    error,
    getProducts,
    searchProducts,
    filterProducts,
  } = useContext(
    ProductContext
  );

  /* =========================
      FILTER STATE
  ========================== */

  const [selectedCategory,
    setSelectedCategory] =
    useState("");

  /* =========================
      LOAD PRODUCTS
  ========================== */

  useEffect(() => {

    getProducts();

  }, [getProducts]);

  /* =========================
      HANDLE SEARCH
  ========================== */

  const handleSearch =
    async (keyword) => {

      if (!keyword) {

        getProducts();

        return;
      }

      await searchProducts(
        keyword
      );
    };

  /* =========================
      HANDLE FILTER
  ========================== */

  const handleFilter =
    async (filters) => {

      setSelectedCategory(
        filters.category
      );

      await filterProducts(
        filters
      );
    };

  return (

    // <div
    //   className="
    //     w-full
    //     bg-white
    //     min-h-screen
    //     py-16
    //     px-5
    //     md:px-10
    //   "
    // >

    //   {/* =========================
    //       HEADER
    //   ========================== */}

    //   <div
    //     className="
    //       max-w-7xl
    //       mx-auto
    //       mb-14
    //     "
    //   >

    //     <FadeAnimation>

    //       <div
    //         className="
    //           text-center
    //           mb-10
    //         "
    //       >

    //         <span
    //           className="
    //             inline-block
    //             bg-[#f7d046]
    //             text-[#1a1a1a]
    //             px-5
    //             py-2
    //             rounded-full
    //             text-sm
    //             font-bold
    //             mb-5
    //           "
    //         >

    //           Our Products

    //         </span>

    //         <h1
    //           className="
    //             text-4xl
    //             md:text-5xl
    //             font-bold
    //             text-[#1a1a1a]
    //             mb-5
    //           "
    //         >

    //           Traditional Kerala Snacks

    //         </h1>

    //         <p
    //           className="
    //             text-gray-600
    //             max-w-2xl
    //             mx-auto
    //             leading-8
    //           "
    //         >

    //           Discover authentic
    //           Kerala chips and snacks
    //           made with quality
    //           ingredients and
    //           traditional recipes.

    //         </p>

    //       </div>

    //     </FadeAnimation>

    //     {/* =========================
    //         SEARCH BAR
    //     ========================== */}

    //     <div
    //       className="
    //         mb-8
    //       "
    //     >

    //       <SearchBar
    //         placeholder="Search snacks..."
    //         onSearch={
    //           handleSearch
    //         }
    //       />

    //     </div>

    //     {/* =========================
    //         FILTER
    //     ========================== */}

    //     <ProductFilter
    //       selectedCategory={
    //         selectedCategory
    //       }
    //       onFilter={
    //         handleFilter
    //       }
    //     />

    //   </div>

    //   {/* =========================
    //       PRODUCTS LIST
    //   ========================== */}

    //   <div
    //     className="
    //       max-w-7xl
    //       mx-auto
    //     "
    //   >

    //     {/* Loader */}

    //     {loading && (

    //       <div
    //         className="
    //           flex
    //           justify-center
    //           items-center
    //           py-24
    //         "
    //       >

    //         <Loader />

    //       </div>

    //     )}

    //     {/* Error */}

    //     {!loading && error && (

    //       <div
    //         className="
    //           text-center
    //           text-red-500
    //           font-medium
    //           py-10
    //         "
    //       >

    //         {error}

    //       </div>

    //     )}

    //     {/* Empty */}

    //     {!loading &&
    //       products?.length === 0 && (

    //       <EmptyState
    //         icon={
    //           <FaBoxOpen />
    //         }
    //         title="No Products Found"
    //         description="
    //           Try searching with a
    //           different keyword or
    //           filter category.
    //         "
    //         buttonText="View All Products"
    //         buttonLink="/products"
    //       />

    //     )}

    //     {/* Product Grid */}

    //     {!loading &&
    //       products?.length > 0 && (

    //       <div
    //         className="
    //           grid
    //           grid-cols-1
    //           sm:grid-cols-2
    //           lg:grid-cols-3
    //           xl:grid-cols-4
    //           gap-8
    //         "
    //       >

    //         {products.map(
    //           (product, index) => (

    //             <FadeAnimation
    //               key={product._id}
    //               delay={
    //                 index * 0.1
    //               }
    //             >

    //               <ProductCard
    //                 product={product}
    //               />

    //             </FadeAnimation>
    //           )
    //         )}

    //       </div>

    //     )}

    //   </div>

    // </div>

    <div className="products-page">

<div className="products-container">

<FadeAnimation>

<div className="products-header">

<span className="products-badge">
Our Products
</span>

<h1 className="products-title">
Traditional Kerala Snacks
</h1>

<p className="products-text">
Discover authentic
Kerala chips and snacks
made with quality
ingredients and
traditional recipes.
</p>

</div>

</FadeAnimation>

<div className="products-search">

<SearchBar
  placeholder="Search snacks..."
  onSearch={handleSearch}
/>

</div>

<div className="products-filter">

<ProductFilter
  selectedCategory={selectedCategory}
  onFilter={handleFilter}
/>

</div>

</div>

<div className="products-container">

{loading && (

<div className="products-loader">
<Loader />
</div>

)}

{!loading && error && (

<div className="products-error">
{error}
</div>

)}

{!loading &&
products?.length === 0 && (

<div className="products-empty">

<EmptyState
  icon={<FaBoxOpen />}
  title="No Products Found"
  description="
    Try searching with a
    different keyword or
    filter category.
  "
  buttonText="View All Products"
  buttonLink="/products"
/>

</div>

)}

{!loading &&
products?.length > 0 && (

<div className="products-grid">

{products.map(
  (product, index) => (

    <FadeAnimation
      key={product._id}
      delay={index * 0.1}
    >

      <ProductCard
        product={product}
      />

    </FadeAnimation>
  )
)}

</div>

)}

</div>

</div>
  );
};

export default Products;