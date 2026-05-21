// import React from "react";

// import {
//   Outlet,
//   useLocation,
// } from "react-router-dom";

// /* Components */
// import Navbar from "../components/navbar/Navbar";

// import Footer from "../components/footer/Footer";

// /* Common */
// import FadeAnimation from "../components/animations/FadeAnimation";

// const MainLayout = () => {

//   const location =
//     useLocation();

//   /* Hide Footer On These Pages */
//   const hideFooterRoutes = [
//     "/login",
//     "/signup",
//   ];

//   const hideFooter =
//     hideFooterRoutes.includes(
//       location.pathname
//     );

//   return (
//     <div
//       className="
//         min-h-screen
//         flex
//         flex-col
//         bg-white
//       "
//     >

//       {/* ======================
//           NAVBAR
//       ====================== */}
//       <Navbar />

//       {/* ======================
//           MAIN CONTENT
//       ====================== */}
//       <main
//         className="
//           flex-1
//           w-full
//           overflow-hidden
//         "
//       >

//         <FadeAnimation>

//           <Outlet />

//         </FadeAnimation>

//       </main>

//       {/* ======================
//           FOOTER
//       ====================== */}
//       {!hideFooter && (
//         <Footer />
//       )}

//     </div>
//   );
// };

// export default MainLayout;




import React from "react";

import {
  Outlet,
  useLocation,
} from "react-router-dom";

/* Components */
import Navbar from "../components/navbar/Navbar";

import Footer from "../components/footer/Footer";

import FadeAnimation from "../components/animations/FadeAnimation";

/* Styles */
// import "./MainLayout.css";

const MainLayout = () => {

  /* =========================
      LOCATION
  ========================== */

  const location =
    useLocation();

  /* =========================
      HIDE FOOTER ROUTES
  ========================== */

  const hideFooterRoutes = [
    "/login",
    "/signup",
    "/admin",
  ];

  const hideFooter =
    hideFooterRoutes.includes(
      location.pathname
    );

  return (

    <div className="main-layout">

      {/* =========================
          NAVBAR
      ========================== */}

      <Navbar />

      {/* =========================
          PAGE CONTENT
      ========================== */}

      <main className="main-content">

        <FadeAnimation>

          <Outlet />

        </FadeAnimation>

      </main>

      {/* =========================
          FOOTER
      ========================== */}

      {!hideFooter && (

        <Footer />

      )}

    </div>
  );
};

export default MainLayout;