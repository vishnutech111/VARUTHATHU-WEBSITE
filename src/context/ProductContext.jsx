// import React, {
//   createContext,
//   useEffect,
//   useState,
// } from "react";

// import axios from "axios";

// /* Create Context */
// export const ProductContext =
//   createContext();

// /* Provider */
// const ProductProvider = ({
//   children,
// }) => {

//   /* =========================
//       STATES
//   ========================== */

//   const [products, setProducts] =
//     useState([]);

//   const [featuredProducts,
//     setFeaturedProducts] =
//     useState([]);

//   const [singleProduct,
//     setSingleProduct] =
//     useState(null);

//   const [categories,
//     setCategories] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(false);

//   const [error, setError] =
//     useState(null);

//   /* API URL */
//   const BASE_URL =
//     process.env
//       .REACT_APP_API_URL ||
//     "http://localhost:5000/api";

//   /* =========================
//       GET ALL PRODUCTS
//   ========================== */

//   const getProducts =
//     async () => {

//       try {

//         setLoading(true);

//         const response =
//           await axios.get(
//             `${BASE_URL}/products`
//           );

//         setProducts(
//           response.data.products
//         );

//       } catch (error) {

//         console.log(error);

//         setError(
//           "Failed to fetch products"
//         );

//       } finally {

//         setLoading(false);
//       }
//     };

//   /* =========================
//       GET FEATURED PRODUCTS
//   ========================== */

//   const getFeaturedProducts =
//     async () => {

//       try {

//         const response =
//           await axios.get(
//             `${BASE_URL}/products/featured`
//           );

//         setFeaturedProducts(
//           response.data.products
//         );

//       } catch (error) {

//         console.log(error);
//       }
//     };

//   /* =========================
//       GET SINGLE PRODUCT
//   ========================== */

//   const getSingleProduct =
//     async (id) => {

//       try {

//         setLoading(true);

//         const response =
//           await axios.get(
//             `${BASE_URL}/products/${id}`
//           );

//         setSingleProduct(
//           response.data.product
//         );

//       } catch (error) {

//         console.log(error);

//         setError(
//           "Product not found"
//         );

//       } finally {

//         setLoading(false);
//       }
//     };

//   /* =========================
//       GET CATEGORIES
//   ========================== */

//   const getCategories =
//     async () => {

//       try {

//         const response =
//           await axios.get(
//             `${BASE_URL}/products/categories`
//           );

//         setCategories(
//           response.data.categories
//         );

//       } catch (error) {

//         console.log(error);
//       }
//     };

//   /* =========================
//       SEARCH PRODUCTS
//   ========================== */

//   const searchProducts =
//     async (keyword) => {

//       try {

//         setLoading(true);

//         const response =
//           await axios.get(
//             `${BASE_URL}/products/search/${keyword}`
//           );

//         setProducts(
//           response.data.products
//         );

//       } catch (error) {

//         console.log(error);

//         setError(
//           "No products found"
//         );

//       } finally {

//         setLoading(false);
//       }
//     };

//   /* =========================
//       FILTER PRODUCTS
//   ========================== */

//   const filterProducts =
//     async ({
//       category,
//       minPrice,
//       maxPrice,
//     }) => {

//       try {

//         setLoading(true);

//         const response =
//           await axios.get(
//             `${BASE_URL}/products/filter`,
//             {
//               params: {
//                 category,
//                 minPrice,
//                 maxPrice,
//               },
//             }
//           );

//         setProducts(
//           response.data.products
//         );

//       } catch (error) {

//         console.log(error);

//         setError(
//           "Filter failed"
//         );

//       } finally {

//         setLoading(false);
//       }
//     };

//   /* =========================
//       ADMIN ADD PRODUCT
//   ========================== */

//   const addProduct =
//     async (productData) => {

//       try {

//         const token =
//           localStorage.getItem(
//             "varuthathu_token"
//           );

//         const response =
//           await axios.post(
//             `${BASE_URL}/products`,
//             productData,
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//                 "Content-Type":
//                   "multipart/form-data",
//               },
//             }
//           );

//         setProducts([
//           ...products,
//           response.data.product,
//         ]);

//         return {
//           success: true,
//           message:
//             "Product added successfully",
//         };

//       } catch (error) {

