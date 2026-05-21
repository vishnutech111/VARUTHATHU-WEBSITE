// import React, { useState } from "react";

// import { Link } from "react-router-dom";

// /* Components */
// import FadeAnimation from "../components/animations/FadeAnimation";

// import Button from "../components/common/Button";

// /* Icons */
// import {
//   FaEnvelope,
//   FaLock,
//   FaEye,
//   FaEyeSlash,
// } from "react-icons/fa";

// const Login = () => {

//   const [showPassword, setShowPassword] =
//     useState(false);

//   const [formData, setFormData] =
//     useState({
//       email: "",
//       password: "",
//     });

//   /* Handle Change */
//   const handleChange = (e) => {

//     setFormData({
//       ...formData,
//       [e.target.name]:
//         e.target.value,
//     });
//   };

//   /* Submit */
//   const handleSubmit = (e) => {

//     e.preventDefault();

//     console.log(formData);
//   };

//   return (
//     <div
//       className="
//         w-full
//         min-h-screen
//         bg-[#fffdf4]
//         flex
//         items-center
//         justify-center
//         px-5
//         py-16
//       "
//     >

//       <FadeAnimation>

//         <div
//           className="
//             w-full
//             max-w-[520px]
//             bg-white
//             rounded-[30px]
//             shadow-xl
//             p-10
//           "
//         >

//           {/* Top */}
//           <div className="text-center mb-10">

//             <span
//               className="
//                 inline-block
//                 bg-[#f7d046]
//                 text-[#1a1a1a]
//                 px-5
//                 py-2
//                 rounded-full
//                 text-sm
//                 font-bold
//                 mb-5
//               "
//             >
//               Welcome Back
//             </span>

//             <h1
//               className="
//                 text-4xl
//                 font-bold
//                 text-[#1a1a1a]
//                 mb-4
//               "
//             >
//               Login To Varuthathu
//             </h1>

//             <p
//               className="
//                 text-gray-600
//                 leading-7
//               "
//             >
//               Access your account to manage
//               orders, wishlist, and enjoy
//               authentic Kerala snacks.
//             </p>

//           </div>

//           {/* Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="space-y-6"
//           >

//             {/* Email */}
//             <div>

//               <label
//                 className="
//                   block
//                   text-sm
//                   font-semibold
//                   text-[#1a1a1a]
//                   mb-3
//                 "
//               >
//                 Email Address
//               </label>

//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-4
//                   border
//                   border-gray-200
//                   rounded-2xl
//                   px-5
//                   h-[60px]
//                   focus-within:border-[#f7d046]
//                   focus-within:ring-4
//                   focus-within:ring-yellow-100
//                   transition
//                 "
//               >

//                 <FaEnvelope
//                   className="
//                     text-gray-400
//                   "
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="
//                     flex-1
//                     h-full
//                     outline-none
//                     bg-transparent
//                   "
//                 />

//               </div>

//             </div>

//             {/* Password */}
//             <div>

//               <label
//                 className="
//                   block
//                   text-sm
//                   font-semibold
//                   text-[#1a1a1a]
//                   mb-3
//                 "
//               >
//                 Password
//               </label>

//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-4
//                   border
//                   border-gray-200
//                   rounded-2xl
//                   px-5
//                   h-[60px]
//                   focus-within:border-[#f7d046]
//                   focus-within:ring-4
//                   focus-within:ring-yellow-100
//                   transition
//                 "
//               >

//                 <FaLock
//                   className="
//                     text-gray-400
//                   "
//                 />

