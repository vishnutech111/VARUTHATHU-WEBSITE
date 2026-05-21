// import React from "react";
// import { Link } from "react-router-dom";

// import {
//   FaCalendarAlt,
//   FaArrowRight,
// } from "react-icons/fa";

// import "./Blogs.css";

// /* Sample Blog Image */
// // import BlogImage from "../../assets/banners/blog-banner.jpg";

// const BlogCard = ({ blog }) => {

//   /* Dummy Data Fallback */
//   const blogData = blog || {
//     id: 1,
//     title:
//       "Why Kerala Banana Chips Are Loved Across India",
//     // image: "",
//     category: "Snacks",
//     date: "15 May 2026",
//     description:
//       "Discover the story behind Kerala’s most iconic crispy snack and why authentic banana chips remain a timeless favorite.",
//   };

//   return (
//     <div className="blog-card">

//       {/* Blog Image */}
//       <div className="blog-image">

//         <img
//           src={blogData.image}
//           alt={blogData.title}
//         />

//       </div>

//       {/* Content */}
//       <div className="blog-content">

//         {/* Category */}
//         <span className="blog-category">
//           {blogData.category}
//         </span>

//         {/* Title */}
//         <h3>
//           {blogData.title}
//         </h3>

//         {/* Description */}
//         <p>
//           {blogData.description}
//         </p>

//         {/* Footer */}
//         <div className="blog-footer">

//           {/* Date */}
//           <div className="blog-date">

//             <FaCalendarAlt />

//             <span>
//               {blogData.date}
//             </span>

//           </div>

//           {/* Read More */}
//           <Link
//             to={`/blogs/${blogData.id}`}
//             className="read-more-btn"
//           >

//             Read More

//             <FaArrowRight />

//           </Link>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default BlogCard;



import React from "react";

import {
  Link,
} from "react-router-dom";

// import {
//   FaCalendarAlt,
//   FaArrowRight,
//   FaUser,
// } from "react-icons/fa";

/* Styles */
import "./Blogs.css";

const BlogCard = ({
  blog,
}) => {

  /* =========================
      SAFETY CHECK
  ========================== */

  if (!blog) {

    return null;
  }

  /* =========================
      DATA
  ========================== */

  const {
    _id,
    title,
    image,
    description,
    author,
    createdAt,
    category,
  } = blog;

  /* =========================
      FORMAT DATE
  ========================== */

  const formattedDate =
    createdAt
      ? new Date(
          createdAt
        ).toLocaleDateString()
      : "Recently Added";

  return (

    <div className="blog-card">

      {/* =========================
          IMAGE
      ========================== */}

      <Link
        to={`/blogs/${_id}`}
        className="blog-image-wrapper"
      >

        <img
          src={
            image ||
            "/images/default-blog.jpg"
          }
          alt={title}
          className="blog-image"
        />

      </Link>

      {/* =========================
          CONTENT
      ========================== */}

      <div className="blog-content">

        {/* Category */}

        <span className="blog-category">

          {category || "Kerala Snacks"}

        </span>

        {/* Title */}

        <Link
          to={`/blogs/${_id}`}
          className="blog-title"
        >

          {title}

        </Link>

        {/* Description */}

        <p className="blog-description">

          {description
            ?.slice(0, 120)}

          ...

        </p>

        {/* Bottom */}

        <div className="blog-bottom">

          {/* Author */}

          <div className="blog-author">

            {/* <FaUser /> */}

            <span>

              {author ||
                "Admin"}

            </span>

          </div>

          {/* Date */}

          <div className="blog-date">

            {/* <FaCalendarAlt /> */}

            <span>

              {formattedDate}

            </span>

          </div>

        </div>

        {/* Read More */}

        <Link
          to={`/blogs/${_id}`}
          className="read-more-btn"
        >

          Read More

          {/* <FaArrowRight /> */}

        </Link>

      </div>

    </div>
  );
};

export default BlogCard;