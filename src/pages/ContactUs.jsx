
// import React, { useState } from "react";

// /* Components */
// import FadeAnimation from "../components/animations/FadeAnimation";

// import Button from "../components/common/Button";

// /* Icons */
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaClock,
//   FaPaperPlane,
// } from "react-icons/fa";

// const ContactUs = () => {

//   const [formData, setFormData] =
//     useState({
//       name: "",
//       email: "",
//       phone: "",
//       subject: "",
//       message: "",
//     });

//   /* Handle Change */
//   const handleChange = (e) => {

//     setFormData({
//       ...formData,
//       [e.target.name]:
//         e.target.value,
//     });
//   };

//   /* Submit */
//   const handleSubmit = (e) => {

//     e.preventDefault();

//     console.log(formData);
//   };

//   return (
//     <div className="w-full bg-white min-h-screen overflow-hidden">

//       {/* Hero */}
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
//             Contact Varuthathu
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
//             We’d Love
//             <br />
//             To Hear From You
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
//             Have questions about our snacks,
//             orders, wholesale inquiries, or
//             collaborations? Reach out to us.
//           </p>

//         </FadeAnimation>

//       </section>

//       {/* Contact Section */}
//       <section
//         className="
//           w-[90%]
//           max-w-[1300px]
//           mx-auto
//           py-24
//           grid
//           grid-cols-1
//           lg:grid-cols-2
//           gap-14
//         "
//       >

//         {/* Left Side */}
//         <FadeAnimation>

//           <div>

//             {/* Heading */}
//             <div className="mb-10">

//               <span
//                 className="
//                   inline-block
//                   bg-[#f7d046]
//                   text-[#1a1a1a]
//                   px-5
//                   py-2
//                   rounded-full
//                   text-sm
//                   font-bold
//                   mb-5
//                 "
//               >
//                 Get In Touch
//               </span>

//               <h2
//                 className="
//                   text-4xl
//                   font-bold
//                   text-[#1a1a1a]
//                   mb-5
//                 "
//               >
//                 Let’s Talk Snacks
//               </h2>

//               <p
//                 className="
//                   text-gray-600
//                   leading-8
//                 "
//               >
//                 We’re always happy to connect
//                 with customers, retailers,
//                 and snack lovers.
//               </p>

//             </div>

//             {/* Contact Cards */}
//             <div className="space-y-6">

//               {/* Phone */}
//               <div
//                 className="
//                   flex
//                   items-start
//                   gap-5
//                   bg-[#fffdf4]
//                   rounded-[25px]
//                   p-6
//                 "
//               >

//                 <div
//                   className="
//                     w-16
//                     h-16
//                     rounded-full
//                     bg-[#f7d046]
//                     flex
//                     items-center
//                     justify-center
//                     shrink-0
//                   "
//                 >

//                   <FaPhoneAlt
//                     className="
//                       text-2xl
//                       text-[#1a1a1a]
//                     "
//                   />

//                 </div>

//                 <div>

//                   <h3
//                     className="
//                       text-xl
//                       font-bold
//                       text-[#1a1a1a]
//                       mb-2
//                     "
//                   >
//                     Phone Number
//                   </h3>

//                   <p
//                     className="
//                       text-gray-600
//                     "
//                   >
//                     +91 77363 52517
//                   </p>

//                 </div>

//               </div>

//               {/* Email */}
//               <div
//                 className="
//                   flex
//                   items-start
//                   gap-5
//                   bg-[#fffdf4]
//                   rounded-[25px]
//                   p-6
//                 "
//               >

//                 <div
//                   className="
//                     w-16
//                     h-16
//                     rounded-full
//                     bg-[#f7d046]
//                     flex
//                     items-center
//                     justify-center
//                     shrink-0
//                   "
//                 >

//                   <FaEnvelope
//                     className="
//                       text-2xl
//                       text-[#1a1a1a]
//                     "
//                   />

//                 </div>

//                 <div>

