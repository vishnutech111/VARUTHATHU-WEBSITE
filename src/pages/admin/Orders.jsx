// import React, { useState } from "react";

// /* Components */
// import FadeAnimation from "../../components/animations/FadeAnimation";

// import OrderTable from "../../components/admin/OrderTable";

// import SearchBar from "../../components/common/SearchBar";

// /* Icons */
// import {
//   FaShoppingBag,
//   FaClock,
//   FaCheckCircle,
//   FaTruck,
//   FaTimesCircle,
// } from "react-icons/fa";

// const Orders = () => {

//   const [filter, setFilter] =
//     useState("all");

//   /* Stats */
//   const orderStats = [
//     {
//       id: 1,
//       title: "Total Orders",
//       value: 154,
//       icon: <FaShoppingBag />,
//       bg: "bg-yellow-100",
//     },
//     {
//       id: 2,
//       title: "Pending",
//       value: 23,
//       icon: <FaClock />,
//       bg: "bg-orange-100",
//     },
//     {
//       id: 3,
//       title: "Delivered",
//       value: 110,
//       icon: <FaCheckCircle />,
//       bg: "bg-green-100",
//     },
//     {
//       id: 4,
//       title: "Shipped",
//       value: 15,
//       icon: <FaTruck />,
//       bg: "bg-blue-100",
//     },
//     {
//       id: 5,
//       title: "Cancelled",
//       value: 6,
//       icon: <FaTimesCircle />,
//       bg: "bg-red-100",
//     },
//   ];

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
//             flex
//             flex-col
//             lg:flex-row
//             lg:items-center
//             lg:justify-between
//             gap-6
//             mb-10
//           "
//         >

//           <div>

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
//               Admin Panel
//             </span>

//             <h1
//               className="
//                 text-4xl
//                 font-bold
//                 text-[#1a1a1a]
//                 mb-4
//               "
//             >
//               Manage Orders
//             </h1>

//             <p
//               className="
//                 text-gray-600
//                 leading-8
//               "
//             >
//               Track customer purchases,
//               shipping status, payments,
//               and order history.
//             </p>

//           </div>

//           {/* Search */}
//           <div
//             className="
//               w-full
//               lg:w-[350px]
//             "
//           >

//             <SearchBar
//               placeholder="
//                 Search orders...
//               "
//             />

//           </div>

//         </div>

//       </FadeAnimation>

//       {/* Stats */}
//       <section
//         className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           lg:grid-cols-3
//           xl:grid-cols-5
//           gap-6
//           mb-12
//         "
//       >

//         {orderStats.map((item) => (

//           <FadeAnimation
//             key={item.id}
//           >

//             <div
//               className="
//                 bg-white
//                 rounded-[30px]
//                 p-6
//                 shadow-md
//                 hover:shadow-xl
//                 transition
//                 duration-300
//               "
//             >

//               {/* Top */}
//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                   mb-5
//                 "
//               >

//                 <div
//                   className={`
//                     w-14
//                     h-14
//                     rounded-full
//                     flex
//                     items-center
//                     justify-center
//                     text-2xl
//                     ${item.bg}
//                   `}
//                 >
//                   {item.icon}
//                 </div>

//               </div>

//               {/* Value */}
//               <h2
//                 className="
//                   text-3xl
//                   font-bold
//                   text-[#1a1a1a]
//                   mb-2
//                 "
//               >
//                 {item.value}
//               </h2>

//               {/* Title */}
//               <p
//                 className="
//                   text-gray-600
//                 "
//               >
//                 {item.title}
//               </p>

//             </div>

//           </FadeAnimation>

//         ))}

//       </section>

//       {/* Filters */}
//       <FadeAnimation delay={0.2}>

//         <div
//           className="
//             flex
//             flex-wrap
//             gap-4
//             mb-10
//           "
//         >

//           {[
//             "all",
//             "pending",
//             "shipped",
//             "delivered",
//             "cancelled",
//           ].map((item) => (

//             <button
//               key={item}
//               onClick={() =>
//                 setFilter(item)
//               }
//               className={`
//                 px-6
//                 py-3
//                 rounded-full
//                 font-semibold
//                 capitalize
//                 transition
//                 ${
//                   filter === item
//                     ? "bg-[#f7d046] text-[#1a1a1a]"
//                     : "bg-white text-gray-600 hover:bg-[#fff8dc]"
//                 }
//               `}
//             >
//               {item}
//             </button>

//           ))}

//         </div>

//       </FadeAnimation>