//         return {
//           success: false,
//           message:
//             error.response?.data
//               ?.message ||
//             "Failed to add product",
//         };
//       }
//     };

//   /* =========================
//       ADMIN UPDATE PRODUCT
//   ========================== */

//   const updateProduct =
//     async (
//       productId,
//       updatedData
//     ) => {

//       try {

//         const token =
//           localStorage.getItem(
//             "varuthathu_token"
//           );

//         const response =
//           await axios.put(
//             `${BASE_URL}/products/${productId}`,
//             updatedData,
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//                 "Content-Type":
//                   "multipart/form-data",
//               },
//             }
//           );

//         const updatedProducts =
//           products.map((item) =>
//             item._id === productId
//               ? response.data.product
//               : item
//           );

//         setProducts(
//           updatedProducts
//         );

//         return {
//           success: true,
//           message:
//             "Product updated successfully",
//         };

//       } catch (error) {

//         return {
//           success: false,
//           message:
//             error.response?.data
//               ?.message ||
//             "Failed to update product",
//         };
//       }
//     };

//   /* =========================
//       ADMIN DELETE PRODUCT
//   ========================== */

//   const deleteProduct =
//     async (productId) => {

//       try {

//         const token =
//           localStorage.getItem(
//             "varuthathu_token"
//           );

//         await axios.delete(
//           `${BASE_URL}/products/${productId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         const updatedProducts =
//           products.filter(
//             (item) =>
//               item._id !== productId
//           );

//         setProducts(
//           updatedProducts
//         );

//         return {
//           success: true,
//           message:
//             "Product deleted successfully",
//         };

//       } catch (error) {

//         return {
//           success: false,
//           message:
//             error.response?.data
//               ?.message ||
//             "Failed to delete product",
//         };
//       }
//     };

//   /* =========================
//       INITIAL LOAD
//   ========================== */

//   useEffect(() => {

//     getProducts();

//     getFeaturedProducts();

//     getCategories();

//   }, []);

//   return (
//     <ProductContext.Provider
//       value={{

//         /* States */
//         products,
//         featuredProducts,
//         singleProduct,
//         categories,
//         loading,
//         error,

//         /* Methods */
//         getProducts,
//         getFeaturedProducts,
//         getSingleProduct,
//         getCategories,
//         searchProducts,
//         filterProducts,

//         addProduct,
//         updateProduct,
//         deleteProduct,
//       }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export default ProductProvider;




