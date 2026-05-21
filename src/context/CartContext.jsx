// import React, {
//   createContext,
//   useEffect,
//   useState,
// } from "react";

// /* Create Context */
// export const CartContext =
//   createContext();

// /* Provider */
// const CartProvider = ({
//   children,
// }) => {

//   /* =========================
//       STATES
//   ========================== */

//   const [cartItems, setCartItems] =
//     useState([]);

//   const [cartTotal, setCartTotal] =
//     useState(0);

//   const [shippingCharge] =
//     useState(50);

//   const [discount, setDiscount] =
//     useState(0);

//   /* =========================
//       LOAD CART
//   ========================== */

//   useEffect(() => {

//     const storedCart =
//       localStorage.getItem(
//         "varuthathu_cart"
//       );

//     if (storedCart) {

//       setCartItems(
//         JSON.parse(storedCart)
//       );
//     }

//   }, []);

//   /* =========================
//       SAVE CART
//   ========================== */

//   useEffect(() => {

//     localStorage.setItem(
//       "varuthathu_cart",
//       JSON.stringify(cartItems)
//     );

//     calculateCartTotal();

//   }, [cartItems]);

//   /* =========================
//       CALCULATE TOTAL
//   ========================== */

//   const calculateCartTotal =
//     () => {

//       const total =
//         cartItems.reduce(
//           (acc, item) =>
//             acc +
//             item.price *
//               item.quantity,
//           0
//         );

//       setCartTotal(total);
//     };

//   /* =========================
//       ADD TO CART
//   ========================== */

//   const addToCart = (
//     product
//   ) => {

//     const existingProduct =
//       cartItems.find(
//         (item) =>
//           item._id ===
//           product._id
//       );

//     if (existingProduct) {

//       const updatedCart =
//         cartItems.map((item) =>
//           item._id ===
//           product._id
//             ? {
//                 ...item,
//                 quantity:
//                   item.quantity + 1,
//               }
//             : item
//         );

//       setCartItems(updatedCart);

//     } else {

//       setCartItems([
//         ...cartItems,
//         {
//           ...product,
//           quantity: 1,
//         },
//       ]);
//     }
//   };

//   /* =========================
//       REMOVE FROM CART
//   ========================== */

//   const removeFromCart =
//     (productId) => {

//       const updatedCart =
//         cartItems.filter(
//           (item) =>
//             item._id !==
//             productId
//         );

//       setCartItems(updatedCart);
//     };

//   /* =========================
//       UPDATE QUANTITY
//   ========================== */

//   const updateQuantity = (
//     productId,
//     type
//   ) => {

//     const updatedCart =
//       cartItems.map((item) => {

//         if (
//           item._id === productId
//         ) {

//           if (
//             type === "increase"
//           ) {

//             return {
//               ...item,
//               quantity:
//                 item.quantity + 1,
//             };
//           }

//           if (
//             type === "decrease"
//           ) {

//             return {
//               ...item,
//               quantity:
//                 item.quantity > 1
//                   ? item.quantity - 1
//                   : 1,
//             };
//           }
//         }

//         return item;
//       });

//     setCartItems(updatedCart);
//   };

//   /* =========================
//       CLEAR CART
//   ========================== */

//   const clearCart = () => {

//     setCartItems([]);

//     localStorage.removeItem(
//       "varuthathu_cart"
//     );
//   };

//   /* =========================
//       APPLY COUPON
//   ========================== */

//   const applyCoupon = (
//     couponCode
//   ) => {

//     if (
//       couponCode ===
//       "WELCOME10"
//     ) {

//       setDiscount(10);

//       return {
//         success: true,
//         message:
//           "Coupon Applied Successfully",
//       };
//     }

//     return {
//       success: false,
//       message:
//         "Invalid Coupon Code",
//     };
//   };

//   /* =========================
//       FINAL TOTAL
//   ========================== */

//   const finalTotal =
//     cartTotal +
//     shippingCharge -
//     discount;

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         cartTotal,
//         shippingCharge,
//         discount,
//         finalTotal,

//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//         applyCoupon,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;




