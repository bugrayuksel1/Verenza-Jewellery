import { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import styles from "./styles/loginForm.module.css";
import { validateEmail, validatePassword } from "../../../utils/validation";
import axios from "axios";

function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    general: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") {
      setError((prev) => ({
        ...prev,
        email: validateEmail(value),
      }));
    }
    if (name === "password") {
      setError((prev) => ({
        ...prev,
        password: validatePassword(value),
      }));
    }
    if (name === "confirmPassword") {
      setError((prev) => ({
        ...prev,
        confirmPassword:
          value !== formData.password ? "Şifreler eşleşmiyor" : "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Şifre kontrolü
    if (formData.password !== formData.confirmPassword) {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Şifreler eşleşmiyor",
      }));
      return; // İşlemi durdur
    }

    setIsLoading(true);

    try {
      // Mevcut kullanıcıları kontrol et
      const control = await axios.get(
        `http://localhost:3000/users?email=${formData.email}`
      );
      if (control.data.length > 0) {
        setError((prev) => ({
          ...prev,
          email: "Bu e-posta adresi zaten kullanılıyor",
        }));
        setIsLoading(false);
        return; // İşlemi durdur
      }

      // Yeni kullanıcıyı ekle
      const response = await axios.post(
        "http://localhost:3000/users",
        formData
      );
      console.log("Kayıt başarılı", response.data);
    } catch (error) {
      console.error("Bir hata oluştu:", error);
      setError((prev) => ({
        ...prev,
        general: "Bir hata oluştu. Lütfen tekrar deneyin.",
      }));
    }

    setIsLoading(false);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        <Input
          type="text"
          name="fullName"
          label="Adı Soyadı: "
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          label="e-mail: "
          value={formData.email}
          onChange={handleChange}
          required
        />
        {error.email && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
            {error.email}
          </p>
        )}
        <Input
          type="password"
          name="password"
          label="Şifre: "
          value={formData.password}
          onChange={handleChange}
          required
        />
        {error.password && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
            {error.password}
          </p>
        )}
        <Input
          type="password"
          name="confirmPassword"
          label="Şifre Tekrar: "
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {error.confirmPassword && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
            {error.confirmPassword}
          </p>
        )}
        {error.general && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
            {error.general}
          </p>
        )}
      </div>
      <div className={styles.button}>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Kayıt yapılıyor" : "Kayıt Ol"}
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
