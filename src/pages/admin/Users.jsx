// import React, { useState } from "react";

// /* Components */
// import FadeAnimation from "../../components/animations/FadeAnimation";

// import UserTable from "../../components/admin/UserTable";

// import SearchBar from "../../components/common/SearchBar";

// /* Icons */
// import {
//   FaUsers,
//   FaUserCheck,
//   FaUserClock,
//   FaUserShield,
//   FaUserSlash,
// } from "react-icons/fa";

// const Users = () => {

//   const [filter, setFilter] =
//     useState("all");

//   /* Stats */
//   const userStats = [
//     {
//       id: 1,
//       title: "Total Users",
//       value: 892,
//       icon: <FaUsers />,
//       bg: "bg-yellow-100",
//     },
//     {
//       id: 2,
//       title: "Active Users",
//       value: 740,
//       icon: <FaUserCheck />,
//       bg: "bg-green-100",
//     },
//     {
//       id: 3,
//       title: "New Users",
//       value: 58,
//       icon: <FaUserClock />,
//       bg: "bg-blue-100",
//     },
//     {
//       id: 4,
//       title: "Admins",
//       value: 4,
//       icon: <FaUserShield />,
//       bg: "bg-purple-100",
//     },
//     {
//       id: 5,
//       title: "Blocked Users",
//       value: 12,
//       icon: <FaUserSlash />,
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

//           {/* Left */}
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
//               Manage Users
//             </h1>

//             <p
//               className="
//                 text-gray-600
//                 leading-8
//               "
//             >
//               View customer accounts,
//               manage permissions,
//               block users, and track
//               activity.
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
//                 Search users...
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

//         {userStats.map((item) => (

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

//       {/* Filter Buttons */}
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
//             "active",
//             "blocked",
//             "admins",
//             "new users",
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

//       {/* User Table */}
//       <FadeAnimation delay={0.4}>

//         <div
//           className="
//             bg-white
//             rounded-[30px]
//             shadow-md
//             p-6
//           "
//         >

//           {/* Top */}
//           <div
//             className="
//               flex
//               flex-col
//               md:flex-row
//               md:items-center
//               md:justify-between
//               gap-5
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
//                 Users List
//               </h2>

//               <p
//                 className="
//                   text-gray-600
//                 "
//               >
//                 Manage all registered
//                 customers and admins.
//               </p>

//             </div>

//             {/* Add User */}
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
//               Add New User
//             </button>

//           </div>

//           {/* Table */}
//           <UserTable />

//         </div>

//       </FadeAnimation>

//     </div>
//   );
// };

// export default Users;





import React, {
  useState,
} from "react";

/* Components */
import FadeAnimation from "../../components/animations/FadeAnimation";

import SearchBar from "../../components/common/SearchBar";

import EmptyState from "../../components/common/EmptyState";

/* Icons */
import {
  FaUsers,
  FaUserShield,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaTrash,
  FaEdit,
  FaSearch,
} from "react-icons/fa";