//       {/* Orders Table */}
//       <FadeAnimation delay={0.4}>

//         <div
//           className="
//             bg-white
//             rounded-[30px]
//             shadow-md
//             p-6
//           "
//         >

//           {/* Heading */}
//           <div
//             className="
//               flex
//               flex-col
//               md:flex-row
//               md:items-center
//               md:justify-between
//               gap-4
//               mb-8
//             "
//           >

//             <div>

//               <h2
//                 className="
//                   text-2xl
//                   font-bold
//                   text-[#1a1a1a]
//                   mb-2
//                 "
//               >
//                 Orders List
//               </h2>

//               <p
//                 className="
//                   text-gray-600
//                 "
//               >
//                 View and manage all
//                 customer orders.
//               </p>

//             </div>

//             {/* Export */}
//             <button
//               className="
//                 bg-[#f7d046]
//                 hover:bg-yellow-400
//                 text-[#1a1a1a]
//                 font-semibold
//                 px-6
//                 py-3
//                 rounded-full
//                 transition
//               "
//             >
//               Export Orders
//             </button>

//           </div>

//           {/* Table */}
//           <OrderTable />

//         </div>

//       </FadeAnimation>

//     </div>
//   );
// };

// export default Orders;




import React, {
  useState,
} from "react";

/* Components */
import FadeAnimation from "../../components/animations/FadeAnimation";

import SearchBar from "../../components/common/SearchBar";

import EmptyState from "../../components/common/EmptyState";

/* Icons */
import {
  FaShoppingBag,
  FaEye,
  FaCheckCircle,
  FaClock,
  FaTruck,
  FaTimesCircle,
} from "react-icons/fa";

