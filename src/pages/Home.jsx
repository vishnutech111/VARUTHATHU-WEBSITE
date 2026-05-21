// import React from "react";

// /* Components */
// import Hero from "../components/hero/Hero";
// import ProductList from "../components/products/ProductList";
// import BlogList from "../components/blogs/BlogList";

// import FadeAnimation from "../components/animations/FadeAnimation";
// import SlideAnimation from "../components/animations/SlideAnimation";

// import Button from "../components/common/Button";

// /* Icons */
// import {
//   FaLeaf,
//   FaShippingFast,
//   FaStar,
// } from "react-icons/fa";

// /* Images */
// // import AboutImage from "../assets/banners/about-banner.jpg";

// const Home = () => {

//   return (
//     <div className="w-full bg-white overflow-hidden">

//       {/* Hero */}
//       <Hero />

//       {/* Features Section */}
//       <section className="w-[90%] max-w-[1300px] mx-auto py-20">

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {/* Card 1 */}
//           <div
//             className="
//               bg-[#fffdf4]
//               rounded-3xl
//               p-10
//               text-center
//               transition
//               duration-300
//               hover:-translate-y-2
//               hover:shadow-2xl
//             "
//           >

//             <FaLeaf
//               className="
//                 text-5xl
//                 text-[#f7d046]
//                 mx-auto
//                 mb-5
//               "
//             />

//             <h3
//               className="
//                 text-2xl
//                 font-bold
//                 text-[#1a1a1a]
//                 mb-4
//               "
//             >
//               Real Ingredients
//             </h3>

//             <p
//               className="
//                 text-gray-600
//                 leading-8
//               "
//             >
//               Made using authentic ingredients
//               with no shortcuts or gimmicks.
//             </p>

//           </div>

//           {/* Card 2 */}
//           <div
//             className="
//               bg-[#fffdf4]
//               rounded-3xl
//               p-10
//               text-center
//               transition
//               duration-300
//               hover:-translate-y-2
//               hover:shadow-2xl
//             "
//           >

//             <FaShippingFast
//               className="
//                 text-5xl
//                 text-[#f7d046]
//                 mx-auto
//                 mb-5
//               "
//             />

//             <h3
//               className="
//                 text-2xl
//                 font-bold
//                 text-[#1a1a1a]
//                 mb-4
//               "
//             >
//               Fast Delivery
//             </h3>

//             <p
//               className="
//                 text-gray-600
//                 leading-8
//               "
//             >
//               Fresh Kerala snacks delivered
//               quickly across India.
//             </p>

//           </div>

//           {/* Card 3 */}
//           <div
//             className="
//               bg-[#fffdf4]
//               rounded-3xl
//               p-10
//               text-center
//               transition
//               duration-300
//               hover:-translate-y-2
//               hover:shadow-2xl
//             "
//           >

//             <FaStar
//               className="
//                 text-5xl
//                 text-[#f7d046]
//                 mx-auto
//                 mb-5
//               "
//             />

//             <h3
//               className="
//                 text-2xl
//                 font-bold
//                 text-[#1a1a1a]
//                 mb-4
//               "
//             >
//               Trusted Taste
//             </h3>

//             <p
//               className="
//                 text-gray-600
//                 leading-8
//               "
//             >
//               Consistent flavor customers
//               have loved for years.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* About Section */}
//       <section
//         className="
//           w-[90%]
//           max-w-[1300px]
//           mx-auto
//           py-20
//           grid
//           grid-cols-1
//           lg:grid-cols-2
//           gap-16
//           items-center
//         "
//       >

//         {/* Image */}
//         <SlideAnimation direction="left">

//           <div>

//             <img
//               // src={AboutImage}
//               alt="Varuthathu Co."
//               className="
//                 w-full
//                 rounded-[30px]
//                 object-cover
//               "
//             />

//           </div>

//         </SlideAnimation>

//         {/* Content */}
//         <SlideAnimation direction="right">

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
//               Our Story
//             </span>

//             <h2
//               className="
//                 text-4xl
//                 md:text-5xl
//                 font-bold
//                 text-[#1a1a1a]
//                 leading-tight
//                 mb-6
//               "
//             >
//               Just Snacks. Done Right.
//             </h2>

//             <p
//               className="
//                 text-gray-600
//                 leading-9
//                 mb-5
//               "
//             >
//               Varuthathu Co. started with a
//               taste people already trusted.
//               For years, these chips were loved
//               locally for one reason —
//               consistency.
//             </p>