import React, {
  createContext,
  useEffect,
  useState,
} from "react";

/* =========================
    CREATE CONTEXT
========================= */

export const CartContext =
  createContext();

/* =========================
    PROVIDER
========================= */

const CartProvider = ({
  children,
}) => {

  /* =========================
      STATES
  ========================== */

  const [cartItems,
    setCartItems] =
    useState([]);

  const [cartTotal,
    setCartTotal] =
    useState(0);

  const [shippingCharge] =
    useState(50);

  const [discount,
    setDiscount] =
    useState(0);

  /* =========================
      LOAD CART
  ========================== */

  useEffect(() => {

    const storedCart =
      localStorage.getItem(
        "varuthathu_cart"
      );

    if (storedCart) {

      setCartItems(
        JSON.parse(storedCart)
      );
    }

  }, []);

  /* =========================
      SAVE CART
  ========================== */

  useEffect(() => {

    localStorage.setItem(
      "varuthathu_cart",
      JSON.stringify(cartItems)
    );

    calculateCartTotal();

  }, [cartItems,calculateCartTotal]);

  /* =========================
      CALCULATE TOTAL
  ========================== */

  const calculateCartTotal =
    () => {

      const total =
        cartItems.reduce(
          (acc, item) => {

            return (
              acc +
              item.price *
                item.quantity
            );
          },
          0
        );

      setCartTotal(total);
    };

  /* =========================
      ADD TO CART
  ========================== */

  const addToCart =
    (product) => {

      const existingProduct =
        cartItems.find(
          (item) =>
            item._id ===
            product._id
        );

      if (existingProduct) {

        const updatedCart =
          cartItems.map(
            (item) => {

              if (
                item._id ===
                product._id
              ) {

                return {
                  ...item,
                  quantity:
                    item.quantity + 1,
                };
              }

              return item;
            }
          );

        setCartItems(
          updatedCart
        );

      } else {

        setCartItems([
          ...cartItems,
          {
            ...product,
            quantity: 1,
          },
        ]);
      }
    };

  /* =========================
      REMOVE FROM CART
  ========================== */

  const removeFromCart =
    (productId) => {

      const updatedCart =
        cartItems.filter(
          (item) =>
            item._id !==
            productId
        );

      setCartItems(
        updatedCart
      );
    };

  /* =========================
      UPDATE QUANTITY
  ========================== */

  const updateQuantity =
    (
      productId,
      type
    ) => {

      const updatedCart =
        cartItems.map(
          (item) => {

            if (
              item._id ===
              productId
            ) {

              if (
                type ===
                "increase"
              ) {

                return {
                  ...item,
                  quantity:
                    item.quantity + 1,
                };
              }

              if (
                type ===
                "decrease"
              ) {

                return {
                  ...item,
                  quantity:
                    item.quantity > 1
                      ? item.quantity - 1
                      : 1,
                };
              }
            }

            return item;
          }
        );

      setCartItems(
        updatedCart
      );
    };

  /* =========================
      CLEAR CART
  ========================== */

  const clearCart =
    () => {

      setCartItems([]);

      localStorage.removeItem(
        "varuthathu_cart"
      );
    };

  /* =========================
      APPLY COUPON
  ========================== */

  const applyCoupon =
    (couponCode) => {

      if (
        couponCode ===
        "WELCOME10"
      ) {

        setDiscount(10);

        return {
          success: true,
          message:
            "Coupon Applied Successfully",
        };
      }

      return {
        success: false,
        message:
          "Invalid Coupon Code",
      };
    };

  /* =========================
      FINAL TOTAL
  ========================== */

  const finalTotal =
    cartTotal +
    shippingCharge -
    discount;

  /* =========================
      CONTEXT VALUE
  ========================== */

  const value = {

    /* States */
    cartItems,
    cartTotal,
    shippingCharge,
    discount,
    finalTotal,

    /* Methods */
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    applyCoupon,
  };

  return (

    <CartContext.Provider
      value={value}
    >

      {children}

    </CartContext.Provider>
  );
};

export default CartProvider;