//                 <input
//                   type={
//                     showPassword
//                       ? "text"
//                       : "password"
//                   }
//                   name="password"
//                   placeholder="Enter password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   className="
//                     flex-1
//                     h-full
//                     outline-none
//                     bg-transparent
//                   "
//                 />

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setShowPassword(
//                       !showPassword
//                     )
//                   }
//                   className="
//                     text-gray-400
//                   "
//                 >

//                   {showPassword
//                     ? <FaEyeSlash />
//                     : <FaEye />}

//                 </button>

//               </div>

//             </div>

//             {/* Forgot */}
//             <div
//               className="
//                 flex
//                 justify-end
//               "
//             >

//               <Link
//                 to="/forgot-password"
//                 className="
//                   text-sm
//                   font-medium
//                   text-[#1a1a1a]
//                   hover:text-[#f7d046]
//                   transition
//                 "
//               >
//                 Forgot Password?
//               </Link>

//             </div>

//             {/* Button */}
//             <Button
//               type="submit"
//               text="Login"
//               fullWidth={true}
//             />

//           </form>

//           {/* Bottom */}
//           <div
//             className="
//               text-center
//               mt-8
//             "
//           >

//             <p
//               className="
//                 text-gray-600
//               "
//             >
//               Don&apos;t have an account?{" "}

//               <Link
//                 to="/signup"
//                 className="
//                   font-semibold
//                   text-[#1a1a1a]
//                   hover:text-[#f7d046]
//                   transition
//                 "
//               >
//                 Create Account
//               </Link>

//             </p>

//           </div>

//         </div>

//       </FadeAnimation>

//     </div>
//   );
// };

// export default Login;




import React, {
  useContext,
  useState,
} from "react";

import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

/* Context */
import {
  AuthContext,
} from "../context/AuthContext";

import "./Login.css"

/* Components */
import Button from "../components/common/Button";

import Loader from "../components/common/Loader";

import FadeAnimation from "../components/animations/FadeAnimation";

/* Icons */
// import {
//   FaEnvelope,
//   FaLock,
//   FaEye,
//   FaEyeSlash,
// } from "react-icons/fa";

const Login = () => {

  /* =========================
      CONTEXT
  ========================== */

  const {
    login,
  } = useContext(
    AuthContext
  );

  /* =========================
      NAVIGATION
  ========================== */

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const redirectPath =
    location.state?.from
      ?.pathname || "/";

  /* =========================
      STATES
  ========================== */

  const [
    formData,
    setFormData,
  ] = useState({
    email: "",
    password: "",
  });

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState("");

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  /* =========================
      HANDLE CHANGE
  ========================== */

  const handleChange =
    (e) => {

      setFormData({
        ...formData,
        [e.target.name]:
          e.target.value,
      });
    };

  /* =========================
      HANDLE LOGIN
  ========================== */

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      setLoading(true);

      setError("");

      const response =
        await login(
          formData
        );

      if (
        response.success
      ) {

        navigate(
          redirectPath,
          {
            replace: true,
          }
        );

      } else {

        setError(
          response.message
        );
      }

      setLoading(false);
    };

  return (

    // <div
    //   className="
    //     w-full
    //     min-h-screen
    //     flex
    //     items-center
    //     justify-center
    //     bg-[#fffdf4]
    //     px-5
    //     py-16
    //   "
    // >

    //   <FadeAnimation>

    //     <div
    //       className="
    //         w-full
    //         max-w-md
    //         bg-white
    //         rounded-[30px]
    //         shadow-xl
    //         p-8
    //         md:p-10
    //       "
    //     >

    //       {/* =========================
    //           HEADER
    //       ========================== */}

    //       <div
    //         className="
    //           text-center
    //           mb-10
    //         "
    //       >

    //         <span
    //           className="
    //             inline-block
    //             bg-[#f7d046]
    //             text-black
    //             px-5
    //             py-2
    //             rounded-full
    //             text-sm
    //             font-bold
    //             mb-5
    //           "
    //         >

    //           Welcome Back

    //         </span>

    //         <h1
    //           className="
    //             text-4xl
    //             font-bold
    //             text-[#1a1a1a]
    //             mb-3
    //           "
    //         >

    //           Login

    //         </h1>

    //         <p
    //           className="
    //             text-gray-600
    //           "
    //         >

    //           Access your account
    //           and continue shopping.

    //         </p>

    //       </div>

    //       {/* =========================
    //           ERROR
    //       ========================== */}

    //       {error && (

    //         <div
    //           className="
    //             bg-red-100
    //             text-red-600
    //             px-5
    //             py-4
    //             rounded-2xl
    //             mb-6
    //             text-sm
    //             font-medium
    //           "
    //         >

    //           {error}

    //         </div>

    //       )}

    //       {/* =========================
    //           FORM
    //       ========================== */}

    //       <form
    //         onSubmit={
    //           handleSubmit
    //         }
    //         className="
    //           flex
    //           flex-col
    //           gap-6
    //         "
    //       >

    //         {/* Email */}

    //         <div>

    //           <label
    //             className="
    //               block
    //               text-sm
    //               font-semibold
    //               mb-3
    //               text-[#1a1a1a]
    //             "
    //           >

    //             Email Address

    //           </label>

    //           <div
    //             className="
    //               flex
    //               items-center
    //               border
    //               border-gray-300
    //               rounded-2xl
    //               overflow-hidden
    //               focus-within:border-[#f7d046]
    //             "
    //           >

    //             <span
    //               className="
    //                 px-4
    //                 text-gray-500
    //               "
    //             >

    //               {/* <FaEnvelope /> */}

    //             </span>

    //             <input
    //               type="email"
    //               name="email"
    //               placeholder="Enter your email"
    //               value={
    //                 formData.email
    //               }
    //               onChange={
    //                 handleChange
    //               }
    //               required
    //               className="
    //                 w-full
    //                 px-4
    //                 py-4
    //                 outline-none
    //                 bg-transparent
    //               "
    //             />

    //           </div>

    //         </div>

    //         {/* Password */}

    //         <div>

    //           <label
    //             className="
    //               block
    //               text-sm
    //               font-semibold
    //               mb-3
    //               text-[#1a1a1a]
    //             "
    //           >

    //             Password

    //           </label>

    //           <div
    //             className="
    //               flex
    //               items-center
    //               border
    //               border-gray-300
    //               rounded-2xl
    //               overflow-hidden
    //               focus-within:border-[#f7d046]
    //             "
    //           >

    //             <span
    //               className="
    //                 px-4
    //                 text-gray-500
    //               "
    //             >

    //               {/* <FaLock /> */}

    //             </span>

    //             <input
    //               type={
    //                 showPassword
    //                   ? "text"
    //                   : "password"
    //               }
    //               name="password"
    //               placeholder="Enter your password"
    //               value={
    //                 formData.password
    //               }
    //               onChange={
    //                 handleChange
    //               }
    //               required
    //               className="
    //                 w-full
    //                 px-4
    //                 py-4
    //                 outline-none
    //                 bg-transparent
    //               "
    //             />

    //             <button
    //               type="button"
    //               onClick={() =>
    //                 setShowPassword(
    //                   !showPassword
    //                 )
    //               }
    //               className="
    //                 px-4
    //                 text-gray-500
    //               "
    //             >

    //               {/* {showPassword
    //                 ? <FaEyeSlash />
    //                 : <FaEye />} */}

    //             </button>

    //           </div>

    //         </div>

    //         {/* Submit */}

    //         <div
    //           className="
    //             pt-2
    //           "
    //         >

    //           {loading ? (

    //             <div
    //               className="
    //                 flex
    //                 justify-center
    //               "
    //             >

    //               <Loader />

    //             </div>

    //           ) : (

    //             <Button
    //               text="Login"
    //               fullWidth={true}
    //             />

    //           )}

    //         </div>

    //       </form>

    //       {/* =========================
    //           FOOTER
    //       ========================== */}

    //       <div
    //         className="
    //           text-center
    //           mt-8
    //           text-gray-600
    //         "
    //       >

    //         Don’t have an account?
    //         {" "}

    //         <Link
    //           to="/signup"
    //           className="
    //             text-[#f7d046]
    //             font-semibold
    //             hover:underline
    //           "
    //         >

    //           Create Account

    //         </Link>

    //       </div>

    //     </div>

    //   </FadeAnimation>

    // </div>

    <div className="login-page">

      <FadeAnimation>

        <div className="login-container">

          {/* =========================
              HEADER
          ========================== */}

          <div className="login-header">

            <span className="login-badge">

              Welcome Back

            </span>

            <h1 className="login-title">

              Login

            </h1>

            <p className="login-subtitle">

              Access your account
              and continue shopping.

            </p>

          </div>

          {/* =========================
              ERROR
          ========================== */}

          {error && (

            <div className="login-error">

              {error}

            </div>

          )}

          {/* =========================
              FORM
          ========================== */}

          <form
            onSubmit={
              handleSubmit
            }
            className="login-form"
          >

            {/* Email */}

            <div>

              <label className="login-label">

                Email Address

              </label>

              <div className="login-input-group">

                <span className="login-input-icon">

                  {/* <FaEnvelope /> */}

                </span>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={
                    formData.email
                  }
                  onChange={
                    handleChange
                  }
                  required
                  className="login-input"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="login-label">

                Password

              </label>

              <div className="login-input-group">

                <span className="login-input-icon">

                  {/* <FaLock /> */}

                </span>

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter your password"
                  value={
                    formData.password
                  }
                  onChange={
                    handleChange
                  }
                  required
                  className="login-input"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="password-toggle"
                >

                  {/* {showPassword
                    ? <FaEyeSlash />
                    : <FaEye />} */}

                </button>

              </div>

            </div>

            {/* Submit */}

            <div className="login-button-wrapper">

              {loading ? (

                <div className="loader-wrapper">

                  <Loader />

                </div>

              ) : (

                <Button
                  text="Login"
                  fullWidth={true}
                />

              )}

            </div>

          </form>

          {/* =========================
              FOOTER
          ========================== */}

          <div className="login-footer">

            Don’t have an account?
            {" "}

            <Link
              to="/signup"
              className="signup-link"
            >

              Create Account

            </Link>

          </div>

        </div>

      </FadeAnimation>

    </div>

  );
};

export default Login;