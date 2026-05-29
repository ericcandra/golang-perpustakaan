import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [role, setRole] = useState("admin");

  const handleLogin = () => {

    localStorage.setItem("token", "login");

    localStorage.setItem("role", role);

    if (role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/dashboard-siswa");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">

          <div className="text-6xl mb-3">
            📚
          </div>

          <h1 className="text-3xl font-bold">
            Library System
          </h1>

        </div>

        <input
          placeholder="Username"
          className="w-full border p-4 rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-4 rounded-xl mb-4"
        />

        <select
          className="w-full border p-4 rounded-xl mb-6"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">
            Admin
          </option>

          <option value="siswa">
            Siswa
          </option>
        </select>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-4 rounded-xl"
        >
          Login
        </button>

      </div>

    </div>
  );
}