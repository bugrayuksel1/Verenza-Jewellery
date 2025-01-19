import React from "react";
import Card from "../ui/Card";
import LoginForm from "./forms/LoginForm";
import { Link } from "react-router-dom";
import styles from "./styles/loginPage.module.css";
function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <Card>
          <h1>Giriş Yapın</h1>
          <p>
            Hesabınız yok mu?
            <Link to="/register" className={styles.link}>
              Kayıt Ol
            </Link>
          </p>
          <div className={styles.form}>
            <LoginForm />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default LoginPage;
