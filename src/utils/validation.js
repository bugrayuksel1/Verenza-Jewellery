export const validateEmail = (email) => {
  if (!email) return "e-mail alanı zorunludur.";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? "" : "Geçersiz e-posta adresi";
};

export const validatePassword = (password) => {
  if (!password) return "Şifre alanı zorunludur.";
  return password.length >= 6 ? "" : "Şifre en az 6 karakter olmalı";
};

export const validatePhone = (phone) => {
  if (!phone) return "Telefon alanı zorunludur.";
  const re = /^[0-9]{10}$/;
  return re.test(String(phone)) ? "" : "Geçersiz telefon numarası";
};
