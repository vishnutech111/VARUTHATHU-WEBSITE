import React, { useState } from "react";

/* Components */
import FadeAnimation from "../../components/animations/FadeAnimation";

import Button from "../../components/common/Button";

/* Icons */
import {
  FaEdit,
  FaUpload,
  FaBoxOpen,
  FaRupeeSign,
  FaImage,
  FaListAlt,
} from "react-icons/fa";

const EditProduct = () => {

  /* Dummy Existing Product */
  const [productData, setProductData] =
    useState({
      name: "Kerala Banana Chips",
      category: "banana-chips",
      price: "180",
      stock: "50",
      description:
        "Traditional Kerala style banana chips made using premium bananas and coconut oil.",
      image: null,
    });

  /* Handle Change */
  const handleChange = (e) => {

    const {
      name,
      value,
      files,
    } = e.target;

    setProductData({
      ...productData,
      [name]:
        files
          ? files[0]
          : value,
    });
  };

  /* Submit */
  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(productData);
  };

  return (
    <div
      className="
        w-full
        min-h-screen
        bg-[#f9fafb]
        p-6
        lg:p-10
      "
    >

      {/* Header */}
      <FadeAnimation>

        <div className="mb-10">

          <span
            className="
              inline-block
              bg-[#f7d046]
              text-[#1a1a1a]
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
              font-bold
              text-[#1a1a1a]
              mb-4
            "
          >
            Edit Product
          </h1>

          <p
            className="
              text-gray-600
              leading-8
            "
          >
            Update product details,
            pricing, stock quantity,
            and images for Varuthathu Co.
          </p>

        </div>

      </FadeAnimation>

      {/* Form Section */}
      <FadeAnimation delay={0.2}>

        <div
          className="
            bg-white
            rounded-[30px]
            shadow-lg
            p-8
            max-w-[900px]
          "
        >

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >

            {/* Product Name */}
            <div>

              <label
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  text-[#1a1a1a]
                  mb-3
                "
              >

                <FaBoxOpen
                  className="
                    text-[#f7d046]
                  "
                />

                Product Name

              </label>

              <input
                type="text"
                name="name"
                value={productData.name}
                onChange={handleChange}
                required
                className="
                  w-full
                  h-[60px]
                  px-5
                  rounded-2xl
                  border
                  border-gray-200
                  outline-none
                  focus:border-[#f7d046]
                  focus:ring-4
                  focus:ring-yellow-100
                "
              />

            </div>

            {/* Category */}
            <div>

              <label
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  text-[#1a1a1a]
                  mb-3
                "
              >

                <FaListAlt
                  className="
                    text-[#f7d046]
                  "
                />

                Product Category

              </label>

              <select
                name="category"
                value={productData.category}
                onChange={handleChange}
                required
                className="
                  w-full
                  h-[60px]
                  px-5
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  outline-none
                  focus:border-[#f7d046]
                  focus:ring-4
                  focus:ring-yellow-100
                "
              >

                <option value="">
                  Select Category
                </option>

                <option value="banana-chips">
                  Banana Chips
                </option>

                <option value="tapioca-chips">
                  Tapioca Chips
                </option>

                <option value="mixture">
                  Mixture
                </option>

                <option value="sweet-snacks">
                  Sweet Snacks
                </option>

              </select>

            </div>

            {/* Price & Stock */}
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
              "
            >

              {/* Price */}
              <div>

                <label
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    font-semibold
                    text-[#1a1a1a]
                    mb-3
                  "
                >

                  <FaRupeeSign
                    className="
                      text-[#f7d046]
                    "
                  />

                  Product Price

                </label>

                <input
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    h-[60px]
                    px-5
                    rounded-2xl
                    border
                    border-gray-200
                    outline-none
                    focus:border-[#f7d046]
                    focus:ring-4
                    focus:ring-yellow-100
                  "
                />

              </div>

              {/* Stock */}
              <div>

                <label
                  className="
                    text-sm
                    font-semibold
                    text-[#1a1a1a]
                    mb-3
                    block
                  "
                >
                  Stock Quantity
                </label>

                <input
                  type="number"
                  name="stock"
                  value={productData.stock}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    h-[60px]
                    px-5
                    rounded-2xl
                    border
                    border-gray-200
                    outline-none
                    focus:border-[#f7d046]
                    focus:ring-4
                    focus:ring-yellow-100
                  "
                />

              </div>

            </div>

            {/* Description */}
            <div>

              <label
                className="
                  text-sm
                  font-semibold
                  text-[#1a1a1a]
                  mb-3
                  block
                "
              >
                Product Description
              </label>

              <textarea
                rows="6"
                name="description"
                value={
                  productData.description
                }
                onChange={handleChange}
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-gray-200
                  outline-none
                  resize-none
                  focus:border-[#f7d046]
                  focus:ring-4
                  focus:ring-yellow-100
                "
              />

            </div>

            {/* Image Upload */}
            <div>

              <label
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  text-[#1a1a1a]
                  mb-4
                "
              >

                <FaImage
                  className="
                    text-[#f7d046]
                  "
                />

                Product Image

              </label>

              <label
                className="
                  w-full
                  border-2
                  border-dashed
                  border-gray-300
                  rounded-[30px]
                  p-10
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  cursor-pointer
                  hover:border-[#f7d046]
                  hover:bg-[#fffdf4]
                  transition
                "
              >

                <FaUpload
                  className="
                    text-5xl
                    text-[#f7d046]
                    mb-5
                  "
                />

                <h3
                  className="
                    text-xl
                    font-bold
                    text-[#1a1a1a]
                    mb-2
                  "
                >
                  Change Product Image
                </h3>

                <p
                  className="
                    text-gray-500
                  "
                >
                  Upload PNG, JPG, WEBP
                </p>

                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  hidden
                />

              </label>

            </div>

            {/* Buttons */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-5
                pt-4
              "
            >

              <Button
                type="submit"
                text="Update Product"
                icon={<FaEdit />}
              />

              <button
                type="button"
                className="
                  px-8
                  py-4
                  rounded-full
                  border-2
                  border-gray-300
                  font-semibold
                  hover:bg-gray-100
                  transition
                "
              >
                Cancel
              </button>

            </div>

          </form>

        </div>

      </FadeAnimation>

    </div>
  );
};

export default EditProduct;