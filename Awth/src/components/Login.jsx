import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Email/Password Authentication
  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in successfully with Google!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>

      {/* Email/Password Login */}
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleEmailLogin}>Login with Email</button>
      </div>

      <hr />

      {/* Google Login */}
      <div>
        <button onClick={handleGoogleLogin}>Login with Google</button>
      </div>

      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
