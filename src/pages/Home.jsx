import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Home.css"; 

function Home() {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Welcome to <span>DEV@Deakin!!!</span> </h1>
        <p>You are now successfully logged in!</p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Home;
