// /* ===================================
//    FORMAT CURRENCY
// =================================== */

// export const formatCurrency = (
//   amount
// ) => {

//   if (!amount) return "₹0";

//   return new Intl.NumberFormat(
//     "en-IN",
//     {
//       style: "currency",
//       currency: "INR",
//       maximumFractionDigits: 0,
//     }
//   ).format(amount);
// };

// /* ===================================
//    FORMAT DATE
// =================================== */

// export const formatDate = (
//   date
// ) => {

//   if (!date) return "";

//   return new Date(date)
//     .toLocaleDateString(
//       "en-IN",
//       {
//         day: "numeric",
//         month: "long",
//         year: "numeric",
//       }
//     );
// };

// /* ===================================
//    SHORTEN TEXT
// =================================== */

// export const shortenText = (
//   text,
//   maxLength = 100
// ) => {

//   if (!text) return "";

//   if (
//     text.length <= maxLength
//   ) {

//     return text;
//   }

//   return (
//     text.substring(
//       0,
//       maxLength
//     ) + "..."
//   );
// };

// /* ===================================
//    GENERATE RANDOM ID
// =================================== */

// export const generateId =
//   () => {

//     return (
//       Math.random()
//         .toString(36)
//         .substring(2, 10) +
//       Date.now()
//         .toString(36)
//     );
//   };

// /* ===================================
//    CALCULATE DISCOUNT
// =================================== */

// export const calculateDiscount =
//   (
//     originalPrice,
//     discountPrice
//   ) => {

//     if (
//       !originalPrice ||
//       !discountPrice
//     ) {

//       return 0;
//     }

//     return Math.round(
//       ((originalPrice -
//         discountPrice) /
//         originalPrice) *
//         100
//     );
//   };

// /* ===================================
//    CAPITALIZE FIRST LETTER
// =================================== */

// export const capitalize =
//   (text) => {

//     if (!text) return "";

//     return (
//       text.charAt(0)
//         .toUpperCase() +
//       text.slice(1)
//     );
//   };

// /* ===================================
//    GET TOTAL CART ITEMS
// =================================== */

// export const getCartCount =
//   (cartItems) => {

//     if (!cartItems)
//       return 0;

//     return cartItems.reduce(
//       (acc, item) =>
//         acc + item.quantity,
//       0
//     );
//   };

// /* ===================================
//    GET CART TOTAL
// =================================== */

// export const getCartTotal =
//   (cartItems) => {

//     if (!cartItems)
//       return 0;

//     return cartItems.reduce(
//       (acc, item) =>
//         acc +
//         item.price *
//           item.quantity,
//       0
//     );
//   };

// /* ===================================
//    VALIDATE EMAIL
// =================================== */

// export const validateEmail =
//   (email) => {

//     const regex =
//       /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     return regex.test(email);
//   };

// /* ===================================
//    VALIDATE PHONE
// =================================== */

// export const validatePhone =
//   (phone) => {

//     const regex =
//       /^[6-9]\d{9}$/;

//     return regex.test(phone);
//   };

// /* ===================================
//    SCROLL TO TOP
// =================================== */

// export const scrollToTop =
//   () => {

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

// /* ===================================
//    COPY TO CLIPBOARD
// =================================== */

// export const copyToClipboard =
//   async (text) => {

//     try {

//       await navigator.clipboard.writeText(
//         text
//       );

//       return true;

//     } catch (error) {

//       console.log(error);

//       return false;
//     }
//   };

// /* ===================================
//    GET USER INITIALS
// =================================== */

// export const getUserInitials =
//   (name) => {

//     if (!name) return "";

//     const names =
//       name.split(" ");

//     if (
//       names.length === 1
//     ) {

//       return names[0][0]
//         .toUpperCase();
//     }

//     return (
//       names[0][0] +
//       names[1][0]
//     ).toUpperCase();
//   };

// /* ===================================
//    FORMAT ORDER STATUS
// =================================== */

// export const formatOrderStatus =
//   (status) => {

//     if (!status)
//       return "Pending";

//     return status
//       .replace("-", " ")
//       .replace(
//         /\b\w/g,
//         (char) =>
//           char.toUpperCase()
//       );
//   };

// /* ===================================
//    GET STATUS COLOR
// =================================== */

// export const getStatusColor =
//   (status) => {

//     switch (
//       status?.toLowerCase()
//     ) {

//       case "delivered":
//         return "green";

//       case "processing":
//         return "orange";

//       case "shipped":
//         return "blue";

//       case "cancelled":
//         return "red";

//       case "pending":
//         return "gray";

//       default:
//         return "gray";
//     }
//   };

// /* ===================================
//    DEBOUNCE FUNCTION
// =================================== */

// export const debounce = (
//   func,
//   delay = 500
// ) => {

//   let timeoutId;

//   return (...args) => {

//     clearTimeout(timeoutId);

//     timeoutId = setTimeout(
//       () => {

//         func(...args);

//       },
//       delay
//     );
//   };
// };

// /* ===================================
//    FILTER PRODUCTS BY CATEGORY
// =================================== */

