import axiosInstance from "./axios";

/* =========================
    GET ALL BLOGS
========================= */

export const getAllBlogs =
  async () => {

    try {

      const response =
        await axiosInstance.get(
          "/blogs"
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to fetch blogs",
        }
      );
    }
  };

/* =========================
    GET SINGLE BLOG
========================= */

export const getSingleBlog =
  async (blogId) => {

    try {

      const response =
        await axiosInstance.get(
          `/blogs/${blogId}`
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to fetch blog",
        }
      );
    }
  };

/* =========================
    SEARCH BLOGS
========================= */

export const searchBlogs =
  async (keyword) => {

    try {

      const response =
        await axiosInstance.get(
          `/blogs/search/${keyword}`
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
    FILTER BLOGS
========================= */

export const filterBlogs =
  async (category) => {

    try {

      const response =
        await axiosInstance.get(
          `/blogs/filter/${category}`
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
    CREATE BLOG (ADMIN)
========================= */

export const createBlog =
  async (blogData) => {

    try {

      const response =
        await axiosInstance.post(
          "/blogs",
          blogData,
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
            "Failed to create blog",
        }
      );
    }
  };

/* =========================
    UPDATE BLOG (ADMIN)
========================= */

export const updateBlog =
  async (
    blogId,
    updatedData
  ) => {

    try {

      const response =
        await axiosInstance.put(
          `/blogs/${blogId}`,
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
            "Failed to update blog",
        }
      );
    }
  };

/* =========================
    DELETE BLOG (ADMIN)
========================= */

export const deleteBlog =
  async (blogId) => {

    try {

      const response =
        await axiosInstance.delete(
          `/blogs/${blogId}`
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to delete blog",
        }
      );
    }
  };

/* =========================
    LIKE BLOG
========================= */

export const likeBlog =
  async (blogId) => {

    try {

      const response =
        await axiosInstance.put(
          `/blogs/like/${blogId}`
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to like blog",
        }
      );
    }
  };

/* =========================
    ADD COMMENT
========================= */

export const addComment =
  async (
    blogId,
    commentData
  ) => {

    try {

      const response =
        await axiosInstance.post(
          `/blogs/comment/${blogId}`,
          commentData
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to add comment",
        }
      );
    }
  };

/* =========================
    GET BLOG COMMENTS
========================= */

export const getBlogComments =
  async (blogId) => {

    try {

      const response =
        await axiosInstance.get(
          `/blogs/comments/${blogId}`
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to fetch comments",
        }
      );
    }
  };