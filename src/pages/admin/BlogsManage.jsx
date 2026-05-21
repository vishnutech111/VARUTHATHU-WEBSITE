// import React, { useState } from "react";

// /* Components */
// import FadeAnimation from "../../components/animations/FadeAnimation";

// import BlogList from "../../components/blogs/BlogList";

// import SearchBar from "../../components/common/SearchBar";

// import Modal from "../../components/common/Modal";

// import Button from "../../components/common/Button";

// /* Icons */
// import {
//   FaBlog,
//   FaPlus,
//   FaEdit,
//   FaTrash,
//   FaImage,
// } from "react-icons/fa";

// const BlogsManage = () => {

//   const [isModalOpen, setIsModalOpen] =
//     useState(false);

//   const [blogData, setBlogData] =
//     useState({
//       title: "",
//       category: "",
//       image: null,
//       content: "",
//     });

//   /* Handle Change */
//   const handleChange = (e) => {

//     const {
//       name,
//       value,
//       files,
//     } = e.target;

//     setBlogData({
//       ...blogData,
//       [name]:
//         files
//           ? files[0]
//           : value,
//     });
//   };

//   /* Submit */
//   const handleSubmit = (e) => {

//     e.preventDefault();

//     console.log(blogData);

//     setIsModalOpen(false);
//   };

//   return (
//     <div
//       className="
//         w-full
//         min-h-screen
//         bg-[#f9fafb]
//         p-6
//         lg:p-10
//       "
//     >

//       {/* Header */}
//       <FadeAnimation>

//         <div
//           className="
//             flex
//             flex-col
//             lg:flex-row
//             lg:items-center
//             lg:justify-between
//             gap-6
//             mb-10
//           "
//         >

//           {/* Left */}
//           <div>

//             <span
//               className="
//                 inline-block
//                 bg-[#f7d046]
//                 text-[#1a1a1a]
//                 px-5
//                 py-2
//                 rounded-full
//                 text-sm
//                 font-bold
//                 mb-5
//               "
//             >
//               Admin Panel
//             </span>

//             <h1
//               className="
//                 text-4xl
//                 font-bold
//                 text-[#1a1a1a]
//                 mb-4
//               "
//             >
//               Manage Blogs
//             </h1>

//             <p
//               className="
//                 text-gray-600
//                 leading-8
//               "
//             >
//               Create, edit, and manage
//               blog posts for Varuthathu Co.
//             </p>

//           </div>

//           {/* Search */}
//           <div
//             className="
//               w-full
//               lg:w-[350px]
//             "
//           >

//             <SearchBar
//               placeholder="
//                 Search blogs...
//               "
//             />

//           </div>

//         </div>

//       </FadeAnimation>

//       {/* Top Actions */}
//       <FadeAnimation delay={0.2}>

//         <div
//           className="
//             flex
//             flex-col
//             md:flex-row
//             md:items-center
//             md:justify-between
//             gap-5
//             mb-10
//           "
//         >

//           {/* Stats */}
//           <div
//             className="
//               flex
//               items-center
//               gap-5
//               bg-white
//               rounded-[25px]
//               p-6
//               shadow-md
//             "
//           >

//             <div
//               className="
//                 w-16
//                 h-16
//                 rounded-full
//                 bg-[#f7d046]
//                 flex
//                 items-center
//                 justify-center
//               "
//             >

//               <FaBlog
//                 className="
//                   text-3xl
//                   text-[#1a1a1a]
//                 "
//               />

//             </div>

//             <div>

//               <h2
//                 className="
//                   text-3xl
//                   font-bold
//                   text-[#1a1a1a]
//                 "
//               >
//                 18
//               </h2>

//               <p
//                 className="
//                   text-gray-600
//                 "
//               >
//                 Total Blogs
//               </p>

//             </div>

//           </div>

//           {/* Add Blog Button */}
//           <button
//             onClick={() =>
//               setIsModalOpen(true)
//             }
//             className="
//               flex
//               items-center
//               gap-3
//               bg-[#f7d046]
//               hover:bg-yellow-400
//               text-[#1a1a1a]
//               font-semibold
//               px-8
//               py-4
//               rounded-full
//               transition
//             "
//           >

