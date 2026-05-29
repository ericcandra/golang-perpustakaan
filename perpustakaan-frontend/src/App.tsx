import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Buku from "./pages/Buku";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardSiswa from "./pages/DashboardSiswa";
import Katalog from "./pages/Katalog";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
        path="/dashboard-siswa"
        element={<DashboardSiswa />}
        />

        <Route
        path="/katalog"
        element={<Katalog />}
        />

        <Route
          path="/buku"
          element={
            <ProtectedRoute>
              <Buku />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;