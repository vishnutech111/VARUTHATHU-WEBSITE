// /* ===================================
//    VALIDATE EMAIL
// =================================== */

// export const validateEmail =
//   (email) => {

//     const emailRegex =
//       /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!email) {

//       return "Email is required";
//     }

//     if (
//       !emailRegex.test(email)
//     ) {

//       return "Invalid email address";
//     }

//     return "";
//   };

// /* ===================================
//    VALIDATE PASSWORD
// =================================== */

// export const validatePassword =
//   (password) => {

//     if (!password) {

//       return "Password is required";
//     }

//     if (
//       password.length < 6
//     ) {

//       return "Password must be at least 6 characters";
//     }

//     return "";
//   };

// /* ===================================
//    VALIDATE NAME
// =================================== */

// export const validateName =
//   (name) => {

//     if (!name) {

//       return "Name is required";
//     }

//     if (
//       name.trim().length < 3
//     ) {

//       return "Name must be at least 3 characters";
//     }

//     return "";
//   };

// /* ===================================
//    VALIDATE PHONE NUMBER
// =================================== */

// export const validatePhone =
//   (phone) => {

//     const phoneRegex =
//       /^[6-9]\d{9}$/;

//     if (!phone) {

//       return "Phone number is required";
//     }

//     if (
//       !phoneRegex.test(phone)
//     ) {

//       return "Invalid phone number";
//     }

//     return "";
//   };

// /* ===================================
//    VALIDATE REQUIRED FIELD
// =================================== */

// export const validateRequired =
//   (
//     value,
//     fieldName =
//       "This field"
//   ) => {

//     if (
//       !value ||
//       value.trim() === ""
//     ) {

//       return `${fieldName} is required`;
//     }

//     return "";
//   };

// /* ===================================
//    VALIDATE PINCODE
// =================================== */

// export const validatePincode =
//   (pincode) => {

//     const pincodeRegex =
//       /^[1-9][0-9]{5}$/;

//     if (!pincode) {

//       return "Pincode is required";
//     }

//     if (
//       !pincodeRegex.test(
//         pincode
//       )
//     ) {

//       return "Invalid pincode";
//     }

//     return "";
//   };

// /* ===================================
//    VALIDATE ADDRESS
// =================================== */

// export const validateAddress =
//   (address) => {

//     if (!address) {

//       return "Address is required";
//     }

//     if (
//       address.trim().length <
//       10
//     ) {

//       return "Address is too short";
//     }

//     return "";
//   };

// /* ===================================
//    VALIDATE PRODUCT NAME
// =================================== */

// export const validateProductName =
//   (productName) => {

//     if (!productName) {

//       return "Product name is required";
//     }

//     if (
//       productName.trim()
//         .length < 3
//     ) {

//       return "Product name must be at least 3 characters";
//     }

//     return "";
//   };

// /* ===================================
//    VALIDATE PRODUCT PRICE
// =================================== */

// export const validatePrice =
//   (price) => {

//     if (
//       price === "" ||
//       price === null
//     ) {

//       return "Price is required";
//     }

//     if (
//       Number(price) <= 0
//     ) {

//       return "Price must be greater than 0";
//     }

//     return "";
//   };

// /* ===================================
//    VALIDATE PRODUCT STOCK
// =================================== */

// export const validateStock =
//   (stock) => {

//     if (
//       stock === "" ||
//       stock === null
//     ) {

//       return "Stock is required";
//     }

//     if (
//       Number(stock) < 0
//     ) {

//       return "Stock cannot be negative";
//     }

//     return "";
//   };

// /* ===================================
//    VALIDATE IMAGE FILE
// =================================== */

// export const validateImage =
//   (file) => {

//     if (!file) {

//       return "Image is required";
//     }

//     const allowedTypes = [
//       "image/jpeg",
//       "image/png",
//       "image/jpg",
//       "image/webp",
//     ];

//     if (
//       !allowedTypes.includes(
//         file.type
//       )
//     ) {

//       return "Only JPG, PNG and WEBP files are allowed";
//     }

//     const maxSize =
//       2 * 1024 * 1024;

//     if (
//       file.size > maxSize
//     ) {

//       return "Image size must be less than 2MB";
//     }

//     return "";
//   };

// /* ===================================
//    VALIDATE LOGIN FORM
// =================================== */

// export const validateLoginForm =
//   (formData) => {

//     const errors = {};

//     const emailError =
//       validateEmail(
//         formData.email
//       );

//     const passwordError =
//       validatePassword(
//         formData.password
//       );

//     if (emailError) {

//       errors.email =
//         emailError;
//     }

//     if (
//       passwordError
//     ) {

//       errors.password =
//         passwordError;
//     }

//     return errors;
//   };

// /* ===================================
//    VALIDATE SIGNUP FORM
// =================================== */

// export const validateSignupForm =
//   (formData) => {

//     const errors = {};

//     const nameError =
//       validateName(
//         formData.name
//       );

//     const emailError =
//       validateEmail(
//         formData.email
//       );

//     const phoneError =
//       validatePhone(
//         formData.phone
//       );

//     const passwordError =
//       validatePassword(
//         formData.password
//       );

//     if (nameError) {

//       errors.name =
//         nameError;
//     }

//     if (emailError) {