//             <FaPlus />

//             Add New Blog

//           </button>

//         </div>

//       </FadeAnimation>

//       {/* Blog List */}
//       <FadeAnimation delay={0.4}>

//         <div
//           className="
//             bg-white
//             rounded-[30px]
//             shadow-md
//             p-6
//           "
//         >

//           {/* Heading */}
//           <div
//             className="
//               flex
//               flex-col
//               md:flex-row
//               md:items-center
//               md:justify-between
//               gap-5
//               mb-8
//             "
//           >

//             <div>

//               <h2
//                 className="
//                   text-2xl
//                   font-bold
//                   text-[#1a1a1a]
//                   mb-2
//                 "
//               >
//                 Blog Posts
//               </h2>

//               <p
//                 className="
//                   text-gray-600
//                 "
//               >
//                 Manage all published blogs
//                 and articles.
//               </p>

//             </div>

//             {/* Action Buttons */}
//             <div
//               className="
//                 flex
//                 items-center
//                 gap-4
//               "
//             >

//               <button
//                 className="
//                   flex
//                   items-center
//                   gap-2
//                   border
//                   border-gray-300
//                   px-5
//                   py-3
//                   rounded-full
//                   hover:bg-gray-100
//                   transition
//                 "
//               >

//                 <FaEdit />

//                 Edit

//               </button>

//               <button
//                 className="
//                   flex
//                   items-center
//                   gap-2
//                   border
//                   border-red-300
//                   text-red-500
//                   px-5
//                   py-3
//                   rounded-full
//                   hover:bg-red-50
//                   transition
//                 "
//               >

//                 <FaTrash />

//                 Delete

//               </button>

//             </div>

//           </div>

//           {/* Blog Component */}
//           <BlogList />

//         </div>

//       </FadeAnimation>

//       {/* Modal */}
//       {isModalOpen && (

//         <Modal
//           isOpen={isModalOpen}
//           onClose={() =>
//             setIsModalOpen(false)
//           }
//         >

//           <div
//             className="
//               p-2
//             "
//           >

//             {/* Title */}
//             <div className="mb-8">

//               <h2
//                 className="
//                   text-3xl
//                   font-bold
//                   text-[#1a1a1a]
//                   mb-3
//                 "
//               >
//                 Create Blog
//               </h2>

//               <p
//                 className="
//                   text-gray-600
//                 "
//               >
//                 Add a new blog article.
//               </p>

//             </div>

//             {/* Form */}
//             <form
//               onSubmit={handleSubmit}
//               className="space-y-6"
//             >

//               {/* Title */}
//               <div>

//                 <label
//                   className="
//                     block
//                     text-sm
//                     font-semibold
//                     text-[#1a1a1a]
//                     mb-3
//                   "
//                 >
//                   Blog Title
//                 </label>

//                 <input
//                   type="text"
//                   name="title"
//                   value={blogData.title}
//                   onChange={handleChange}
//                   placeholder="Enter blog title"
//                   required
//                   className="
//                     w-full
//                     h-[60px]
//                     px-5
//                     rounded-2xl
//                     border
//                     border-gray-200
//                     outline-none
//                     focus:border-[#f7d046]
//                     focus:ring-4
//                     focus:ring-yellow-100
//                   "
//                 />

//               </div>

//               {/* Category */}
//               <div>

//                 <label
//                   className="
//                     block
//                     text-sm
//                     font-semibold
//                     text-[#1a1a1a]
//                     mb-3
//                   "
//                 >
//                   Category
//                 </label>

//                 <select
//                   name="category"
//                   value={blogData.category}
//                   onChange={handleChange}
//                   required
//                   className="
//                     w-full
//                     h-[60px]
//                     px-5
//                     rounded-2xl
//                     border
//                     border-gray-200
//                     bg-white
//                     outline-none
//                     focus:border-[#f7d046]
//                     focus:ring-4
//                     focus:ring-yellow-100
//                   "
//                 >

