// import React from "react";

// import "./Common.css";

// const Button = ({
//   text = "Click Here",
//   type = "button",
//   onClick,
//   disabled = false,
//   fullWidth = false,
//   outline = false,
//   icon,
// }) => {

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       className={
//         `
//         common-btn
//         ${fullWidth ? "full-btn" : ""}
//         ${outline ? "outline-btn" : ""}
//         ${disabled ? "disabled-btn" : ""}
//         `
//       }
//     >

//       {icon && (
//         <span className="btn-icon">
//           {icon}
//         </span>
//       )}

//       {text}

//     </button>
//   );
// };

// export default Button;


import React from "react";

import {
  Link,
} from "react-router-dom";

/* Styles */
import "./Common.css";

const Button = ({
  text = "Click Here",
  to = "",
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  icon,
  className = "",
  fullWidth = false,
}) => {

  /* =========================
      BUTTON CLASSES
  ========================== */

  const buttonClass =
    `
      custom-btn
      ${fullWidth ? "full-width" : ""}
      ${disabled ? "disabled" : ""}
      ${className}
    `;

  /* =========================
      LINK BUTTON
  ========================== */

  if (to) {

    return (

      <Link
        to={to}
        className={buttonClass}
      >

        {icon && (

          <span className="btn-icon">

            {icon}

          </span>

        )}

        <span>

          {text}

        </span>

      </Link>
    );
  }

  /* =========================
      NORMAL BUTTON
  ========================== */

  return (

    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={
        disabled || loading
      }
    >

      {loading ? (

        <span className="btn-loading">

          Loading...

        </span>

      ) : (

        <>

          {icon && (

            <span className="btn-icon">

              {icon}

            </span>

          )}

          <span>

            {text}

          </span>

        </>

      )}

    </button>
  );
};

export default Button;