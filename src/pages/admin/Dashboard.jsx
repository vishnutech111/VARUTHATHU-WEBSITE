// import React from "react";

// /* Components */
// import FadeAnimation from "../../components/animations/FadeAnimation";

// import ProductTable from "../../components/admin/ProductTable";

// import OrderTable from "../../components/admin/OrderTable";

// import UserTable from "../../components/admin/UserTable";

// /* Icons */
// import {
//   FaBoxOpen,
//   FaShoppingCart,
//   FaUsers,
//   FaRupeeSign,
// } from "react-icons/fa";

// const Dashboard = () => {

//   /* Dummy Stats */
//   const stats = [
//     {
//       id: 1,
//       title: "Total Products",
//       value: 24,
//       icon: <FaBoxOpen />,
//     },
//     {
//       id: 2,
//       title: "Total Orders",
//       value: 154,
//       icon: <FaShoppingCart />,
//     },
//     {
//       id: 3,
//       title: "Total Users",
//       value: 89,
//       icon: <FaUsers />,
//     },
//     {
//       id: 4,
//       title: "Revenue",
//       value: "₹45,800",
//       icon: <FaRupeeSign />,
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
//             md:flex-row
//             md:items-center
//             md:justify-between
//             gap-5
//             mb-10
//           "
//         >

//           <div>

//             <h1
//               className="
//                 text-4xl
//                 font-bold
//                 text-[#1a1a1a]
//                 mb-3
//               "
//             >
//               Admin Dashboard
//             </h1>

//             <p
//               className="
//                 text-gray-600
//               "
//             >
//               Manage products, orders,
//               users, and analytics for
//               Varuthathu Co.
//             </p>

//           </div>

//           {/* Badge */}
//           <div
//             className="
//               bg-[#f7d046]
//               text-[#1a1a1a]
//               font-bold
//               px-6
//               py-3
//               rounded-full
//               w-fit
//             "
//           >
//             Varuthathu Admin
//           </div>

//         </div>

//       </FadeAnimation>

//       {/* Stats */}
//       <section
//         className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           xl:grid-cols-4
//           gap-6
//           mb-12
//         "
//       >

//         {stats.map((item) => (

//           <FadeAnimation
//             key={item.id}
//           >

//             <div
//               className="
//                 bg-white
//                 rounded-[30px]
//                 p-7
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
//                   mb-6
//                 "
//               >

//                 <div
//                   className="
//                     w-16
//                     h-16
//                     rounded-full
//                     bg-[#f7d046]
//                     flex
//                     items-center
//                     justify-center
//                   "
//                 >

//                   <div
//                     className="
//                       text-2xl
//                       text-[#1a1a1a]
//                     "
//                   >
//                     {item.icon}
//                   </div>

//                 </div>

//               </div>

//               {/* Value */}
//               <h2
//                 className="
//                   text-4xl
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
//                   text-lg
//                 "
//               >
//                 {item.title}
//               </p>

//             </div>

//           </FadeAnimation>

//         ))}

//       </section>

//       {/* Products Table */}
//       <FadeAnimation>

//         <div
//           className="
//             bg-white
//             rounded-[30px]
//             shadow-md
//             p-6
//             mb-10
//           "
//         >

//           <div
//             className="
//               flex
//               items-center
//               justify-between
//               mb-6
//             "
//           >

//             <h2
//               className="
//                 text-2xl
//                 font-bold
//                 text-[#1a1a1a]
//               "
//             >
//               Products
//             </h2>

//             <button
//               className="
//                 bg-[#f7d046]
//                 hover:bg-yellow-400
//                 text-[#1a1a1a]
//                 font-semibold
//                 px-5
//                 py-3
//                 rounded-full
//                 transition
//               "
//             >
//               Add Product
//             </button>

//           </div>

//           <ProductTable />

//         </div>

//       </FadeAnimation>

//       {/* Orders */}
//       <FadeAnimation delay={0.2}>

//         <div
//           className="
//             bg-white
//             rounded-[30px]
//             shadow-md
//             p-6
//             mb-10
//           "
//         >

//           <div
//             className="
//               mb-6
//             "
//           >

//             <h2
//               className="
//                 text-2xl
//                 font-bold
//                 text-[#1a1a1a]
//               "
//             >
//               Recent Orders
//             </h2>

//           </div>

//           <OrderTable />

//         </div>

//       </FadeAnimation>

//       {/* Users */}
//       <FadeAnimation delay={0.4}>

//         <div
//           className="
//             bg-white
//             rounded-[30px]
//             shadow-md
//             p-6
//           "
//         >

//           <div
//             className="
//               mb-6
//             "
//           >

//             <h2
//               className="
//                 text-2xl
//                 font-bold
//                 text-[#1a1a1a]
//               "
//             >
//               Users
//             </h2>

