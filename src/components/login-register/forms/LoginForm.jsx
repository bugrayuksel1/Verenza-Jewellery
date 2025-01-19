import React, { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import styles from "./styles/loginForm.module.css";
import { validateEmail, validatePassword } from "../../../utils/validation";
import users from "../../../../db.json";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({});

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const user = users.users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      console.log("giriş başarılı");
      console.log("email: ", user.email);
    } else {
      setError({ email: "email ya da şifre hatalı" });
      console.log("email ya da şifre hatalı");
    }
    setIsLoading(false);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        <Input
          type="email"
          name="email"
          label="e-mail: "
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          label="Şifre: "
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.button}>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "giriş yapılıyor" : "Giriş yap"}
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
