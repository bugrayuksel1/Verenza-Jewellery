import styles from "./styles/button.module.css";
const Button = ({ children, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.buttonContainer}
    >
      {children}
    </button>
  );
};

export default Button;
