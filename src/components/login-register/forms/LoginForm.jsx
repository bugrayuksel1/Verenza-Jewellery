import React from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import styles from "./styles/loginForm.module.css";

function LoginForm() {
  return (
    <form className={styles.container}>
      <Input type="email" name="email" label="e-mail: " />
      <Input type="password" name="password" label="Şifre: " />
      <Button>Giriş Yap</Button>
    </form>
  );
}

export default LoginForm;
