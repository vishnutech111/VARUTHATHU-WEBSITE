// import React, { useState } from "react";

// import {
//   FaSearch,
//   FaTimes,
// } from "react-icons/fa";

// import "./Common.css";

// const SearchBar = ({
//   placeholder = "Search products...",
//   onSearch,
// }) => {

//   const [searchTerm, setSearchTerm] =
//     useState("");

//   /* Handle Search */
//   const handleSearch = (e) => {

//     const value = e.target.value;

//     setSearchTerm(value);

//     if (onSearch) {
//       onSearch(value);
//     }
//   };

//   /* Clear Input */
//   const clearSearch = () => {

//     setSearchTerm("");

//     if (onSearch) {
//       onSearch("");
//     }
//   };

//   return (
//     <div className="searchbar-container">

//       {/* Search Icon */}
//       <FaSearch className="search-icon" />

//       {/* Input */}
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={handleSearch}
//         placeholder={placeholder}
//         className="search-input"
//       />

//       {/* Clear Button */}
//       {searchTerm && (

//         <button
//           className="clear-search-btn"
//           onClick={clearSearch}
//         >

//           <FaTimes />

//         </button>

//       )}

//     </div>
//   );
// };

// export default SearchBar;


import React, {
  useState,
} from "react";

// import {
//   FaSearch,
//   FaTimes,
// } from "react-icons/fa";

/* Styles */
import "./Common.css";

const SearchBar = ({
  placeholder = "Search products...",
  onSearch,
  className = "",
}) => {

  /* =========================
      STATE
  ========================== */

  const [keyword,
    setKeyword] =
    useState("");

  /* =========================
      HANDLE SEARCH
  ========================== */

  const handleSearch =
    (e) => {

      e.preventDefault();

      if (onSearch) {

        onSearch(
          keyword.trim()
        );
      }
    };

  /* =========================
      CLEAR SEARCH
  ========================== */

  const clearSearch =
    () => {

      setKeyword("");

      if (onSearch) {

        onSearch("");
      }
    };

  return (

    <form
      className={`searchbar ${className}`}
      onSubmit={handleSearch}
    >

      {/* =========================
          SEARCH INPUT
      ========================== */}

      <div className="searchbar-input-wrapper">

        {/* <FaSearch className="search-icon" /> */}

        <input
          type="text"
          value={keyword}
          placeholder={placeholder}
          onChange={(e) =>
            setKeyword(
              e.target.value
            )
          }
          className="searchbar-input"
        />

        {/* Clear Button */}

        {keyword && (

          <button
            type="button"
            className="clear-search-btn"
            onClick={clearSearch}
          >

            {/* <FaTimes /> */}

          </button>

        )}

      </div>

      {/* =========================
          SEARCH BUTTON
      ========================== */}

      <button
        type="submit"
        className="search-btn"
      >

        Search

      </button>

    </form>
  );
};

export default SearchBar;