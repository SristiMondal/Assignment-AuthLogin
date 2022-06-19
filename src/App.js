import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Login from "./Component/Login";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if (username == "task@gmail.com" && password == "12345678") {
      setAuthenticated(true);
    }
  });

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            authenticated ? (
              <Navigate replace to="/" />
            ) : (
              <Login
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            )
          }
        />
        <Route
          path="/"
          element={
            authenticated ? (
              <Dashboard
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;
