import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const url = isLogin
        ? "http://localhost:8080/api/users/login"
        : "http://localhost:8080/api/users/register";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        const message = await response.text();
        alert(message);
        return;
      }

      if (isLogin) {
        localStorage.setItem("username", username);
        navigate("/dashboard");
      } else {
        alert("Registration Successful");
        setIsLogin(true);
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      alert("Unable to connect to server.");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Product Store</h1>
        <p className="subtitle">
          React + Spring Boot + PostgreSQL
        </p>

        <form onSubmit={handleSubmit}>

          <label>Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {!isLogin && (
            <>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </>
          )}

          <button type="submit">
            {isLogin ? "Login" : "Register"}
          </button>

        </form>

        <div className="switch-mode">

          {isLogin ? (
            <>
              Don't have an account?
              <span onClick={() => setIsLogin(false)}>
                Register
              </span>
            </>
          ) : (
            <>
              Already have an account?
              <span onClick={() => setIsLogin(true)}>
                Login
              </span>
            </>
          )}

        </div>

      </div>
    </div>
  );
}

export default LoginPage;