//             <p
//               className="
//                 text-gray-600
//                 leading-9
//                 mb-8
//               "
//             >
//               No shortcuts. No gimmicks.
//               Just properly made snacks that
//               people kept coming back for.
//             </p>

//             <Button
//               text="Read Our Story"
//             />

//           </div>

//         </SlideAnimation>

//       </section>

//       {/* Products */}
//       <FadeAnimation>

//         <ProductList />

//       </FadeAnimation>

//       {/* Banner */}
//       <section
//         className="
//           relative
//           w-full
//           h-[500px]
//           my-24
//           bg-cover
//           bg-center
//           flex
//           items-center
//           justify-center
//         "
//         style={{
//           backgroundImage:
//             `
//               linear-gradient(
//                 rgba(0,0,0,0.55),
//                 rgba(0,0,0,0.55)
//               ),
//               url('/src/assets/banners/banner-bg.jpg')
//             `,
//         }}
//       >

//         <div
//           className="
//             text-center
//             text-white
//             w-[90%]
//             max-w-[700px]
//           "
//         >

//           <FadeAnimation>

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
//               Traditional Kerala Snacks
//             </span>

//             <h2
//               className="
//                 text-4xl
//                 md:text-6xl
//                 font-bold
//                 mb-5
//               "
//             >
//               Crispy. Fresh. Authentic.
//             </h2>

//             <p
//               className="
//                 text-lg
//                 leading-8
//                 mb-8
//                 text-gray-200
//               "
//             >
//               Experience the real taste of
//               Kerala chips made with care
//               and consistency.
//             </p>

//             <Button
//               text="Shop Now"
//             />

//           </FadeAnimation>

//         </div>

//       </section>

//       {/* Blogs */}
//       <FadeAnimation>

//         <BlogList />

//       </FadeAnimation>

//     </div>
//   );
// };

// export default Home;







import React from "react";

/* Components */
import Hero from "../components/hero/Hero";

import "./Home.css";

// import ProductList from "../components/products/ProductList";

import BlogList from "../components/blogs/BlogList";

import FadeAnimation from "../components/animations/FadeAnimation";

import SlideAnimation from "../components/animations/SlideAnimation";

import Button from "../components/common/Button";

/* Icons */
import {
  FaLeaf,
  FaShippingFast,
  FaStar,
} from "react-icons/fa";

