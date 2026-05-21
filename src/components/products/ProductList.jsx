// import React from "react";
// import ProductCard from "./ProductCard";

// import "./Product.css";

// /* Sample Product Images */
// import BananaChips from "../../assets/products/banana-chips.png";
// import TapiocaChips from "../../assets/products/tapioca-chips.png";
// import JackfruitChips from "../../assets/products/jackfruit-chips.png";
// import Mixture from "../../assets/products/mixture.png";

// const ProductList = () => {

//   /* Dummy Product Data */
//   const products = [
//     {
//       _id: 1,
//       name: "Classic Banana Chips",
//       image: BananaChips,
//       price: 120,
//       category: "Banana Chips",
//       ratings: 4.8,
//     },
//     {
//       _id: 2,
//       name: "Spicy Tapioca Chips",
//       image: TapiocaChips,
//       price: 140,
//       category: "Tapioca Chips",
//       ratings: 4.7,
//     },
//     {
//       _id: 3,
//       name: "Jackfruit Chips",
//       image: JackfruitChips,
//       price: 180,
//       category: "Jackfruit Snacks",
//       ratings: 4.9,
//     },
//     {
//       _id: 4,
//       name: "Kerala Mixture",
//       image: Mixture,
//       price: 160,
//       category: "Traditional Snacks",
//       ratings: 4.6,
//     },
//   ];

//   return (
//     <section className="products-section">

//       {/* Section Heading */}
//       <div className="section-header">

//         <span className="section-tag">
//           Freshly Made Snacks
//         </span>

//         <h2>
//           Our Popular Products
//         </h2>

//         <p>
//           Handmade Kerala snacks crafted with authentic ingredients,
//           consistency, and traditional taste.
//         </p>

//       </div>

//       {/* Products Grid */}
//       <div className="products-grid">

//         {products.map((product) => (
//           <ProductCard
//             key={product._id}
//             product={product}
//           />
//         ))}

//       </div>

//     </section>
//   );
// };

// export default ProductList;



import React, {
  useContext,
  useEffect,
} from "react";

import {
  Link,
} from "react-router-dom";

/* Context */
import {
  ProductContext,
} from "../../context/ProductContext";

/* Components */
import ProductCard from "./ProductCard";

/* Styles */
import "./Product.css";

const ProductList = () => {

  /* =========================
      CONTEXT
  ========================== */

  const productContext =
    useContext(ProductContext);

  /* Safety */
  const products =
    productContext?.products || [];

  const loading =
    productContext?.loading;

  const getProducts =
    productContext?.getProducts;

  /* =========================
      FETCH PRODUCTS
  ========================== */

  useEffect(() => {

    if (
      getProducts &&
      products.length === 0
    ) {

      getProducts();
    }

  }, []);

  /* =========================
      LOADING
  ========================== */

  if (loading) {

    return (

      <section className="product-list-section">

        <div className="product-loading">

          Loading products...

        </div>

      </section>
    );
  }

  return (

    <section className="product-list-section">

      {/* =========================
          TOP
      ========================== */}

      <div className="product-list-top">

        <div>

          <span className="section-badge">

            Best Selling Snacks

          </span>

          <h2 className="section-title">

            Featured Products

          </h2>

        </div>

        <Link
          to="/products"
          className="view-all-btn"
        >

          View All

        </Link>

      </div>

      {/* =========================
          PRODUCTS GRID
      ========================== */}

      <div className="products-grid">

        {products.length > 0 ? (

          products
            .slice(0, 8)
            .map((product) => (

              <ProductCard
                key={product._id}
                product={product}
              />

            ))

        ) : (

          <div className="no-products">

            No products found.

          </div>

        )}

      </div>

    </section>
  );
};

export default ProductList;