//           </div>

//           <UserTable />

//         </div>

//       </FadeAnimation>

//     </div>
//   );
// };

// export default Dashboard;




import React from "react";

/* Components */
import FadeAnimation from "../../components/animations/FadeAnimation";

import SlideAnimation from "../../components/animations/SlideAnimation";

import OrderTable from "../../components/admin/OrderTable";

import ProductTable from "../../components/admin/ProductTable";

import UserTable from "../../components/admin/UserTable";

/* Icons */
import {
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaRupeeSign,
  FaArrowUp,
} from "react-icons/fa";

const Dashboard = () => {

  /* =========================
      DUMMY STATS
  ========================== */

  const stats = [

    {
      id: 1,
      title: "Total Sales",
      value: "₹1,25,000",
      growth: "+12%",
      icon: <FaRupeeSign />,
    },

    {
      id: 2,
      title: "Orders",
      value: "320",
      growth: "+18%",
      icon: <FaShoppingCart />,
    },

    {
      id: 3,
      title: "Products",
      value: "48",
      growth: "+6%",
      icon: <FaBoxOpen />,
    },

    {
      id: 4,
      title: "Customers",
      value: "1,280",
      growth: "+24%",
      icon: <FaUsers />,
    },

  ];

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
            mb-10
          "
        >

          <h1
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-[#1a1a1a]
              mb-4
            "
          >

            Admin Dashboard

          </h1>

          <p
            className="
              text-gray-600
              text-lg
              leading-8
            "
          >

            Monitor sales, orders,
            customers, and products
            from one place.

          </p>

        </div>

      </FadeAnimation>

      {/* =========================
          STATS SECTION
      ========================== */}

      <section
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-8
          mb-14
        "
      >

        {stats.map(
          (
            item,
            index
          ) => (

            <SlideAnimation
              key={item.id}
              delay={index * 0.1}
              direction="bottom"
            >

              <div
                className="
                  bg-white
                  rounded-[30px]
                  p-8
                  shadow-md
                  hover:-translate-y-2
                  transition
                  duration-300
                "
              >

                {/* Top */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    mb-6
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
                      text-3xl
                      text-[#f7d046]
                    "
                  >

                    {item.icon}

                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      bg-green-100
                      text-green-600
                      px-3
                      py-2
                      rounded-full
                      text-sm
                      font-semibold
                    "
                  >

                    <FaArrowUp />

                    {item.growth}

                  </div>

                </div>

                {/* Content */}

                <h3
                  className="
                    text-gray-500
                    text-lg
                    mb-3
                  "
                >

                  {item.title}

                </h3>

                <h2
                  className="
                    text-4xl
                    font-bold
                    text-[#1a1a1a]
                  "
                >

                  {item.value}

                </h2>

              </div>

            </SlideAnimation>
          )
        )}

      </section>

      {/* =========================
          TABLE SECTION
      ========================== */}

      <div
        className="
          flex
          flex-col
          gap-12
        "
      >

        {/* Orders */}

        <FadeAnimation>

          <div
            className="
              bg-white
              rounded-[35px]
              p-8
              shadow-md
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
                mb-8
              "
            >

              <div>

                <h2
                  className="
                    text-3xl
                    font-bold
                    text-[#1a1a1a]
                    mb-2
                  "
                >

                  Recent Orders

                </h2>

                <p
                  className="
                    text-gray-600
                  "
                >

                  Latest customer orders.

                </p>

              </div>

            </div>

            <OrderTable />

          </div>

        </FadeAnimation>

        {/* Products */}

        <FadeAnimation delay={0.2}>

          <div
            className="
              bg-white
              rounded-[35px]
              p-8
              shadow-md
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
                mb-8
              "
            >

              <div>

                <h2
                  className="
                    text-3xl
                    font-bold
                    text-[#1a1a1a]
                    mb-2
                  "
                >

                  Product Inventory

                </h2>

                <p
                  className="
                    text-gray-600
                  "
                >

                  Manage available products.

                </p>

              </div>

            </div>

            <ProductTable />

          </div>

        </FadeAnimation>

        {/* Users */}

        <FadeAnimation delay={0.4}>

          <div
            className="
              bg-white
              rounded-[35px]
              p-8
              shadow-md
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
                mb-8
              "
            >

              <div>

                <h2
                  className="
                    text-3xl
                    font-bold
                    text-[#1a1a1a]
                    mb-2
                  "
                >

                  Customers

                </h2>

                <p
                  className="
                    text-gray-600
                  "
                >

                  Registered customer accounts.

                </p>

              </div>

            </div>

            <UserTable />

          </div>

        </FadeAnimation>

      </div>

    </div>
  );
};

export default Dashboard;