//                   <h3
//                     className="
//                       text-xl
//                       font-bold
//                       text-[#1a1a1a]
//                       mb-2
//                     "
//                   >
//                     Email Address
//                   </h3>

//                   <p
//                     className="
//                       text-gray-600
//                     "
//                   >
//                     support@varuthathu.com
//                   </p>

//                 </div>

//               </div>

//               {/* Location */}
//               <div
//                 className="
//                   flex
//                   items-start
//                   gap-5
//                   bg-[#fffdf4]
//                   rounded-[25px]
//                   p-6
//                 "
//               >

//                 <div
//                   className="
//                     w-16
//                     h-16
//                     rounded-full
//                     bg-[#f7d046]
//                     flex
//                     items-center
//                     justify-center
//                     shrink-0
//                   "
//                 >

//                   <FaMapMarkerAlt
//                     className="
//                       text-2xl
//                       text-[#1a1a1a]
//                     "
//                   />

//                 </div>

//                 <div>

//                   <h3
//                     className="
//                       text-xl
//                       font-bold
//                       text-[#1a1a1a]
//                       mb-2
//                     "
//                   >
//                     Location
//                   </h3>

//                   <p
//                     className="
//                       text-gray-600
//                     "
//                   >
//                     Kerala, India
//                   </p>

//                 </div>

//               </div>

//               {/* Working Hours */}
//               <div
//                 className="
//                   flex
//                   items-start
//                   gap-5
//                   bg-[#fffdf4]
//                   rounded-[25px]
//                   p-6
//                 "
//               >

//                 <div
//                   className="
//                     w-16
//                     h-16
//                     rounded-full
//                     bg-[#f7d046]
//                     flex
//                     items-center
//                     justify-center
//                     shrink-0
//                   "
//                 >

//                   <FaClock
//                     className="
//                       text-2xl
//                       text-[#1a1a1a]
//                     "
//                   />

//                 </div>

//                 <div>

//                   <h3
//                     className="
//                       text-xl
//                       font-bold
//                       text-[#1a1a1a]
//                       mb-2
//                     "
//                   >
//                     Working Hours
//                   </h3>

//                   <p
//                     className="
//                       text-gray-600
//                     "
//                   >
//                     Monday - Saturday
//                     <br />
//                     9:00 AM - 7:00 PM
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </FadeAnimation>

//         {/* Right Side */}
//         <FadeAnimation delay={0.2}>

//           <div
//             className="
//               bg-white
//               rounded-[30px]
//               shadow-xl
//               p-8
//               border
//               border-gray-100
//             "
//           >

//             {/* Heading */}
//             <div className="mb-8">

//               <h2
//                 className="
//                   text-3xl
//                   font-bold
//                   text-[#1a1a1a]
//                   mb-3
//                 "
//               >
//                 Send A Message
//               </h2>

//               <p
//                 className="
//                   text-gray-600
//                   leading-7
//                 "
//               >
//                 Fill out the form and we’ll
//                 get back to you as soon as
//                 possible.
//               </p>

//             </div>

//             {/* Form */}
//             <form
//               onSubmit={handleSubmit}
//               className="space-y-6"
//             >

//               {/* Name */}
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
//                   Full Name
//                 </label>

//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter your name"
//                   value={formData.name}
//                   onChange={handleChange}
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
//                     transition
//                   "
//                 />

//               </div>

//               {/* Email */}
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
//                   Email Address
//                 </label>

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
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
//                     transition
//                   "
//                 />

//               </div>

//               {/* Phone */}
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
//                   Phone Number
//                 </label>

//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Enter your phone"
//                   value={formData.phone}
//                   onChange={handleChange}
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
//                     transition
//                   "
//                 />

//               </div>

//               {/* Subject */}
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
//                   Subject
//                 </label>

//                 <input
//                   type="text"
//                   name="subject"
//                   placeholder="Enter subject"
//                   value={formData.subject}
//                   onChange={handleChange}
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
//                     transition
//                   "
//                 />

