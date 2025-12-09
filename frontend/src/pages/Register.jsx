import { useState } from "react";
import api from "../services/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async () => {
    setError("");
    setSuccess("");

    if (password !== confirm) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const res = await api.post("/auth/register", { email, password });
      console.log("Registro OK:", res.data);
      setSuccess("Cuenta creada exitosamente 🎉");
    } catch (err) {
      setError(err.response?.data?.detail || "Error al registrar usuario");
    }
  };

  return (
    <div style={{ padding: 50 }}>
      <h1>Registro</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

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

      <input
        placeholder="Confirmar contraseña"
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <br />

      <button onClick={handleRegister}>Crear Cuenta</button>
    </div>
  );
}

