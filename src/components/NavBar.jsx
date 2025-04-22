import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

const NavBar = () => {
 const currentUser = useContext(AuthContext);
  const handleSignOut = () => {
  };

  return (
    <nav style={styles.nav}>
      <h2>MyApp</h2>
      <div style={styles.userSection}>
          <>
            <span style={styles.email}>{currentUser.email}</span>
            <button onClick={handleSignOut} style={styles.button}>
              Sign Out
            </button>
          </>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  userSection: { display: "flex", gap: "15px", alignItems: "center" },
  email: { fontSize: "16px" },
  button: {
    padding: "6px 12px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default NavBar;
