// import React from "react";

// /* Components */
// import BlogList from "../components/blogs/BlogList";

// import FadeAnimation from "../components/animations/FadeAnimation";

// import SearchBar from "../components/common/SearchBar";

// /* Icons */
// import {
//   FaNewspaper,
//   FaPenNib,
//   FaBookOpen,
// } from "react-icons/fa";

// const Blogs = () => {

//   return (
//     <div className="w-full bg-white min-h-screen overflow-hidden">

//       {/* Hero Section */}
//       <section
//         className="
//           w-full
//           bg-[#fff8dc]
//           py-24
//           px-5
//           text-center
//         "
//       >

//         <FadeAnimation>

//           {/* Badge */}
//           <span
//             className="
//               inline-block
//               bg-[#f7d046]
//               text-[#1a1a1a]
//               px-5
//               py-2
//               rounded-full
//               text-sm
//               font-bold
//               mb-5
//             "
//           >
//             Varuthathu Blogs
//           </span>

//           {/* Heading */}
//           <h1
//             className="
//               text-4xl
//               md:text-6xl
//               font-bold
//               text-[#1a1a1a]
//               leading-tight
//               mb-6
//             "
//           >
//             Stories, Snacks
//             <br />
//             & Kerala Traditions
//           </h1>

//           {/* Description */}
//           <p
//             className="
//               max-w-3xl
//               mx-auto
//               text-gray-600
//               leading-9
//               text-lg
//               mb-10
//             "
//           >
//             Explore authentic snack stories,
//             traditional Kerala recipes,
//             behind-the-scenes production,
//             and updates from Varuthathu Co.
//           </p>

//           {/* Search */}
//           <div
//             className="
//               flex
//               justify-center
//             "
//           >

//             <div
//               className="
//                 w-full
//                 max-w-[500px]
//               "
//             >

//               <SearchBar
//                 placeholder="Search blogs..."
//               />

//             </div>

//           </div>

//         </FadeAnimation>

//       </section>

//       {/* Features */}
//       <section
//         className="
//           w-[90%]
//           max-w-[1300px]
//           mx-auto
//           py-20
//         "
//       >

//         <div
//           className="
//             grid
//             grid-cols-1
//             md:grid-cols-2
//             lg:grid-cols-3
//             gap-8
//           "
//         >

//           {/* Card 1 */}
//           <FadeAnimation>

//             <div
//               className="
//                 bg-[#fffdf4]
//                 rounded-[30px]
//                 p-10
//                 text-center
//                 transition
//                 duration-300
//                 hover:-translate-y-2
//                 hover:shadow-2xl
//               "
//             >

//               <div
//                 className="
//                   w-20
//                   h-20
//                   rounded-full
//                   bg-[#f7d046]
//                   flex
//                   items-center
//                   justify-center
//                   mx-auto
//                   mb-6
//                 "
//               >

//                 <FaNewspaper
//                   className="
//                     text-3xl
//                     text-[#1a1a1a]
//                   "
//                 />

//               </div>

//               <h3
//                 className="
//                   text-2xl
//                   font-bold
//                   text-[#1a1a1a]
//                   mb-4
//                 "
//               >
//                 Latest Updates
//               </h3>

//               <p
//                 className="
//                   text-gray-600
//                   leading-8
//                 "
//               >
//                 Stay updated with the latest
//                 news, product launches, and
//                 stories from Varuthathu Co.
//               </p>

//             </div>

//           </FadeAnimation>

//           {/* Card 2 */}
//           <FadeAnimation delay={0.2}>

//             <div
//               className="
//                 bg-[#fffdf4]
//                 rounded-[30px]
//                 p-10
//                 text-center
//                 transition
//                 duration-300
//                 hover:-translate-y-2
//                 hover:shadow-2xl
//               "
//             >

//               <div
//                 className="
//                   w-20
//                   h-20
//                   rounded-full
//                   bg-[#f7d046]
//                   flex
//                   items-center
//                   justify-center
//                   mx-auto
//                   mb-6
//                 "
//               >

