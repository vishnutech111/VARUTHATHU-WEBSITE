// import React, { useState } from "react";
// import {
//   FaSearch,
//   FaSlidersH,
// } from "react-icons/fa";

// import "./Product.css";

// const ProductFilter = () => {

//   const [selectedCategory, setSelectedCategory] =
//     useState("All");

//   const categories = [
//     "All",
//     "Banana Chips",
//     "Tapioca Chips",
//     "Jackfruit Snacks",
//     "Traditional Snacks",
//     "Sweet Snacks",
//   ];

//   return (
//     <section className="product-filter-section">

//       {/* Top Filter Row */}
//       <div className="filter-top">

//         {/* Search Box */}
//         <div className="search-box">

//           <FaSearch className="search-icon" />

//           <input
//             type="text"
//             placeholder="Search snacks..."
//           />

//         </div>

//         {/* Sort Dropdown */}
//         <div className="sort-box">

//           <FaSlidersH className="filter-icon" />

//           <select>

//             <option>
//               Sort By
//             </option>

//             <option>
//               Price: Low to High
//             </option>

//             <option>
//               Price: High to Low
//             </option>

//             <option>
//               Popularity
//             </option>

//             <option>
//               New Arrivals
//             </option>

//           </select>

//         </div>

//       </div>

//       {/* Category Filters */}
//       <div className="category-filters">

//         {categories.map((category, index) => (

//           <button
//             key={index}
//             className={
//               selectedCategory === category
//                 ? "filter-btn active-filter"
//                 : "filter-btn"
//             }
//             onClick={() =>
//               setSelectedCategory(category)
//             }
//           >
//             {category}
//           </button>

//         ))}

//       </div>

//     </section>
//   );
// };

// export default ProductFilter;

import React, {
  useContext,
  useState,
} from "react";

/* Context */
import {
  ProductContext,
} from "../../context/ProductContext";

/* Styles */
import "./Product.css";

const ProductFilter = () => {

  /* =========================
      CONTEXT
  ========================== */

  const productContext =
    useContext(ProductContext);

  /* Safety */
  const categories =
    productContext?.categories || [];

  const filterProducts =
    productContext?.filterProducts;

  /* =========================
      STATES
  ========================== */

  const [category,
    setCategory] =
    useState("");

  const [minPrice,
    setMinPrice] =
    useState("");

  const [maxPrice,
    setMaxPrice] =
    useState("");

  /* =========================
      APPLY FILTER
  ========================== */

  const handleFilter =
    async (e) => {

      e.preventDefault();

      if (filterProducts) {

        await filterProducts({
          category,
          minPrice,
          maxPrice,
        });
      }
    };

  /* =========================
      RESET FILTER
  ========================== */

  const resetFilter = () => {

    setCategory("");

    setMinPrice("");

    setMaxPrice("");

    if (filterProducts) {

      filterProducts({
        category: "",
        minPrice: "",
        maxPrice: "",
      });
    }
  };

  return (

    <div className="product-filter">

      <h3 className="filter-title">

        Filter Products

      </h3>

      <form
        onSubmit={handleFilter}
        className="filter-form"
      >

        {/* =========================
            CATEGORY
        ========================== */}

        <div className="filter-group">

          <label>

            Category

          </label>

          <select
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
          >

            <option value="">

              All Categories

            </option>

            {categories.map(
              (item, index) => (

                <option
                  key={index}
                  value={item}
                >

                  {item}

                </option>

              )
            )}

          </select>

        </div>

        {/* =========================
            MIN PRICE
        ========================== */}

        <div className="filter-group">

          <label>

            Min Price

          </label>

          <input
            type="number"
            placeholder="₹ 0"
            value={minPrice}
            onChange={(e) =>
              setMinPrice(
                e.target.value
              )
            }
          />

        </div>

        {/* =========================
            MAX PRICE
        ========================== */}

        <div className="filter-group">

          <label>

            Max Price

          </label>

          <input
            type="number"
            placeholder="₹ 1000"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(
                e.target.value
              )
            }
          />

        </div>

        {/* =========================
            BUTTONS
        ========================== */}

        <div className="filter-buttons">

          <button
            type="submit"
            className="apply-btn"
          >

            Apply Filter

          </button>

          <button
            type="button"
            className="reset-btn"
            onClick={resetFilter}
          >

            Reset

          </button>

        </div>

      </form>

    </div>
  );
};

export default ProductFilter;