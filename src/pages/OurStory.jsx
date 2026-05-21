// import React from "react";

// /* Components */
// import FadeAnimation from "../components/animations/FadeAnimation";

// import SlideAnimation from "../components/animations/SlideAnimation";

// import Button from "../components/common/Button";

// /* Icons */
// import {
//   FaLeaf,
//   FaAward,
//   FaHeart,
// } from "react-icons/fa";

// /* Images */
// // import StoryImage from "../assets/banners/about-banner.jpg";
// // import ChipsImage from "../assets/banners/banner-bg.jpg";

// const OurStory = () => {

//   return (
//     <div className="w-full bg-white overflow-hidden">

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
//             Just Snacks.
//             <br />
//             Done Right.
//           </h1>

//           <p
//             className="
//               max-w-3xl
//               mx-auto
//               text-gray-600
//               leading-9
//               text-lg
//             "
//           >
//             Varuthathu Co. started with a
//             taste people already trusted.
//             Built around tradition,
//             consistency, and authentic
//             Kerala snacks loved for years.
//           </p>

//         </FadeAnimation>

//       </section>

//       {/* Story Section */}
//       <section
//         className="
//           w-[90%]
//           max-w-[1300px]
//           mx-auto
//           py-24
//           grid
//           grid-cols-1
//           lg:grid-cols-2
//           gap-16
//           items-center
//         "
//       >

//         {/* Left */}
//         <SlideAnimation direction="left">

//           <div>

//             <img
//               // src={""}
//               alt="Varuthathu Story"
//               className="
//                 w-full
//                 rounded-[30px]
//                 object-cover
//                 shadow-xl
//               "
//             />

//           </div>

//         </SlideAnimation>

//         {/* Right */}
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
//               Authentic Taste
//             </span>

//             <h2
//               className="
//                 text-4xl
//                 md:text-5xl
//                 font-bold
//                 text-[#1a1a1a]
//                 leading-tight
//                 mb-8
//               "
//             >
//               Built Around A
//               Trusted Recipe
//             </h2>

//             <div
//               className="
//                 space-y-6
//                 text-gray-600
//                 leading-9
//               "
//             >

//               <p>
//                 It didn’t start in a
//                 boardroom. It started with a
//                 recipe people already knew.
//               </p>

//               <p>
//                 For years, these chips were
//                 loved locally for one reason
//                 — consistency. No shortcuts.
//                 No gimmicks. Just properly
//                 made snacks that people kept
//                 coming back for.
//               </p>

//               <p>
//                 We didn’t reinvent the
//                 product. We built around it.
//                 Took something already loved
//                 and gave it the structure it
//                 deserved.
//               </p>

//               <p>
//                 Still simple. Still honest.
//                 Still made to be enjoyed.
//               </p>

//             </div>

//             <div className="mt-10">

//               <Button
//                 text="Explore Products"
//               />

//             </div>

//           </div>

//         </SlideAnimation>

//       </section>

//       {/* Features */}
//       <section
//         className="
//           w-[90%]
//           max-w-[1300px]
//           mx-auto
//           py-10
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

//           {/* Feature 1 */}
//           <FadeAnimation>

//             <div
//               className="
//                 bg-[#fffdf4]
//                 p-10
//                 rounded-[30px]
//                 text-center
//                 hover:shadow-2xl
//                 transition
//                 duration-300
//               "
//             >

//               <div
//                 className="
//                   w-20
//                   h-20
//                   mx-auto
//                   mb-6
//                   rounded-full
//                   bg-[#f7d046]
//                   flex
//                   items-center
//                   justify-center
//                 "
//               >

//                 <FaLeaf
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
//                 Real Ingredients
//               </h3>

//               <p
//                 className="
//                   text-gray-600
//                   leading-8
//                 "
//               >
//                 Carefully selected ingredients
//                 with no shortcuts or
//                 unnecessary additives.
//               </p>

//             </div>

//           </FadeAnimation>

//           {/* Feature 2 */}
//           <FadeAnimation delay={0.2}>

