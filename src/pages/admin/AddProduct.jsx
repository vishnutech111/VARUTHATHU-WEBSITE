// import React, { useState } from "react";

// /* Components */
// import FadeAnimation from "../../components/animations/FadeAnimation";

// import Button from "../../components/common/Button";

// /* Icons */
// import {
//   FaUpload,
//   FaBoxOpen,
//   FaRupeeSign,
//   FaListAlt,
//   FaImage,
// } from "react-icons/fa";

// const AddProduct = () => {

//   const [productData, setProductData] =
//     useState({
//       name: "",
//       category: "",
//       price: "",
//       stock: "",
//       description: "",
//       image: null,
//     });

//   /* Handle Change */
//   const handleChange = (e) => {

//     const { name, value, files } =
//       e.target;

//     setProductData({
//       ...productData,
//       [name]:
//         files
//           ? files[0]
//           : value,
//     });
//   };

//   /* Submit */
//   const handleSubmit = (e) => {

//     e.preventDefault();

//     console.log(productData);
//   };

//   return (
//     <div
//       className="
//         w-full
//         min-h-screen
//         bg-[#f9fafb]
//         p-6
//         lg:p-10
//       "
//     >

//       {/* Header */}
//       <FadeAnimation>

//         <div
//           className="
//             mb-10
//           "
//         >

//           <span
//             className="
//               inline-block
//               bg-[#f7d046]
//               text-[#1a1a1a]
//               px-5
//               py-2
//               rounded-full
//               text-sm
//               font-bold
//               mb-5
//             "
//           >
//             Admin Panel
//           </span>

//           <h1
//             className="
//               text-4xl
//               font-bold
//               text-[#1a1a1a]
//               mb-4
//             "
//           >
//             Add New Product
//           </h1>

//           <p
//             className="
//               text-gray-600
//               leading-8
//             "
//           >
//             Upload new Kerala snacks,
//             manage product inventory,
//             pricing, and descriptions.
//           </p>

//         </div>

//       </FadeAnimation>

//       {/* Form */}
//       <FadeAnimation delay={0.2}>

//         <div
//           className="
//             bg-white
//             rounded-[30px]
//             shadow-lg
//             p-8
//             max-w-[900px]
//           "
//         >

//           <form
//             onSubmit={handleSubmit}
//             className="space-y-8"
//           >

//             {/* Product Name */}
//             <div>

//               <label
//                 className="
//                   flex
//                   items-center
//                   gap-3
//                   text-sm
//                   font-semibold
//                   text-[#1a1a1a]
//                   mb-3
//                 "
//               >

//                 <FaBoxOpen
//                   className="
//                     text-[#f7d046]
//                   "
//                 />

//                 Product Name

//               </label>

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter product name"
//                 value={productData.name}
//                 onChange={handleChange}
//                 required
//                 className="
//                   w-full
//                   h-[60px]
//                   px-5
//                   rounded-2xl
//                   border
//                   border-gray-200
//                   outline-none
//                   focus:border-[#f7d046]
//                   focus:ring-4
//                   focus:ring-yellow-100
//                 "
//               />

//             </div>

//             {/* Category */}
//             <div>

//               <label
//                 className="
//                   flex
//                   items-center
//                   gap-3
//                   text-sm
//                   font-semibold
//                   text-[#1a1a1a]
//                   mb-3
//                 "
//               >

//                 <FaListAlt
//                   className="
//                     text-[#f7d046]
//                   "
//                 />

//                 Category

//               </label>

//               <select
//                 name="category"
//                 value={productData.category}
//                 onChange={handleChange}
//                 required
//                 className="
//                   w-full
//                   h-[60px]
//                   px-5
//                   rounded-2xl
//                   border
//                   border-gray-200
//                   outline-none
//                   bg-white
//                   focus:border-[#f7d046]
//                   focus:ring-4
//                   focus:ring-yellow-100
//                 "
//               >

//                 <option value="">
//                   Select Category
//                 </option>

//                 <option value="banana-chips">
//                   Banana Chips
//                 </option>

//                 <option value="tapioca-chips">
//                   Tapioca Chips
//                 </option>

//                 <option value="mixture">
//                   Mixture
//                 </option>

//                 <option value="sweet-snacks">
//                   Sweet Snacks
//                 </option>

//               </select>

//             </div>

//             {/* Price & Stock */}
//             <div
//               className="
//                 grid
//                 grid-cols-1
//                 md:grid-cols-2
//                 gap-6
//               "
//             >

//               {/* Price */}
//               <div>

//                 <label
//                   className="
//                     flex
//                     items-center
//                     gap-3
//                     text-sm
//                     font-semibold
//                     text-[#1a1a1a]
//                     mb-3
//                   "
//                 >

//                   <FaRupeeSign
//                     className="
//                       text-[#f7d046]
//                     "
//                   />

//                   Product Price

//                 </label>

