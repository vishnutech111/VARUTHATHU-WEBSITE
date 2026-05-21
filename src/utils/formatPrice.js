/* ===================================
   FORMAT PRICE FUNCTION
=================================== */

const formatPrice = (
  amount,
  currency = "INR"
) => {

  /* Invalid Amount */
  if (
    amount === null ||
    amount === undefined ||
    isNaN(amount)
  ) {

    return "₹0";
  }

  /* Convert to Number */
  const price =
    Number(amount);

  /* INR FORMAT */
  if (currency === "INR") {

    return new Intl.NumberFormat(
      "en-IN",
      {
        style: "currency",
        currency: "INR",

        maximumFractionDigits: 0,
      }
    ).format(price);
  }

  /* USD FORMAT */
  if (currency === "USD") {

    return new Intl.NumberFormat(
      "en-US",
      {
        style: "currency",
        currency: "USD",
      }
    ).format(price);
  }

  /* DEFAULT FORMAT */
  return new Intl.NumberFormat(
    "en-IN"
  ).format(price);
};

export default formatPrice;