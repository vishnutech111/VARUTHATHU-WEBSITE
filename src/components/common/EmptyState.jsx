// import React from "react";

// import {
//   FaBoxOpen,
// } from "react-icons/fa";

// import "./Common.css";

// const EmptyState = ({
//   title = "No Data Found",
//   description =
//     "There is currently nothing to display.",
//   buttonText,
//   onButtonClick,
//   icon,
// }) => {

//   return (
//     <div className="empty-state">

//       {/* Icon */}
//       <div className="empty-icon">

//         {icon || <FaBoxOpen />}

//       </div>

//       {/* Title */}
//       <h2>
//         {title}
//       </h2>

//       {/* Description */}
//       <p>
//         {description}
//       </p>

//       {/* Optional Button */}
//       {buttonText && (

//         <button
//           className="empty-btn"
//           onClick={onButtonClick}
//         >

//           {buttonText}

//         </button>

//       )}

//     </div>
//   );
// };

// export default EmptyState;




import React from "react";

import {
  Link,
} from "react-router-dom";

// import {
//   FaBoxOpen,
// } from "react-icons/fa";

/* Styles */
import "./Common.css";

const EmptyState = ({
  title = "No Data Found",
  description =
    "There is nothing to display right now.",
  buttonText = "Go Back",
  buttonLink = "/",
  icon,
  showButton = true,
}) => {

  return (

    <div className="empty-state">

      {/* =========================
          ICON
      ========================== */}

      <div className="empty-state-icon">

        {/* {icon || <FaBoxOpen />} */}

      </div>

      {/* =========================
          TITLE
      ========================== */}

      <h2 className="empty-state-title">

        {title}

      </h2>

      {/* =========================
          DESCRIPTION
      ========================== */}

      <p className="empty-state-description">

        {description}

      </p>

      {/* =========================
          BUTTON
      ========================== */}

      {showButton && (

        <Link
          to={buttonLink}
          className="empty-state-btn"
        >

          {buttonText}

        </Link>

      )}

    </div>
  );
};

export default EmptyState;