//             <div
//               className="
//                 bg-[#fffdf4]
//                 p-10
//                 rounded-[30px]
//                 text-center
//                 hover:shadow-2xl
//                 transition
//                 duration-300
//               "
//             >

//               <div
//                 className="
//                   w-20
//                   h-20
//                   mx-auto
//                   mb-6
//                   rounded-full
//                   bg-[#f7d046]
//                   flex
//                   items-center
//                   justify-center
//                 "
//               >

//                 <FaAward
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
//                 Consistent Quality
//               </h3>

//               <p
//                 className="
//                   text-gray-600
//                   leading-8
//                 "
//               >
//                 Every batch is made with
//                 care to maintain the same
//                 trusted taste every time.
//               </p>

//             </div>

//           </FadeAnimation>

//           {/* Feature 3 */}
//           <FadeAnimation delay={0.4}>

//             <div
//               className="
//                 bg-[#fffdf4]
//                 p-10
//                 rounded-[30px]
//                 text-center
//                 hover:shadow-2xl
//                 transition
//                 duration-300
//               "
//             >

//               <div
//                 className="
//                   w-20
//                   h-20
//                   mx-auto
//                   mb-6
//                   rounded-full
//                   bg-[#f7d046]
//                   flex
//                   items-center
//                   justify-center
//                 "
//               >

//                 <FaHeart
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
//                 Made To Be Enjoyed
//               </h3>

//               <p
//                 className="
//                   text-gray-600
//                   leading-8
//                 "
//               >
//                 Snacks don’t need gimmicks.
//                 They just need to be done
//                 right and enjoyed together.
//               </p>

//             </div>

//           </FadeAnimation>

//         </div>

//       </section>

//       {/* Banner */}
//       <section
//         className="
//           relative
//           w-full
//           h-[500px]
//           mt-24
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
//               url(${""})
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
//               Varuthathu Co.
//             </span>

//             <h2
//               className="
//                 text-4xl
//                 md:text-6xl
//                 font-bold
//                 mb-6
//               "
//             >
//               Traditional Kerala
//               Snacks
//             </h2>

//             <p
//               className="
//                 text-lg
//                 text-gray-200
//                 leading-8
//                 mb-8
//               "
//             >
//               Still simple. Still honest.
//               Still made to be enjoyed.
//             </p>

//             <Button
//               text="Shop Now"
//             />

//           </FadeAnimation>

//         </div>

//       </section>

//     </div>
//   );
// };

// export default OurStory;


import React from "react";

/* Components */
import FadeAnimation from "../components/animations/FadeAnimation";

import SlideAnimation from "../components/animations/SlideAnimation";

import Button from "../components/common/Button";

import "./OurStory.css";

/* Icons */
// import {
//   FaLeaf,
//   FaUsers,
//   FaAward,
//   FaShippingFast,
// } from "react-icons/fa";

