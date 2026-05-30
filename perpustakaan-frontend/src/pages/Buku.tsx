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

      setBooks(
        response.data.data.records
      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-6">
          Data Buku
        </h1>

        {loading ? (

          <div className="bg-white p-6 rounded-xl shadow">
            Loading...
          </div>

        ) : (

          <div className="bg-white rounded-2xl shadow overflow-hidden">

            <table className="w-full">

              <thead className="bg-slate-900 text-white">

                <tr>

                  <th className="p-4">ISBN</th>
                  <th>Judul Buku</th>
                  <th>Kategori</th>
                  <th>Penulis</th>
                  <th>Tahun</th>
                  <th>Stok</th>

                </tr>

              </thead>

              <tbody>

                {books.map((book) => (

                  <tr
                    key={book.id_buku}
                    className="border-b hover:bg-slate-50"
                  >

                    <td className="p-4">
                      {book.isbn}
                    </td>

                    <td>
                      {book.judul_buku}
                    </td>

                    <td>
                      {book.kategori_buku?.jenis_buku}
                    </td>

                    <td>
                      {book.penulis_buku?.penulis}
                    </td>

                    <td>
                      {book.tahun_terbit}
                    </td>

                    <td>
                      {book.stok_buku}
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