//               </div>

//               {/* Message */}
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
//                   Message
//                 </label>

//                 <textarea
//                   name="message"
//                   rows="6"
//                   placeholder="Write your message..."
//                   value={formData.message}
//                   onChange={handleChange}
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
//                     transition
//                   "
//                 />

//               </div>

//               {/* Button */}
//               <Button
//                 type="submit"
//                 text="Send Message"
//                 icon={<FaPaperPlane />}
//                 fullWidth={true}
//               />

//             </form>

//           </div>

//         </FadeAnimation>

//       </section>

//     </div>
//   );
// };

// export default ContactUs;




import React, {
  useState,
} from "react";

/* Components */
import FadeAnimation from "../components/animations/FadeAnimation";

import SlideAnimation from "../components/animations/SlideAnimation";

import Button from "../components/common/Button";
import "./ContactUs.css"

/* Icons */
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const ContactUs = () => {

  /* =========================
      STATES
  ========================== */

  const [
    formData,
    setFormData,
  ] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [
    submitted,
    setSubmitted,
  ] = useState(false);

  /* =========================
      HANDLE CHANGE
  ========================== */

  const handleChange =
    (e) => {

      setFormData({
        ...formData,
        [e.target.name]:
          e.target.value,
      });
    };

  /* =========================
      HANDLE SUBMIT
  ========================== */

  const handleSubmit =
    (e) => {

      e.preventDefault();

      console.log(
        "Contact Form:",
        formData
      );

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {

        setSubmitted(false);

      }, 4000);
    };

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
//           h-[450px]
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
//               url('/images/contact-banner.jpg')
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

//               Contact Varuthathu

//             </span>

//             <h1
//               className="
//                 text-5xl
//                 md:text-7xl
//                 font-bold
//                 mb-6
//               "
//             >

//               Contact Us

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

//               We would love to hear
//               from you. Reach out for
//               orders, support, or
//               business inquiries.

//             </p>

//           </div>

//         </FadeAnimation>

//       </section>

//       {/* =========================
//           CONTACT SECTION
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
//           "
//         >

//           {/* =========================
//               LEFT SIDE
//           ========================== */}

//           <SlideAnimation direction="left">

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

//                 Get In Touch

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

//                 Let’s Talk About
//                 Kerala Snacks

//               </h2>

//               <p
//                 className="
//                   text-gray-600
//                   leading-9
//                   text-lg
//                   mb-10
//                 "
//               >

//                 Whether you have a
//                 question about products,
//                 orders, delivery, or
//                 wholesale inquiries,
//                 our team is here to help.

//               </p>

//               {/* Contact Info */}

//               <div
//                 className="
//                   flex
//                   flex-col
//                   gap-8
//                 "
//               >

//                 {/* Phone */}

//                 <div
//                   className="
//                     flex
//                     items-start
//                     gap-5
//                   "
//                 >

//                   <div
//                     className="
//                       w-16
//                       h-16
//                       rounded-2xl
//                       bg-[#fffdf4]
//                       flex
//                       items-center
//                       justify-center
//                       text-[#f7d046]
//                       text-2xl
//                       shrink-0
//                     "
//                   >

//                     {/* <FaPhoneAlt /> */}

//                   </div>

//                   <div>

//                     <h4
//                       className="
//                         text-xl
//                         font-bold
//                         mb-2
//                         text-[#1a1a1a]
//                       "
//                     >

//                       Phone

//                     </h4>

//                     <p
//                       className="
//                         text-gray-600
//                         leading-8
//                       "
//                     >

//                       +91 98765 43210

//                     </p>

//                   </div>

//                 </div>

//                 {/* Email */}

//                 <div
//                   className="
//                     flex
//                     items-start
//                     gap-5
//                   "
//                 >

