// import React from "react";

// import {
//   BrowserRouter,
// } from "react-router-dom";

// /* =========================
//    ROUTES
// ========================= */
// import AppRoutes from "./routes/AppRoutes";

// /* =========================
//    CONTEXT PROVIDERS
// ========================= */
// import AuthProvider from "./context/AuthContext";

// import CartProvider from "./context/CartContext";

// import ProductProvider from "./context/ProductContext";

// /* =========================
//    GLOBAL STYLES
// ========================= */
// import "./styles/global.css";

// // import "./styles/variable.css";

// import "./styles/responsive.css";

// // import "./styles/animation.css";

// const App = () => {

//   return (

//     <BrowserRouter>

//       <AuthProvider>

//         <ProductProvider>

//           <CartProvider>

//             <AppRoutes />

//           </CartProvider>

//         </ProductProvider>

//       </AuthProvider>

//     </BrowserRouter>
//   );
// };

// export default App;



import React from "react";

/* =========================
   ROUTES
========================= */
import AppRoutes from "./routes/AppRoutes";

/* =========================
   CONTEXT PROVIDERS
========================= */
import AuthProvider from "./context/AuthContext";

import CartProvider from "./context/CartContext";

import ProductProvider from "./context/ProductContext";

/* =========================
   GLOBAL STYLES
========================= */
import "./styles/global.css";

// import "./styles/variable.css";

import "./styles/responsive.css";

// import "./styles/animation.css";

function App() {

  return (

    <AuthProvider>

      <ProductProvider>

        <CartProvider>

          <AppRoutes />

        </CartProvider>

      </ProductProvider>

    </AuthProvider>
  );
}

export default App;


// import React from 'react'

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App