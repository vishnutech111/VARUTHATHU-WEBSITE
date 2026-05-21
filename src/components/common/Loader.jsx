// import React from "react";

// import "./Common.css";

// const Loader = () => {

//   return (
//     <div className="loader-container">

//       {/* Chips Loader */}
//       <div className="chips-loader">

//         <span></span>
//         <span></span>
//         <span></span>

//       </div>

//       {/* Text */}
//       <h3>
//         Varuthathu Co.
//       </h3>

//       <p>
//         Preparing fresh snacks...
//       </p>

//     </div>
//   );
// };

// export default Loader;


import React from "react";

/* Styles */
import "./Common.css";

const Loader = ({
  size = "60px",
  color = "#f7d046",
  text = "Loading...",
  fullScreen = false,
}) => {

  return (

    <div
      className={
        fullScreen
          ? "loader-wrapper fullscreen"
          : "loader-wrapper"
      }
    >

      {/* =========================
          SPINNER
      ========================== */}

      <div
        className="loader-spinner"
        style={{
          width: size,
          height: size,
          borderTopColor: color,
        }}
      ></div>

      {/* =========================
          TEXT
      ========================== */}

      {text && (

        <p className="loader-text">

          {text}

        </p>

      )}

    </div>
  );
};

export default Loader;