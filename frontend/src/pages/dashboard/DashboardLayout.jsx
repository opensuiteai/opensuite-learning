import { Outlet, Link } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-white shadow-lg p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-4">OpenSuite</h2>

        <nav className="space-y-2">
          <Link to="/dashboard">🏠 Inicio</Link>
          <Link to="/dashboard/ebooks">📚 Ebooks</Link>
          <Link to="/dashboard/mini-ebooks">📘 Mini Ebooks</Link>
          <Link to="/dashboard/presentaciones">📊 Presentaciones</Link>
          <Link to="/dashboard/pdf-tools">📝 PDF Tools</Link>
          <Link to="/dashboard/logos">🎨 Logos</Link>
          <Link to="/dashboard/historias">📖 Historias</Link>
          <Link to="/dashboard/creditos">⚡ Créditos</Link>
          <Link to="/dashboard/configuracion">⚙️ Configuración</Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
