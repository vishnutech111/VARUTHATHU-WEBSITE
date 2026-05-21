// import React, {
//   useState,
// } from "react";

// import { Outlet } from "react-router-dom";

// /* Components */
// import AdminSidebar from "../components/admin/AdminSidebar";

// import AdminNavbar from "../components/admin/AdminNavbar";

// const AdminLayout = () => {

//   const [sidebarOpen,
//     setSidebarOpen] =
//     useState(false);

//   return (
//     <div
//       className="
//         min-h-screen
//         flex
//         bg-[#f9fafb]
//       "
//     >

//       {/* ======================
//           SIDEBAR
//       ====================== */}
//       <AdminSidebar
//         sidebarOpen={
//           sidebarOpen
//         }
//         setSidebarOpen={
//           setSidebarOpen
//         }
//       />

//       {/* ======================
//           MAIN CONTENT
//       ====================== */}
//       <div
//         className="
//           flex-1
//           flex
//           flex-col
//           lg:ml-[280px]
//           min-h-screen
//         "
//       >

//         {/* Navbar */}
//         <AdminNavbar
//           sidebarOpen={
//             sidebarOpen
//           }
//           setSidebarOpen={
//             setSidebarOpen
//           }
//         />

//         {/* Page Content */}
//         <main
//           className="
//             flex-1
//             pt-[90px]
//             px-4
//             md:px-6
//             lg:px-8
//             pb-8
//             overflow-x-hidden
//           "
//         >

//           <Outlet />

//         </main>

//       </div>

//     </div>
//   );
// };

// export default AdminLayout;

import React, {
  useState,
} from "react";

import {
  Outlet,
} from "react-router-dom";

/* Components */
import AdminSidebar from "../components/admin/AdminSidebar";

import AdminNavbar from "../components/admin/AdminNavbar";

/* Styles */
// import "./AdminLayout.css";

const AdminLayout = () => {

  /* =========================
      STATES
  ========================== */

  const [
    sidebarOpen,
    setSidebarOpen,
  ] = useState(false);

  return (

    <div className="admin-layout">

      {/* =========================
          SIDEBAR
      ========================== */}

      <AdminSidebar
        sidebarOpen={
          sidebarOpen
        }
        setSidebarOpen={
          setSidebarOpen
        }
      />

      {/* =========================
          MAIN AREA
      ========================== */}

      <div className="admin-main">

        {/* =========================
            NAVBAR
        ========================== */}

        <AdminNavbar
          sidebarOpen={
            sidebarOpen
          }
          setSidebarOpen={
            setSidebarOpen
          }
        />

        {/* =========================
            PAGE CONTENT
        ========================== */}

        <main className="admin-content">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default AdminLayout;