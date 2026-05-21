// import React, { useState } from "react";

// /* Components */
// import FadeAnimation from "../components/animations/FadeAnimation";

// import Button from "../components/common/Button";

// /* Icons */
// import {
//   FaUser,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaShoppingBag,
//   FaHeart,
//   FaEdit,
//   FaLock,
// } from "react-icons/fa";

// const Profile = () => {

//   const [userData, setUserData] =
//     useState({
//       name: "Vishnu",
//       email: "vishnu@gmail.com",
//       phone: "+91 9876543210",
//       address:
//         "Kochi, Kerala, India",
//     });

//   const [isEditing, setIsEditing] =
//     useState(false);

//   /* Handle Change */
//   const handleChange = (e) => {

//     setUserData({
//       ...userData,
//       [e.target.name]:
//         e.target.value,
//     });
//   };

//   /* Save */
//   const handleSave = () => {

//     setIsEditing(false);

//     console.log(userData);
//   };

//   return (
//     <div className="w-full bg-[#fffdf4] min-h-screen">

//       {/* Hero */}
//       <section
//         className="
//           w-full
//           bg-[#fff8dc]
//           py-20
//           px-5
//           text-center
//         "
//       >

//         <FadeAnimation>

//           {/* Avatar */}
//           <div
//             className="
//               w-32
//               h-32
//               mx-auto
//               rounded-full
//               bg-[#f7d046]
//               flex
//               items-center
//               justify-center
//               shadow-lg
//               mb-6
//             "
//           >

//             <FaUser
//               className="
//                 text-5xl
//                 text-[#1a1a1a]
//               "
//             />

//           </div>

//           {/* Name */}
//           <h1
//             className="
//               text-4xl
//               md:text-5xl
//               font-bold
//               text-[#1a1a1a]
//               mb-4
//             "
//           >
//             {userData.name}
//           </h1>

//           {/* Email */}
//           <p
//             className="
//               text-lg
//               text-gray-600
//             "
//           >
//             {userData.email}
//           </p>

//         </FadeAnimation>

//       </section>

//       {/* Content */}
//       <section
//         className="
//           w-[90%]
//           max-w-[1300px]
//           mx-auto
//           py-20
//           grid
//           grid-cols-1
//           lg:grid-cols-3
//           gap-10
//         "
//       >

//         {/* Left Sidebar */}
//         <FadeAnimation>

//           <div
//             className="
//               bg-white
//               rounded-[30px]
//               shadow-lg
//               p-8
//               h-fit
//             "
//           >

//             {/* Title */}
//             <h2
//               className="
//                 text-2xl
//                 font-bold
//                 text-[#1a1a1a]
//                 mb-8
//               "
//             >
//               Account Overview
//             </h2>

//             {/* Menu */}
//             <div className="space-y-5">

//               {/* Orders */}
//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-4
//                   p-4
//                   rounded-2xl
//                   hover:bg-[#fff8dc]
//                   transition
//                   cursor-pointer
//                 "
//               >

//                 <FaShoppingBag
//                   className="
//                     text-[#f7d046]
//                     text-xl
//                   "
//                 />

//                 <div>

//                   <h3
//                     className="
//                       font-semibold
//                       text-[#1a1a1a]
//                     "
//                   >
//                     My Orders
//                   </h3>

//                   <p
//                     className="
//                       text-sm
//                       text-gray-500
//                     "
//                   >
//                     View order history
//                   </p>

//                 </div>

//               </div>

//               {/* Wishlist */}
//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-4
//                   p-4
//                   rounded-2xl
//                   hover:bg-[#fff8dc]
//                   transition
//                   cursor-pointer
//                 "
//               >

//                 <FaHeart
//                   className="
//                     text-[#f7d046]
//                     text-xl
//                   "
//                 />

//                 <div>

//                   <h3
//                     className="
//                       font-semibold
//                       text-[#1a1a1a]
//                     "
//                   >
//                     Wishlist
//                   </h3>

