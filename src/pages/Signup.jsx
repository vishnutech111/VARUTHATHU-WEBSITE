// import React, { useState } from "react";

// import { Link } from "react-router-dom";

// /* Components */
// import FadeAnimation from "../components/animations/FadeAnimation";

// import Button from "../components/common/Button";

// /* Icons */
// import {
//   FaUser,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaLock,
//   FaEye,
//   FaEyeSlash,
// } from "react-icons/fa";

// const Signup = () => {

//   const [showPassword, setShowPassword] =
//     useState(false);

//   const [showConfirmPassword,
//     setShowConfirmPassword] =
//     useState(false);

//   const [formData, setFormData] =
//     useState({
//       name: "",
//       email: "",
//       phone: "",
//       password: "",
//       confirmPassword: "",
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
//             max-w-[580px]
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
//               Join Varuthathu
//             </span>

//             <h1
//               className="
//                 text-4xl
//                 font-bold
//                 text-[#1a1a1a]
//                 mb-4
//               "
//             >
//               Create Your Account
//             </h1>

//             <p
//               className="
//                 text-gray-600
//                 leading-7
//               "
//             >
//               Sign up to order authentic
//               Kerala snacks and manage your
//               purchases easily.
//             </p>

//           </div>

//           {/* Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="space-y-6"
//           >

//             {/* Full Name */}
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
//                 Full Name
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

//                 <FaUser
//                   className="
//                     text-gray-400
//                   "
//                 />

//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter full name"
//                   value={formData.name}
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

//             {/* Phone */}
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
//                 Phone Number
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

//                 <FaPhoneAlt
//                   className="
//                     text-gray-400
//                   "
//                 />

//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Enter phone number"
//                   value={formData.phone}
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
//                   placeholder="Create password"
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

//             {/* Confirm Password */}
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
//                 Confirm Password
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
//                     showConfirmPassword
//                       ? "text"
//                       : "password"
//                   }
//                   name="confirmPassword"
//                   placeholder="Confirm password"
//                   value={
//                     formData.confirmPassword
//                   }
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
//                     setShowConfirmPassword(
//                       !showConfirmPassword
//                     )
//                   }
//                   className="
//                     text-gray-400
//                   "
//                 >

//                   {showConfirmPassword
//                     ? <FaEyeSlash />
//                     : <FaEye />}

//                 </button>

//               </div>

//             </div>

//             {/* Terms */}
//             <div
//               className="
//                 flex
//                 items-start
//                 gap-3
//               "
//             >

//               <input
//                 type="checkbox"
//                 required
//                 className="
//                   mt-1
//                   accent-[#f7d046]
//                 "
//               />

//               <p
//                 className="
//                   text-sm
//                   text-gray-600
//                   leading-6
//                 "
//               >
//                 I agree to the{" "}

//                 <span
//                   className="
//                     font-semibold
//                     text-[#1a1a1a]
//                   "
//                 >
//                   Terms & Conditions
//                 </span>{" "}

//                 and{" "}

//                 <span
//                   className="
//                     font-semibold
//                     text-[#1a1a1a]
//                   "
//                 >
//                   Privacy Policy
//                 </span>

//               </p>

//             </div>

//             {/* Button */}
//             <Button
//               type="submit"
//               text="Create Account"
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
//               Already have an account?{" "}

//               <Link
//                 to="/login"
//                 className="
//                   font-semibold
//                   text-[#1a1a1a]
//                   hover:text-[#f7d046]
//                   transition
//                 "
//               >
//                 Login
//               </Link>

//             </p>

//           </div>

//         </div>

//       </FadeAnimation>

//     </div>
//   );
// };

// export default Signup;