//                   <div
//                     className="
//                       w-16
//                       h-16
//                       rounded-2xl
//                       bg-[#fffdf4]
//                       flex
//                       items-center
//                       justify-center
//                       text-[#f7d046]
//                       text-2xl
//                       shrink-0
//                     "
//                   >

//                     {/* <FaEnvelope /> */}

//                   </div>

//                   <div>

//                     <h4
//                       className="
//                         text-xl
//                         font-bold
//                         mb-2
//                         text-[#1a1a1a]
//                       "
//                     >

//                       Email

//                     </h4>

//                     <p
//                       className="
//                         text-gray-600
//                         leading-8
//                       "
//                     >

//                       support@varuthathu.com

//                     </p>

//                   </div>

//                 </div>

//                 {/* Address */}

//                 <div
//                   className="
//                     flex
//                     items-start
//                     gap-5
//                   "
//                 >

//                   <div
//                     className="
//                       w-16
//                       h-16
//                       rounded-2xl
//                       bg-[#fffdf4]
//                       flex
//                       items-center
//                       justify-center
//                       text-[#f7d046]
//                       text-2xl
//                       shrink-0
//                     "
//                   >
// {/* 
//                     <FaMapMarkerAlt /> */}

//                   </div>

//                   <div>

//                     <h4
//                       className="
//                         text-xl
//                         font-bold
//                         mb-2
//                         text-[#1a1a1a]
//                       "
//                     >

//                       Address

//                     </h4>

//                     <p
//                       className="
//                         text-gray-600
//                         leading-8
//                       "
//                     >

//                       Kochi, Kerala,
//                       India

//                     </p>

//                   </div>

//                 </div>

//                 {/* Working Hours */}

//                 <div
//                   className="
//                     flex
//                     items-start
//                     gap-5
//                   "
//                 >

//                   <div
//                     className="
//                       w-16
//                       h-16
//                       rounded-2xl
//                       bg-[#fffdf4]
//                       flex
//                       items-center
//                       justify-center
//                       text-[#f7d046]
//                       text-2xl
//                       shrink-0
//                     "
//                   >

//                     {/* <FaClock /> */}

//                   </div>

//                   <div>

//                     <h4
//                       className="
//                         text-xl
//                         font-bold
//                         mb-2
//                         text-[#1a1a1a]
//                       "
//                     >

//                       Working Hours

//                     </h4>

//                     <p
//                       className="
//                         text-gray-600
//                         leading-8
//                       "
//                     >

//                       Monday - Saturday
//                       <br />

//                       9:00 AM - 7:00 PM

//                     </p>

//                   </div>

//                 </div>

//               </div>

//               {/* Social Media */}

//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-5
//                   mt-12
//                 "
//               >

//                 <a
//                   href="/"
//                   className="
//                     w-12
//                     h-12
//                     rounded-full
//                     bg-[#f7d046]
//                     flex
//                     items-center
//                     justify-center
//                     text-black
//                     hover:scale-110
//                     transition
//                     duration-300
//                   "
//                 >

//                   {/* <FaFacebookF /> */}

//                 </a>

//                 <a
//                   href="/"
//                   className="
//                     w-12
//                     h-12
//                     rounded-full
//                     bg-[#f7d046]
//                     flex
//                     items-center
//                     justify-center
//                     text-black
//                     hover:scale-110
//                     transition
//                     duration-300
//                   "
//                 >

//                   {/* <FaInstagram /> */}

//                 </a>

//                 <a
//                   href="/"
//                   className="
//                     w-12
//                     h-12
//                     rounded-full
//                     bg-[#f7d046]
//                     flex
//                     items-center
//                     justify-center
//                     text-black
//                     hover:scale-110
//                     transition
//                     duration-300
//                   "
//                 >

//                   {/* <FaWhatsapp /> */}

//                 </a>

//               </div>

//             </div>

//           </SlideAnimation>

//           {/* =========================
//               RIGHT SIDE
//           ========================== */}

//           <SlideAnimation direction="right">

