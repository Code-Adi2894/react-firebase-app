// import './App.css'
import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";
import TodoApp from "./components/ToDoApp";

function App() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => console.log(isLoggedIn))

  return (
    <>
      {isLoggedIn ? (
        <TodoApp />
      ) : isNewUser ? (
        <SignupForm isNewUser={(data) => setIsNewUser(data)} />
      ) : (
        <LoginForm
          getIsNewUser={(data) => setIsNewUser(data)}
          getIsLoggedIn={(data) => setIsLoggedIn(data)}
        />
      )}
    </>
  );
}

export default App;
