// /* ===================================
//    VARUTHATHU CONSTANTS
// =================================== */

// /* =========================
//     API URL
// ========================= */

// export const API_URL =
//   process.env.REACT_APP_API_URL ||
//   "http://localhost:5000/api";

// /* =========================
//     COMPANY DETAILS
// ========================= */

// export const COMPANY_DETAILS = {

//   name: "Varuthathu",

//   tagline:
//     "Just Snacks. Done Right.",

//   phone:
//     "+91 77363 52517",

//   email:
//     "support@varuthathu.com",

//   website:
//     "www.varuthathu.com",

//   address:
//     "Kerala, India",

//   description:
//     "Varuthathu Co. started with a taste people already trusted. Still simple. Still honest. Still made to be enjoyed.",

//   founded:
//     "2026",
// };

// /* =========================
//     NAVBAR LINKS
// ========================= */

// export const NAV_LINKS = [

//   {
//     id: 1,
//     name: "Home",
//     path: "/",
//   },

//   {
//     id: 2,
//     name: "Products",
//     path: "/products",
//   },

//   {
//     id: 3,
//     name: "Our Story",
//     path: "/ourstory",
//   },

//   {
//     id: 4,
//     name: "Blogs",
//     path: "/blogs",
//   },

//   {
//     id: 5,
//     name: "Contact Us",
//     path: "/contactus",
//   },
// ];

// /* =========================
//     PRODUCT CATEGORIES
// ========================= */

// export const PRODUCT_CATEGORIES = [

//   "Banana Chips",

//   "Salted Chips",

//   "Spicy Chips",

//   "Sweet Chips",

//   "Jackfruit Chips",

//   "Mixture",

//   "Kerala Snacks",
// ];

// /* =========================
//     PRODUCT SORT OPTIONS
// ========================= */

// export const SORT_OPTIONS = [

//   {
//     label:
//       "Price: Low to High",

//     value:
//       "lowToHigh",
//   },

//   {
//     label:
//       "Price: High to Low",

//     value:
//       "highToLow",
//   },

//   {
//     label:
//       "Newest First",

//     value:
//       "latest",
//   },
// ];

// /* =========================
//     PAYMENT METHODS
// ========================= */

// export const PAYMENT_METHODS = [

//   {
//     id: 1,
//     name:
//       "Razorpay",

//     value:
//       "razorpay",
//   },

//   {
//     id: 2,
//     name:
//       "Cash on Delivery",

//     value:
//       "cod",
//   },
// ];

// /* =========================
//     ORDER STATUS
// ========================= */

// export const ORDER_STATUS = [

//   "Pending",

//   "Processing",

//   "Shipped",

//   "Delivered",

//   "Cancelled",
// ];

// /* =========================
//     ADMIN SIDEBAR LINKS
// ========================= */

// export const ADMIN_LINKS = [

//   {
//     id: 1,
//     name:
//       "Dashboard",

//     path:
//       "/admin/dashboard",
//   },

//   {
//     id: 2,
//     name:
//       "Add Product",

//     path:
//       "/admin/add-product",
//   },

//   {
//     id: 3,
//     name:
//       "Orders",

//     path:
//       "/admin/orders",
//   },

//   {
//     id: 4,
//     name:
//       "Users",

//     path:
//       "/admin/users",
//   },

//   {
//     id: 5,
//     name:
//       "Blogs",

//     path:
//       "/admin/blogs",
//   },

//   {
//     id: 6,
//     name:
//       "Coupons",

//     path:
//       "/admin/coupons",
//   },
// ];

// /* =========================
//     LOCAL STORAGE KEYS
// ========================= */

// export const STORAGE_KEYS = {

//   token:
//     "varuthathu_token",

//   cart:
//     "varuthathu_cart",

//   user:
//     "varuthathu_user",
// };

// /* =========================
//     RAZORPAY
// ========================= */

// export const RAZORPAY_KEY =

//   process.env
//     .REACT_APP_RAZORPAY_KEY ||
//   "rzp_test_xxxxxxxxxx";

// /* =========================
//     DEFAULT PRODUCT IMAGE
// ========================= */

// export const DEFAULT_PRODUCT_IMAGE =
//   "https://via.placeholder.com/500x500.png?text=Varuthathu";

// /* =========================
//     PAGINATION
// ========================= */

// export const PRODUCTS_PER_PAGE =
//   8;

// export const BLOGS_PER_PAGE =
//   6;

// /* =========================
//     SOCIAL LINKS
// ========================= */

// export const SOCIAL_LINKS = {

//   instagram:
//     "https://instagram.com",

//   facebook:
//     "https://facebook.com",

//   youtube:
//     "https://youtube.com",

//   whatsapp:
//     "https://wa.me/917736352517",
// };

// /* =========================
//     TESTIMONIALS
// ========================= */

// export const TESTIMONIALS = [

//   {
//     id: 1,

//     name:
//       "Arjun",

//     review:
//       "The best banana chips I’ve tasted. Crispy and authentic Kerala flavor.",

//     rating: 5,
//   },

//   {
//     id: 2,

//     name:
//       "Meera",

//     review:
//       "Fresh, crunchy, and perfectly packed. Loved the quality.",

//     rating: 5,
//   },

//   {
//     id: 3,

//     name:
//       "Rahul",

