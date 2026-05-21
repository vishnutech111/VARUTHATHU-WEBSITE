import React, { useState } from "react";

/* Components */
import FadeAnimation from "../../components/animations/FadeAnimation";

import Modal from "../../components/common/Modal";

import Button from "../../components/common/Button";

import SearchBar from "../../components/common/SearchBar";

/* Icons */
import {
  FaTags,
  FaPlus,
  FaEdit,
  FaTrash,
  FaPercent,
  FaTicketAlt,
} from "react-icons/fa";

const Coupons = () => {

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [couponData, setCouponData] =
    useState({
      code: "",
      discount: "",
      expiry: "",
      minimumAmount: "",
    });

  /* Dummy Coupons */
  const coupons = [
    {
      id: 1,
      code: "WELCOME10",
      discount: "10%",
      expiry: "2026-12-30",
      minimumAmount: "499",
      status: "Active",
    },
    {
      id: 2,
      code: "SNACK20",
      discount: "20%",
      expiry: "2026-10-15",
      minimumAmount: "999",
      status: "Active",
    },
    {
      id: 3,
      code: "KERALA15",
      discount: "15%",
      expiry: "2026-08-01",
      minimumAmount: "799",
      status: "Expired",
    },
  ];

  /* Handle Change */
  const handleChange = (e) => {

    setCouponData({
      ...couponData,
      [e.target.name]:
        e.target.value,
    });
  };

  /* Submit */
  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(couponData);

    setIsModalOpen(false);
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

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-6
            mb-10
          "
        >

          {/* Left */}
          <div>

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
              Manage Coupons
            </h1>

            <p
              className="
                text-gray-600
                leading-8
              "
            >
              Create and manage discount
              coupons for customers and
              promotional campaigns.
            </p>

          </div>

          {/* Search */}
          <div
            className="
              w-full
              lg:w-[350px]
            "
          >

            <SearchBar
              placeholder="
                Search coupons...
              "
            />

          </div>

        </div>

      </FadeAnimation>

      {/* Top Cards */}
      <section
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
          mb-12
        "
      >

        {/* Total Coupons */}
        <FadeAnimation>

          <div
            className="
              bg-white
              rounded-[30px]
              shadow-md
              p-6
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
                mb-5
              "
            >

              <div
                className="
                  w-16
                  h-16
                  rounded-full
                  bg-yellow-100
                  flex
                  items-center
                  justify-center
                "
              >

                <FaTicketAlt
                  className="
                    text-3xl
                    text-[#1a1a1a]
                  "
                />

              </div>

            </div>

            <h2
              className="
                text-4xl
                font-bold
                text-[#1a1a1a]
                mb-2
              "
            >
              12
            </h2>

            <p
              className="
                text-gray-600
              "
            >
              Total Coupons
            </p>

          </div>

        </FadeAnimation>

        {/* Active Coupons */}
        <FadeAnimation delay={0.2}>

          <div
            className="
              bg-white
              rounded-[30px]
              shadow-md
              p-6
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
                mb-5
              "
            >

              <div
                className="
                  w-16
                  h-16
                  rounded-full
                  bg-green-100
                  flex
                  items-center
                  justify-center
                "
              >

                <FaTags
                  className="
                    text-3xl
                    text-green-600
                  "
                />

              </div>

            </div>

            <h2
              className="
                text-4xl
                font-bold
                text-[#1a1a1a]
                mb-2
              "
            >
              8
            </h2>

            <p
              className="
                text-gray-600
              "
            >
              Active Coupons
            </p>

          </div>

        </FadeAnimation>

        {/* Discounts */}
        <FadeAnimation delay={0.4}>

          <div
            className="
              bg-white
              rounded-[30px]
              shadow-md
              p-6
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
                mb-5
              "
            >

              <div
                className="
                  w-16
                  h-16
                  rounded-full
                  bg-blue-100
                  flex
                  items-center
                  justify-center
                "
              >

                <FaPercent
                  className="
                    text-3xl
                    text-blue-600
                  "
                />

              </div>

            </div>

            <h2
              className="
                text-4xl
                font-bold
                text-[#1a1a1a]
                mb-2
              "
            >
              35%
            </h2>

            <p
              className="
                text-gray-600
              "
            >
              Max Discount
            </p>

          </div>

        </FadeAnimation>

      </section>

      {/* Top Actions */}
      <FadeAnimation delay={0.6}>

        <div
          className="
            flex
            justify-end
            mb-8
          "
        >

          <button
            onClick={() =>
              setIsModalOpen(true)
            }
            className="
              flex
              items-center
              gap-3
              bg-[#f7d046]
              hover:bg-yellow-400
              text-[#1a1a1a]
              font-semibold
              px-8
              py-4
              rounded-full
              transition
            "
          >

            <FaPlus />

            Create Coupon

          </button>

        </div>

      </FadeAnimation>

      {/* Coupons Table */}
      <FadeAnimation delay={0.8}>

        <div
          className="
            bg-white
            rounded-[30px]
            shadow-md
            overflow-x-auto
          "
        >

          <table className="w-full">

            {/* Head */}
            <thead
              className="
                bg-[#fff8dc]
              "
            >

              <tr>

                <th
                  className="
                    text-left
                    p-5
                    font-bold
                    text-[#1a1a1a]
                  "
                >
                  Coupon Code
                </th>

                <th
                  className="
                    text-left
                    p-5
                    font-bold
                    text-[#1a1a1a]
                  "
                >
                  Discount
                </th>

                <th
                  className="
                    text-left
                    p-5
                    font-bold
                    text-[#1a1a1a]
                  "
                >
                  Minimum Amount
                </th>

                <th
                  className="
                    text-left
                    p-5
                    font-bold
                    text-[#1a1a1a]
                  "
                >
                  Expiry Date
                </th>

                <th
                  className="
                    text-left
                    p-5
                    font-bold
                    text-[#1a1a1a]
                  "
                >
                  Status
                </th>

                <th
                  className="
                    text-center
                    p-5
                    font-bold
                    text-[#1a1a1a]
                  "
                >
                  Actions
                </th>

              </tr>

            </thead>

            {/* Body */}
            <tbody>

              {coupons.map((coupon) => (

                <tr
                  key={coupon.id}
                  className="
                    border-b
                    hover:bg-[#fffdf4]
                    transition
                  "
                >

                  <td
                    className="
                      p-5
                      font-semibold
                      text-[#1a1a1a]
                    "
                  >
                    {coupon.code}
                  </td>

                  <td className="p-5">
                    {coupon.discount}
                  </td>

                  <td className="p-5">
                    ₹{coupon.minimumAmount}
                  </td>

                  <td className="p-5">
                    {coupon.expiry}
                  </td>

                  <td className="p-5">

                    <span
                      className={`
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-semibold
                        ${
                          coupon.status ===
                          "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }
                      `}
                    >
                      {coupon.status}
                    </span>

                  </td>

                  <td
                    className="
                      p-5
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        gap-4
                      "
                    >

                      <button
                        className="
                          w-11
                          h-11
                          rounded-full
                          bg-blue-100
                          text-blue-600
                          flex
                          items-center
                          justify-center
                          hover:scale-105
                          transition
                        "
                      >

                        <FaEdit />

                      </button>

                      <button
                        className="
                          w-11
                          h-11
                          rounded-full
                          bg-red-100
                          text-red-600
                          flex
                          items-center
                          justify-center
                          hover:scale-105
                          transition
                        "
                      >

                        <FaTrash />

                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </FadeAnimation>

      {/* Modal */}
      {isModalOpen && (

        <Modal
          isOpen={isModalOpen}
          onClose={() =>
            setIsModalOpen(false)
          }
        >

          <div className="p-2">

            {/* Title */}
            <div className="mb-8">

              <h2
                className="
                  text-3xl
                  font-bold
                  text-[#1a1a1a]
                  mb-3
                "
              >
                Create Coupon
              </h2>

              <p
                className="
                  text-gray-600
                "
              >
                Add a new discount coupon.
              </p>

            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Coupon Code */}
              <div>

                <label
                  className="
                    block
                    text-sm
                    font-semibold
                    text-[#1a1a1a]
                    mb-3
                  "
                >
                  Coupon Code
                </label>

                <input
                  type="text"
                  name="code"
                  value={couponData.code}
                  onChange={handleChange}
                  placeholder="
                    Enter coupon code
                  "
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

              {/* Discount */}
              <div>

                <label
                  className="
                    block
                    text-sm
                    font-semibold
                    text-[#1a1a1a]
                    mb-3
                  "
                >
                  Discount Percentage
                </label>

                <input
                  type="number"
                  name="discount"
                  value={
                    couponData.discount
                  }
                  onChange={handleChange}
                  placeholder="
                    Enter discount %
                  "
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

              {/* Minimum Amount */}
              <div>

                <label
                  className="
                    block
                    text-sm
                    font-semibold
                    text-[#1a1a1a]
                    mb-3
                  "
                >
                  Minimum Order Amount
                </label>

                <input
                  type="number"
                  name="minimumAmount"
                  value={
                    couponData.minimumAmount
                  }
                  onChange={handleChange}
                  placeholder="
                    Enter minimum amount
                  "
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

              {/* Expiry */}
              <div>

                <label
                  className="
                    block
                    text-sm
                    font-semibold
                    text-[#1a1a1a]
                    mb-3
                  "
                >
                  Expiry Date
                </label>

                <input
                  type="date"
                  name="expiry"
                  value={couponData.expiry}
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

              {/* Button */}
              <Button
                type="submit"
                text="Create Coupon"
                fullWidth={true}
              />

            </form>

          </div>

        </Modal>

      )}

    </div>
  );
};

export default Coupons;