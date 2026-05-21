// import React from "react";

// import BlogCard from "./BlogCard";

// import "./Blogs.css";

// /* Sample Images */
// // import Blog1 from "../../assets/banners/blog1.jpg";
// // import Blog2 from "../../assets/banners/blog2.jpg";
// // import Blog3 from "../../assets/banners/blog3.jpg";

// const BlogList = () => {

//   /* Dummy Blog Data */
//   const blogs = [
//     {
//       id: 1,
//       title:
//         "Why Kerala Banana Chips Are Loved Across India",
//       // image: "",
//       category: "Snacks",
//       date: "15 May 2026",
//       description:
//         "Discover the story behind Kerala’s iconic crispy banana chips and why people keep coming back for the authentic taste.",
//     },
//     {
//       id: 2,
//       title:
//         "How Varuthathu Co. Maintains Traditional Taste",
//       // image: "",
//       category: "Our Story",
//       date: "12 May 2026",
//       description:
//         "Learn how consistency, real ingredients, and small-batch preparation help preserve the original snack experience.",
//     },
//     {
//       id: 3,
//       title:
//         "Top Traditional Kerala Snacks You Must Try",
//       // image: "",
//       category: "Food",
//       date: "10 May 2026",
//       description:
//         "From banana chips to tapioca crisps, explore the best traditional Kerala snacks loved by generations.",
//     },
//   ];

//   return (
//     <section className="blog-list-section">

//       {/* Heading */}
//       <div className="blog-section-header">

//         <span>
//           Latest Articles
//         </span>

//         <h2>
//           Stories From Varuthathu Co.
//         </h2>

//         <p>
//           Explore authentic Kerala snack stories,
//           traditional recipes, and updates from
//           Varuthathu Co.
//         </p>

//       </div>

//       {/* Blog Grid */}
//       <div className="blog-grid">

//         {blogs.map((blog) => (

//           <BlogCard
//             key={blog.id}
//             blog={blog}
//           />

//         ))}

//       </div>

//     </section>
//   );
// };

// export default BlogList;


// import React, {
//   useEffect,
//   useState,
// } from "react";

import React, {
  useEffect,
  useState,
  useCallback,
} from "react";

import axios from "axios";

/* Components */
import BlogCard from "./BlogCard";

import FadeAnimation from "../animations/FadeAnimation";

/* Styles */
import "./Blogs.css";

const BlogList = () => {

  /* =========================
      STATES
  ========================== */

  const [blogs, setBlogs] =
    useState([]);

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
      GET BLOGS
  ========================== */

  // const getBlogs =
  //   async () => {

  //     try {

  //       setLoading(true);

  //       const response =
  //         await axios.get(
  //           `${BASE_URL}/blogs`
  //         );

  //       setBlogs(
  //         response.data.blogs || []
  //       );

  //     } catch (error) {

  //       console.log(error);

  //       setError(
  //         "Failed to load blogs"
  //       );

  //     } finally {

  //       setLoading(false);
  //     }
  //   };


  const getBlogs =
  useCallback(async () => {

    try {

      setLoading(true);

      const response =
        await axios.get(
          `${BASE_URL}/blogs`
        );

      setBlogs(
        response.data.blogs || []
      );

    } catch (error) {

      console.log(error);

      setError(
        "Failed to load blogs"
      );

    } finally {

      setLoading(false);
    }

  }, [BASE_URL]);

  /* =========================
      INITIAL LOAD
  ========================== */

  useEffect(() => {

    getBlogs();

  }, [getBlogs]);

  /* =========================
      LOADING
  ========================== */

  if (loading) {

    return (

      <section className="blog-list-section">

        <div className="blog-loading">

          Loading blogs...

        </div>

      </section>
    );
  }

  /* =========================
      ERROR
  ========================== */

  if (error) {

    return (

      <section className="blog-list-section">

        <div className="blog-error">

          {error}

        </div>

      </section>
    );
  }

  return (

    <section className="blog-list-section">

      {/* =========================
          HEADER
      ========================== */}

      <FadeAnimation>

        <div className="blog-list-header">

          <span className="blog-tag">

            Latest Articles

          </span>

          <h2>

            Stories & Snack Updates

          </h2>

          <p>

            Explore Kerala snack culture,
            recipes, traditions, and
            behind-the-scenes stories from
            Varuthathu Co.

          </p>

        </div>

      </FadeAnimation>

      {/* =========================
          BLOG GRID
      ========================== */}

      <div className="blog-grid">

        {blogs.length > 0 ? (

          blogs.map(
            (blog, index) => (

              <FadeAnimation
                key={blog._id}
                delay={
                  index * 0.1
                }
              >

                <BlogCard
                  blog={blog}
                />

              </FadeAnimation>

            )
          )

        ) : (

          <div className="no-blogs">

            No blogs available.

          </div>

        )}

      </div>

    </section>
  );
};

export default BlogList;