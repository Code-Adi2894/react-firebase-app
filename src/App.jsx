// import './App.css'
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";
import TodoApp from "./components/ToDoApp";
import NavBar from "./components/NavBar";

import { AuthContext } from "./AuthContext";

function App() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});


  return (
    <>
      {isLoggedIn ? (
        <AuthContext.Provider value={currentUser}>
          <NavBar />
          <TodoApp />
          </AuthContext.Provider>
      ) : isNewUser ? (
        <SignupForm isNewUser={(data) => setIsNewUser(data)} />
      ) : (
        <LoginForm
          getIsNewUser={(data) => setIsNewUser(data)}
          getIsLoggedIn={(data) => setIsLoggedIn(data)}
          getCurrentUser={(data) => setCurrentUser(data)}
        />
      )}
    </>
  );
}

export default App;
