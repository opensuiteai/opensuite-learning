import { useState } from "react";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    try {
      const res = await api.post("/auth/login", { email, password });
      console.log("Login OK:", res.data);
      alert("Login exitoso!");
    } catch (err) {
      setError(err.response?.data?.detail || "Error en login");
    }
  };

  return (
    <div style={{ padding: 50 }}>
      <h1>Login</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        placeholder="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}