const Users = () => {

  /* =========================
      DUMMY USERS
  ========================== */

  const usersData = [

    {
      id: 1,
      name: "Rahul Kumar",
      email: "rahul@example.com",
      phone: "+91 9876543210",
      role: "customer",
      joined: "10 May 2026",
    },

    {
      id: 2,
      name: "Anjali Nair",
      email: "anjali@example.com",
      phone: "+91 9123456780",
      role: "admin",
      joined: "08 May 2026",
    },

    {
      id: 3,
      name: "Arun Das",
      email: "arun@example.com",
      phone: "+91 9988776655",
      role: "customer",
      joined: "05 May 2026",
    },

    {
      id: 4,
      name: "Meera Joseph",
      email: "meera@example.com",
      phone: "+91 9870011223",
      role: "customer",
      joined: "01 May 2026",
    },

    {
      id: 5,
      name: "Vishnu Raj",
      email: "vishnu@example.com",
      phone: "+91 9001122334",
      role: "customer",
      joined: "28 April 2026",
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
      FILTER USERS
  ========================== */

  const filteredUsers =
    usersData.filter(
      (user) =>
        user.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        user.email
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );

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
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-8
            mb-12
          "
        >

          {/* Left */}

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

              User Management

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

              Customers & Admins

            </h1>

            <p
              className="
                text-gray-600
                text-lg
                leading-8
                max-w-3xl
              "
            >

              Manage all registered
              users, admins, and
              customer accounts.

            </p>

          </div>

          {/* Right Card */}

          <div
            className="
              bg-white
              rounded-[30px]
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

              <FaUsers />

            </div>

            <div>

              <p
                className="
                  text-gray-500
                  mb-2
                "
              >

                Total Users

              </p>

              <h2
                className="
                  text-3xl
                  font-bold
                  text-[#1a1a1a]
                "
              >

                {usersData.length}

              </h2>

            </div>

          </div>

        </div>

      </FadeAnimation>

      {/* =========================
          SEARCH BAR
      ========================== */}

      <FadeAnimation delay={0.2}>

        <div
          className="
            mb-10
          "
        >

          <SearchBar
            placeholder="
              Search users by name or email...
            "
            value={
              searchTerm
            }
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
            icon={
              <FaSearch />
            }
          />

        </div>

      </FadeAnimation>

      {/* =========================
          USERS TABLE
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

          {filteredUsers.length === 0 ? (

            <div
              className="
                py-24
              "
            >

              <EmptyState
                icon={
                  <FaUsers />
                }
                title="
                  No Users Found
                "
                description="
                  Try searching with another keyword.
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
                  min-w-[1000px]
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

                      User

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

                      Email

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

                      Phone

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

                      Role

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

                      Joined

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

                      Actions

                    </th>

                  </tr>

                </thead>

                {/* TABLE BODY */}

                <tbody>

                  {filteredUsers.map(
                    (user) => (

                      <tr
                        key={user.id}
                        className="
                          border-t
                          border-gray-100
                          hover:bg-[#fafafa]
                          transition
                          duration-300
                        "
                      >

                        {/* USER */}

                        <td
                          className="
                            px-8
                            py-6
                          "
                        >

                          <div
                            className="
                              flex
                              items-center
                              gap-4
                            "
                          >

                            <div
                              className="
                                w-14
                                h-14
                                rounded-full
                                bg-[#fff7d6]
                                flex
                                items-center
                                justify-center
                                text-[#f7d046]
                                text-xl
                              "
                            >

                              <FaUser />

                            </div>

                            <div>

                              <h3
                                className="
                                  font-bold
                                  text-[#1a1a1a]
                                  mb-1
                                "
                              >

                                {user.name}

                              </h3>

                              <p
                                className="
                                  text-gray-500
                                  text-sm
                                "
                              >

                                User ID:
                                {" "}
                                {user.id}

                              </p>

                            </div>

                          </div>

                        </td>

                        {/* EMAIL */}

                        <td
                          className="
                            px-8
                            py-6
                          "
                        >

                          <div
                            className="
                              flex
                              items-center
                              gap-3
                              text-gray-600
                            "
                          >

                            <FaEnvelope
                              className="
                                text-[#f7d046]
                              "
                            />

                            {user.email}

                          </div>

                        </td>

                        {/* PHONE */}

                        <td
                          className="
                            px-8
                            py-6
                          "
                        >

                          <div
                            className="
                              flex
                              items-center
                              gap-3
                              text-gray-600
                            "
                          >

                            <FaPhoneAlt
                              className="
                                text-[#f7d046]
                              "
                            />

                            {user.phone}

                          </div>

                        </td>

                        {/* ROLE */}

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
                              ${
                                user.role === "admin"
                                  ? `
                                    bg-red-100
                                    text-red-700
                                  `
                                  : `
                                    bg-green-100
                                    text-green-700
                                  `
                              }
                            `}
                          >

                            {user.role === "admin"
                              ? (
                                <FaUserShield />
                              ) : (
                                <FaUser />
                              )}

                            {user.role}

                          </span>

                        </td>

                        {/* JOINED */}

                        <td
                          className="
                            px-8
                            py-6
                            text-gray-600
                          "
                        >

                          {user.joined}

                        </td>

                        {/* ACTIONS */}

                        <td
                          className="
                            px-8
                            py-6
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

                            {/* Edit */}

                            <button
                              className="
                                w-11
                                h-11
                                rounded-xl
                                bg-blue-100
                                text-blue-600
                                hover:scale-105
                                transition
                                duration-300
                                flex
                                items-center
                                justify-center
                              "
                            >

                              <FaEdit />

                            </button>

                            {/* Delete */}

                            <button
                              className="
                                w-11
                                h-11
                                rounded-xl
                                bg-red-100
                                text-red-600
                                hover:scale-105
                                transition
                                duration-300
                                flex
                                items-center
                                justify-center
                              "
                            >

                              <FaTrash />

                            </button>

                          </div>

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

export default Users;