import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Buku from "./pages/Buku";
import DashboardSiswa from "./pages/DashboardSiswa";
import Katalog from "./pages/Katalog";

import ProtectedRoute from "./components/ProtectedRoute";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
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
            element={
              <ProtectedRoute>
                <DashboardSiswa />
              </ProtectedRoute>
            }
          />

          <Route
            path="/katalog"
            element={
              <ProtectedRoute>
                <Katalog />
              </ProtectedRoute>
            }
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
    </ThemeProvider>
  );
}

export default App;