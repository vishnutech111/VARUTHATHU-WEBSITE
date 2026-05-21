import axiosInstance from "./axios";

/* =========================
    LOGIN USER
========================= */

export const loginUser =
  async (userData) => {

    try {

      const response =
        await axiosInstance.post(
          "/auth/login",
          userData
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Login failed",
        }
      );
    }
  };

/* =========================
    REGISTER USER
========================= */

export const signupUser =
  async (userData) => {

    try {

      const response =
        await axiosInstance.post(
          "/auth/signup",
          userData
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Signup failed",
        }
      );
    }
  };

/* =========================
    GET CURRENT USER
========================= */

export const getCurrentUser =
  async () => {

    try {

      const response =
        await axiosInstance.get(
          "/auth/me"
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to fetch user",
        }
      );
    }
  };

/* =========================
    LOGOUT USER
========================= */

export const logoutUser =
  async () => {

    try {

      const response =
        await axiosInstance.post(
          "/auth/logout"
        );

      localStorage.removeItem(
        "varuthathu_token"
      );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Logout failed",
        }
      );
    }
  };

/* =========================
    UPDATE PROFILE
========================= */

export const updateUserProfile =
  async (updatedData) => {

    try {

      const response =
        await axiosInstance.put(
          "/users/profile",
          updatedData
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Profile update failed",
        }
      );
    }
  };

/* =========================
    CHANGE PASSWORD
========================= */

export const changePassword =
  async (passwordData) => {

    try {

      const response =
        await axiosInstance.put(
          "/auth/change-password",
          passwordData
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Password change failed",
        }
      );
    }
  };

/* =========================
    FORGOT PASSWORD
========================= */

export const forgotPassword =
  async (email) => {

    try {

      const response =
        await axiosInstance.post(
          "/auth/forgot-password",
          { email }
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Request failed",
        }
      );
    }
  };

/* =========================
    RESET PASSWORD
========================= */

export const resetPassword =
  async (
    token,
    passwordData
  ) => {

    try {

      const response =
        await axiosInstance.put(
          `/auth/reset-password/${token}`,
          passwordData
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Reset password failed",
        }
      );
    }
  };