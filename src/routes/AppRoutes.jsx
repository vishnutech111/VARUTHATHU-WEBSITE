// import React from "react";

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// /* Layouts */
// import MainLayout from "../layouts/MainLayout";

// import AdminLayout from "../layouts/AdminLayout";

// /* Route Protection */
// import ProtectedRoute from "./ProtectedRoute";

// import AdminRoute from "./AdminRoute";

// /* Public Pages */
// import Home from "../pages/Home";

// import Products from "../pages/Products";

// import ProductDetails from "../pages/ProductDetails";

// import Cart from "../pages/Cart";

// import Checkout from "../pages/Checkout";

// import Login from "../pages/Login";

// import Signup from "../pages/Signup";

// import OurStory from "../pages/OurStory";

// import Blogs from "../pages/Blogs";

// import ContactUs from "../pages/ContactUs";

// import Profile from "../pages/Profile";

// import NotFound from "../pages/NotFound";

// /* Admin Pages */
// import Dashboard from "../pages/admin/Dashboard";

// import AddProduct from "../pages/admin/AddProduct";

// import EditProduct from "../pages/admin/EditProduct";

// import Orders from "../pages/admin/Orders";

// import Users from "../pages/admin/Users";

// import BlogsManage from "../pages/admin/BlogsManage";

// import Coupons from "../pages/admin/Coupons";

// const AppRoutes = () => {

//   return (
//     <BrowserRouter>

//       <Routes>

//         {/* Main Website Layout */}
//         <Route
//           path="/"
//           element={<MainLayout />}
//         >

//           {/* Home */}
//           <Route
//             index
//             element={<Home />}
//           />

//           {/* Products */}
//           <Route
//             path="products"
//             element={<Products />}
//           />

//           {/* Product Details */}
//           <Route
//             path="products/:id"
//             element={<ProductDetails />}
//           />

//           {/* Cart */}
//           <Route
//             path="cart"
//             element={<Cart />}
//           />

//           {/* Checkout */}
//           <Route
//             path="checkout"
//             element={
//               <ProtectedRoute>
//                 <Checkout />
//               </ProtectedRoute>
//             }
//           />

//           {/* Login */}
//           <Route
//             path="login"
//             element={<Login />}
//           />

//           {/* Signup */}
//           <Route
//             path="signup"
//             element={<Signup />}
//           />

//           {/* Our Story */}
//           <Route
//             path="ourstory"
//             element={<OurStory />}
//           />

//           {/* Blogs */}
//           <Route
//             path="blogs"
//             element={<Blogs />}
//           />

//           {/* Contact */}
//           <Route
//             path="contactus"
//             element={<ContactUs />}
//           />

//           {/* Profile */}
//           <Route
//             path="profile"
//             element={
//               <ProtectedRoute>
//                 <Profile />
//               </ProtectedRoute>
//             }
//           />

//         </Route>

//         {/* Admin Layout */}
//         <Route
//           path="/admin"
//           element={
//             <AdminRoute>
//               <AdminLayout />
//             </AdminRoute>
//           }
//         >

//           {/* Dashboard */}
//           <Route
//             index
//             element={<Dashboard />}
//           />

//           {/* Products */}
//           <Route
//             path="add-product"
//             element={<AddProduct />}
//           />

//           <Route
//             path="edit-product/:id"
//             element={<EditProduct />}
//           />

//           {/* Orders */}
//           <Route
//             path="orders"
//             element={<Orders />}
//           />

//           {/* Users */}
//           <Route
//             path="users"
//             element={<Users />}
//           />

//           {/* Blogs */}
//           <Route
//             path="blogs"
//             element={<BlogsManage />}
//           />

//           {/* Coupons */}
//           <Route
//             path="coupons"
//             element={<Coupons />}
//           />

//         </Route>

//         {/* 404 Page */}
//         <Route
//           path="*"
//           element={<NotFound />}
//         />

//       </Routes>

//     </BrowserRouter>
//   );
// };

// export default AppRoutes;






import React from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

/* =========================
   LAYOUTS
========================= */

