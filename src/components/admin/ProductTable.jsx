// import React from "react";

// import {
//   FaEdit,
//   FaTrash,
//   FaEye,
// } from "react-icons/fa";

// import "./Admin.css";

// /* Sample Images */
// import BananaChips from "../../assets/products/banana-chips.png";
// import TapiocaChips from "../../assets/products/tapioca-chips.png";
// import JackfruitChips from "../../assets/products/jackfruit-chips.png";

// const ProductTable = () => {

//   /* Dummy Products */
//   const products = [
//     {
//       id: 1,
//       image: BananaChips,
//       name: "Classic Banana Chips",
//       category: "Banana Chips",
//       price: 120,
//       stock: 45,
//       status: "Active",
//     },
//     {
//       id: 2,
//       image: TapiocaChips,
//       name: "Spicy Tapioca Chips",
//       category: "Tapioca Snacks",
//       price: 140,
//       stock: 28,
//       status: "Active",
//     },
//     {
//       id: 3,
//       image: JackfruitChips,
//       name: "Jackfruit Chips",
//       category: "Jackfruit Snacks",
//       price: 180,
//       stock: 0,
//       status: "Out of Stock",
//     },
//   ];

//   return (
//     <div className="product-table-wrapper">

//       {/* Header */}
//       <div className="table-header">

//         <div>

//           <h2>
//             Products List
//           </h2>

//           <p>
//             Manage all products from here
//           </p>

//         </div>

//         <button className="add-product-btn">
//           Add Product
//         </button>

//       </div>

//       {/* Table */}
//       <div className="table-responsive">

//         <table className="product-table">

//           <thead>

//             <tr>

//               <th>Product</th>

//               <th>Category</th>

//               <th>Price</th>

//               <th>Stock</th>

//               <th>Status</th>

//               <th>Actions</th>

//             </tr>

//           </thead>

//           <tbody>

//             {products.map((product) => (

//               <tr key={product.id}>

//                 {/* Product */}
//                 <td>

//                   <div className="table-product">

//                     <img
//                       src={product.image}
//                       alt={product.name}
//                     />

//                     <div>

//                       <h4>
//                         {product.name}
//                       </h4>

//                       <p>
//                         ID : #{product.id}
//                       </p>

//                     </div>

//                   </div>

//                 </td>

//                 {/* Category */}
//                 <td>
//                   {product.category}
//                 </td>

//                 {/* Price */}
//                 <td>
//                   ₹{product.price}
//                 </td>

//                 {/* Stock */}
//                 <td>
//                   {product.stock}
//                 </td>

//                 {/* Status */}
//                 <td>

//                   <span
//                     className={
//                       product.status === "Active"
//                         ? "status-badge active-status"
//                         : "status-badge out-status"
//                     }
//                   >
//                     {product.status}
//                   </span>

//                 </td>

//                 {/* Actions */}
//                 <td>

//                   <div className="table-actions">

//                     <button className="view-btn">

//                       <FaEye />

//                     </button>

//                     <button className="edit-btn">

//                       <FaEdit />

//                     </button>

//                     <button className="delete-btn">

//                       <FaTrash />

//                     </button>

//                   </div>

//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>

//       </div>

//     </div>
//   );
// };

// export default ProductTable;

import React, {
  useContext,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  FaEdit,
  FaTrash,
} from "react-icons/fa";

/* Context */
import {
  ProductContext,
} from "../../context/ProductContext";

/* Styles */
import "./Admin.css";

const ProductTable = () => {

  /* =========================
      CONTEXT
  ========================== */

  const productContext =
    useContext(ProductContext);

  const products =
    productContext?.products || [];

  const deleteProduct =
    productContext?.deleteProduct;

  const loading =
    productContext?.loading;

  /* =========================
      DELETE PRODUCT
  ========================== */

  const handleDelete =
    async (productId) => {

      const confirmDelete =
        window.confirm(
          "Are you sure you want to delete this product?"
        );

      if (!confirmDelete) {

        return;
      }

      if (deleteProduct) {

        await deleteProduct(
          productId
        );
      }
    };

  /* =========================
      LOADING
  ========================== */

  if (loading) {

    return (

      <div className="product-table-loading">

        Loading products...

      </div>
    );
  }

  return (

    <div className="product-table-wrapper">

      {/* =========================
          HEADER
      ========================== */}

      <div className="product-table-header">

        <h2>

          Product Management

        </h2>

        <Link
          to="/admin/add-product"
          className="add-product-btn"
        >

          Add Product

        </Link>

      </div>

      {/* =========================
          TABLE
      ========================== */}

      <div className="table-responsive">

        <table className="product-table">

          <thead>

            <tr>

              <th>

                Image

              </th>

              <th>

                Product

              </th>

              <th>

                Category

              </th>

              <th>

                Price

              </th>

              <th>

                Stock

              </th>

              <th>

                Actions

              </th>

            </tr>

          </thead>

          <tbody>

            {products.length > 0 ? (

              products.map(
                (product) => (

                  <tr
                    key={product._id}
                  >

                    {/* Image */}

                    <td>

                      <img
                        src={
                          product.image ||
                          "/images/default-product.jpg"
                        }
                        alt={
                          product.name
                        }
                        className="table-product-image"
                      />

                    </td>

                    {/* Name */}

                    <td>

                      <h4>

                        {product.name}

                      </h4>

                    </td>

                    {/* Category */}

                    <td>

                      {product.category ||
                        "Snacks"}

                    </td>

                    {/* Price */}

                    <td>

                      ₹
                      {product.price}

                    </td>

                    {/* Stock */}

                    <td>

                      <span
                        className={
                          product.stock > 0
                            ? "stock in-stock"
                            : "stock out-stock"
                        }
                      >

                        {product.stock > 0
                          ? "In Stock"
                          : "Out Of Stock"}

                      </span>

                    </td>

                    {/* Actions */}

                    <td>

                      <div className="table-actions">

                        {/* Edit */}

                        <Link
                          to={`/admin/edit-product/${product._id}`}
                          className="edit-btn"
                        >

                          <FaEdit />

                        </Link>

                        {/* Delete */}

                        <button
                          className="delete-btn"
                          onClick={() =>
                            handleDelete(
                              product._id
                            )
                          }
                        >

                          <FaTrash />

                        </button>

                      </div>

                    </td>

                  </tr>

                )
              )

            ) : (

              <tr>

                <td
                  colSpan="6"
                  className="no-products"
                >

                  No products available.

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ProductTable;