//                 <FaPenNib
//                   className="
//                     text-3xl
//                     text-[#1a1a1a]
//                   "
//                 />

//               </div>

//               <h3
//                 className="
//                   text-2xl
//                   font-bold
//                   text-[#1a1a1a]
//                   mb-4
//                 "
//               >
//                 Traditional Recipes
//               </h3>

//               <p
//                 className="
//                   text-gray-600
//                   leading-8
//                 "
//               >
//                 Discover authentic Kerala
//                 snack traditions and the
//                 methods behind our chips.
//               </p>

//             </div>

//           </FadeAnimation>

//           {/* Card 3 */}
//           <FadeAnimation delay={0.4}>

//             <div
//               className="
//                 bg-[#fffdf4]
//                 rounded-[30px]
//                 p-10
//                 text-center
//                 transition
//                 duration-300
//                 hover:-translate-y-2
//                 hover:shadow-2xl
//               "
//             >

//               <div
//                 className="
//                   w-20
//                   h-20
//                   rounded-full
//                   bg-[#f7d046]
//                   flex
//                   items-center
//                   justify-center
//                   mx-auto
//                   mb-6
//                 "
//               >

//                 <FaBookOpen
//                   className="
//                     text-3xl
//                     text-[#1a1a1a]
//                   "
//                 />

//               </div>

//               <h3
//                 className="
//                   text-2xl
//                   font-bold
//                   text-[#1a1a1a]
//                   mb-4
//                 "
//               >
//                 Snack Stories
//               </h3>

//               <p
//                 className="
//                   text-gray-600
//                   leading-8
//                 "
//               >
//                 Read stories about local
//                 flavors, customer favorites,
//                 and Kerala snack culture.
//               </p>

//             </div>

//           </FadeAnimation>

//         </div>

//       </section>

//       {/* Blog List */}
//       <section
//         className="
//           pb-24
//         "
//       >

//         <FadeAnimation>

//           <BlogList />

//         </FadeAnimation>

//       </section>

//     </div>
//   );
// };

// export default Blogs;





import React, {
  useState,
} from "react";

import "./Blogs.css";

/* Components */
import BlogCard from "../components/blogs/BlogCard";

import SearchBar from "../components/common/SearchBar";

import EmptyState from "../components/common/EmptyState";

import FadeAnimation from "../components/animations/FadeAnimation";

/* Icons */
// import {
//   FaNewspaper,
// } from "react-icons/fa";