//                   <p
//                     className="
//                       text-sm
//                       text-gray-500
//                     "
//                   >
//                     Favorite snack items
//                   </p>

//                 </div>

//               </div>

//               {/* Security */}
//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-4
//                   p-4
//                   rounded-2xl
//                   hover:bg-[#fff8dc]
//                   transition
//                   cursor-pointer
//                 "
//               >

//                 <FaLock
//                   className="
//                     text-[#f7d046]
//                     text-xl
//                   "
//                 />

//                 <div>

//                   <h3
//                     className="
//                       font-semibold
//                       text-[#1a1a1a]
//                     "
//                   >
//                     Security
//                   </h3>

//                   <p
//                     className="
//                       text-sm
//                       text-gray-500
//                     "
//                   >
//                     Change password
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </FadeAnimation>

//         {/* Right Side */}
//         <div className="lg:col-span-2">

//           <FadeAnimation delay={0.2}>

//             <div
//               className="
//                 bg-white
//                 rounded-[30px]
//                 shadow-lg
//                 p-8
//               "
//             >

//               {/* Top */}
//               <div
//                 className="
//                   flex
//                   flex-col
//                   md:flex-row
//                   md:items-center
//                   md:justify-between
//                   gap-5
//                   mb-10
//                 "
//               >

//                 <div>

//                   <h2
//                     className="
//                       text-3xl
//                       font-bold
//                       text-[#1a1a1a]
//                       mb-2
//                     "
//                   >
//                     Personal Information
//                   </h2>

//                   <p
//                     className="
//                       text-gray-600
//                     "
//                   >
//                     Manage your account
//                     details and profile.
//                   </p>

//                 </div>

//                 <button
//                   onClick={() =>
//                     setIsEditing(
//                       !isEditing
//                     )
//                   }
//                   className="
//                     flex
//                     items-center
//                     gap-3
//                     bg-[#f7d046]
//                     hover:bg-yellow-400
//                     text-[#1a1a1a]
//                     font-semibold
//                     px-6
//                     py-3
//                     rounded-full
//                     transition
//                   "
//                 >

//                   <FaEdit />

//                   {isEditing
//                     ? "Cancel"
//                     : "Edit Profile"}

//                 </button>

//               </div>

//               {/* Form */}
//               <div className="space-y-8">

//                 {/* Name */}
//                 <div>

//                   <label
//                     className="
//                       flex
//                       items-center
//                       gap-3
//                       text-sm
//                       font-semibold
//                       text-[#1a1a1a]
//                       mb-3
//                     "
//                   >

//                     <FaUser
//                       className="
//                         text-[#f7d046]
//                       "
//                     />

//                     Full Name

//                   </label>

//                   <input
//                     type="text"
//                     name="name"
//                     value={userData.name}
//                     onChange={handleChange}
//                     disabled={!isEditing}
//                     className="
//                       w-full
//                       h-[60px]
//                       px-5
//                       rounded-2xl
//                       border
//                       border-gray-200
//                       outline-none
//                       disabled:bg-gray-100
//                       focus:border-[#f7d046]
//                       focus:ring-4
//                       focus:ring-yellow-100
//                     "
//                   />

//                 </div>

//                 {/* Email */}
//                 <div>

//                   <label
//                     className="
//                       flex
//                       items-center
//                       gap-3
//                       text-sm
//                       font-semibold
//                       text-[#1a1a1a]
//                       mb-3
//                     "
//                   >

//                     <FaEnvelope
//                       className="
//                         text-[#f7d046]
//                       "
//                     />

//                     Email Address

//                   </label>

//                   <input
//                     type="email"
//                     name="email"
//                     value={userData.email}
//                     onChange={handleChange}
//                     disabled={!isEditing}
//                     className="
//                       w-full
//                       h-[60px]
//                       px-5
//                       rounded-2xl
//                       border
//                       border-gray-200
//                       outline-none
//                       disabled:bg-gray-100
//                       focus:border-[#f7d046]
//                       focus:ring-4
//                       focus:ring-yellow-100
//                     "
//                   />

