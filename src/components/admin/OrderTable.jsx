// import React from "react";

// import {
//   FaEye,
//   FaTruck,
//   FaCheckCircle,
// } from "react-icons/fa";

// import "./Admin.css";

// const OrderTable = () => {

//   /* Dummy Orders */
//   const orders = [
//     {
//       id: "VR1001",
//       customer: "Rahul Kumar",
//       date: "15 May 2026",
//       total: 520,
//       payment: "Paid",
//       status: "Delivered",
//     },
//     {
//       id: "VR1002",
//       customer: "Anjali Nair",
//       date: "14 May 2026",
//       total: 340,
//       payment: "Pending",
//       status: "Processing",
//     },
//     {
//       id: "VR1003",
//       customer: "Akhil Das",
//       date: "13 May 2026",
//       total: 760,
//       payment: "Paid",
//       status: "Shipped",
//     },
//   ];

//   return (
//     <div className="order-table-wrapper">

//       {/* Header */}
//       <div className="table-header">

//         <div>

//           <h2>
//             Orders List
//           </h2>

//           <p>
//             Manage customer orders and delivery
//           </p>

//         </div>

//       </div>

//       {/* Table */}
//       <div className="table-responsive">

//         <table className="order-table">

//           <thead>

//             <tr>

//               <th>Order ID</th>

//               <th>Customer</th>

//               <th>Date</th>

//               <th>Total</th>

//               <th>Payment</th>

//               <th>Status</th>

//               <th>Actions</th>

//             </tr>

//           </thead>

//           <tbody>

//             {orders.map((order, index) => (

//               <tr key={index}>

//                 {/* Order ID */}
//                 <td>
//                   #{order.id}
//                 </td>

//                 {/* Customer */}
//                 <td>
//                   {order.customer}
//                 </td>

//                 {/* Date */}
//                 <td>
//                   {order.date}
//                 </td>

//                 {/* Total */}
//                 <td>
//                   ₹{order.total}
//                 </td>

//                 {/* Payment */}
//                 <td>

//                   <span
//                     className={
//                       order.payment === "Paid"
//                         ? "payment-badge paid-badge"
//                         : "payment-badge pending-badge"
//                     }
//                   >
//                     {order.payment}
//                   </span>

//                 </td>

//                 {/* Status */}
//                 <td>

//                   <span
//                     className={
//                       order.status === "Delivered"
//                         ? "status-badge delivered-status"
//                         : order.status === "Shipped"
//                         ? "status-badge shipped-status"
//                         : "status-badge processing-status"
//                     }
//                   >
//                     {order.status}
//                   </span>

//                 </td>

//                 {/* Actions */}
//                 <td>

//                   <div className="table-actions">

//                     <button className="view-btn">

//                       <FaEye />

//                     </button>

//                     <button className="ship-btn">

//                       <FaTruck />

//                     </button>

//                     <button className="complete-btn">

//                       <FaCheckCircle />

//                     </button>

//                   </div>

//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>

//       </div>

//     </div>
//   );
// };

// export default OrderTable;


import React from "react";

import {
  FaEye,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

/* Styles */
import "./Admin.css";

const OrderTable = ({
  orders = [],
  onViewOrder,
  onUpdateStatus,
}) => {

  /* =========================
      STATUS CLASS
  ========================== */

  const getStatusClass =
    (status) => {

      switch (status) {

        case "Delivered":
          return "delivered";

        case "Cancelled":
          return "cancelled";

        case "Processing":
        default:
          return "processing";
      }
    };

  return (

    <div className="order-table-wrapper">

      {/* =========================
          HEADER
      ========================== */}

      <div className="order-table-header">

        <h2>

          Order Management

        </h2>

      </div>

      {/* =========================
          TABLE
      ========================== */}

      <div className="table-responsive">

        <table className="order-table">

          <thead>

            <tr>

              <th>

                Order ID

              </th>

              <th>

                Customer

              </th>

              <th>

                Date

              </th>

              <th>

                Total

              </th>

              <th>

                Payment

              </th>

              <th>

                Status

              </th>

              <th>

                Actions

              </th>

            </tr>

          </thead>

          <tbody>

            {orders.length > 0 ? (

              orders.map((order) => (

                <tr
                  key={order._id}
                >

                  {/* Order ID */}

                  <td>

                    #{order._id?.slice(-6)}

                  </td>

                  {/* Customer */}

                  <td>

                    {order.customerName ||
                      "Customer"}

                  </td>

                  {/* Date */}

                  <td>

                    {order.createdAt
                      ? new Date(
                          order.createdAt
                        ).toLocaleDateString()
                      : "N/A"}

                  </td>

                  {/* Total */}

                  <td>

                    ₹
                    {order.total || 0}

                  </td>

                  {/* Payment */}

                  <td>

                    {order.paymentMethod ||
                      "COD"}

                  </td>

                  {/* Status */}

                  <td>

                    <span
                      className={
                        `order-status ${getStatusClass(
                          order.status
                        )}`
                      }
                    >

                      {order.status ||
                        "Processing"}

                    </span>

                  </td>

                  {/* Actions */}

                  <td>

                    <div className="order-actions">

                      {/* View */}

                      <button
                        className="view-btn"
                        onClick={() =>
                          onViewOrder?.(
                            order
                          )
                        }
                      >

                        <FaEye />

                      </button>

                      {/* Delivered */}

                      <button
                        className="success-btn"
                        onClick={() =>
                          onUpdateStatus?.(
                            order._id,
                            "Delivered"
                          )
                        }
                      >

                        <FaCheckCircle />

                      </button>

                      {/* Cancel */}

                      <button
                        className="cancel-btn"
                        onClick={() =>
                          onUpdateStatus?.(
                            order._id,
                            "Cancelled"
                          )
                        }
                      >

                        <FaTimesCircle />

                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="7"
                  className="no-orders"
                >

                  No orders found.

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default OrderTable;