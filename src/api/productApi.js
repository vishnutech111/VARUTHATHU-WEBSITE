import axiosInstance from "./axios";

/* =========================
    GET ALL PRODUCTS
========================= */

export const getAllProducts =
  async () => {

    try {

      const response =
        await axiosInstance.get(
          "/products"
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to fetch products",
        }
      );
    }
  };

/* =========================
    GET FEATURED PRODUCTS
========================= */

export const getFeaturedProducts =
  async () => {

    try {

      const response =
        await axiosInstance.get(
          "/products/featured"
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to fetch featured products",
        }
      );
    }
  };

/* =========================
    GET SINGLE PRODUCT
========================= */

export const getSingleProduct =
  async (productId) => {

    try {

      const response =
        await axiosInstance.get(
          `/products/${productId}`
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to fetch product",
        }
      );
    }
  };

/* =========================
    SEARCH PRODUCTS
========================= */

export const searchProducts =
  async (keyword) => {

    try {

      const response =
        await axiosInstance.get(
          `/products/search/${keyword}`
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Search failed",
        }
      );
    }
  };

/* =========================
    FILTER PRODUCTS
========================= */

export const filterProducts =
  async ({
    category,
    minPrice,
    maxPrice,
    sort,
  }) => {

    try {

      const response =
        await axiosInstance.get(
          "/products/filter",
          {
            params: {
              category,
              minPrice,
              maxPrice,
              sort,
            },
          }
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Filter failed",
        }
      );
    }
  };

/* =========================
    GET PRODUCT CATEGORIES
========================= */

export const getCategories =
  async () => {

    try {

      const response =
        await axiosInstance.get(
          "/products/categories"
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to fetch categories",
        }
      );
    }
  };

/* =========================
    CREATE PRODUCT (ADMIN)
========================= */

export const createProduct =
  async (productData) => {

    try {

      const response =
        await axiosInstance.post(
          "/products",
          productData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to create product",
        }
      );
    }
  };

/* =========================
    UPDATE PRODUCT (ADMIN)
========================= */

export const updateProduct =
  async (
    productId,
    updatedData
  ) => {

    try {

      const response =
        await axiosInstance.put(
          `/products/${productId}`,
          updatedData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to update product",
        }
      );
    }
  };

/* =========================
    DELETE PRODUCT (ADMIN)
========================= */

export const deleteProduct =
  async (productId) => {

    try {

      const response =
        await axiosInstance.delete(
          `/products/${productId}`
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to delete product",
        }
      );
    }
  };

/* =========================
    ADD PRODUCT REVIEW
========================= */

export const addProductReview =
  async (
    productId,
    reviewData
  ) => {

    try {

      const response =
        await axiosInstance.post(
          `/products/${productId}/review`,
          reviewData
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to add review",
        }
      );
    }
  };

/* =========================
    GET PRODUCT REVIEWS
========================= */

export const getProductReviews =
  async (productId) => {

    try {

      const response =
        await axiosInstance.get(
          `/products/${productId}/reviews`
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to fetch reviews",
        }
      );
    }
  };