//             <div
//               className="
//                 bg-[#fffdf4]
//                 rounded-[40px]
//                 p-8
//                 md:p-10
//                 shadow-lg
//               "
//             >

//               <h3
//                 className="
//                   text-3xl
//                   font-bold
//                   text-[#1a1a1a]
//                   mb-8
//                 "
//               >

//                 Send Message

//               </h3>

//               {/* Success */}

//               {submitted && (

//                 <div
//                   className="
//                     bg-green-100
//                     text-green-700
//                     px-5
//                     py-4
//                     rounded-2xl
//                     mb-6
//                     font-medium
//                   "
//                 >

//                   Message sent successfully.

//                 </div>

//               )}

//               {/* Form */}

//               <form
//                 onSubmit={
//                   handleSubmit
//                 }
//                 className="
//                   flex
//                   flex-col
//                   gap-6
//                 "
//               >

//                 {/* Name */}

//                 <div>

//                   <label
//                     className="
//                       block
//                       text-sm
//                       font-semibold
//                       mb-3
//                       text-[#1a1a1a]
//                     "
//                   >

//                     Full Name

//                   </label>

//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter your name"
//                     value={
//                       formData.name
//                     }
//                     onChange={
//                       handleChange
//                     }
//                     required
//                     className="
//                       w-full
//                       px-5
//                       py-4
//                       rounded-2xl
//                       border
//                       border-gray-300
//                       outline-none
//                       focus:border-[#f7d046]
//                     "
//                   />

//                 </div>

//                 {/* Email */}

//                 <div>

//                   <label
//                     className="
//                       block
//                       text-sm
//                       font-semibold
//                       mb-3
//                       text-[#1a1a1a]
//                     "
//                   >

//                     Email Address

//                   </label>

//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     value={
//                       formData.email
//                     }
//                     onChange={
//                       handleChange
//                     }
//                     required
//                     className="
//                       w-full
//                       px-5
//                       py-4
//                       rounded-2xl
//                       border
//                       border-gray-300
//                       outline-none
//                       focus:border-[#f7d046]
//                     "
//                   />

//                 </div>

//                 {/* Phone */}

//                 <div>

//                   <label
//                     className="
//                       block
//                       text-sm
//                       font-semibold
//                       mb-3
//                       text-[#1a1a1a]
//                     "
//                   >

//                     Phone Number

//                   </label>

//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Enter your phone"
//                     value={
//                       formData.phone
//                     }
//                     onChange={
//                       handleChange
//                     }
//                     required
//                     className="
//                       w-full
//                       px-5
//                       py-4
//                       rounded-2xl
//                       border
//                       border-gray-300
//                       outline-none
//                       focus:border-[#f7d046]
//                     "
//                   />

//                 </div>

//                 {/* Message */}

//                 <div>

//                   <label
//                     className="
//                       block
//                       text-sm
//                       font-semibold
//                       mb-3
//                       text-[#1a1a1a]
//                     "
//                   >

//                     Message

//                   </label>

//                   <textarea
//                     rows="6"
//                     name="message"
//                     placeholder="Write your message..."
//                     value={
//                       formData.message
//                     }
//                     onChange={
//                       handleChange
//                     }
//                     required
//                     className="
//                       w-full
//                       px-5
//                       py-4
//                       rounded-2xl
//                       border
//                       border-gray-300
//                       outline-none
//                       resize-none
//                       focus:border-[#f7d046]
//                     "
//                   />

//                 </div>

//                 {/* Button */}

//                 <Button
//                   text="Send Message"
//                   fullWidth={true}
//                 />

//               </form>

//             </div>

//           </SlideAnimation>

//         </div>

//       </section>