//     review:
//       "Finally a snack brand that focuses on taste and consistency.",

//     rating: 4,
//   },
// ];

// /* =========================
//     BLOG CATEGORIES
// ========================= */

// export const BLOG_CATEGORIES = [

//   "Snacks",

//   "Kerala Food",

//   "Banana Chips",

//   "Healthy Snacks",

//   "Cooking",

//   "Traditional Foods",
// ];

// /* =========================
//     ANIMATION DURATIONS
// ========================= */

// export const ANIMATION_DURATION = {

//   fast: 200,

//   normal: 400,

//   slow: 700,
// };

// /* =========================
//     REGEX
// ========================= */

// export const REGEX = {

//   email:
//     /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

//   phone:
//     /^[6-9]\d{9}$/,

//   pincode:
//     /^[1-9][0-9]{5}$/,
// };




/* =========================================
   APP DETAILS
========================================= */

export const APP_NAME =
  "Varuthathu";

export const APP_TAGLINE =
  "Authentic Kerala Snacks";

export const APP_DESCRIPTION =
  "Traditional Kerala snacks made with authentic ingredients and delivered fresh across India.";

/* =========================================
   API
========================================= */

export const BASE_URL =
  process.env.REACT_APP_API_URL ||
  "http://localhost:5000/api";

export const IMAGE_BASE_URL =
  process.env.REACT_APP_IMAGE_URL ||
  "http://localhost:5000/uploads";

/* =========================================
   LOCAL STORAGE KEYS
========================================= */

export const TOKEN_KEY =
  "varuthathu_token";

export const CART_KEY =
  "varuthathu_cart";

export const USER_KEY =
  "varuthathu_user";

/* =========================================
   PRODUCT CATEGORIES
========================================= */

export const PRODUCT_CATEGORIES = [

  "Banana Chips",

  "Sharkara Varatti",

  "Murukku",

  "Mixture",

  "Achappam",

  "Halwa",

  "Nut Snacks",

  "Traditional Snacks",

];

/* =========================================
   ORDER STATUS
========================================= */

export const ORDER_STATUS = {

  PENDING:
    "Pending",

  PROCESSING:
    "Processing",

  SHIPPED:
    "Shipped",

  DELIVERED:
    "Delivered",

  CANCELLED:
    "Cancelled",

};

/* =========================================
   PAYMENT METHODS
========================================= */

export const PAYMENT_METHODS = [

  "Razorpay",

  "Cash On Delivery",

  "UPI",

  "Net Banking",

];

/* =========================================
   USER ROLES
========================================= */

export const USER_ROLES = {

  ADMIN:
    "admin",

  CUSTOMER:
    "customer",

};

/* =========================================
   NAVBAR LINKS
========================================= */

export const NAV_LINKS = [

  {
    id: 1,
    name: "Home",
    path: "/",
  },

  {
    id: 2,
    name: "Products",
    path: "/products",
  },

  {
    id: 3,
    name: "Our Story",
    path: "/ourstory",
  },

  {
    id: 4,
    name: "Blogs",
    path: "/blogs",
  },

  {
    id: 5,
    name: "Contact Us",
    path: "/contactus",
  },

];

/* =========================================
   ADMIN SIDEBAR LINKS
========================================= */

export const ADMIN_LINKS = [

  {
    id: 1,
    name: "Dashboard",
    path: "/admin",
  },

  {
    id: 2,
    name: "Add Product",
    path: "/admin/add-product",
  },

  {
    id: 3,
    name: "Orders",
    path: "/admin/orders",
  },

  {
    id: 4,
    name: "Users",
    path: "/admin/users",
  },

  {
    id: 5,
    name: "Blogs",
    path: "/admin/blogs",
  },

];

/* =========================================
   SOCIAL LINKS
========================================= */

export const SOCIAL_LINKS = {

  INSTAGRAM:
    "https://instagram.com",

  FACEBOOK:
    "https://facebook.com",

  YOUTUBE:
    "https://youtube.com",

  WHATSAPP:
    "https://wa.me/919999999999",

};

/* =========================================
   CONTACT DETAILS
========================================= */

export const CONTACT_DETAILS = {

  EMAIL:
    "support@varuthathu.com",

  PHONE:
    "+91 9876543210",

  ADDRESS:
    "Kochi, Kerala, India",

};

/* =========================================
   SHIPPING
========================================= */

export const SHIPPING_CHARGE =
  80;

export const FREE_SHIPPING_LIMIT =
  999;

/* =========================================
   PAGINATION
========================================= */

export const PRODUCTS_PER_PAGE =
  8;

export const BLOGS_PER_PAGE =
  6;

/* =========================================
   DEFAULT IMAGES
========================================= */

export const DEFAULT_PRODUCT_IMAGE =
  "https://via.placeholder.com/600x600";

export const DEFAULT_BLOG_IMAGE =
  "https://via.placeholder.com/1200x700";

/* =========================================
   ANIMATION SETTINGS
========================================= */

export const ANIMATION_DURATION =
  0.5;

export const ANIMATION_DELAY =
  0.2;

/* =========================================
   THEME COLORS
========================================= */

export const COLORS = {

  PRIMARY:
    "#f7d046",

  SECONDARY:
    "#1a1a1a",

  LIGHT:
    "#fafafa",

  WHITE:
    "#ffffff",

  GRAY:
    "#6b7280",

};