import axiosInstance from "./axios";

/* =========================
    CREATE RAZORPAY ORDER
========================= */

export const createRazorpayOrder =
  async (paymentData) => {

    try {

      const response =
        await axiosInstance.post(
          "/payment/create-order",
          paymentData
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to create payment order",
        }
      );
    }
  };

/* =========================
    VERIFY RAZORPAY PAYMENT
========================= */

export const verifyRazorpayPayment =
  async (
    razorpayData
  ) => {

    try {

      const response =
        await axiosInstance.post(
          "/payment/verify",
          razorpayData
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Payment verification failed",
        }
      );
    }
  };

/* =========================
    GET PAYMENT DETAILS
========================= */

export const getPaymentDetails =
  async (paymentId) => {

    try {

      const response =
        await axiosInstance.get(
          `/payment/${paymentId}`
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to fetch payment details",
        }
      );
    }
  };

/* =========================
    GET USER PAYMENT HISTORY
========================= */

export const getPaymentHistory =
  async () => {

    try {

      const response =
        await axiosInstance.get(
          "/payment/history"
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to fetch payment history",
        }
      );
    }
  };

/* =========================
    REFUND PAYMENT
========================= */

export const refundPayment =
  async (
    paymentId,
    refundData
  ) => {

    try {

      const response =
        await axiosInstance.post(
          `/payment/refund/${paymentId}`,
          refundData
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Refund failed",
        }
      );
    }
  };

/* =========================
    VALIDATE COUPON
========================= */

export const validateCoupon =
  async (couponCode) => {

    try {

      const response =
        await axiosInstance.post(
          "/payment/validate-coupon",
          {
            couponCode,
          }
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Coupon validation failed",
        }
      );
    }
  };

/* =========================
    SAVE PAYMENT METHOD
========================= */

export const savePaymentMethod =
  async (paymentMethodData) => {

    try {

      const response =
        await axiosInstance.post(
          "/payment/save-method",
          paymentMethodData
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to save payment method",
        }
      );
    }
  };

/* =========================
    GET SAVED PAYMENT METHODS
========================= */

export const getSavedPaymentMethods =
  async () => {

    try {

      const response =
        await axiosInstance.get(
          "/payment/saved-methods"
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to fetch payment methods",
        }
      );
    }
  };