//     </div>
   <div className="contact-page">

      {/* =========================
          HERO SECTION
      ========================== */}

      <section
        className="contact-hero"
        style={{
          backgroundImage:
            `
              linear-gradient(
                rgba(0,0,0,0.55),
                rgba(0,0,0,0.55)
              ),
              url('https://t4.ftcdn.net/jpg/19/00/09/97/360_F_1900099778_yGULiZQN0QIahIYCGqYAYhu1Hdu2C96y.jpg')
            `,
        }}
      >

        <FadeAnimation>

          <div className="contact-hero-content">

            <span className="contact-badge">

              Contact Varuthathu

            </span>

            <h1>

              Contact Us

            </h1>

            <p>

              We would love to hear
              from you. Reach out for
              orders, support, or
              business inquiries.

            </p>

          </div>

        </FadeAnimation>

      </section>

      {/* =========================
          CONTACT SECTION
      ========================== */}

      <section className="contact-section">

        <div className="contact-container">

          {/* =========================
              LEFT SIDE
          ========================== */}

          <SlideAnimation direction="left">

            <div className="contact-left">

              <span className="contact-badge">

                Get In Touch

              </span>

              <h2>

                Let’s Talk About
                Kerala Snacks

              </h2>

              <p>

                Whether you have a
                question about products,
                orders, delivery, or
                wholesale inquiries,
                our team is here to help.

              </p>

              {/* Contact Info */}

              <div className="contact-info">

                {/* Phone */}

                <div className="contact-info-item">

                  <div className="contact-icon">

                    <FaPhoneAlt />

                  </div>

                  <div>

                    <h4>

                      Phone

                    </h4>

                    <p>

                      +91 98765 43210

                    </p>

                  </div>

                </div>

                {/* Email */}

                <div className="contact-info-item">

                  <div className="contact-icon">

                    <FaEnvelope />

                  </div>

                  <div>

                    <h4>

                      Email

                    </h4>

                    <p>

                      support@varuthathu.com

                    </p>

                  </div>

                </div>

                {/* Address */}

                <div className="contact-info-item">

                  <div className="contact-icon">

                    <FaMapMarkerAlt />

                  </div>

                  <div>

                    <h4>

                      Address

                    </h4>

                    <p>

                      Kochi, Kerala,
                      India

                    </p>

                  </div>

                </div>

                {/* Working Hours */}

                <div className="contact-info-item">

                  <div className="contact-icon">

                    <FaClock />

                  </div>

                  <div>

                    <h4>

                      Working Hours

                    </h4>

                    <p>

                      Monday - Saturday
                      <br />

                      9:00 AM - 7:00 PM

                    </p>

                  </div>

                </div>

              </div>

              {/* Social Media */}

              <div className="social-icons">

                <a href="/">

                  <FaFacebookF />

                </a>

                <a href="/">

                  <FaInstagram />

                </a>

                <a href="/">

                  <FaWhatsapp />

                </a>

              </div>

            </div>

          </SlideAnimation>

          {/* =========================
              RIGHT SIDE
          ========================== */}

          <SlideAnimation direction="right">

            <div className="contact-form-wrapper">

              <h3>

                Send Message

              </h3>

              {/* Success */}

              {submitted && (

                <div className="success-message">

                  Message sent successfully.

                </div>

              )}

              {/* Form */}

              <form
                onSubmit={
                  handleSubmit
                }
                className="contact-form"
              >

                {/* Name */}

                <div className="form-group">

                  <label>

                    Full Name

                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={
                      formData.name
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />

                </div>

                {/* Email */}

                <div className="form-group">

                  <label>

                    Email Address

                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={
                      formData.email
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />

                </div>

                {/* Phone */}

                <div className="form-group">

                  <label>

                    Phone Number

                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone"
                    value={
                      formData.phone
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />

                </div>

                {/* Message */}

                <div className="form-group">

                  <label>

                    Message

                  </label>

                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Write your message..."
                    value={
                      formData.message
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />

                </div>

                {/* Button */}

                <Button
                  text="Send Message"
                  fullWidth={true}
                />

              </form>

            </div>

          </SlideAnimation>

        </div>

      </section>

    </div>
  );
};

export default ContactUs;