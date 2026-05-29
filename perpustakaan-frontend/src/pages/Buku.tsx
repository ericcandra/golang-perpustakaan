import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

export default function Buku() {

  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {

      const response = await api.get("/api/buku");

      console.log(response.data);

      setBooks(response.data.data || []);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-4 md:p-6 lg:p-8">

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            Data Buku
          </h1>

        </div>

        {loading ? (

          <div className="bg-white p-6 rounded-xl shadow">
            Loading...
          </div>

        ) : (

          <div className="bg-white rounded-xl shadow overflow-hidden">

            <table className="w-full">

              <thead className="bg-slate-900 text-white">

                <tr>
                  <th className="p-4">ISBN</th>
                  <th>Judul</th>
                  <th>Tahun</th>
                  <th>Stok</th>
                  <th>Rak</th>
                </tr>

              </thead>

              <tbody>

                {books.map((book: any) => (

                  <tr
                    key={book.id}
                    className="border-b"
                  >

                    <td className="p-4">
                      {book.isbn}
                    </td>

                    <td>
                      {book.judul_buku}
                    </td>

                    <td>
                      {book.tahun_terbit}
                    </td>

                    <td>
                      {book.stok_buku}
                    </td>

                    <td>
                      {book.rak_buku}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  );
}