const OurStory = () => {

  return (

//     <div
//       className="
//         w-full
//         bg-white
//         overflow-hidden
//       "
//     >

//       {/* =========================
//           HERO SECTION
//       ========================== */}

//       <section
//         className="
//           relative
//           w-full
//           h-[500px]
//           flex
//           items-center
//           justify-center
//           bg-cover
//           bg-center
//         "
//         style={{
//           backgroundImage:
//             `
//               linear-gradient(
//                 rgba(0,0,0,0.55),
//                 rgba(0,0,0,0.55)
//               ),
//               url('/images/story-banner.jpg')
//             `,
//         }}
//       >

//         <FadeAnimation>

//           <div
//             className="
//               text-center
//               text-white
//               px-5
//             "
//           >

//             <span
//               className="
//                 inline-block
//                 bg-[#f7d046]
//                 text-black
//                 px-5
//                 py-2
//                 rounded-full
//                 text-sm
//                 font-bold
//                 mb-6
//               "
//             >

//               Our Journey

//             </span>

//             <h1
//               className="
//                 text-5xl
//                 md:text-7xl
//                 font-bold
//                 mb-6
//               "
//             >

//               Our Story

//             </h1>

//             <p
//               className="
//                 max-w-3xl
//                 mx-auto
//                 text-lg
//                 md:text-xl
//                 leading-9
//                 text-gray-200
//               "
//             >

//               A story built on authentic
//               Kerala flavors, consistency,
//               and traditional snack making.

//             </p>

//           </div>

//         </FadeAnimation>

//       </section>

//       {/* =========================
//           STORY SECTION
//       ========================== */}

//       <section
//         className="
//           py-24
//           px-5
//           md:px-10
//         "
//       >

//         <div
//           className="
//             max-w-7xl
//             mx-auto
//             grid
//             grid-cols-1
//             lg:grid-cols-2
//             gap-16
//             items-center
//           "
//         >

//           {/* Image */}

//           <SlideAnimation direction="left">

//             <div>

//               <img
//                 src="/images/about.jpg"
//                 alt="Varuthathu Story"
//                 className="
//                   w-full
//                   rounded-[30px]
//                   object-cover
//                   shadow-2xl
//                 "
//               />

//             </div>

//           </SlideAnimation>

//           {/* Content */}

//           <SlideAnimation direction="right">

//             <div>

//               <span
//                 className="
//                   inline-block
//                   bg-[#f7d046]
//                   text-black
//                   px-5
//                   py-2
//                   rounded-full
//                   text-sm
//                   font-bold
//                   mb-6
//                 "
//               >

//                 Traditional Taste

//               </span>

//               <h2
//                 className="
//                   text-4xl
//                   md:text-5xl
//                   font-bold
//                   text-[#1a1a1a]
//                   leading-tight
//                   mb-8
//                 "
//               >

//                 Snacks That Feel
//                 Like Home

//               </h2>

//               <p
//                 className="
//                   text-gray-600
//                   leading-9
//                   mb-6
//                   text-lg
//                 "
//               >

//                 Varuthathu Co. started
//                 with one simple goal —
//                 creating authentic Kerala
//                 snacks using real ingredients
//                 and traditional preparation
//                 methods.

//               </p>

//               <p
//                 className="
//                   text-gray-600
//                   leading-9
//                   mb-6
//                   text-lg
//                 "
//               >

//                 Over the years, our snacks
//                 became loved for their
//                 consistency, freshness,
//                 and real homemade flavor.

//               </p>

//               <p
//                 className="
//                   text-gray-600
//                   leading-9
//                   mb-10
//                   text-lg
//                 "
//               >

//                 We believe good food
//                 does not need shortcuts.
//                 Every product is made
//                 carefully to deliver the
//                 same trusted taste every time.

//               </p>

//               <Button
//                 text="Shop Products"
//                 to="/products"
//               />

//             </div>

//           </SlideAnimation>

//         </div>

//       </section>

//       {/* =========================
//           VALUES SECTION
//       ========================== */}

//       <section
//         className="
//           bg-[#fffdf4]
//           py-24
//           px-5
//           md:px-10
//         "
//       >

//         <div
//           className="
//             max-w-7xl
//             mx-auto
//           "
//         >

//           {/* Heading */}

//           <FadeAnimation>

//             <div
//               className="
//                 text-center
//                 mb-16
//               "
//             >

//               <span
//                 className="
//                   inline-block
//                   bg-[#f7d046]
//                   text-black
//                   px-5
//                   py-2
//                   rounded-full
//                   text-sm
//                   font-bold
//                   mb-5
//                 "
//               >

//                 Why Choose Us

//               </span>

//               <h2
//                 className="
//                   text-4xl
//                   md:text-5xl
//                   font-bold
//                   text-[#1a1a1a]
//                   mb-5
//                 "
//               >

//                 What Makes Us Different

//               </h2>

//               <p
//                 className="
//                   max-w-3xl
//                   mx-auto
//                   text-gray-600
//                   leading-8
//                   text-lg
//                 "
//               >

//                 We focus on quality,
//                 consistency, and authentic
//                 Kerala snack experiences.

//               </p>

//             </div>

//           </FadeAnimation>

//           {/* Cards */}

//           <div
//             className="
//               grid
//               grid-cols-1
//               md:grid-cols-2
//               lg:grid-cols-4
//               gap-8
//             "
//           >

//             {/* Card 1 */}

//             <FadeAnimation>

//               <div
//                 className="
//                   bg-white
//                   rounded-3xl
//                   p-8
//                   text-center
//                   shadow-md
//                   hover:-translate-y-2
//                   transition
//                   duration-300
//                 "
//               >

//                 {/* <FaLeaf
//                   className="
//                     text-5xl
//                     text-[#f7d046]
//                     mx-auto
//                     mb-5
//                   "
//                 /> */}

//                 <h3
//                   className="
//                     text-2xl
//                     font-bold
//                     mb-4
//                     text-[#1a1a1a]
//                   "
//                 >

//                   Fresh Ingredients

//                 </h3>

//                 <p
//                   className="
//                     text-gray-600
//                     leading-8
//                   "
//                 >

//                   Real ingredients
//                   with no unnecessary
//                   shortcuts.

//                 </p>

//               </div>

//             </FadeAnimation>

//             {/* Card 2 */}

//             <FadeAnimation delay={0.2}>

//               <div
//                 className="
//                   bg-white
//                   rounded-3xl
//                   p-8
//                   text-center
//                   shadow-md
//                   hover:-translate-y-2
//                   transition
//                   duration-300
//                 "
//               >

//                 {/* <FaUsers
//                   className="
//                     text-5xl
//                     text-[#f7d046]
//                     mx-auto
//                     mb-5
//                   "
//                 /> */}

//                 <h3
//                   className="
//                     text-2xl
//                     font-bold
//                     mb-4
//                     text-[#1a1a1a]
//                   "
//                 >

//                   Trusted By Families

//                 </h3>

//                 <p
//                   className="
//                     text-gray-600
//                     leading-8
//                   "
//                 >

//                   Loved by customers
//                   who value authentic
//                   taste.

//                 </p>

//               </div>

//             </FadeAnimation>

//             {/* Card 3 */}

//             <FadeAnimation delay={0.4}>

//               <div
//                 className="
//                   bg-white
//                   rounded-3xl
//                   p-8
//                   text-center
//                   shadow-md
//                   hover:-translate-y-2
//                   transition
//                   duration-300
//                 "
//               >

//                 {/* <FaAward
//                   className="
//                     text-5xl
//                     text-[#f7d046]
//                     mx-auto
//                     mb-5
//                   "
//                 /> */}

//                 <h3
//                   className="
//                     text-2xl
//                     font-bold
//                     mb-4
//                     text-[#1a1a1a]
//                   "
//                 >

//                   Quality Focused

//                 </h3>

//                 <p
//                   className="
//                     text-gray-600
//                     leading-8
//                   "
//                 >

//                   Every batch is
//                   prepared carefully
//                   for consistency.

//                 </p>

//               </div>

//             </FadeAnimation>

//             {/* Card 4 */}

//             <FadeAnimation delay={0.6}>

//               <div
//                 className="
//                   bg-white
//                   rounded-3xl
//                   p-8
//                   text-center
//                   shadow-md
//                   hover:-translate-y-2
//                   transition
//                   duration-300
//                 "
//               >
// {/* 
//                 <FaShippingFast
//                   className="
//                     text-5xl
//                     text-[#f7d046]
//                     mx-auto
//                     mb-5
//                   "
//                 /> */}

//                 <h3
//                   className="
//                     text-2xl
//                     font-bold
//                     mb-4
//                     text-[#1a1a1a]
//                   "
//                 >

//                   Fast Delivery

//                 </h3>

//                 <p
//                   className="
//                     text-gray-600
//                     leading-8
//                   "
//                 >

//                   Fresh snacks delivered
//                   safely across India.

//                 </p>

//               </div>

//             </FadeAnimation>

//           </div>

//         </div>

//       </section>

//       {/* =========================
//           CTA SECTION
//       ========================== */}

//       <section
//         className="
//           py-24
//           px-5
//           md:px-10
//         "
//       >

//         <FadeAnimation>

//           <div
//             className="
//               max-w-5xl
//               mx-auto
//               bg-[#1a1a1a]
//               rounded-[40px]
//               p-10
//               md:p-16
//               text-center
//               text-white
//             "
//           >

//             <span
//               className="
//                 inline-block
//                 bg-[#f7d046]
//                 text-black
//                 px-5
//                 py-2
//                 rounded-full
//                 text-sm
//                 font-bold
//                 mb-6
//               "
//             >

//               Taste The Difference

//             </span>

//             <h2
//               className="
//                 text-4xl
//                 md:text-6xl
//                 font-bold
//                 leading-tight
//                 mb-6
//               "
//             >

//               Experience Authentic
//               Kerala Snacks

//             </h2>

//             <p
//               className="
//                 max-w-2xl
//                 mx-auto
//                 text-gray-300
//                 leading-8
//                 text-lg
//                 mb-10
//               "
//             >

//               Freshly prepared snacks
//               made with real ingredients
//               and traditional methods.

//             </p>

//             <Button
//               text="Explore Products"
//               to="/products"
//             />

//           </div>

//         </FadeAnimation>

//       </section>

//     </div>

<div className="ourstory-page">

<section className="story-hero">

<div className="story-hero-content">

<span className="story-badge">
Our Journey
</span>

<h1 className="story-hero-title">
Our Story
</h1>

<p className="story-hero-text">
A story built on authentic
Kerala flavors, consistency,
and traditional snack making.
</p>

</div>

</section>

<section className="story-section">

<div className="story-container">

<SlideAnimation direction="left">

<div className="story-image-wrapper">

<img
  src="https://t3.ftcdn.net/jpg/05/13/25/84/360_F_513258408_MlDbvhrW1lXqj9yW9QJVahdIHTXvOtm3.jpg"
  alt="Varuthathu Story"
  className="story-image"
/>

</div>

</SlideAnimation>

<SlideAnimation direction="right">

<div className="story-content">

<span className="story-badge">
Traditional Taste
</span>

<h2 className="story-title">
Snacks That Feel
Like Home
</h2>

<p className="story-description">
Varuthathu Co. started
with one simple goal —
creating authentic Kerala
snacks using real ingredients
and traditional preparation
methods.
</p>

<p className="story-description">
Over the years, our snacks
became loved for their
consistency, freshness,
and real homemade flavor.
</p>

<p className="story-description last">
We believe good food
does not need shortcuts.
Every product is made
carefully to deliver the
same trusted taste every time.
</p>

<Button
  text="Shop Products"
  to="/products"
/>

</div>

</SlideAnimation>

</div>

</section>

<section className="values-section">

<div className="values-container">

<FadeAnimation>

<div className="values-header">

<span className="story-badge">
Why Choose Us
</span>

<h2 className="values-title">
What Makes Us Different
</h2>

<p className="values-text">
We focus on quality,
consistency, and authentic
Kerala snack experiences.
</p>

</div>

</FadeAnimation>

<div className="values-grid">

<div className="value-card">
<h3>Fresh Ingredients</h3>
<p>
Real ingredients
with no unnecessary
shortcuts.
</p>
</div>

<div className="value-card">
<h3>Trusted By Families</h3>
<p>
Loved by customers
who value authentic
taste.
</p>
</div>

<div className="value-card">
<h3>Quality Focused</h3>
<p>
Every batch is
prepared carefully
for consistency.
</p>
</div>

<div className="value-card">
<h3>Fast Delivery</h3>
<p>
Fresh snacks delivered
safely across India.
</p>
</div>

</div>

</div>

</section>

<section className="story-cta-section">

<div className="story-cta-box">

<span className="story-badge">
Taste The Difference
</span>

<h2 className="story-cta-title">
Experience Authentic
Kerala Snacks
</h2>

<p className="story-cta-text">
Freshly prepared snacks
made with real ingredients
and traditional methods.
</p>

<Button
  text="Explore Products"
  to="/products"
/>

</div>

</section>

</div>
  );
};

export default OurStory;