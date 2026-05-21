// import React, { useContext } from "react";

// import {
//   Navigate,
//   useLocation,
// } from "react-router-dom";

// /* Auth Context */
// import { AuthContext } from "../context/AuthContext";

// /* Loader */
// import Loader from "../components/common/Loader";

// const ProtectedRoute = ({
//   children,
// }) => {

//   const {
//     user,
//     loading,
//   } = useContext(AuthContext);

//   const location =
//     useLocation();

//   /* Loading */
//   if (loading) {

//     return (
//       <div
//         className="
//           w-full
//           min-h-screen
//           flex
//           items-center
//           justify-center
//           bg-white
//         "
//       >
//         <Loader />
//       </div>
//     );
//   }

//   /* Not Logged In */
//   if (!user) {

//     return (
//       <Navigate
//         to="/login"
//         state={{
//           from: location,
//         }}
//         replace
//       />
//     );
//   }

//   /* Authorized */
//   return children;
// };

// export default ProtectedRoute;



import React, {
  useContext,
} from "react";

import {
  Navigate,
  useLocation,
} from "react-router-dom";

/* Context */
import {
  AuthContext,
} from "../context/AuthContext";

/* Components */
import Loader from "../components/common/Loader";

const ProtectedRoute = ({
  children,
}) => {

  /* =========================
      CONTEXT
  ========================== */

  const {
    user,
    loading,
  } = useContext(
    AuthContext
  );

  const location =
    useLocation();

  /* =========================
      LOADING STATE
  ========================== */

  if (loading) {

    return (

      <div
        className="
          w-full
          min-h-screen
          flex
          items-center
          justify-center
          bg-white
        "
      >

        <Loader />

      </div>
    );
  }

  /* =========================
      NOT LOGGED IN
  ========================== */

  if (!user) {

    return (

      <Navigate
        to="/login"
        state={{
          from: location,
        }}
        replace
      />
    );
  }

  /* =========================
      AUTHORIZED
  ========================== */

  return children;
};

export default ProtectedRoute;