// export const filterByCategory =
//   (
//     products,
//     category
//   ) => {

//     if (
//       !category ||
//       category === "All"
//     ) {

//       return products;
//     }

//     return products.filter(
//       (product) =>
//         product.category ===
//         category
//     );
//   };

// /* ===================================
//    SORT PRODUCTS
// =================================== */

// export const sortProducts = (
//   products,
//   sortType
// ) => {

//   const copiedProducts =
//     [...products];

//   switch (sortType) {

//     case "lowToHigh":

//       return copiedProducts.sort(
//         (a, b) =>
//           a.price - b.price
//       );

//     case "highToLow":

//       return copiedProducts.sort(
//         (a, b) =>
//           b.price - a.price
//       );

//     case "latest":

//       return copiedProducts.sort(
//         (a, b) =>
//           new Date(
//             b.createdAt
//           ) -
//           new Date(
//             a.createdAt
//           )
//       );

//     default:

//       return copiedProducts;
//   }
// };



/* =========================================
   FORMAT PRICE
========================================= */

export const formatPrice = (
  price
) => {

  if (
    price === null ||
    price === undefined
  ) {

    return "₹0";
  }

  return new Intl.NumberFormat(
    "en-IN",
    {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }
  ).format(price);
};

/* =========================================
   GENERATE RANDOM ID
========================================= */

export const generateId = (
  prefix = "ID"
) => {

  const random =
    Math.floor(
      Math.random() * 1000000
    );

  return `${prefix}-${random}`;
};

/* =========================================
   TRUNCATE TEXT
========================================= */

export const truncateText = (
  text,
  limit = 100
) => {

  if (!text) {

    return "";
  }

  if (
    text.length <= limit
  ) {

    return text;
  }

  return (
    text.slice(0, limit) +
    "..."
  );
};

/* =========================================
   CALCULATE DISCOUNT PERCENTAGE
========================================= */

export const calculateDiscount = (
  originalPrice,
  discountedPrice
) => {

  if (
    !originalPrice ||
    !discountedPrice
  ) {

    return 0;
  }

  const percentage =
    (
      (
        originalPrice -
        discountedPrice
      ) /
      originalPrice
    ) * 100;

  return Math.round(
    percentage
  );
};

/* =========================================
   GET CART TOTAL PRICE
========================================= */

export const getCartTotal = (
  cartItems = []
) => {

  return cartItems.reduce(
    (
      total,
      item
    ) => {

      return (
        total +
        item.price *
          item.quantity
      );
    },
    0
  );
};

/* =========================================
   GET TOTAL CART ITEMS
========================================= */

export const getTotalItems = (
  cartItems = []
) => {

  return cartItems.reduce(
    (
      total,
      item
    ) => {

      return (
        total +
        item.quantity
      );
    },
    0
  );
};

/* =========================================
   FILTER PRODUCTS
========================================= */

export const filterProducts = (
  products = [],
  search = "",
  category = "all"
) => {

  return products.filter(
    (product) => {

      const matchesSearch =
        product.name
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category === "all"
          ? true
          : product.category
              ?.toLowerCase() ===
            category.toLowerCase();

      return (
        matchesSearch &&
        matchesCategory
      );
    }
  );
};

/* =========================================
   FORMAT DATE
========================================= */

export const formatDate = (
  date
) => {

  if (!date) {

    return "";
  }

  return new Date(
    date
  ).toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );
};

/* =========================================
   SCROLL TO TOP
========================================= */

export const scrollToTop = () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/* =========================================
   VALIDATE EMAIL
========================================= */

export const validateEmail = (
  email
) => {

  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
};

/* =========================================
   VALIDATE PHONE NUMBER
========================================= */

export const validatePhone = (
  phone
) => {

  const regex =
    /^[6-9]\d{9}$/;

  return regex.test(phone);
};

/* =========================================
   CAPITALIZE FIRST LETTER
========================================= */

export const capitalize = (
  text
) => {

  if (!text) {

    return "";
  }

  return (
    text.charAt(0)
      .toUpperCase() +
    text.slice(1)
  );
};

/* =========================================
   COPY TEXT TO CLIPBOARD
========================================= */

export const copyToClipboard =
  async (text) => {

    try {

      await navigator.clipboard.writeText(
        text
      );

      return true;

    } catch (error) {

      console.log(
        "Copy Failed:",
        error
      );

      return false;
    }
  };

/* =========================================
   LOCAL STORAGE HELPERS
========================================= */

export const saveToLocalStorage = (
  key,
  value
) => {

  try {

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

  } catch (error) {

    console.log(
      "LocalStorage Save Error:",
      error
    );
  }
};

export const getFromLocalStorage = (
  key
) => {

  try {

    const data =
      localStorage.getItem(
        key
      );

    return data
      ? JSON.parse(data)
      : null;

  } catch (error) {

    console.log(
      "LocalStorage Read Error:",
      error
    );

    return null;
  }
};

export const removeFromLocalStorage = (
  key
) => {

  try {

    localStorage.removeItem(
      key
    );

  } catch (error) {

    console.log(
      "LocalStorage Remove Error:",
      error
    );
  }
};