import React, { useState, useRef } from "react";
import { app } from "../config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const SignupForm = ({ isNewUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    // Add sign-up logic here (e.g., send data to backend)
    formRef.current.reset();
    await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    ).then(() => {
      console.log("New user created", formData);
    });
  };

  const handleGoToLogin = (e) => {
    e.preventDefault();
    isNewUser(false);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form} ref={formRef}>
      <h2>Sign Up</h2>
      <div style={styles.inputContainer}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>
        Sign Up
      </button>
      <p>
        Already a user?{" "}
        <a
          id="go-to-login-button"
          onClick={handleGoToLogin}
          style={{ cursor: "pointer" }}
        >
          Login
        </a>
      </p>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: "350px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  inputContainer: { marginBottom: "10px" },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default SignupForm;
