import React, { useState } from "react";
import { app } from "../config/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const LoginForm = ({ getIsNewUser, getIsLoggedIn, getCurrentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can add authentication logic here
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        getCurrentUser(auth.currentUser)
        getIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    getIsNewUser(true);
  };


  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Login</h2>
      <div style={styles.inputContainer}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
          required
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>
        Login
      </button>
      <p>
        New user?{" "}
        <a
          id="create-accnt-button"
          onClick={handleCreateUser}
          style={{ cursor: "pointer" }}
        >
          Create account
        </a>
      </p>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: "300px",
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
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default LoginForm;