//                   <option value="">
//                     Select Category
//                   </option>

//                   <option value="recipes">
//                     Recipes
//                   </option>

//                   <option value="snacks">
//                     Snacks
//                   </option>

//                   <option value="tradition">
//                     Tradition
//                   </option>

//                   <option value="updates">
//                     Updates
//                   </option>

//                 </select>

//               </div>

//               {/* Image Upload */}
//               <div>

//                 <label
//                   className="
//                     flex
//                     items-center
//                     gap-3
//                     text-sm
//                     font-semibold
//                     text-[#1a1a1a]
//                     mb-4
//                   "
//                 >

//                   <FaImage
//                     className="
//                       text-[#f7d046]
//                     "
//                   />

//                   Blog Image

//                 </label>

//                 <label
//                   className="
//                     w-full
//                     border-2
//                     border-dashed
//                     border-gray-300
//                     rounded-[25px]
//                     p-8
//                     flex
//                     flex-col
//                     items-center
//                     justify-center
//                     text-center
//                     cursor-pointer
//                     hover:border-[#f7d046]
//                     hover:bg-[#fffdf4]
//                     transition
//                   "
//                 >

//                   <FaImage
//                     className="
//                       text-5xl
//                       text-[#f7d046]
//                       mb-4
//                     "
//                   />

//                   <p
//                     className="
//                       text-gray-600
//                     "
//                   >
//                     Upload blog cover image
//                   </p>

//                   <input
//                     type="file"
//                     name="image"
//                     accept="image/*"
//                     hidden
//                     onChange={handleChange}
//                   />

//                 </label>

//               </div>

//               {/* Content */}
//               <div>

//                 <label
//                   className="
//                     block
//                     text-sm
//                     font-semibold
//                     text-[#1a1a1a]
//                     mb-3
//                   "
//                 >
//                   Blog Content
//                 </label>

//                 <textarea
//                   rows="6"
//                   name="content"
//                   value={blogData.content}
//                   onChange={handleChange}
//                   placeholder="
//                     Write blog content...
//                   "
//                   required
//                   className="
//                     w-full
//                     px-5
//                     py-4
//                     rounded-2xl
//                     border
//                     border-gray-200
//                     outline-none
//                     resize-none
//                     focus:border-[#f7d046]
//                     focus:ring-4
//                     focus:ring-yellow-100
//                   "
//                 />

//               </div>

//               {/* Button */}
//               <Button
//                 type="submit"
//                 text="Publish Blog"
//                 fullWidth={true}
//               />

//             </form>

//           </div>

//         </Modal>

//       )}

//     </div>
//   );
// };

// export default BlogsManage;




import React, {
  useState,
} from "react";

/* Components */
import FadeAnimation from "../../components/animations/FadeAnimation";

import SearchBar from "../../components/common/SearchBar";

import EmptyState from "../../components/common/EmptyState";

import Button from "../../components/common/Button";

/* Icons */
import {
  FaBlog,
  FaPlus,
  FaEdit,
  FaTrash,
  FaCalendarAlt,
  FaUser,
  FaSearch,
} from "react-icons/fa";

