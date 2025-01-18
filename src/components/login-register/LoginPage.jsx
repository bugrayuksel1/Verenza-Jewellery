import React from "react";
import Card from "../ui/Card";
import LoginForm from "./forms/LoginForm";
import { Link } from "react-router-dom";
import styles from "./styles/loginPage.module.css";
function LoginPage() {
  return (
    <div className={styles.container}>
      <Card>
        <LoginForm />
        <p>
          Hesabınız Yok Mu? <Link to="register">Kayıt Ol</Link>
        </p>
      </Card>
    </div>
  );
}

export default LoginPage;
