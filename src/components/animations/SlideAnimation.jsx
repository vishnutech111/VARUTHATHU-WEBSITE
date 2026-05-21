// import React from "react";

// import {
//   motion,
// } from "framer-motion";

// const SlideAnimation = ({
//   children,
//   direction = "left",
//   duration = 0.6,
//   delay = 0,
//   distance = 80,
//   className = "",
// }) => {

//   /* Direction Logic */
//   const getInitialPosition = () => {

//     switch (direction) {

//       case "right":
//         return { x: distance, opacity: 0 };

//       case "top":
//         return { y: -distance, opacity: 0 };

//       case "bottom":
//         return { y: distance, opacity: 0 };

//       case "left":
//       default:
//         return { x: -distance, opacity: 0 };
//     }
//   };

//   return (
//     <motion.div
//       className={className}

//       initial={getInitialPosition()}

//       whileInView={{
//         x: 0,
//         y: 0,
//         opacity: 1,
//       }}

//       viewport={{
//         once: true,
//         amount: 0.2,
//       }}

//       transition={{
//         duration: duration,
//         delay: delay,
//         ease: "easeOut",
//       }}
//     >

//       {children}

//     </motion.div>
//   );
// };

// export default SlideAnimation;




import React from "react";

import {
  motion,
} from "framer-motion";

const SlideAnimation = ({
  children,
  direction = "left",
  duration = 0.6,
  delay = 0,
  distance = 80,
  once = true,
  amount = 0.2,
  className = "",
}) => {

  /* =========================
      INITIAL POSITION
  ========================== */

  const getInitialPosition =
    () => {

      switch (direction) {

        case "right":

          return {
            x: distance,
            opacity: 0,
          };

        case "top":

          return {
            y: -distance,
            opacity: 0,
          };

        case "bottom":

          return {
            y: distance,
            opacity: 0,
          };

        case "left":
        default:

          return {
            x: -distance,
            opacity: 0,
          };
      }
    };

  return (

    <motion.div
      className={className}

      initial={
        getInitialPosition()
      }

      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
      }}

      viewport={{
        once: once,
        amount: amount,
      }}

      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
    >

      {children}

    </motion.div>
  );
};

export default SlideAnimation;