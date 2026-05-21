// import React from "react";
// import { NavLink } from "react-router-dom";

// import {
//   FaTachometerAlt,
//   FaBoxOpen,
//   FaShoppingBag,
//   FaUsers,
//   FaBlog,
//   FaTags,
//   FaSignOutAlt,
// } from "react-icons/fa";

// import "./Admin.css";

// const AdminSidebar = () => {

//   const menuItems = [
//     {
//       name: "Dashboard",
//       path: "/admin/dashboard",
//       icon: <FaTachometerAlt />,
//     },
//     {
//       name: "Products",
//       path: "/admin/products",
//       icon: <FaBoxOpen />,
//     },
//     {
//       name: "Orders",
//       path: "/admin/orders",
//       icon: <FaShoppingBag />,
//     },
//     {
//       name: "Users",
//       path: "/admin/users",
//       icon: <FaUsers />,
//     },
//     {
//       name: "Blogs",
//       path: "/admin/blogs",
//       icon: <FaBlog />,
//     },
//     {
//       name: "Coupons",
//       path: "/admin/coupons",
//       icon: <FaTags />,
//     },
//   ];

//   return (
//     <aside className="admin-sidebar">

//       {/* Logo */}
//       <div className="admin-logo">

//         <h2>
//           Varuthathu
//         </h2>

//         <span>
//           Admin Panel
//         </span>

//       </div>

//       {/* Menu */}
//       <nav className="admin-menu">

//         {menuItems.map((item, index) => (

//           <NavLink
//             key={index}
//             to={item.path}
//             className={({ isActive }) =>
//               isActive
//                 ? "admin-link active-admin-link"
//                 : "admin-link"
//             }
//           >

//             <span className="admin-icon">
//               {item.icon}
//             </span>

//             {item.name}

//           </NavLink>

//         ))}

//       </nav>

//       {/* Logout */}
//       <button className="admin-logout-btn">

//         <FaSignOutAlt />

//         Logout

//       </button>

//     </aside>
//   );
// };

// export default AdminSidebar;


import React from "react";

import {
  NavLink,
} from "react-router-dom";

import {
  FaTimes,
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingBag,
  FaUsers,
  FaBlog,
  FaTags,
  FaPlusCircle,
} from "react-icons/fa";

/* Styles */
import "./Admin.css";

const AdminSidebar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {

  /* =========================
      CLOSE SIDEBAR
  ========================== */

  const closeSidebar =
    () => {

      setSidebarOpen(false);
    };

  return (

    <>

      {/* =========================
          OVERLAY
      ========================== */}

      {sidebarOpen && (

        <div
          className="admin-sidebar-overlay"
          onClick={closeSidebar}
        ></div>

      )}

      {/* =========================
          SIDEBAR
      ========================== */}

      <aside
        className={
          sidebarOpen
            ? "admin-sidebar active"
            : "admin-sidebar"
        }
      >

        {/* =========================
            TOP
        ========================== */}

        <div className="sidebar-top">

          <h2 className="sidebar-logo">

            Varuthathu Admin

          </h2>

          <button
            className="sidebar-close-btn"
            onClick={closeSidebar}
          >

            <FaTimes />

          </button>

        </div>

        {/* =========================
            MENU
        ========================== */}

        <nav className="sidebar-menu">

          {/* Dashboard */}

          <NavLink
            to="/admin"
            end
            className="sidebar-link"
            onClick={closeSidebar}
          >

            <FaTachometerAlt />

            <span>

              Dashboard

            </span>

          </NavLink>

          {/* Add Product */}

          <NavLink
            to="/admin/add-product"
            className="sidebar-link"
            onClick={closeSidebar}
          >

            <FaPlusCircle />

            <span>

              Add Product

            </span>

          </NavLink>

          {/* Products */}

          <NavLink
            to="/products"
            className="sidebar-link"
            onClick={closeSidebar}
          >

            <FaBoxOpen />

            <span>

              Products

            </span>

          </NavLink>

          {/* Orders */}

          <NavLink
            to="/admin/orders"
            className="sidebar-link"
            onClick={closeSidebar}
          >

            <FaShoppingBag />

            <span>

              Orders

            </span>

          </NavLink>

          {/* Users */}

          <NavLink
            to="/admin/users"
            className="sidebar-link"
            onClick={closeSidebar}
          >

            <FaUsers />

            <span>

              Users

            </span>

          </NavLink>

          {/* Blogs */}

          <NavLink
            to="/admin/blogs"
            className="sidebar-link"
            onClick={closeSidebar}
          >

            <FaBlog />

            <span>

              Blogs

            </span>

          </NavLink>

          {/* Coupons */}

          <NavLink
            to="/admin/coupons"
            className="sidebar-link"
            onClick={closeSidebar}
          >

            <FaTags />

            <span>

              Coupons

            </span>

          </NavLink>

        </nav>

      </aside>

    </>
  );
};

export default AdminSidebar;