import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas públicas
import Login from "./pages/Login";
import Register from "./pages/Register";

// Panel (Dashboard)
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Ebooks from "./pages/dashboard/Ebooks";
import MiniEbooks from "./pages/dashboard/MiniEbooks";
import Presentaciones from "./pages/dashboard/Presentaciones";
import PdfTools from "./pages/dashboard/PdfTools";
import Logos from "./pages/dashboard/Logos";
import Historias from "./pages/dashboard/Historias";
import Creditos from "./pages/dashboard/Creditos";
import Configuracion from "./pages/dashboard/Configuracion";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Rutas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas del panel */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="ebooks" element={<Ebooks />} />
          <Route path="mini-ebooks" element={<MiniEbooks />} />
          <Route path="presentaciones" element={<Presentaciones />} />
          <Route path="pdf-tools" element={<PdfTools />} />
          <Route path="logos" element={<Logos />} />
          <Route path="historias" element={<Historias />} />
          <Route path="creditos" element={<Creditos />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Route>

      </Routes>
    </Router>
  );
}

