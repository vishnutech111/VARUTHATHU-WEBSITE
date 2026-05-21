import axiosInstance from "./axios";

/* =========================
    CREATE ORDER
========================= */

export const createOrder =
  async (orderData) => {

    try {

      const response =
        await axiosInstance.post(
          "/orders",
          orderData
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to create order",
        }
      );
    }
  };

/* =========================
    GET USER ORDERS
========================= */

export const getMyOrders =
  async () => {

    try {

      const response =
        await axiosInstance.get(
          "/orders/my-orders"
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to fetch orders",
        }
      );
    }
  };

/* =========================
    GET SINGLE ORDER
========================= */

export const getSingleOrder =
  async (orderId) => {

    try {

      const response =
        await axiosInstance.get(
          `/orders/${orderId}`
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to fetch order",
        }
      );
    }
  };

/* =========================
    CANCEL ORDER
========================= */

export const cancelOrder =
  async (orderId) => {

    try {

      const response =
        await axiosInstance.put(
          `/orders/${orderId}/cancel`
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to cancel order",
        }
      );
    }
  };

/* =========================
    VERIFY PAYMENT
========================= */

export const verifyPayment =
  async (paymentData) => {

    try {

      const response =
        await axiosInstance.post(
          "/orders/verify-payment",
          paymentData
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
    APPLY COUPON
========================= */

export const applyCoupon =
  async (couponCode) => {

    try {

      const response =
        await axiosInstance.post(
          "/orders/apply-coupon",
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
            "Invalid coupon",
        }
      );
    }
  };

/* =========================
    ADMIN GET ALL ORDERS
========================= */

export const getAllOrders =
  async () => {

    try {

      const response =
        await axiosInstance.get(
          "/orders/admin/all"
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to fetch all orders",
        }
      );
    }
  };

/* =========================
    ADMIN UPDATE ORDER STATUS
========================= */

export const updateOrderStatus =
  async (
    orderId,
    status
  ) => {

    try {

      const response =
        await axiosInstance.put(
          `/orders/admin/${orderId}`,
          { status }
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to update order status",
        }
      );
    }
  };

/* =========================
    ADMIN DELETE ORDER
========================= */

export const deleteOrder =
  async (orderId) => {

    try {

      const response =
        await axiosInstance.delete(
          `/orders/admin/${orderId}`
        );

      return response.data;

    } catch (error) {

      throw (
        error.response?.data ||
        {
          message:
            "Failed to delete order",
        }
      );
    }
  };