import React from "react";
import Card from "../ui/Card";
import LoginForm from "./forms/LoginForm";
import { Link } from "react-router-dom";
import styles from "./styles/loginPage.module.css";
import RegisterForm from "./forms/RegisterForm";

function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <Card>
          <h1>Kaydolun</h1>
          <p>
            Hesabınız var mı?
            <Link to="/login" className={styles.link}>
              Giriş Yap
            </Link>
          </p>
          <div className={styles.form}>
            <RegisterForm />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default RegisterPage;
