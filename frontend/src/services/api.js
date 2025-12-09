
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8001", // luego lo cambiamos a tu dominio
});

export default api;
