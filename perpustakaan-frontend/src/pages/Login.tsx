import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    if (role === "siswa") {

      localStorage.setItem("token", "siswa-login");
      localStorage.setItem("role", "siswa");

      navigate("/dashboard-siswa");

      return;
    }

    try {

      setLoading(true);

      const res = await api.post("/loginadmin", {
        username,
        password,
      });

      console.log("LOGIN RESPONSE");
      alert(JSON.stringify(res.data));
      console.log(res.data);

      const token =
        res.data.access_token ||
        res.data.token ||
        res.data.data?.access_token;

      const refreshToken =
        res.data.refresh_token ||
        res.data.data?.refresh_token;

      if (!token) {
        alert("Username atau Password salah");
        return;
      }

      localStorage.setItem("token", token);

      if (refreshToken) {
        localStorage.setItem(
          "refresh_token",
          refreshToken
        );
      }

      localStorage.setItem("role", "admin");

      navigate("/dashboard");

    } catch (error: any) {

      console.log("ERROR :", error);

      console.log("RESPONSE :", error.response);

      console.log("DATA :", error.response?.data);

      alert(
        JSON.stringify(
          error.response?.data || error.message
        )
      );
      
    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center p-4">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">

          <div className="text-6xl mb-3">
            📚
          </div>

          <h1 className="text-3xl font-bold">
            Library System
          </h1>

          <p className="text-gray-500 mt-2">
            Sistem Informasi Perpustakaan
          </p>

        </div>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="w-full border p-4 rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-4 rounded-xl mb-4"
        />

        <select
          className="w-full border p-4 rounded-xl mb-6"
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
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
          disabled={loading}
          className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            p-4
            rounded-xl
            font-semibold
            transition
          "
        >
          {loading ? "Loading..." : "Login"}
        </button>

      </div>

    </div>
  );
}