//       errors.email =
//         emailError;
//     }

//     if (phoneError) {

//       errors.phone =
//         phoneError;
//     }

//     if (
//       passwordError
//     ) {

//       errors.password =
//         passwordError;
//     }

//     return errors;
//   };

// /* ===================================
//    CHECK FORM VALIDITY
// =================================== */

// export const isFormValid =
//   (errors) => {

//     return (
//       Object.keys(errors)
//         .length === 0
//     );
//   };




/* =========================================
   VALIDATE EMAIL
========================================= */

export const validateEmail = (
  email
) => {

  if (!email) {

    return {
      valid: false,
      message:
        "Email is required",
    };
  }

  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValid =
    regex.test(email);

  return {
    valid: isValid,
    message: isValid
      ? ""
      : "Invalid email address",
  };
};

/* =========================================
   VALIDATE PHONE NUMBER
========================================= */

export const validatePhone = (
  phone
) => {

  if (!phone) {

    return {
      valid: false,
      message:
        "Phone number is required",
    };
  }

  const regex =
    /^[6-9]\d{9}$/;

  const isValid =
    regex.test(phone);

  return {
    valid: isValid,
    message: isValid
      ? ""
      : "Invalid phone number",
  };
};

/* =========================================
   VALIDATE PASSWORD
========================================= */

export const validatePassword = (
  password
) => {

  if (!password) {

    return {
      valid: false,
      message:
        "Password is required",
    };
  }

  if (
    password.length < 6
  ) {

    return {
      valid: false,
      message:
        "Password must be at least 6 characters",
    };
  }

  return {
    valid: true,
    message: "",
  };
};

/* =========================================
   VALIDATE CONFIRM PASSWORD
========================================= */

export const validateConfirmPassword = (
  password,
  confirmPassword
) => {

  if (!confirmPassword) {

    return {
      valid: false,
      message:
        "Confirm password is required",
    };
  }

  if (
    password !==
    confirmPassword
  ) {

    return {
      valid: false,
      message:
        "Passwords do not match",
    };
  }

  return {
    valid: true,
    message: "",
  };
};

/* =========================================
   VALIDATE REQUIRED FIELD
========================================= */

export const validateRequired = (
  value,
  fieldName = "Field"
) => {

  if (
    !value ||
    value.trim() === ""
  ) {

    return {
      valid: false,
      message: `${fieldName} is required`,
    };
  }

  return {
    valid: true,
    message: "",
  };
};

/* =========================================
   VALIDATE NAME
========================================= */

export const validateName = (
  name
) => {

  if (!name) {

    return {
      valid: false,
      message:
        "Name is required",
    };
  }

  if (
    name.trim().length < 3
  ) {

    return {
      valid: false,
      message:
        "Name must be at least 3 characters",
    };
  }

  return {
    valid: true,
    message: "",
  };
};

/* =========================================
   VALIDATE PRODUCT PRICE
========================================= */

export const validatePrice = (
  price
) => {

  if (
    price === "" ||
    price === null
  ) {

    return {
      valid: false,
      message:
        "Price is required",
    };
  }

  if (
    isNaN(price) ||
    Number(price) <= 0
  ) {

    return {
      valid: false,
      message:
        "Price must be greater than 0",
    };
  }

  return {
    valid: true,
    message: "",
  };
};

/* =========================================
   VALIDATE STOCK
========================================= */

export const validateStock = (
  stock
) => {

  if (
    stock === "" ||
    stock === null
  ) {

    return {
      valid: false,
      message:
        "Stock is required",
    };
  }

  if (
    isNaN(stock) ||
    Number(stock) < 0
  ) {

    return {
      valid: false,
      message:
        "Invalid stock value",
    };
  }

  return {
    valid: true,
    message: "",
  };
};

/* =========================================
   VALIDATE IMAGE URL
========================================= */

export const validateImageUrl = (
  url
) => {

  if (!url) {

    return {
      valid: false,
      message:
        "Image URL is required",
    };
  }

  const regex =
    /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))/i;

  const isValid =
    regex.test(url);

  return {
    valid: isValid,
    message: isValid
      ? ""
      : "Invalid image URL",
  };
};

/* =========================================
   VALIDATE PINCODE
========================================= */

export const validatePincode = (
  pincode
) => {

  if (!pincode) {

    return {
      valid: false,
      message:
        "Pincode is required",
    };
  }

  const regex =
    /^[1-9][0-9]{5}$/;

  const isValid =
    regex.test(pincode);

  return {
    valid: isValid,
    message: isValid
      ? ""
      : "Invalid pincode",
  };
};

/* =========================================
   VALIDATE ADDRESS
========================================= */

export const validateAddress = (
  address
) => {

  if (!address) {

    return {
      valid: false,
      message:
        "Address is required",
    };
  }

  if (
    address.trim().length < 10
  ) {

    return {
      valid: false,
      message:
        "Address must be at least 10 characters",
    };
  }

  return {
    valid: true,
    message: "",
  };
};

/* =========================================
   VALIDATE FORM
========================================= */

export const validateForm = (
  validations = []
) => {

  for (
    let validation of validations
  ) {

    if (!validation.valid) {

      return validation;
    }
  }

  return {
    valid: true,
    message: "",
  };
};