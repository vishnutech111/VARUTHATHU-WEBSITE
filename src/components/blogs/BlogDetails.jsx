// import React from "react";

// import {
//   FaCalendarAlt,
//   FaUser,
//   FaArrowLeft,
// } from "react-icons/fa";

// import { Link } from "react-router-dom";

// import "./Blogs.css";

// /* Sample Image */
// import BlogBanner from "../../assets/banners/blog-banner.jpg";

// const BlogDetails = () => {

//   /* Dummy Blog Data */
//   const blog = {
//     title:
//       "Why Kerala Banana Chips Are Loved Across India",

//     image: BlogBanner,

//     author: "Varuthathu Co.",

//     date: "15 May 2026",

//     category: "Traditional Snacks",

//     content: `
//       Kerala banana chips are more than just a snack.
//       They are part of tradition, culture, and everyday life.

//       Made using carefully selected raw bananas and
//       pure coconut oil, these chips are known for
//       their crispy texture and authentic flavor.

//       At Varuthathu Co., we continue the same
//       traditional process with consistency and care.
//       Every batch is prepared with attention to detail,
//       ensuring the same trusted taste customers love.

//       No shortcuts. No gimmicks.
//       Just snacks. Done right.
//     `,
//   };

//   return (
//     <section className="blog-details-section">

//       {/* Top Banner */}
//       <div className="blog-details-banner">

//         <img
//           src={blog.image}
//           alt={blog.title}
//         />

//       </div>

//       {/* Content */}
//       <div className="blog-details-content">

//         {/* Back Button */}
//         <Link
//           to="/blogs"
//           className="back-blog-btn"
//         >

//           <FaArrowLeft />

//           Back To Blogs

//         </Link>

//         {/* Category */}
//         <span className="details-category-badge">
//           {blog.category}
//         </span>

//         {/* Title */}
//         <h1>
//           {blog.title}
//         </h1>

//         {/* Meta */}
//         <div className="blog-meta">

//           <div>

//             <FaUser />

//             <span>
//               {blog.author}
//             </span>

//           </div>

//           <div>

//             <FaCalendarAlt />

//             <span>
//               {blog.date}
//             </span>

//           </div>

//         </div>

//         {/* Description */}
//         <div className="blog-description">

//           {blog.content
//             .split("\n")
//             .map((paragraph, index) => (

//               paragraph.trim() && (
//                 <p key={index}>
//                   {paragraph}
//                 </p>
//               )

//             ))}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default BlogDetails;



import React, {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import axios from "axios";

/* Icons */
import {
  FaCalendarAlt,
  FaUser,
  FaArrowLeft,
} from "react-icons/fa";

/* Components */
import FadeAnimation from "../animations/FadeAnimation";

/* Styles */
import "./Blogs.css";

const BlogDetails = () => {

  /* =========================
      PARAMS
  ========================== */

  const { id } =
    useParams();

  /* =========================
      STATES
  ========================== */

  const [blog, setBlog] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  /* =========================
      API URL
  ========================== */

  const BASE_URL =
    process.env
      .REACT_APP_API_URL ||
    "http://localhost:5000/api";

  /* =========================
      GET BLOG DETAILS
  ========================== */

  const getBlogDetails =
    async () => {

      try {

        setLoading(true);

        const response =
          await axios.get(
            `${BASE_URL}/blogs/${id}`
          );

        setBlog(
          response.data.blog
        );

      } catch (error) {

        console.log(error);

        setError(
          "Failed to load blog details"
        );

      } finally {

        setLoading(false);
      }
    };

  /* =========================
      INITIAL LOAD
  ========================== */

  useEffect(() => {

    if (id) {

      getBlogDetails();
    }

  }, [id]);

  /* =========================
      LOADING
  ========================== */

  if (loading) {

    return (

      <div className="blog-details-loading">

        Loading blog...

      </div>
    );
  }

  /* =========================
      ERROR
  ========================== */

  if (error) {

    return (

      <div className="blog-details-error">

        {error}

      </div>
    );
  }

  /* =========================
      NO BLOG
  ========================== */

  if (!blog) {

    return (

      <div className="blog-details-error">

        Blog not found.

      </div>
    );
  }

  return (

    <section className="blog-details-section">

      <div className="blog-details-container">

        {/* =========================
            BACK BUTTON
        ========================== */}

        <Link
          to="/blogs"
          className="back-btn"
        >

          <FaArrowLeft />

          Back To Blogs

        </Link>

        {/* =========================
            IMAGE
        ========================== */}

        <FadeAnimation>

          <div className="blog-details-image-wrapper">

            <img
              src={
                blog.image ||
                "/images/default-blog.jpg"
              }
              alt={blog.title}
              className="blog-details-image"
            />

          </div>

        </FadeAnimation>

        {/* =========================
            CONTENT
        ========================== */}

        <FadeAnimation delay={0.2}>

          <div className="blog-details-content">

            {/* Category */}

            <span className="blog-details-category">

              {blog.category ||
                "Kerala Snacks"}

            </span>

            {/* Title */}

            <h1 className="blog-details-title">

              {blog.title}

            </h1>

            {/* Meta */}

            <div className="blog-details-meta">

              <div className="meta-item">

                <FaUser />

                <span>

                  {blog.author ||
                    "Admin"}

                </span>

              </div>

              <div className="meta-item">

                <FaCalendarAlt />

                <span>

                  {blog.createdAt
                    ? new Date(
                        blog.createdAt
                      ).toLocaleDateString()
                    : "Recently Added"}

                </span>

              </div>

            </div>

            {/* Description */}

            <p className="blog-details-description">

              {blog.description}

            </p>

            {/* Content */}

            <div className="blog-details-text">

              {blog.content ? (

                blog.content
                  .split("\n")
                  .map(
                    (
                      paragraph,
                      index
                    ) => (

                      <p
                        key={index}
                      >

                        {paragraph}

                      </p>

                    )
                  )

              ) : (

                <p>

                  No blog content available.

                </p>

              )}

            </div>

          </div>

        </FadeAnimation>

      </div>

    </section>
  );
};

export default BlogDetails;