import React, { useState } from "react";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailReq, setEmailReq] = useState(false);
  const [passwordReq, setPasswordReq] = useState(false);
  const navigate = useNavigate();

  const cardContent = {
    padding: "30px 40px"
  };

  const loginCard = {
    width: "400px",
    height: "400px",
    boxShadow: "0px 3px 6px rgba(0,0,0,0.16)",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    marginBottom: "15px"
  };

  const btnStyle = {
    width: "100px",
    borderRadius: "8px",
    backgroundColor: "#20065f",
    color: "#fff",
    margin: "25px auto",
    display: "flex",
    justifyContent: "center"
  };

  const container = {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  };

  const login = () => {
    if (email !== "" && password !== "") {
      if (
        email == "task@gmail.com" &&
        password == "12345678" &&
        password.length >= 8
      ) {
        localStorage.setItem("username", "task@gmail.com");
        localStorage.setItem("password", 12345678);
        navigate("/");
        props.setAuthenticated(true);
      }
    } else {
      setEmailReq(true);
      setPasswordReq(true);
    }
  };

  const onPressEnter = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };
  return (
    <div style={container}>
      <Card style={loginCard}>
        <h1 style={{ textAlign: "center" }}>LOGIN</h1>
        <CardContent style={cardContent}>
          <TextField
            margin="normal"
            label="Email Id"
            value={email}
            fullWidth
            required
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => onPressEnter(e)}
            error={emailReq && email === ""}
          />
          <TextField
            margin="normal"
            label="Password"
            value={password}
            fullWidth
            required
            helperText={
              password.length > 0 && password.length < 8
                ? "Password must have atleast 8 character"
                : ""
            }
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => onPressEnter(e)}
            error={
              (passwordReq && password === "") ||
              (password.lenght > 0 && password.length < 8)
            }
          />
          <Button
            variant="contained"
            size="medium"
            onClick={() => login()}
            style={btnStyle}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
