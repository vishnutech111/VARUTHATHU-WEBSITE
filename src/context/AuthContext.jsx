// import React, {
//   createContext,
//   useEffect,
//   useState,
// } from "react";

// import axios from "axios";

// /* Create Context */
// export const AuthContext =
//   createContext();

// /* Provider */
// const AuthProvider = ({
//   children,
// }) => {

//   /* States */
//   const [user, setUser] =
//     useState(null);

//   const [loading, setLoading] =
//     useState(true);

//   /* Base URL */
//   const BASE_URL =
//     process.env
//       .REACT_APP_API_URL ||
//     "http://localhost:5000/api";

//   /* =========================
//       LOAD USER
//   ========================== */
//   const loadUser = async () => {

//     try {

//       const token =
//         localStorage.getItem(
//           "varuthathu_token"
//         );

//       if (!token) {

//         setLoading(false);

//         return;
//       }

//       const response =
//         await axios.get(
//           `${BASE_URL}/auth/me`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//       setUser(response.data.user);

//     } catch (error) {

//       console.log(
//         "Load User Error:",
//         error
//       );

//       localStorage.removeItem(
//         "varuthathu_token"
//       );

//       setUser(null);

//     } finally {

//       setLoading(false);
//     }
//   };

//   /* =========================
//       LOGIN
//   ========================== */
//   const login = async (
//     formData
//   ) => {

//     try {

//       const response =
//         await axios.post(
//           `${BASE_URL}/auth/login`,
//           formData
//         );

//       /* Save Token */
//       localStorage.setItem(
//         "varuthathu_token",
//         response.data.token
//       );

//       /* Save User */
//       setUser(response.data.user);

//       return {
//         success: true,
//         message:
//           "Login successful",
//       };

//     } catch (error) {

//       return {
//         success: false,
//         message:
//           error.response?.data
//             ?.message ||
//           "Login failed",
//       };
//     }
//   };

//   /* =========================
//       SIGNUP
//   ========================== */
//   const signup = async (
//     formData
//   ) => {

//     try {

//       const response =
//         await axios.post(
//           `${BASE_URL}/auth/signup`,
//           formData
//         );

//       localStorage.setItem(
//         "varuthathu_token",
//         response.data.token
//       );

//       setUser(response.data.user);

//       return {
//         success: true,
//         message:
//           "Signup successful",
//       };

//     } catch (error) {

//       return {
//         success: false,
//         message:
//           error.response?.data
//             ?.message ||
//           "Signup failed",
//       };
//     }
//   };

//   /* =========================
//       LOGOUT
//   ========================== */
//   const logout = () => {

//     localStorage.removeItem(
//       "varuthathu_token"
//     );

//     setUser(null);
//   };

//   /* =========================
//       UPDATE PROFILE
//   ========================== */
//   const updateProfile =
//     async (updatedData) => {

//       try {

//         const token =
//           localStorage.getItem(
//             "varuthathu_token"
//           );

//         const response =
//           await axios.put(
//             `${BASE_URL}/users/profile`,
//             updatedData,
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );

//         setUser(response.data.user);

//         return {
//           success: true,
//           message:
//             "Profile updated",
//         };

//       } catch (error) {

//         return {
//           success: false,
//           message:
//             error.response?.data
//               ?.message ||
//             "Profile update failed",
//         };
//       }
//     };

//   /* =========================
//       CHECK AUTH ON LOAD
//   ========================== */
//   useEffect(() => {

//     loadUser();

//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         loading,
//         login,
//         signup,
//         logout,
//         updateProfile,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;



import React, {
  createContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";

/* =========================
    CREATE CONTEXT
========================= */

export const AuthContext =
  createContext();

/* =========================
    PROVIDER
========================= */

const AuthProvider = ({
  children,
}) => {

  /* =========================
      STATES
  ========================== */

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  /* =========================
      BASE URL
  ========================== */

  const BASE_URL =
    process.env
      .REACT_APP_API_URL ||
    "http://localhost:5000/api";

  /* =========================
      LOAD USER
  ========================== */

  const loadUser =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "varuthathu_token"
          );

        if (!token) {

          setLoading(false);

          return;
        }

        const response =
          await axios.get(
            `${BASE_URL}/auth/me`,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setUser(
          response.data.user
        );

      } catch (error) {

        console.log(
          "Load User Error:",
          error
        );

        localStorage.removeItem(
          "varuthathu_token"
        );

        setUser(null);

      } finally {

        setLoading(false);
      }
    };

  /* =========================
      LOGIN
  ========================== */

  const login =
    async (formData) => {

      try {

        const response =
          await axios.post(
            `${BASE_URL}/auth/login`,
            formData
          );

        /* Save Token */

        localStorage.setItem(
          "varuthathu_token",
          response.data.token
        );

        /* Save User */

        setUser(
          response.data.user
        );

        return {
          success: true,
          message:
            "Login successful",
        };

      } catch (error) {

        return {
          success: false,
          message:
            error.response?.data
              ?.message ||
            "Login failed",
        };
      }
    };

  /* =========================
      SIGNUP
  ========================== */

  const signup =
    async (formData) => {

      try {

        const response =
          await axios.post(
            `${BASE_URL}/auth/signup`,
            formData
          );

        localStorage.setItem(
          "varuthathu_token",
          response.data.token
        );

        setUser(
          response.data.user
        );

        return {
          success: true,
          message:
            "Signup successful",
        };

      } catch (error) {

        return {
          success: false,
          message:
            error.response?.data
              ?.message ||
            "Signup failed",
        };
      }
    };

  /* =========================
      LOGOUT
  ========================== */

  const logout = () => {

    localStorage.removeItem(
      "varuthathu_token"
    );

    setUser(null);
  };

  /* =========================
      UPDATE PROFILE
  ========================== */

  const updateProfile =
    async (updatedData) => {

      try {

        const token =
          localStorage.getItem(
            "varuthathu_token"
          );

        const response =
          await axios.put(
            `${BASE_URL}/users/profile`,
            updatedData,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setUser(
          response.data.user
        );

        return {
          success: true,
          message:
            "Profile updated",
        };

      } catch (error) {

        return {
          success: false,
          message:
            error.response?.data
              ?.message ||
            "Profile update failed",
        };
      }
    };

  /* =========================
      CHECK AUTH
  ========================== */

  useEffect(() => {

    loadUser();

  }, []);

  /* =========================
      CONTEXT VALUE
  ========================== */

  const value = {
    user,
    setUser,
    loading,
    login,
    signup,
    logout,
    updateProfile,
    loadUser,
  };

  return (

    <AuthContext.Provider
      value={value}
    >

      {children}

    </AuthContext.Provider>
  );
};

export default AuthProvider;