import MainLayout from "../layouts/MainLayout";

import AdminLayout from "../layouts/AdminLayout";

/* =========================
   ROUTE PROTECTION
========================= */

import ProtectedRoute from "./ProtectedRoute";

import AdminRoute from "./AdminRoute";

/* =========================
   PUBLIC PAGES
========================= */

import Home from "../pages/Home";

import Products from "../pages/Products";

import ProductDetails from "../pages/ProductDetails";

import Cart from "../pages/Cart";

import Checkout from "../pages/Checkout";

import Login from "../pages/Login";

import Signup from "../pages/Signup";

import OurStory from "../pages/OurStory";

import Blogs from "../pages/Blogs";

import ContactUs from "../pages/ContactUs";

import Profile from "../pages/Profile";

/* =========================
   ADMIN PAGES
========================= */

import Dashboard from "../pages/admin/Dashboard";

import AddProduct from "../pages/admin/AddProduct";

import Orders from "../pages/admin/Orders";

import Users from "../pages/admin/Users";

import BlogsManage from "../pages/admin/BlogsManage";

/* =========================
   404 PAGE
========================= */

const NotFound = () => {

  return (

    <div
      className="
        w-full
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#fafafa]
        px-6
      "
    >

      <div
        className="
          text-center
        "
      >

        <h1
          className="
            text-7xl
            md:text-9xl
            font-black
            text-[#f7d046]
            mb-6
          "
        >

          404

        </h1>

        <h2
          className="
            text-3xl
            md:text-5xl
            font-bold
            text-[#1a1a1a]
            mb-5
          "
        >

          Page Not Found

        </h2>

        <p
          className="
            text-gray-600
            text-lg
            leading-8
            max-w-2xl
            mx-auto
          "
        >

          The page you are
          looking for does not
          exist or has been moved.

        </p>

      </div>

    </div>
  );
};

/* =========================
   APP ROUTES
========================= */

const AppRoutes = () => {

  return (

    <Routes>

      {/* =========================
          MAIN WEBSITE ROUTES
      ========================== */}

      <Route
        path="/"
        element={<MainLayout />}
      >

        {/* HOME */}

        <Route
          index
          element={<Home />}
        />

        {/* PRODUCTS */}

        <Route
          path="products"
          element={<Products />}
        />

        <Route
          path="products/:id"
          element={
            <ProductDetails />
          }
        />

        {/* CART */}

        <Route
          path="cart"
          element={<Cart />}
        />

        {/* CHECKOUT */}

        <Route
          path="checkout"
          element={
            <ProtectedRoute>

              <Checkout />

            </ProtectedRoute>
          }
        />

        {/* AUTH */}

        <Route
          path="login"
          element={<Login />}
        />

        <Route
          path="signup"
          element={<Signup />}
        />

        {/* STORY */}

        <Route
          path="ourstory"
          element={<OurStory />}
        />

        {/* BLOGS */}

        <Route
          path="blogs"
          element={<Blogs />}
        />

        {/* CONTACT */}

        <Route
          path="contactus"
          element={<ContactUs />}
        />

        {/* PROFILE */}

        <Route
          path="profile"
          element={
            <ProtectedRoute>

              <Profile />

            </ProtectedRoute>
          }
        />

      </Route>

      {/* =========================
          ADMIN ROUTES
      ========================== */}

      <Route
        path="/admin"
        element={
          <AdminRoute>

            <AdminLayout />

          </AdminRoute>
        }
      >

        {/* DASHBOARD */}

        <Route
          index
          element={<Dashboard />}
        />

        {/* PRODUCTS */}

        <Route
          path="add-product"
          element={<AddProduct />}
        />

        {/* ORDERS */}

        <Route
          path="orders"
          element={<Orders />}
        />

        {/* USERS */}

        <Route
          path="users"
          element={<Users />}
        />

        {/* BLOGS */}

        <Route
          path="blogs"
          element={
            <BlogsManage />
          }
        />

      </Route>

      {/* =========================
          404 ROUTE
      ========================== */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
};

export default AppRoutes;