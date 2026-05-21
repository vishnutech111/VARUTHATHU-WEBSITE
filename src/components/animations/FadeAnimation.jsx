// import React from "react";

// import {
//   motion,
// } from "framer-motion";

// const FadeAnimation = ({
//   children,
//   duration = 0.6,
//   delay = 0,
//   y = 40,
//   className = "",
// }) => {

//   return (
//     <motion.div
//       className={className}

//       initial={{
//         opacity: 0,
//         y: y,
//       }}

//       whileInView={{
//         opacity: 1,
//         y: 0,
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

// export default FadeAnimation;



import React from "react";

import {
  motion,
} from "framer-motion";

const FadeAnimation = ({
  children,
  duration = 0.6,
  delay = 0,
  y = 40,
  x = 0,
  once = true,
  amount = 0.2,
  className = "",
}) => {

  return (

    <motion.div
      className={className}

      initial={{
        opacity: 0,
        y: y,
        x: x,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
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

export default FadeAnimation;