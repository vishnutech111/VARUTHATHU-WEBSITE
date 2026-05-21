// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// import "./Hero.css";

// /* Import Banner Image */
// import HeroBanner from "../../assets/banners/hero-banner.jpg";

// const Hero = () => {
//   return (
//     <section className="hero">

//       <div className="hero-container">

//         {/* Left Content */}
//         <motion.div
//           className="hero-content"
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >

//           <span className="hero-tag">
//             Authentic Kerala Snacks
//           </span>

//           <h1>
//             Traditional Chips.
//             <br />
//             Modern Experience.
//           </h1>

//           <p>
//             Varuthathu Co. started with a taste people already trusted.
//             Handmade in small batches with consistency, care, and
//             authentic Kerala flavor.
//           </p>

//           <div className="hero-buttons">

//             <Link to="/products" className="shop-btn">
//               Shop Now
//             </Link>

//             <Link to="/ourstory" className="story-btn">
//               Our Story
//             </Link>

//           </div>

//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           className="hero-image"
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >

//           <img
//             src={HeroBanner}
//             alt="Varuthathu Chips"
//           />

//         </motion.div>

//       </div>

//     </section>
//   );
// };

// export default Hero;



import React from "react";

import {
  Link,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

// import {
//   FaArrowRight,
// } from "react-icons/fa";

/* Styles */
import "./Hero.css";

/* Images */
// import HeroImage from "../../assets/banners/hero-banner.jpg";

const Hero = () => {

  return (

    <section className="hero">

      {/* =========================
          BACKGROUND OVERLAY
      ========================== */}

      <div className="hero-overlay"></div>

      {/* =========================
          CONTENT
      ========================== */}

      <div className="hero-container">

        {/* LEFT CONTENT */}

        <motion.div
          className="hero-content"

          initial={{
            opacity: 0,
            x: -80,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.8,
          }}
        >

          <span className="hero-badge">

            Traditional Kerala Snacks

          </span>

          <h1 className="hero-title">

            Crispy Taste
            <br />

            Made With Tradition

          </h1>

          <p className="hero-description">

            Experience authentic Kerala
            banana chips and traditional
            snacks crafted with quality
            ingredients and timeless flavor.

          </p>

          {/* BUTTONS */}

          <div className="hero-buttons">

            <Link
              to="/products"
              className="hero-btn primary-btn"
            >

              Shop Now

              {/* <FaArrowRight /> */}

            </Link>

            <Link
              to="/ourstory"
              className="hero-btn secondary-btn"
            >

              Our Story

            </Link>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          className="hero-image-wrapper"

          initial={{
            opacity: 0,
            x: 80,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.8,
          }}
        >

          <img
            src="https://www.shutterstock.com/image-photo/thin-banana-chips-falling-green-600nw-2588730073.jpg"
            alt="Kerala Snacks"
            className="hero-image"
          />

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;