const BlogsManage = () => {

  /* =========================
      DUMMY BLOGS
  ========================== */

  const blogsData = [

    {
      id: 1,
      title:
        "Why Kerala Banana Chips Are Special",
      author: "Admin",
      date: "18 May 2026",
      category: "Snacks",
      image:
        "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      title:
        "Traditional Kerala Snack Recipes",
      author: "Vishnu",
      date: "15 May 2026",
      category: "Recipes",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      title:
        "Best Tea Time Snacks In Kerala",
      author: "Admin",
      date: "12 May 2026",
      category: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop",
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
    blogsData.filter(
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

    <div
      className="
        w-full
        min-h-screen
      "
    >

      {/* =========================
          PAGE HEADER
      ========================== */}

      <FadeAnimation>

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-8
            mb-12
          "
        >

          {/* Left */}

          <div>

            <span
              className="
                inline-block
                bg-[#f7d046]
                text-black
                px-5
                py-2
                rounded-full
                text-sm
                font-bold
                mb-5
              "
            >

              Blog Management

            </span>

            <h1
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-[#1a1a1a]
                mb-4
              "
            >

              Manage Blogs

            </h1>

            <p
              className="
                text-gray-600
                text-lg
                leading-8
                max-w-3xl
              "
            >

              Create, update, and
              manage blog articles
              for your website.

            </p>

          </div>

          {/* Add Blog Button */}

          <div>

            <Button
              text="Add New Blog"
              icon={<FaPlus />}
            />

          </div>

        </div>

      </FadeAnimation>

      {/* =========================
          SEARCH BAR
      ========================== */}

      <FadeAnimation delay={0.2}>

        <div
          className="
            mb-10
          "
        >

          <SearchBar
            placeholder="
              Search blogs by title or category...
            "
            value={
              searchTerm
            }
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
            icon={
              <FaSearch />
            }
          />

        </div>

      </FadeAnimation>

      {/* =========================
          BLOG LIST
      ========================== */}

      <FadeAnimation delay={0.3}>

        {filteredBlogs.length === 0 ? (

          <div
            className="
              bg-white
              rounded-[35px]
              shadow-md
              py-24
            "
          >

            <EmptyState
              icon={
                <FaBlog />
              }
              title="
                No Blogs Found
              "
              description="
                Try searching with another keyword.
              "
            />

          </div>

        ) : (

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-8
            "
          >

            {filteredBlogs.map(
              (blog) => (

                <div
                  key={blog.id}
                  className="
                    bg-white
                    rounded-[35px]
                    overflow-hidden
                    shadow-md
                    hover:-translate-y-2
                    transition
                    duration-300
                  "
                >

                  {/* IMAGE */}

                  <div
                    className="
                      relative
                      h-[250px]
                      overflow-hidden
                    "
                  >

                    <img
                      src={
                        blog.image
                      }
                      alt={
                        blog.title
                      }
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />

                    {/* Category */}

                    <span
                      className="
                        absolute
                        top-5
                        left-5
                        bg-[#f7d046]
                        text-black
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-semibold
                      "
                    >

                      {blog.category}

                    </span>

                  </div>

                  {/* CONTENT */}

                  <div
                    className="
                      p-8
                    "
                  >

                    {/* Meta */}

                    <div
                      className="
                        flex
                        items-center
                        flex-wrap
                        gap-5
                        text-gray-500
                        text-sm
                        mb-5
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                        "
                      >

                        <FaUser />

                        {blog.author}

                      </div>

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                        "
                      >

                        <FaCalendarAlt />

                        {blog.date}

                      </div>

                    </div>

                    {/* Title */}

                    <h2
                      className="
                        text-2xl
                        font-bold
                        text-[#1a1a1a]
                        leading-snug
                        mb-8
                      "
                    >

                      {blog.title}

                    </h2>

                    {/* ACTIONS */}

                    <div
                      className="
                        flex
                        items-center
                        gap-4
                      "
                    >

                      {/* Edit */}

                      <button
                        className="
                          flex-1
                          bg-blue-100
                          hover:bg-blue-200
                          text-blue-700
                          py-3
                          rounded-2xl
                          font-semibold
                          flex
                          items-center
                          justify-center
                          gap-3
                          transition
                          duration-300
                        "
                      >

                        <FaEdit />

                        Edit

                      </button>

                      {/* Delete */}

                      <button
                        className="
                          flex-1
                          bg-red-100
                          hover:bg-red-200
                          text-red-700
                          py-3
                          rounded-2xl
                          font-semibold
                          flex
                          items-center
                          justify-center
                          gap-3
                          transition
                          duration-300
                        "
                      >

                        <FaTrash />

                        Delete

                      </button>

                    </div>

                  </div>

                </div>
              )
            )}

          </div>

        )}

      </FadeAnimation>

    </div>
  );
};

export default BlogsManage;