const Orders = () => {

  /* =========================
      DUMMY ORDERS
  ========================== */

  const orderData = [

    {
      id: "#ORD1001",
      customer: "Rahul Kumar",
      amount: "₹1,250",
      status: "Delivered",
      date: "18 May 2026",
    },

    {
      id: "#ORD1002",
      customer: "Anjali Nair",
      amount: "₹850",
      status: "Processing",
      date: "17 May 2026",
    },

    {
      id: "#ORD1003",
      customer: "Vishnu Raj",
      amount: "₹2,150",
      status: "Shipped",
      date: "16 May 2026",
    },

    {
      id: "#ORD1004",
      customer: "Arun Das",
      amount: "₹540",
      status: "Cancelled",
      date: "15 May 2026",
    },

    {
      id: "#ORD1005",
      customer: "Meera Joseph",
      amount: "₹1,780",
      status: "Delivered",
      date: "14 May 2026",
    },

  ];

  /* =========================
      STATES
  ========================== */

  const [
    searchTerm,
    setSearchTerm,
  ] = useState("");

  /* =========================
      FILTER ORDERS
  ========================== */

  const filteredOrders =
    orderData.filter(
      (order) =>
        order.customer
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        order.id
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );

  /* =========================
      STATUS UI
  ========================== */

  const getStatusStyle =
    (status) => {

      switch (status) {

        case "Delivered":
          return `
            bg-green-100
            text-green-700
          `;

        case "Processing":
          return `
            bg-yellow-100
            text-yellow-700
          `;

        case "Shipped":
          return `
            bg-blue-100
            text-blue-700
          `;

        case "Cancelled":
          return `
            bg-red-100
            text-red-700
          `;

        default:
          return `
            bg-gray-100
            text-gray-700
          `;
      }
    };

  const getStatusIcon =
    (status) => {

      switch (status) {

        case "Delivered":
          return <FaCheckCircle />;

        case "Processing":
          return <FaClock />;

        case "Shipped":
          return <FaTruck />;

        case "Cancelled":
          return <FaTimesCircle />;

        default:
          return null;
      }
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
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-6
            mb-12
          "
        >

          <div>

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

              Admin Orders

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

              Orders Management

            </h1>

            <p
              className="
                text-gray-600
                text-lg
                leading-8
              "
            >

              Manage customer orders,
              shipping, and delivery status.

            </p>

          </div>

          {/* Total Orders */}

          <div
            className="
              bg-white
              rounded-3xl
              shadow-md
              px-8
              py-6
              flex
              items-center
              gap-5
            "
          >

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-[#fff7d6]
                flex
                items-center
                justify-center
                text-[#f7d046]
                text-3xl
              "
            >

              <FaShoppingBag />

            </div>

            <div>

              <p
                className="
                  text-gray-500
                  mb-2
                "
              >

                Total Orders

              </p>

              <h2
                className="
                  text-3xl
                  font-bold
                  text-[#1a1a1a]
                "
              >

                {orderData.length}

              </h2>

            </div>

          </div>

        </div>

      </FadeAnimation>

      {/* =========================
          SEARCH
      ========================== */}

      <FadeAnimation delay={0.2}>

        <div
          className="
            mb-10
          "
        >

          <SearchBar
            placeholder="
              Search orders by ID or customer...
            "
            value={
              searchTerm
            }
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
          />

        </div>

      </FadeAnimation>

      {/* =========================
          ORDERS TABLE
      ========================== */}

      <FadeAnimation delay={0.3}>

        <div
          className="
            bg-white
            rounded-[35px]
            shadow-md
            overflow-hidden
          "
        >

          {filteredOrders.length === 0 ? (

            <div
              className="
                py-24
              "
            >

              <EmptyState
                icon={
                  <FaShoppingBag />
                }
                title="
                  No Orders Found
                "
                description="
                  No matching orders available.
                "
              />

            </div>

          ) : (

            <div
              className="
                overflow-x-auto
              "
            >

              <table
                className="
                  w-full
                  min-w-[900px]
                "
              >

                {/* TABLE HEAD */}

                <thead
                  className="
                    bg-[#fafafa]
                  "
                >

                  <tr>

                    <th
                      className="
                        text-left
                        px-8
                        py-6
                        text-sm
                        font-bold
                        text-gray-600
                      "
                    >

                      Order ID

                    </th>

                    <th
                      className="
                        text-left
                        px-8
                        py-6
                        text-sm
                        font-bold
                        text-gray-600
                      "
                    >

                      Customer

                    </th>

                    <th
                      className="
                        text-left
                        px-8
                        py-6
                        text-sm
                        font-bold
                        text-gray-600
                      "
                    >

                      Amount

                    </th>

                    <th
                      className="
                        text-left
                        px-8
                        py-6
                        text-sm
                        font-bold
                        text-gray-600
                      "
                    >

                      Status

                    </th>

                    <th
                      className="
                        text-left
                        px-8
                        py-6
                        text-sm
                        font-bold
                        text-gray-600
                      "
                    >

                      Date

                    </th>

                    <th
                      className="
                        text-center
                        px-8
                        py-6
                        text-sm
                        font-bold
                        text-gray-600
                      "
                    >

                      Action

                    </th>

                  </tr>

                </thead>

                {/* TABLE BODY */}

                <tbody>

                  {filteredOrders.map(
                    (order) => (

                      <tr
                        key={order.id}
                        className="
                          border-t
                          border-gray-100
                          hover:bg-[#fafafa]
                          transition
                          duration-300
                        "
                      >

                        {/* ID */}

                        <td
                          className="
                            px-8
                            py-6
                            font-semibold
                            text-[#1a1a1a]
                          "
                        >

                          {order.id}

                        </td>

                        {/* CUSTOMER */}

                        <td
                          className="
                            px-8
                            py-6
                            text-gray-600
                          "
                        >

                          {order.customer}

                        </td>

                        {/* AMOUNT */}

                        <td
                          className="
                            px-8
                            py-6
                            font-semibold
                            text-[#1a1a1a]
                          "
                        >

                          {order.amount}

                        </td>

                        {/* STATUS */}

                        <td
                          className="
                            px-8
                            py-6
                          "
                        >

                          <span
                            className={`
                              inline-flex
                              items-center
                              gap-2
                              px-4
                              py-2
                              rounded-full
                              text-sm
                              font-semibold
                              ${getStatusStyle(
                                order.status
                              )}
                            `}
                          >

                            {getStatusIcon(
                              order.status
                            )}

                            {order.status}

                          </span>

                        </td>

                        {/* DATE */}

                        <td
                          className="
                            px-8
                            py-6
                            text-gray-600
                          "
                        >

                          {order.date}

                        </td>

                        {/* ACTION */}

                        <td
                          className="
                            px-8
                            py-6
                            text-center
                          "
                        >

                          <button
                            className="
                              w-12
                              h-12
                              rounded-xl
                              bg-[#fff7d6]
                              text-[#f7d046]
                              hover:bg-[#f7d046]
                              hover:text-black
                              transition
                              duration-300
                              flex
                              items-center
                              justify-center
                              mx-auto
                            "
                          >

                            <FaEye />

                          </button>

                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </FadeAnimation>

    </div>
  );
};

export default Orders;