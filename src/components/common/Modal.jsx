// import React, { useEffect } from "react";

// import {
//   FaTimes,
// } from "react-icons/fa";

// import "./Common.css";

// const Modal = ({
//   isOpen,
//   onClose,
//   title,
//   children,
// }) => {

//   /* Close On ESC Key */
//   useEffect(() => {

//     const handleEscape = (e) => {

//       if (e.key === "Escape") {
//         onClose();
//       }

//     };

//     document.addEventListener(
//       "keydown",
//       handleEscape
//     );

//     return () => {
//       document.removeEventListener(
//         "keydown",
//         handleEscape
//       );
//     };

//   }, [onClose]);

//   /* Prevent Background Scroll */
//   useEffect(() => {

//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };

//   }, [isOpen]);

//   /* Don't Render */
//   if (!isOpen) return null;

//   return (
//     <div
//       className="modal-overlay"
//       onClick={onClose}
//     >

//       {/* Modal Box */}
//       <div
//         className="modal-container"
//         onClick={(e) =>
//           e.stopPropagation()
//         }
//       >

//         {/* Header */}
//         <div className="modal-header">

//           <h2>
//             {title}
//           </h2>

//           <button
//             className="modal-close-btn"
//             onClick={onClose}
//           >

//             <FaTimes />

//           </button>

//         </div>

//         {/* Body */}
//         <div className="modal-body">

//           {children}

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Modal;




import React, {
  useEffect,
} from "react";

import {
  FaTimes,
} from "react-icons/fa";

/* Styles */
import "./Common.css";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  width = "600px",
  showCloseButton = true,
  closeOnOverlay = true,
}) => {

  /* =========================
      ESC KEY CLOSE
  ========================== */

  useEffect(() => {

    const handleEsc =
      (event) => {

        if (
          event.key === "Escape"
        ) {

          onClose?.();
        }
      };

    document.addEventListener(
      "keydown",
      handleEsc
    );

    return () => {

      document.removeEventListener(
        "keydown",
        handleEsc
      );
    };

  }, [onClose]);

  /* =========================
      HIDE MODAL
  ========================== */

  if (!isOpen) {

    return null;
  }

  /* =========================
      OVERLAY CLICK
  ========================== */

  const handleOverlayClick =
    () => {

      if (closeOnOverlay) {

        onClose?.();
      }
    };

  return (

    <div
      className="modal-overlay"
      onClick={
        handleOverlayClick
      }
    >

      {/* =========================
          MODAL CONTAINER
      ========================== */}

      <div
        className="modal-container"
        style={{ maxWidth: width }}
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        {/* =========================
            HEADER
        ========================== */}

        <div className="modal-header">

          <h2 className="modal-title">

            {title}

          </h2>

          {showCloseButton && (

            <button
              className="modal-close-btn"
              onClick={onClose}
            >

              <FaTimes />

            </button>

          )}

        </div>

        {/* =========================
            BODY
        ========================== */}

        <div className="modal-body">

          {children}

        </div>

      </div>

    </div>
  );
};

export default Modal;