import React, {
  useContext,
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";


import "./Signup.css";

/* Context */
import {
  AuthContext,
} from "../context/AuthContext";

/* Components */
import Button from "../components/common/Button";

import Loader from "../components/common/Loader";

import FadeAnimation from "../components/animations/FadeAnimation";

/* Icons */
// import {
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaLock,
//   FaEye,
//   FaEyeSlash,
// } from "react-icons/fa";

const Signup = () => {

  /* =========================
      CONTEXT
  ========================== */

  const {
    signup,
  } = useContext(
    AuthContext
  );

  /* =========================
      NAVIGATION
  ========================== */

  const navigate =
    useNavigate();

  /* =========================
      STATES
  ========================== */

  const [
    formData,
    setFormData,
  ] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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

  const [
    showConfirmPassword,
    setShowConfirmPassword,
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
      HANDLE SIGNUP
  ========================== */

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      setError("");

      /* Password Match */

      if (
        formData.password !==
        formData.confirmPassword
      ) {

        setError(
          "Passwords do not match"
        );

        return;
      }

      /* Password Length */

      if (
        formData.password
          .length < 6
      ) {

        setError(
          "Password must be at least 6 characters"
        );

        return;
      }

      setLoading(true);

      const response =
        await signup({
          name:
            formData.name,
          email:
            formData.email,
          phone:
            formData.phone,
          password:
            formData.password,
        });

      if (
        response.success
      ) {

        navigate("/");

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
    //         max-w-lg
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

    //           Join Varuthathu

    //         </span>

    //         <h1
    //           className="
    //             text-4xl
    //             font-bold
    //             text-[#1a1a1a]
    //             mb-3
    //           "
    //         >

    //           Create Account

    //         </h1>

    //         <p
    //           className="
    //             text-gray-600
    //           "
    //         >

    //           Signup and start
    //           shopping authentic
    //           Kerala snacks.

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

    //         {/* Name */}

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

    //             Full Name

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

    //               {/* <FaUser /> */}

    //             </span>

    //             <input
    //               type="text"
    //               name="name"
    //               placeholder="Enter your name"
    //               value={
    //                 formData.name
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

    //         {/* Phone */}

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

    //             Phone Number

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

    //               {/* <FaPhone /> */}

    //             </span>

    //             <input
    //               type="tel"
    //               name="phone"
    //               placeholder="Enter your phone number"
    //               value={
    //                 formData.phone
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
    //               placeholder="Create password"
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

    //         {/* Confirm Password */}

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

    //             Confirm Password

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
    //                 showConfirmPassword
    //                   ? "text"
    //                   : "password"
    //               }
    //               name="confirmPassword"
    //               placeholder="Confirm password"
    //               value={
    //                 formData
    //                   .confirmPassword
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
    //                 setShowConfirmPassword(
    //                   !showConfirmPassword
    //                 )
    //               }
    //               className="
    //                 px-4
    //                 text-gray-500
    //               "
    //             >

    //               {/* {showConfirmPassword
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
    //               text="Create Account"
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

    //         Already have an account?
    //         {" "}

    //         <Link
    //           to="/login"
    //           className="
    //             text-[#f7d046]
    //             font-semibold
    //             hover:underline
    //           "
    //         >

    //           Login

    //         </Link>

    //       </div>

    //     </div>

    //   </FadeAnimation>

    // </div>

    <div className="signup-page">

      <FadeAnimation>

        <div className="signup-card">

          {/* Header */}

          <div className="signup-header">

            <span className="signup-badge">

              Join Varuthathu

            </span>

            <h1>

              Create Account

            </h1>

            <p>

              Signup and start
              shopping authentic
              Kerala snacks.

            </p>

          </div>

          {/* Error */}

          {error && (

            <div className="signup-error">

              {error}

            </div>

          )}

          {/* Form */}

          <form
            onSubmit={
              handleSubmit
            }
            className="signup-form"
          >

            {/* Name */}

            <div className="signup-group">

              <label>

                Full Name

              </label>

              <div className="signup-input-box">

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={
                    formData.name
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>

            </div>

            {/* Email */}

            <div className="signup-group">

              <label>

                Email Address

              </label>

              <div className="signup-input-box">

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
                />

              </div>

            </div>

            {/* Phone */}

            <div className="signup-group">

              <label>

                Phone Number

              </label>

              <div className="signup-input-box">

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={
                    formData.phone
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>

            </div>

            {/* Password */}

            <div className="signup-group">

              <label>

                Password

              </label>

              <div className="signup-input-box">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Create password"
                  value={
                    formData.password
                  }
                  onChange={
                    handleChange
                  }
                  required
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

                  {showPassword
                    ? "Hide"
                    : "Show"}

                </button>

              </div>

            </div>

            {/* Confirm Password */}

            <div className="signup-group">

              <label>

                Confirm Password

              </label>

              <div className="signup-input-box">

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={
                    formData
                      .confirmPassword
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="password-toggle"
                >

                  {showConfirmPassword
                    ? "Hide"
                    : "Show"}

                </button>

              </div>

            </div>

            {/* Submit */}

            <div className="signup-button">

              {loading ? (

                <div className="loader-box">

                  <Loader />

                </div>

              ) : (

                <Button
                  text="Create Account"
                  fullWidth={true}
                />

              )}

            </div>

          </form>

          {/* Footer */}

          <div className="signup-footer">

            Already have an account?

            <Link
              to="/login"
            >

              Login

            </Link>

          </div>

        </div>

      </FadeAnimation>

    </div>
  );
};

export default Signup;