//                 </div>

//                 {/* Phone */}
//                 <div>

//                   <label
//                     className="
//                       flex
//                       items-center
//                       gap-3
//                       text-sm
//                       font-semibold
//                       text-[#1a1a1a]
//                       mb-3
//                     "
//                   >

//                     <FaPhoneAlt
//                       className="
//                         text-[#f7d046]
//                       "
//                     />

//                     Phone Number

//                   </label>

//                   <input
//                     type="text"
//                     name="phone"
//                     value={userData.phone}
//                     onChange={handleChange}
//                     disabled={!isEditing}
//                     className="
//                       w-full
//                       h-[60px]
//                       px-5
//                       rounded-2xl
//                       border
//                       border-gray-200
//                       outline-none
//                       disabled:bg-gray-100
//                       focus:border-[#f7d046]
//                       focus:ring-4
//                       focus:ring-yellow-100
//                     "
//                   />

//                 </div>

//                 {/* Address */}
//                 <div>

//                   <label
//                     className="
//                       flex
//                       items-center
//                       gap-3
//                       text-sm
//                       font-semibold
//                       text-[#1a1a1a]
//                       mb-3
//                     "
//                   >

//                     <FaMapMarkerAlt
//                       className="
//                         text-[#f7d046]
//                       "
//                     />

//                     Address

//                   </label>

//                   <textarea
//                     rows="5"
//                     name="address"
//                     value={userData.address}
//                     onChange={handleChange}
//                     disabled={!isEditing}
//                     className="
//                       w-full
//                       px-5
//                       py-4
//                       rounded-2xl
//                       border
//                       border-gray-200
//                       outline-none
//                       resize-none
//                       disabled:bg-gray-100
//                       focus:border-[#f7d046]
//                       focus:ring-4
//                       focus:ring-yellow-100
//                     "
//                   />

//                 </div>

//                 {/* Save Button */}
//                 {isEditing && (

//                   <Button
//                     text="Save Changes"
//                     onClick={handleSave}
//                   />

//                 )}

//               </div>

//             </div>

//           </FadeAnimation>

//         </div>

//       </section>

//     </div>
//   );
// };

// export default Profile;





import React, {
  useContext,
  useState,
} from "react";

import {
  AuthContext,
} from "../context/AuthContext";

import FadeAnimation from "../components/animations/FadeAnimation";

import SlideAnimation from "../components/animations/SlideAnimation";

import Button from "../components/common/Button";

/* Icons */
// import {
//   FaUser,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaEdit,
//   FaSave,
//   FaSignOutAlt,
// } from "react-icons/fa";