//                 <input
//                   type="number"
//                   name="price"
//                   placeholder="Enter price"
//                   value={productData.price}
//                   onChange={handleChange}
//                   required
//                   className="
//                     w-full
//                     h-[60px]
//                     px-5
//                     rounded-2xl
//                     border
//                     border-gray-200
//                     outline-none
//                     focus:border-[#f7d046]
//                     focus:ring-4
//                     focus:ring-yellow-100
//                   "
//                 />

//               </div>

//               {/* Stock */}
//               <div>

//                 <label
//                   className="
//                     flex
//                     items-center
//                     gap-3
//                     text-sm
//                     font-semibold
//                     text-[#1a1a1a]
//                     mb-3
//                   "
//                 >
//                   Stock Quantity
//                 </label>

//                 <input
//                   type="number"
//                   name="stock"
//                   placeholder="Enter stock quantity"
//                   value={productData.stock}
//                   onChange={handleChange}
//                   required
//                   className="
//                     w-full
//                     h-[60px]
//                     px-5
//                     rounded-2xl
//                     border
//                     border-gray-200
//                     outline-none
//                     focus:border-[#f7d046]
//                     focus:ring-4
//                     focus:ring-yellow-100
//                   "
//                 />

//               </div>

//             </div>

//             {/* Description */}
//             <div>

//               <label
//                 className="
//                   text-sm
//                   font-semibold
//                   text-[#1a1a1a]
//                   mb-3
//                   block
//                 "
//               >
//                 Product Description
//               </label>

//               <textarea
//                 rows="6"
//                 name="description"
//                 placeholder="
//                   Write product description...
//                 "
//                 value={
//                   productData.description
//                 }
//                 onChange={handleChange}
//                 required
//                 className="
//                   w-full
//                   px-5
//                   py-4
//                   rounded-2xl
//                   border
//                   border-gray-200
//                   outline-none
//                   resize-none
//                   focus:border-[#f7d046]
//                   focus:ring-4
//                   focus:ring-yellow-100
//                 "
//               />

//             </div>

//             {/* Image Upload */}
//             <div>

//               <label
//                 className="
//                   flex
//                   items-center
//                   gap-3
//                   text-sm
//                   font-semibold
//                   text-[#1a1a1a]
//                   mb-4
//                 "
//               >

//                 <FaImage
//                   className="
//                     text-[#f7d046]
//                   "
//                 />

//                 Product Image

//               </label>

//               <label
//                 className="
//                   w-full
//                   border-2
//                   border-dashed
//                   border-gray-300
//                   rounded-[30px]
//                   p-10
//                   flex
//                   flex-col
//                   items-center
//                   justify-center
//                   text-center
//                   cursor-pointer
//                   hover:border-[#f7d046]
//                   hover:bg-[#fffdf4]
//                   transition
//                 "
//               >

//                 <FaUpload
//                   className="
//                     text-5xl
//                     text-[#f7d046]
//                     mb-5
//                   "
//                 />

//                 <h3
//                   className="
//                     text-xl
//                     font-bold
//                     text-[#1a1a1a]
//                     mb-2
//                   "
//                 >
//                   Upload Product Image
//                 </h3>

//                 <p
//                   className="
//                     text-gray-500
//                   "
//                 >
//                   PNG, JPG, WEBP
//                 </p>

//                 <input
//                   type="file"
//                   name="image"
//                   accept="image/*"
//                   onChange={handleChange}
//                   hidden
//                 />

//               </label>

//             </div>

//             {/* Button */}
//             <div
//               className="
//                 pt-4
//               "
//             >

//               <Button
//                 type="submit"
//                 text="Add Product"
//               />

//             </div>

//           </form>

//         </div>

//       </FadeAnimation>

//     </div>
//   );
// };

// export default AddProduct;


import React, {
  useState,
} from "react";

import {
  FaUpload,
  FaBoxOpen,
  FaRupeeSign,
  FaTags,
  FaClipboardList,
  FaImage,
} from "react-icons/fa";

/* Components */
import FadeAnimation from "../../components/animations/FadeAnimation";

import Button from "../../components/common/Button";