import React, {
  createContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";

/* =========================
    CREATE CONTEXT
========================= */

export const ProductContext =
  createContext();

/* =========================
    PROVIDER
========================= */

const ProductProvider = ({
  children,
}) => {

  /* =========================
      STATES
  ========================== */

  const [products,
    setProducts] =
    useState([]);

  const [
    featuredProducts,
    setFeaturedProducts,
  ] = useState([]);

  const [
    singleProduct,
    setSingleProduct,
  ] = useState(null);

  const [categories,
    setCategories] =
    useState([]);

  const [loading,
    setLoading] =
    useState(false);

  const [error,
    setError] =
    useState(null);

  /* =========================
      API URL
  ========================== */

  const BASE_URL =
    process.env
      .REACT_APP_API_URL ||
    "http://localhost:5000/api";

  /* =========================
      GET ALL PRODUCTS
  ========================== */

  const getProducts =
    async () => {

      try {

        setLoading(true);

        const response =
          await axios.get(
            `${BASE_URL}/products`
          );

        setProducts(
          response.data.products
        );

      } catch (error) {

        console.log(error);

        setError(
          "Failed to fetch products"
        );

      } finally {

        setLoading(false);
      }
    };

  /* =========================
      GET FEATURED PRODUCTS
  ========================== */

  const getFeaturedProducts =
    async () => {

      try {

        const response =
          await axios.get(
            `${BASE_URL}/products/featured`
          );

        setFeaturedProducts(
          response.data.products
        );

      } catch (error) {

        console.log(error);
      }
    };

  /* =========================
      GET SINGLE PRODUCT
  ========================== */

  const getSingleProduct =
    async (id) => {

      try {

        setLoading(true);

        const response =
          await axios.get(
            `${BASE_URL}/products/${id}`
          );

        setSingleProduct(
          response.data.product
        );

      } catch (error) {

        console.log(error);

        setError(
          "Product not found"
        );

      } finally {

        setLoading(false);
      }
    };

  /* =========================
      GET CATEGORIES
  ========================== */

  const getCategories =
    async () => {

      try {

        const response =
          await axios.get(
            `${BASE_URL}/products/categories`
          );

        setCategories(
          response.data.categories
        );

      } catch (error) {

        console.log(error);
      }
    };

  /* =========================
      SEARCH PRODUCTS
  ========================== */

  const searchProducts =
    async (keyword) => {

      try {

        setLoading(true);

        const response =
          await axios.get(
            `${BASE_URL}/products/search/${keyword}`
          );

        setProducts(
          response.data.products
        );

      } catch (error) {

        console.log(error);

        setError(
          "No products found"
        );

      } finally {

        setLoading(false);
      }
    };

  /* =========================
      FILTER PRODUCTS
  ========================== */

  const filterProducts =
    async ({
      category,
      minPrice,
      maxPrice,
    }) => {

      try {

        setLoading(true);

        const response =
          await axios.get(
            `${BASE_URL}/products/filter`,
            {
              params: {
                category,
                minPrice,
                maxPrice,
              },
            }
          );

        setProducts(
          response.data.products
        );

      } catch (error) {

        console.log(error);

        setError(
          "Filter failed"
        );

      } finally {

        setLoading(false);
      }
    };

  /* =========================
      ADMIN ADD PRODUCT
  ========================== */

  const addProduct =
    async (productData) => {

      try {

        const token =
          localStorage.getItem(
            "varuthathu_token"
          );

        const response =
          await axios.post(
            `${BASE_URL}/products`,
            productData,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
                "Content-Type":
                  "multipart/form-data",
              },
            }
          );

        setProducts([
          ...products,
          response.data.product,
        ]);

        return {
          success: true,
          message:
            "Product added successfully",
        };

      } catch (error) {

        return {
          success: false,
          message:
            error.response?.data
              ?.message ||
            "Failed to add product",
        };
      }
    };

  /* =========================
      ADMIN UPDATE PRODUCT
  ========================== */

  const updateProduct =
    async (
      productId,
      updatedData
    ) => {

      try {

        const token =
          localStorage.getItem(
            "varuthathu_token"
          );

        const response =
          await axios.put(
            `${BASE_URL}/products/${productId}`,
            updatedData,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
                "Content-Type":
                  "multipart/form-data",
              },
            }
          );

        const updatedProducts =
          products.map(
            (item) => {

              return item._id ===
                productId
                ? response.data.product
                : item;
            }
          );

        setProducts(
          updatedProducts
        );

        return {
          success: true,
          message:
            "Product updated successfully",
        };

      } catch (error) {

        return {
          success: false,
          message:
            error.response?.data
              ?.message ||
            "Failed to update product",
        };
      }
    };

  /* =========================
      ADMIN DELETE PRODUCT
  ========================== */

  const deleteProduct =
    async (productId) => {

      try {

        const token =
          localStorage.getItem(
            "varuthathu_token"
          );

        await axios.delete(
          `${BASE_URL}/products/${productId}`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        const updatedProducts =
          products.filter(
            (item) =>
              item._id !==
              productId
          );

        setProducts(
          updatedProducts
        );

        return {
          success: true,
          message:
            "Product deleted successfully",
        };

      } catch (error) {

        return {
          success: false,
          message:
            error.response?.data
              ?.message ||
            "Failed to delete product",
        };
      }
    };

  /* =========================
      INITIAL LOAD
  ========================== */

  useEffect(() => {

    getProducts();

    getFeaturedProducts();

    getCategories();

  }, [getCategories]);

  /* =========================
      CONTEXT VALUE
  ========================== */

  const value = {

    /* States */
    products,
    featuredProducts,
    singleProduct,
    categories,
    loading,
    error,

    /* Methods */
    getProducts,
    getFeaturedProducts,
    getSingleProduct,
    getCategories,
    searchProducts,
    filterProducts,

    addProduct,
    updateProduct,
    deleteProduct,
  };

  return (

    <ProductContext.Provider
      value={value}
    >

      {children}

    </ProductContext.Provider>
  );
};

export default ProductProvider;