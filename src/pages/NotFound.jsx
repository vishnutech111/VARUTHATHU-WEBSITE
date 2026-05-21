import React from "react";

import { Link } from "react-router-dom";

/* Components */
import FadeAnimation from "../components/animations/FadeAnimation";

import Button from "../components/common/Button";

/* Icons */
import {
  FaExclamationTriangle,
  FaArrowLeft,
} from "react-icons/fa";

const NotFound = () => {

  return (
    <div
      className="
        w-full
        min-h-screen
        bg-[#fffdf4]
        flex
        items-center
        justify-center
        px-5
        py-20
      "
    >

      <FadeAnimation>

        <div
          className="
            max-w-[700px]
            text-center
          "
        >

          {/* Icon */}
          <div
            className="
              w-32
              h-32
              mx-auto
              rounded-full
              bg-[#f7d046]
              flex
              items-center
              justify-center
              shadow-xl
              mb-8
            "
          >

            <FaExclamationTriangle
              className="
                text-6xl
                text-[#1a1a1a]
              "
            />

          </div>

          {/* 404 */}
          <h1
            className="
              text-7xl
              md:text-9xl
              font-extrabold
              text-[#1a1a1a]
              mb-4
            "
          >
            404
          </h1>

          {/* Title */}
          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              text-[#1a1a1a]
              mb-6
            "
          >
            Page Not Found
          </h2>

          {/* Description */}
          <p
            className="
              text-gray-600
              text-lg
              leading-9
              mb-10
            "
          >
            Oops! The page you are looking
            for doesn’t exist or may have
            been moved. Let’s get you back
            to delicious Kerala snacks.
          </p>

          {/* Buttons */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-5
            "
          >

            {/* Home */}
            <Link to="/">

              <Button
                text="Back To Home"
              />

            </Link>

            {/* Products */}
            <Link
              to="/products"
              className="
                flex
                items-center
                gap-3
                border-2
                border-[#f7d046]
                text-[#1a1a1a]
                font-semibold
                px-8
                py-4
                rounded-full
                hover:bg-[#f7d046]
                transition
              "
            >

              <FaArrowLeft />

              Browse Products

            </Link>

          </div>

        </div>

      </FadeAnimation>

    </div>
  );
};

export default NotFound;