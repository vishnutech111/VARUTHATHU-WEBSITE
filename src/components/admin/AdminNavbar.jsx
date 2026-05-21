// import React from "react";

// import {
//   FaSearch,
//   FaBell,
//   FaUserCircle,
// } from "react-icons/fa";

// import "./Admin.css";

// const AdminNavbar = () => {

//   return (
//     <header className="admin-navbar">

//       {/* Left Side */}
//       <div className="admin-navbar-left">

//         <h2>
//           Dashboard
//         </h2>

//         <p>
//           Welcome back, Admin 👋
//         </p>

//       </div>

//       {/* Right Side */}
//       <div className="admin-navbar-right">

//         {/* Search */}
//         <div className="admin-search-box">

//           <FaSearch />

//           <input
//             type="text"
//             placeholder="Search here..."
//           />

//         </div>

//         {/* Notification */}
//         <button className="admin-notification">

//           <FaBell />

//           <span>
//             3
//           </span>

//         </button>

//         {/* Profile */}
//         <div className="admin-profile">

//           <FaUserCircle />

//           <div>

//             <h4>
//               Admin
//             </h4>

//             <p>
//               Super Admin
//             </p>

//           </div>

//         </div>

//       </div>

//     </header>
//   );
// };

// export default AdminNavbar;

import React, {
  useContext,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  FaBars,
  FaBell,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

/* Context */
import {
  AuthContext,
} from "../../context/AuthContext";

/* Styles */
import "./Admin.css";

const AdminNavbar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {

  /* =========================
      CONTEXT
  ========================== */

  const authContext =
    useContext(AuthContext);

  const user =
    authContext?.user || null;

  const logout =
    authContext?.logout;

  /* =========================
      TOGGLE SIDEBAR
  ========================== */

  const toggleSidebar =
    () => {

      setSidebarOpen(
        !sidebarOpen
      );
    };

  /* =========================
      LOGOUT
  ========================== */

  const handleLogout =
    () => {

      if (logout) {

        logout();
      }
    };

  return (

    <header className="admin-navbar">

      {/* =========================
          LEFT
      ========================== */}

      <div className="admin-navbar-left">

        {/* Menu Button */}

        <button
          className="admin-menu-btn"
          onClick={toggleSidebar}
        >

          <FaBars />

        </button>

        {/* Title */}

        <h2 className="admin-navbar-title">

          Admin Dashboard

        </h2>

      </div>

      {/* =========================
          RIGHT
      ========================== */}

      <div className="admin-navbar-right">

        {/* Notifications */}

        <button
          className="admin-icon-btn"
        >

          <FaBell />

          <span className="notification-dot"></span>

        </button>

        {/* Profile */}

        <div className="admin-profile">

          <Link
            to="/profile"
            className="admin-profile-info"
          >

            <FaUserCircle />

            <div>

              <h4>

                {user?.name ||
                  "Admin"}

              </h4>

              <span>

                {user?.role ||
                  "Administrator"}

              </span>

            </div>

          </Link>

        </div>

        {/* Logout */}

        <button
          className="admin-logout-btn"
          onClick={handleLogout}
        >

          <FaSignOutAlt />

          <span>

            Logout

          </span>

        </button>

      </div>

    </header>
  );
};

export default AdminNavbar;