const Blogs = () => {

  /* =========================
      BLOG DATA
  ========================== */

  const blogData = [

    {
      id: 1,
      title:
        "Why Kerala Banana Chips Are So Popular",
      image:
        "/images/blogs/blog1.jpg",
      category:
        "Kerala Snacks",
      date:
        "May 10, 2026",
      description:
        "Discover why traditional Kerala banana chips remain one of the most loved snacks across India.",
    },

    {
      id: 2,
      title:
        "Traditional Snack Making Methods",
      image:
        "/images/blogs/blog2.jpg",
      category:
        "Tradition",
      date:
        "May 05, 2026",
      description:
        "Learn how authentic Kerala snacks are prepared using traditional cooking techniques.",
    },

    {
      id: 3,
      title:
        "Best Tea-Time Snacks From Kerala",
      image:
        "/images/blogs/blog3.jpg",
      category:
        "Food",
      date:
        "April 28, 2026",
      description:
        "Explore some of the best crispy and spicy Kerala snacks perfect for tea time.",
    },

    {
      id: 4,
      title:
        "Healthy Ingredients Used In Kerala Snacks",
      image:
        "/images/blogs/blog4.jpg",
      category:
        "Ingredients",
      date:
        "April 22, 2026",
      description:
        "Understand the importance of quality ingredients in maintaining authentic flavor.",
    },

    {
      id: 5,
      title:
        "The Story Behind Varuthathu Co.",
      image:
        "/images/blogs/blog5.jpg",
      category:
        "Company",
      date:
        "April 18, 2026",
      description:
        "A closer look into the journey of building trusted Kerala snack products.",
    },

    {
      id: 6,
      title:
        "Top Kerala Snacks You Must Try",
      image:
        "/images/blogs/blog6.jpg",
      category:
        "Snacks",
      date:
        "April 10, 2026",
      description:
        "From banana chips to jackfruit chips, explore the top snacks Kerala is famous for.",
    },

  ];

  /* =========================
      STATES
  ========================== */

  const [
    searchTerm,
    setSearchTerm,
  ] = useState("");

  /* =========================
      FILTER BLOGS
  ========================== */

  const filteredBlogs =
    blogData.filter(
      (blog) =>
        blog.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        blog.category
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );

  return (

    // <div
    //   className="
    //     w-full
    //     bg-white
    //     min-h-screen
    //   "
    // >

    //   {/* =========================
    //       HERO SECTION
    //   ========================== */}

    //   <section
    //     className="
    //       relative
    //       w-full
    //       h-[450px]
    //       bg-cover
    //       bg-center
    //       flex
    //       items-center
    //       justify-center
    //     "
    //     style={{
    //       backgroundImage:
    //         `
    //           linear-gradient(
    //             rgba(0,0,0,0.55),
    //             rgba(0,0,0,0.55)
    //           ),
    //           url('/images/blog-banner.jpg')
    //         `,
    //     }}
    //   >

    //     <FadeAnimation>

    //       <div
    //         className="
    //           text-center
    //           text-white
    //           px-5
    //         "
    //       >

    //         <span
    //           className="
    //             inline-block
    //             bg-[#f7d046]
    //             text-black
    //             px-5
    //             py-2
    //             rounded-full
    //             text-sm
    //             font-bold
    //             mb-6
    //           "
    //         >

    //           Latest Articles

    //         </span>

    //         <h1
    //           className="
    //             text-5xl
    //             md:text-7xl
    //             font-bold
    //             mb-6
    //           "
    //         >

    //           Blogs & Stories

    //         </h1>

    //         <p
    //           className="
    //             max-w-3xl
    //             mx-auto
    //             text-lg
    //             md:text-xl
    //             text-gray-200
    //             leading-9
    //           "
    //         >

    //           Discover authentic Kerala
    //           snack stories, traditions,
    //           and food culture.

    //         </p>

    //       </div>

    //     </FadeAnimation>

    //   </section>

    //   {/* =========================
    //       SEARCH SECTION
    //   ========================== */}

    //   <section
    //     className="
    //       py-12
    //       px-5
    //       md:px-10
    //     "
    //   >

    //     <div
    //       className="
    //         max-w-7xl
    //         mx-auto
    //       "
    //     >

    //       <SearchBar
    //         placeholder="
    //           Search blogs by title or category...
    //         "
    //         value={
    //           searchTerm
    //         }
    //         onChange={(e) =>
    //           setSearchTerm(
    //             e.target.value
    //           )
    //         }
    //       />

    //     </div>

    //   </section>

    //   {/* =========================
    //       BLOG GRID
    //   ========================== */}

    //   <section
    //     className="
    //       pb-24
    //       px-5
    //       md:px-10
    //     "
    //   >

    //     <div
    //       className="
    //         max-w-7xl
    //         mx-auto
    //       "
    //     >

    //       {/* Empty State */}

    //       {filteredBlogs.length === 0 ? (

    //         <div
    //           className="
    //             py-20
    //           "
    //         >

    //           <EmptyState
    //             // icon={
    //             //   <FaNewspaper />
    //             // }
    //             title="
    //               No Blogs Found
    //             "
    //             description="
    //               Try searching with a different keyword.
    //             "
    //           />

    //         </div>

    //       ) : (

    //         <div
    //           className="
    //             grid
    //             grid-cols-1
    //             md:grid-cols-2
    //             lg:grid-cols-3
    //             gap-10
    //           "
    //         >

    //           {filteredBlogs.map(
    //             (
    //               blog,
    //               index
    //             ) => (

    //               <FadeAnimation
    //                 key={blog.id}
    //                 delay={
    //                   index * 0.1
    //                 }
    //               >

    //                 <BlogCard
    //                   blog={blog}
    //                 />

    //               </FadeAnimation>
    //             )
    //           )}

    //         </div>

    //       )}

    //     </div>

    //   </section>

    //   {/* =========================
    //       CTA SECTION
    //   ========================== */}

    //   <section
    //     className="
    //       py-24
    //       px-5
    //       md:px-10
    //       bg-[#fffdf4]
    //     "
    //   >

    //     <FadeAnimation>

    //       <div
    //         className="
    //           max-w-5xl
    //           mx-auto
    //           text-center
    //         "
    //       >

    //         <span
    //           className="
    //             inline-block
    //             bg-[#f7d046]
    //             text-black
    //             px-5
    //             py-2
    //             rounded-full
    //             text-sm
    //             font-bold
    //             mb-6
    //           "
    //         >

    //           Explore More

    //         </span>

    //         <h2
    //           className="
    //             text-4xl
    //             md:text-6xl
    //             font-bold
    //             text-[#1a1a1a]
    //             leading-tight
    //             mb-6
    //           "
    //         >

    //           Fresh Stories &
    //           Authentic Kerala Flavors

    //         </h2>

    //         <p
    //           className="
    //             max-w-3xl
    //             mx-auto
    //             text-gray-600
    //             text-lg
    //             leading-9
    //           "
    //         >

    //           Stay connected with the
    //           latest updates, snack stories,
    //           and traditional food culture
    //           from Kerala.

    //         </p>

    //       </div>

    //     </FadeAnimation>

    //   </section>

    // </div>

    <div className="blogs-page">

  {/* HERO SECTION */}

  <section
    className="blogs-hero"
    style={{
      backgroundImage: `
        linear-gradient(
          rgba(0,0,0,0.55),
          rgba(0,0,0,0.55)
        ),
        url('https://www.secondrecipe.com/wp-content/uploads/2021/10/ninja-air-fryer-banana-chips-645x900.jpg')
      `,
    }}
  >

    <FadeAnimation>

      <div className="blogs-hero-content">

        <span className="blogs-badge">

          Latest Articles

        </span>

        <h1 className="blogs-title">

          Blogs & Stories

        </h1>

        <p className="blogs-description">

          Discover authentic Kerala
          snack stories, traditions,
          and food culture.

        </p>

      </div>

    </FadeAnimation>

  </section>

  {/* SEARCH SECTION */}

  <section className="blogs-search-section">

    <div className="blogs-container">

      <SearchBar
        placeholder="
          Search blogs by title or category...
        "
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(
            e.target.value
          )
        }
      />

    </div>

  </section>

  {/* BLOG GRID */}

  <section className="blogs-grid-section">

    <div className="blogs-container">

      {filteredBlogs.length === 0 ? (

        <div className="blogs-empty">

          <EmptyState
            title="
              No Blogs Found
            "
            description="
              Try searching with a different keyword.
            "
          />

        </div>

      ) : (

        <div className="blogs-grid">

          {filteredBlogs.map(
            (blog, index) => (

              <FadeAnimation
                key={blog.id}
                delay={index * 0.1}
              >

                <BlogCard
                  blog={blog}
                />

              </FadeAnimation>
            )
          )}

        </div>

      )}

    </div>

  </section>

  {/* CTA SECTION */}

  <section className="blogs-cta-section">

    <FadeAnimation>

      <div className="blogs-cta-content">

        <span className="blogs-badge">

          Explore More

        </span>

        <h2 className="blogs-cta-title">

          Fresh Stories &
          Authentic Kerala Flavors

        </h2>

        <p className="blogs-cta-description">

          Stay connected with the
          latest updates, snack stories,
          and traditional food culture
          from Kerala.

        </p>

      </div>

    </FadeAnimation>

  </section>

</div>
  );
};

export default Blogs;