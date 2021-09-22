import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import PostIndex from "./posts/PostIndex";
import Auth from "./auth/Auth";
import background from "../src/InstaPet-background.svg";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <PostIndex clearToken={clearToken} token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div
      className="App"
      style={{
        background: sessionToken ? "#dbf9ff" : `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {protectedViews()}
    </div>
  );
}

export default App;
