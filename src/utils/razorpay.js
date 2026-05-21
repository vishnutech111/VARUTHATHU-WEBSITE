/* ===================================
   LOAD RAZORPAY SDK
=================================== */

export const loadRazorpayScript =
  () => {

    return new Promise(
      (resolve) => {

        const existingScript =
          document.getElementById(
            "razorpay-sdk"
          );

        /* Already Loaded */
        if (
          existingScript
        ) {

          resolve(true);

          return;
        }

        /* Create Script */
        const script =
          document.createElement(
            "script"
          );

        script.id =
          "razorpay-sdk";

        script.src =
          "https://checkout.razorpay.com/v1/checkout.js";

        script.async = true;

        /* Success */
        script.onload =
          () => {

            resolve(true);
          };

        /* Failed */
        script.onerror =
          () => {

            resolve(false);
          };

        document.body.appendChild(
          script
        );
      }
    );
  };

/* ===================================
   OPEN RAZORPAY PAYMENT
=================================== */

export const openRazorpay = ({
  key,
  amount,
  currency = "INR",
  name = "Varuthathu",
  description = "Snack Purchase",
  image,
  orderId,
  customerName,
  customerEmail,
  customerPhone,
  onSuccess,
  onFailure,
}) => {

  /* Razorpay Not Loaded */
  if (
    !window.Razorpay
  ) {

    alert(
      "Razorpay SDK failed to load"
    );

    return;
  }

  /* Options */
  const options = {

    key,

    amount,

    currency,

    name,

    description,

    image,

    order_id: orderId,

    handler:
      function (response) {

        if (onSuccess) {

          onSuccess(response);
        }
      },

    prefill: {

      name:
        customerName,

      email:
        customerEmail,

      contact:
        customerPhone,
    },

    notes: {

      brand:
        "Varuthathu",
    },

    theme: {

      color:
        "#f7c600",
    },

    modal: {

      ondismiss:
        function () {

          if (
            onFailure
          ) {

            onFailure(
              "Payment cancelled"
            );
          }
        },
    },
  };

  /* Open Razorpay */
  const paymentObject =
    new window.Razorpay(
      options
    );

  /* Payment Failed */
  paymentObject.on(
    "payment.failed",
    function (response) {

      if (onFailure) {

        onFailure(
          response.error
            ?.description ||
            "Payment failed"
        );
      }
    }
  );

  paymentObject.open();
};

/* ===================================
   VERIFY PAYMENT SIGNATURE
=================================== */

export const verifyPaymentData =
  (paymentResponse) => {

    if (
      !paymentResponse
    ) {

      return false;
    }

    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    } = paymentResponse;

    return (
      razorpay_payment_id &&
      razorpay_order_id &&
      razorpay_signature
    );
  };




/* =========================================
   LOAD RAZORPAY SCRIPT
========================================= */

// const initializeRazorpay =
//   () => {

//     return new Promise(
//       (resolve) => {

//         /* Check Existing Script */

//         const existingScript =
//           document.getElementById(
//             "razorpay-script"
//           );

//         if (
//           existingScript
//         ) {

//           resolve(true);

//           return;
//         }

//         /* Create Script */

//         const script =
//           document.createElement(
//             "script"
//           );

//         script.src =
//           "https://checkout.razorpay.com/v1/checkout.js";

//         script.id =
//           "razorpay-script";

//         script.async = true;

//         /* Success */

//         script.onload =
//           () => {

//             resolve(true);
//           };

//         /* Failed */

//         script.onerror =
//           () => {

//             resolve(false);
//           };

//         /* Append */

//         document.body.appendChild(
//           script
//         );
//       }
//     );
//   };

// export default initializeRazorpay;