const Home = () => {

  return (

    // <div
    //   className="
    //     w-full
    //     overflow-hidden
    //     bg-white
    //   "
    // >

    //   {/* =========================
    //       HERO SECTION
    //   ========================== */}

    //   <Hero />

    //   {/* =========================
    //       FEATURES SECTION
    //   ========================== */}

    //   <section
    //     className="
    //       py-20
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

    //       <div
    //         className="
    //           grid
    //           grid-cols-1
    //           md:grid-cols-2
    //           lg:grid-cols-3
    //           gap-8
    //         "
    //       >

    //         {/* Feature 1 */}

    //         <FadeAnimation>

    //           <div
    //             className="
    //               bg-[#fffdf4]
    //               rounded-3xl
    //               p-10
    //               text-center
    //               transition-all
    //               duration-300
    //               hover:-translate-y-2
    //               hover:shadow-2xl
    //             "
    //           >

    //             {/* <FaLeaf
    //               className="
    //                 text-5xl
    //                 text-[#f7d046]
    //                 mx-auto
    //                 mb-5
    //               "
    //             /> */}

    //             <h3
    //               className="
    //                 text-2xl
    //                 font-bold
    //                 text-[#1a1a1a]
    //                 mb-4
    //               "
    //             >

    //               Real Ingredients

    //             </h3>

    //             <p
    //               className="
    //                 text-gray-600
    //                 leading-8
    //               "
    //             >

    //               Made using authentic
    //               ingredients with no
    //               shortcuts or gimmicks.

    //             </p>

    //           </div>

    //         </FadeAnimation>

    //         {/* Feature 2 */}

    //         <FadeAnimation delay={0.2}>

    //           <div
    //             className="
    //               bg-[#fffdf4]
    //               rounded-3xl
    //               p-10
    //               text-center
    //               transition-all
    //               duration-300
    //               hover:-translate-y-2
    //               hover:shadow-2xl
    //             "
    //           >

    //             {/* <FaShippingFast
    //               className="
    //                 text-5xl
    //                 text-[#f7d046]
    //                 mx-auto
    //                 mb-5
    //               "
    //             /> */}

    //             <h3
    //               className="
    //                 text-2xl
    //                 font-bold
    //                 text-[#1a1a1a]
    //                 mb-4
    //               "
    //             >

    //               Fast Delivery

    //             </h3>

    //             <p
    //               className="
    //                 text-gray-600
    //                 leading-8
    //               "
    //             >

    //               Fresh Kerala snacks
    //               delivered quickly
    //               across India.

    //             </p>

    //           </div>

    //         </FadeAnimation>

    //         {/* Feature 3 */}

    //         <FadeAnimation delay={0.4}>

    //           <div
    //             className="
    //               bg-[#fffdf4]
    //               rounded-3xl
    //               p-10
    //               text-center
    //               transition-all
    //               duration-300
    //               hover:-translate-y-2
    //               hover:shadow-2xl
    //             "
    //           >

    //             {/* <FaStar
    //               className="
    //                 text-5xl
    //                 text-[#f7d046]
    //                 mx-auto
    //                 mb-5
    //               "
    //             /> */}

    //             <h3
    //               className="
    //                 text-2xl
    //                 font-bold
    //                 text-[#1a1a1a]
    //                 mb-4
    //               "
    //             >

    //               Trusted Taste

    //             </h3>

    //             <p
    //               className="
    //                 text-gray-600
    //                 leading-8
    //               "
    //             >

    //               Consistent flavor
    //               customers have loved
    //               for years.

    //             </p>

    //           </div>

    //         </FadeAnimation>

    //       </div>

    //     </div>

    //   </section>

    //   {/* =========================
    //       ABOUT SECTION
    //   ========================== */}

    //   <section
    //     className="
    //       py-20
    //       px-5
    //       md:px-10
    //     "
    //   >

    //     <div
    //       className="
    //         max-w-7xl
    //         mx-auto
    //         grid
    //         grid-cols-1
    //         lg:grid-cols-2
    //         gap-16
    //         items-center
    //       "
    //     >

    //       {/* Image */}

    //       <SlideAnimation direction="left">

    //         <div>

    //           <img
    //             src="/images/about.jpg"
    //             alt="Varuthathu"
    //             className="
    //               w-full
    //               h-full
    //               object-cover
    //               rounded-[30px]
    //               shadow-xl
    //             "
    //           />

    //         </div>

    //       </SlideAnimation>

    //       {/* Content */}

    //       <SlideAnimation direction="right">

    //         <div>

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

    //             Our Story

    //           </span>

    //           <h2
    //             className="
    //               text-4xl
    //               md:text-5xl
    //               font-bold
    //               text-[#1a1a1a]
    //               leading-tight
    //               mb-6
    //             "
    //           >

    //             Just Snacks.
    //             <br />
    //             Done Right.

    //           </h2>

    //           <p
    //             className="
    //               text-gray-600
    //               leading-9
    //               mb-5
    //             "
    //           >

    //             Varuthathu Co. started
    //             with a taste people
    //             already trusted.
    //             For years, these chips
    //             were loved locally for
    //             one reason —
    //             consistency.

    //           </p>

    //           <p
    //             className="
    //               text-gray-600
    //               leading-9
    //               mb-8
    //             "
    //           >

    //             No shortcuts.
    //             No gimmicks.
    //             Just properly made
    //             Kerala snacks that
    //             people keep coming
    //             back for.

    //           </p>

    //           <Button
    //             text="Read Our Story"
    //             to="/ourstory"
    //           />

    //         </div>

    //       </SlideAnimation>

    //     </div>

    //   </section>

    //   {/* =========================
    //       PRODUCTS SECTION
    //   ========================== */}

    //   <FadeAnimation>

    //     {/* <ProductList /> */}

    //   </FadeAnimation>

    //   {/* =========================
    //       BANNER SECTION
    //   ========================== */}

    //   <section
    //     className="
    //       relative
    //       w-full
    //       h-[500px]
    //       my-24
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
    //             rgba(0,0,0,0.6),
    //             rgba(0,0,0,0.6)
    //           ),
    //           url('/images/banner.jpg')
    //         `,
    //     }}
    //   >

    //     <div
    //       className="
    //         text-center
    //         text-white
    //         px-5
    //         max-w-3xl
    //       "
    //     >

    //       <FadeAnimation>

    //         <span
    //           className="
    //             inline-block
    //             bg-[#f7d046]
    //             text-[#1a1a1a]
    //             px-5
    //             py-2
    //             rounded-full
    //             text-sm
    //             font-bold
    //             mb-5
    //           "
    //         >

    //           Traditional Kerala Snacks

    //         </span>

    //         <h2
    //           className="
    //             text-4xl
    //             md:text-6xl
    //             font-bold
    //             leading-tight
    //             mb-6
    //           "
    //         >

    //           Crispy.
    //           Fresh.
    //           Authentic.

    //         </h2>

    //         <p
    //           className="
    //             text-lg
    //             text-gray-200
    //             leading-8
    //             mb-8
    //           "
    //         >

    //           Experience the real
    //           taste of Kerala chips
    //           made with care and
    //           consistency.

    //         </p>

    //         <Button
    //           text="Shop Now"
    //           to="/products"
    //         />

    //       </FadeAnimation>

    //     </div>

    //   </section>

    //   {/* =========================
    //       BLOG SECTION
    //   ========================== */}

    //   <FadeAnimation>

    //     <BlogList />

    //   </FadeAnimation>

    // </div>


    <div className="home-page">

  {/* HERO */}
  <Hero />

  {/* FEATURES SECTION */}

  <section className="features-section">

    <div className="home-container">

      <div className="features-grid">

        {/* Feature 1 */}

        <FadeAnimation>

          <div className="feature-card">
            

            <h3 className="feature-title">
              Real Ingredients
            </h3>

            <p className="feature-text">
              Made using authentic
              ingredients with no
              shortcuts or gimmicks.
            </p>

          </div>

        </FadeAnimation>

        {/* Feature 2 */}

        <FadeAnimation delay={0.2}>

          <div className="feature-card">

            <h3 className="feature-title">
              Fast Delivery
            </h3>

            <p className="feature-text">
              Fresh Kerala snacks
              delivered quickly
              across India.
            </p>

          </div>

        </FadeAnimation>

        {/* Feature 3 */}

        <FadeAnimation delay={0.4}>

          <div className="feature-card">

            <h3 className="feature-title">
              Trusted Taste
            </h3>

            <p className="feature-text">
              Consistent flavor
              customers have loved
              for years.
            </p>

          </div>

        </FadeAnimation>

      </div>

    </div>

  </section>

  {/* ABOUT SECTION */}

  <section className="about-section">

    <div className="home-container about-grid">

      {/* IMAGE */}

      <SlideAnimation direction="left">

        <div className="about-image-wrapper">

          <img
            src="https://static.wixstatic.com/media/447f10_ea11867a95834f729892d2606ef3c1f3~mv2.webp/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/447f10_ea11867a95834f729892d2606ef3c1f3~mv2.webp"
            alt="Varuthathu"
            className="about-image"
          />

        </div>

      </SlideAnimation>

      {/* CONTENT */}

      <SlideAnimation direction="right">

        <div className="about-content">

          <span className="home-badge">
            Our Story
          </span>

          <h2 className="about-title">

            Just Snacks.
            <br />
            Done Right.

          </h2>

          <p className="about-text">

            Varuthathu Co. started
            with a taste people
            already trusted.
            For years, these chips
            were loved locally for
            one reason —
            consistency.

          </p>

          <p className="about-text">

            No shortcuts.
            No gimmicks.
            Just properly made
            Kerala snacks that
            people keep coming
            back for.

          </p>

          <Button
            text="Read Our Story"
            to="/ourstory"
          />

        </div>

      </SlideAnimation>

    </div>

  </section>

  {/* BANNER */}

  <section
    className="home-banner"
    style={{
      backgroundImage: `
        linear-gradient(
          rgba(0,0,0,0.6),
          rgba(0,0,0,0.6)
        ),
        url('https://thumbs.dreamstime.com/b/stock-photo-healthy-homemade-kela-banana-chips-wafers-plantain-chips-selective-focus-kela-banana-fried-chips-101713586.jpg')
      `,
    }}
  >

    <div className="banner-content">

      <FadeAnimation>

        <span className="home-badge">

          Traditional Kerala Snacks

        </span>

        <h2 className="banner-title">

          Crispy.
          Fresh.
          Authentic.

        </h2>

        <p className="banner-text">

          Experience the real
          taste of Kerala chips
          made with care and
          consistency.

        </p>

        <Button
          text="Shop Now"
          to="/products"
        />

      </FadeAnimation>

    </div>

  </section>

  {/* BLOGS */}

  <FadeAnimation>

    <BlogList />

  </FadeAnimation>

</div>
  );
};

export default Home;



