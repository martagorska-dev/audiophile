// Format currency
export const formatPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return formattedPrice.replace("$", "$ ");
};

// Form validation functions
export const validateEmail = (email) =>
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email) ||
  "Invalid email format";

export const validatePhone = (phone) =>
  /^\d{3}-\d{3}-\d{3}$/.test(phone) || "Phone number must be 9 digits";

export const validateCode = (code) =>
  /^\d{2}-\d{3}$/.test(code) || "ZIP code must be 5 digits";

// Input format functions
export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, "");
  const formatted = cleaned.replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3");

  return formatted;
};

export const formatCode = (code) => {
  const cleaned = code.replace(/\D/g, "");
  const formatted = cleaned.replace(/(\d{2})(\d{3})/, "$1-$2");

  return formatted;
};

// Load cart from localStorage
export const loadCartFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage", error);
    return [];
  }
};

// Save cart to localStorage
export const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage", error);
  }
};

// Insert line break before last wordl
export const insertLineBreakBeforeLastWord = (text) => {
  const words = text.split(" ");

  if (words.length > 1) {
    const lastWord = words.pop();

    return words.join(" ") + "<br />" + lastWord;
  }

  return text;
};