const AddProduct = () => {

  /* =========================
      STATES
  ========================== */

  const [
    formData,
    setFormData,
  ] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    image: "",
  });

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    successMessage,
    setSuccessMessage,
  ] = useState("");

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
      HANDLE IMAGE
  ========================== */

  const handleImageChange =
    (e) => {

      const file =
        e.target.files[0];

      if (file) {

        setFormData({
          ...formData,
          image:
            URL.createObjectURL(
              file
            ),
        });
      }
    };

  /* =========================
      HANDLE SUBMIT
  ========================== */

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      setLoading(true);

      /* API CALL HERE */

      setTimeout(() => {

        setLoading(false);

        setSuccessMessage(
          "Product added successfully."
        );

        setFormData({
          name: "",
          category: "",
          price: "",
          stock: "",
          description: "",
          image: "",
        });

        setTimeout(() => {

          setSuccessMessage("");

        }, 3000);

      }, 1500);
    };

  return (

    <div
      className="
        w-full
        min-h-screen
      "
    >

      {/* =========================
          PAGE HEADER
      ========================== */}

      <FadeAnimation>

        <div
          className="
            mb-12
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

            Admin Panel

          </span>

          <h1
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-[#1a1a1a]
              mb-4
            "
          >

            Add New Product

          </h1>

          <p
            className="
              text-gray-600
              text-lg
              leading-8
              max-w-3xl
            "
          >

            Add new Kerala snacks
            and products to your
            store inventory.

          </p>

        </div>

      </FadeAnimation>

      {/* =========================
          FORM SECTION
      ========================== */}

      <FadeAnimation delay={0.2}>

        <div
          className="
            bg-white
            rounded-[35px]
            shadow-md
            p-8
            md:p-12
          "
        >

          {/* Success */}

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

          {/* FORM */}

          <form
            onSubmit={
              handleSubmit
            }
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-8
            "
          >

            {/* =========================
                PRODUCT NAME
            ========================== */}

            <div>

              <label
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  mb-3
                  text-[#1a1a1a]
                "
              >

                <FaBoxOpen />

                Product Name

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
                placeholder="
                  Enter product name
                "
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-gray-300
                  outline-none
                  focus:border-[#f7d046]
                "
              />

            </div>

            {/* =========================
                CATEGORY
            ========================== */}

            <div>

              <label
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  mb-3
                  text-[#1a1a1a]
                "
              >

                <FaTags />

                Category

              </label>

              <input
                type="text"
                name="category"
                value={
                  formData.category
                }
                onChange={
                  handleChange
                }
                placeholder="
                  Example: Banana Chips
                "
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-gray-300
                  outline-none
                  focus:border-[#f7d046]
                "
              />

            </div>

            {/* =========================
                PRICE
            ========================== */}

            <div>

              <label
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  mb-3
                  text-[#1a1a1a]
                "
              >

                <FaRupeeSign />

                Product Price

              </label>

              <input
                type="number"
                name="price"
                value={
                  formData.price
                }
                onChange={
                  handleChange
                }
                placeholder="
                  Enter product price
                "
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-gray-300
                  outline-none
                  focus:border-[#f7d046]
                "
              />

            </div>

            {/* =========================
                STOCK
            ========================== */}

            <div>

              <label
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  mb-3
                  text-[#1a1a1a]
                "
              >

                <FaClipboardList />

                Available Stock

              </label>

              <input
                type="number"
                name="stock"
                value={
                  formData.stock
                }
                onChange={
                  handleChange
                }
                placeholder="
                  Enter stock quantity
                "
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-gray-300
                  outline-none
                  focus:border-[#f7d046]
                "
              />

            </div>

            {/* =========================
                DESCRIPTION
            ========================== */}

            <div
              className="
                md:col-span-2
              "
            >

              <label
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  mb-3
                  text-[#1a1a1a]
                "
              >

                <FaClipboardList />

                Product Description

              </label>

              <textarea
                rows="6"
                name="description"
                value={
                  formData.description
                }
                onChange={
                  handleChange
                }
                placeholder="
                  Write product details...
                "
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-gray-300
                  outline-none
                  resize-none
                  focus:border-[#f7d046]
                "
              />

            </div>

            {/* =========================
                IMAGE UPLOAD
            ========================== */}

            <div
              className="
                md:col-span-2
              "
            >

              <label
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  mb-4
                  text-[#1a1a1a]
                "
              >

                <FaImage />

                Product Image

              </label>

              <div
                className="
                  border-2
                  border-dashed
                  border-gray-300
                  rounded-3xl
                  p-10
                  text-center
                  bg-[#fafafa]
                "
              >

                <input
                  type="file"
                  accept="image/*"
                  onChange={
                    handleImageChange
                  }
                  className="
                    hidden
                  "
                  id="productImage"
                />

                <label
                  htmlFor="productImage"
                  className="
                    cursor-pointer
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-5
                  "
                >

                  <div
                    className="
                      w-20
                      h-20
                      rounded-full
                      bg-[#fff7d6]
                      flex
                      items-center
                      justify-center
                      text-[#f7d046]
                      text-4xl
                    "
                  >

                    <FaUpload />

                  </div>

                  <div>

                    <h3
                      className="
                        text-2xl
                        font-bold
                        text-[#1a1a1a]
                        mb-2
                      "
                    >

                      Upload Product Image

                    </h3>

                    <p
                      className="
                        text-gray-500
                        leading-8
                      "
                    >

                      Click to upload
                      product image.

                    </p>

                  </div>

                </label>

                {/* Preview */}

                {formData.image && (

                  <div
                    className="
                      mt-8
                    "
                  >

                    <img
                      src={
                        formData.image
                      }
                      alt="Preview"
                      className="
                        w-60
                        h-60
                        object-cover
                        rounded-3xl
                        mx-auto
                        shadow-md
                      "
                    />

                  </div>

                )}

              </div>

            </div>

            {/* =========================
                BUTTON
            ========================== */}

            <div
              className="
                md:col-span-2
                mt-4
              "
            >

              <Button
                text={
                  loading
                    ? "Adding Product..."
                    : "Add Product"
                }
                disabled={
                  loading
                }
                fullWidth={true}
              />

            </div>

          </form>

        </div>

      </FadeAnimation>

    </div>
  );
};

export default AddProduct;