import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

export default function Dashboard() {

  const [totalBuku, setTotalBuku] = useState(0);

  useEffect(() => {
    getTotalBooks();
  }, []);

  const getTotalBooks = async () => {

    try {

      const response = await api.get("/api/buku");

      setTotalBuku(
        response.data.data.length
      );

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow">

            <p>Total Buku</p>

            <h2 className="text-5xl font-bold mt-3">
              {totalBuku}
            </h2>

          </div>

        </div>

      </div>

    </div>
  );
}