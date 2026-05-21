import axios from "axios";

/* =========================
    BASE URL
========================= */

const BASE_URL =
  process.env.REACT_APP_API_URL ||
  "http://localhost:5000/api";

/* =========================
    AXIOS INSTANCE
========================= */

const axiosInstance =
  axios.create({
    baseURL: BASE_URL,

    withCredentials: true,

    headers: {
      "Content-Type":
        "application/json",
    },
  });

/* =========================
    REQUEST INTERCEPTOR
========================= */

axiosInstance.interceptors.request.use(
  (config) => {

    const token =
      localStorage.getItem(
        "varuthathu_token"
      );

    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) => {

    return Promise.reject(error);
  }
);

/* =========================
    RESPONSE INTERCEPTOR
========================= */

axiosInstance.interceptors.response.use(

  (response) => response,

  (error) => {

    /* Unauthorized */
    if (
      error.response &&
      error.response.status === 401
    ) {

      localStorage.removeItem(
        "varuthathu_token"
      );

      window.location.href =
        "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;