const Profile = () => {

  /* =========================
      CONTEXT
  ========================== */

  const {
    user,
    updateProfile,
    logout,
  } = useContext(AuthContext);

  /* =========================
      STATES
  ========================== */

  const [
    editMode,
    setEditMode,
  ] = useState(false);

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    successMessage,
    setSuccessMessage,
  ] = useState("");

  const [
    formData,
    setFormData,
  ] = useState({
    name:
      user?.name || "",
    email:
      user?.email || "",
    phone:
      user?.phone || "",
    address:
      user?.address || "",
  });

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
      HANDLE UPDATE
  ========================== */

  const handleUpdate =
    async (e) => {

      e.preventDefault();

      setLoading(true);

      const response =
        await updateProfile(
          formData
        );

      if (
        response.success
      ) {

        setSuccessMessage(
          "Profile updated successfully."
        );

        setEditMode(false);

        setTimeout(() => {

          setSuccessMessage("");

        }, 3000);
      }

      setLoading(false);
    };

  /* =========================
      HANDLE LOGOUT
  ========================== */

  const handleLogout =
    () => {

      logout();
    };

  return (

    <div
      className="
        w-full
        min-h-screen
        bg-[#f9fafb]
        py-20
        px-5
        md:px-10
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
        "
      >

        {/* =========================
            PAGE HEADER
        ========================== */}

        <FadeAnimation>

          <div
            className="
              text-center
              mb-16
            "
          >

            <span
              className="
                inline-block
                bg-[#f7d046]
                text-black
                px-5
                py-2
                rounded-full
                text-sm
                font-bold
                mb-5
              "
            >

              My Account

            </span>

            <h1
              className="
                text-5xl
                md:text-6xl
                font-bold
                text-[#1a1a1a]
                mb-5
              "
            >

              Profile Dashboard

            </h1>

            <p
              className="
                text-gray-600
                text-lg
                leading-8
                max-w-3xl
                mx-auto
              "
            >

              Manage your profile,
              personal details,
              and account settings.

            </p>

          </div>

        </FadeAnimation>

        {/* =========================
            PROFILE CONTENT
        ========================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-10
          "
        >

          {/* =========================
              LEFT SIDEBAR
          ========================== */}

          <SlideAnimation direction="left">

            <div
              className="
                bg-white
                rounded-[35px]
                shadow-lg
                p-10
                text-center
              "
            >

              {/* Avatar */}

              <div
                className="
                  w-32
                  h-32
                  rounded-full
                  bg-[#f7d046]
                  flex
                  items-center
                  justify-center
                  text-5xl
                  text-black
                  mx-auto
                  mb-6
                "
              >

                {/* <FaUser /> */}

              </div>

              {/* User Name */}

              <h2
                className="
                  text-3xl
                  font-bold
                  text-[#1a1a1a]
                  mb-3
                "
              >

                {user?.name ||
                  "Guest User"}

              </h2>

              {/* User Role */}

              <p
                className="
                  inline-block
                  bg-[#fff7d6]
                  text-[#1a1a1a]
                  px-5
                  py-2
                  rounded-full
                  text-sm
                  font-semibold
                  capitalize
                  mb-8
                "
              >

                {user?.role ||
                  "Customer"}

              </p>

              {/* Quick Info */}

              <div
                className="
                  flex
                  flex-col
                  gap-5
                  text-left
                "
              >

                {/* Email */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >

                  {/* <FaEnvelope
                    className="
                      text-[#f7d046]
                      text-xl
                    "
                  /> */}

                  <span
                    className="
                      text-gray-600
                      break-all
                    "
                  >

                    {user?.email ||
                      "No Email"}

                  </span>

                </div>

                {/* Phone */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >

                  {/* <FaPhoneAlt
                    className="
                      text-[#f7d046]
                      text-xl
                    "
                  /> */}

                  <span
                    className="
                      text-gray-600
                    "
                  >

                    {user?.phone ||
                      "No Phone"}

                  </span>

                </div>

                {/* Address */}

                <div
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >

                  {/* <FaMapMarkerAlt
                    className="
                      text-[#f7d046]
                      text-xl
                      mt-1
                    "
                  /> */}

                  <span
                    className="
                      text-gray-600
                    "
                  >

                    {user?.address ||
                      "No Address"}

                  </span>

                </div>

              </div>

              {/* Logout */}

              <button
                onClick={
                  handleLogout
                }
                className="
                  mt-10
                  w-full
                  bg-red-500
                  hover:bg-red-600
                  text-white
                  py-4
                  rounded-2xl
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition
                  duration-300
                "
              >

                {/* <FaSignOutAlt /> */}

                Logout

              </button>

            </div>

          </SlideAnimation>

          {/* =========================
              PROFILE FORM
          ========================== */}

          <SlideAnimation
            direction="right"
            className="
              lg:col-span-2
            "
          >

            <div
              className="
                bg-white
                rounded-[35px]
                shadow-lg
                p-8
                md:p-12
              "
            >

              {/* Top */}

              <div
                className="
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  md:justify-between
                  gap-5
                  mb-10
                "
              >

                <div>

                  <h2
                    className="
                      text-3xl
                      font-bold
                      text-[#1a1a1a]
                      mb-3
                    "
                  >

                    Personal Information

                  </h2>

                  <p
                    className="
                      text-gray-600
                      leading-8
                    "
                  >

                    Update your account
                    information and
                    profile details.

                  </p>

                </div>

                {/* Edit Button */}

                {!editMode && (

                  <button
                    onClick={() =>
                      setEditMode(
                        true
                      )
                    }
                    className="
                      bg-[#f7d046]
                      hover:bg-[#eac12e]
                      text-black
                      px-6
                      py-3
                      rounded-2xl
                      font-semibold
                      flex
                      items-center
                      gap-3
                      transition
                      duration-300
                    "
                  >

                    {/* <FaEdit /> */}

                    Edit Profile

                  </button>

                )}

              </div>

              {/* Success Message */}

              {successMessage && (

                <div
                  className="
                    bg-green-100
                    text-green-700
                    px-5
                    py-4
                    rounded-2xl
                    mb-8
                    font-medium
                  "
                >

                  {successMessage}

                </div>

              )}

              {/* Form */}

              <form
                onSubmit={
                  handleUpdate
                }
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-8
                "
              >

                {/* Name */}

                <div>

                  <label
                    className="
                      block
                      text-sm
                      font-semibold
                      mb-3
                    "
                  >

                    Full Name

                  </label>

                  <input
                    type="text"
                    name="name"
                    value={
                      formData.name
                    }
                    onChange={
                      handleChange
                    }
                    disabled={
                      !editMode
                    }
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      border
                      border-gray-300
                      outline-none
                      disabled:bg-gray-100
                      focus:border-[#f7d046]
                    "
                  />

                </div>

                {/* Email */}

                <div>

                  <label
                    className="
                      block
                      text-sm
                      font-semibold
                      mb-3
                    "
                  >

                    Email Address

                  </label>

                  <input
                    type="email"
                    name="email"
                    value={
                      formData.email
                    }
                    onChange={
                      handleChange
                    }
                    disabled={
                      !editMode
                    }
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      border
                      border-gray-300
                      outline-none
                      disabled:bg-gray-100
                      focus:border-[#f7d046]
                    "
                  />

                </div>

                {/* Phone */}

                <div>

                  <label
                    className="
                      block
                      text-sm
                      font-semibold
                      mb-3
                    "
                  >

                    Phone Number

                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={
                      formData.phone
                    }
                    onChange={
                      handleChange
                    }
                    disabled={
                      !editMode
                    }
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      border
                      border-gray-300
                      outline-none
                      disabled:bg-gray-100
                      focus:border-[#f7d046]
                    "
                  />

                </div>

                {/* Address */}

                <div>

                  <label
                    className="
                      block
                      text-sm
                      font-semibold
                      mb-3
                    "
                  >

                    Address

                  </label>

                  <input
                    type="text"
                    name="address"
                    value={
                      formData.address
                    }
                    onChange={
                      handleChange
                    }
                    disabled={
                      !editMode
                    }
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      border
                      border-gray-300
                      outline-none
                      disabled:bg-gray-100
                      focus:border-[#f7d046]
                    "
                  />

                </div>

                {/* Button */}

                {editMode && (

                  <div
                    className="
                      md:col-span-2
                      mt-4
                    "
                  >

                    <Button
                      text={
                        loading
                          ? "Saving..."
                          : "Save Changes"
                      }
                      // icon={
                      //   <FaSave />
                      // }
                      disabled={
                        loading
                      }
                    />

                  </div>

                )}

              </form>

            </div>

          </SlideAnimation>

        </div>

      </div>

    </div>
  );
};

export default Profile;