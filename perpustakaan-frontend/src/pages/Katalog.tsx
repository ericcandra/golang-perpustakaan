import { useEffect, useState } from "react";
import SidebarSiswa from "../components/SidebarSiswa";
import api from "../services/api";

export default function Katalog() {

  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {

      const response = await api.get("/api/buku");

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

      <SidebarSiswa />

      <div className="flex-1 p-4 md:p-6 lg:p-8">

        <div className="mb-6">

          <h1 className="text-4xl font-bold">
            Katalog Buku
          </h1>

          <p className="text-gray-500 mt-2">
            Daftar buku yang tersedia di perpustakaan
          </p>

        </div>

        {/* Search */}

        <input
          type="text"
          placeholder="Cari judul buku..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          w-full
          md:w-96
          p-3
          border
          rounded-xl
          mb-6
          bg-white
          "
        />

        {loading ? (

          <div className="bg-white p-6 rounded-xl shadow">
            Loading data buku...
          </div>

        ) : (

          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {books
              .filter((book) =>
                book.judul_buku
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((book) => (

                <div
                  key={book.id_buku}
                  className="
                  bg-white
                  rounded-2xl
                  shadow
                  overflow-hidden
                  hover:shadow-lg
                  transition
                  "
                >

                  <div className="h-48 bg-green-100 flex items-center justify-center">

                    <span className="text-6xl">
                      📚
                    </span>

                  </div>

                  <div className="p-5">

                    <h2 className="font-bold text-xl mb-2">
                      {book.judul_buku}
                    </h2>

                    <p className="text-gray-500 mb-2">
                      Penulis:
                      {" "}
                      {book.penulis_buku?.penulis}
                    </p>

                    <p className="text-sm text-gray-500">
                      ISBN:
                      {" "}
                      {book.isbn}
                    </p>

                    <p className="text-sm text-gray-500">
                      Tahun:
                      {" "}
                      {book.tahun_terbit}
                    </p>

                    <p className="text-sm text-gray-500">
                      Kategori:
                      {" "}
                      {book.kategori_buku?.jenis_buku}
                    </p>

                    <p className="text-sm text-gray-500">
                      Stok:
                      {" "}
                      {book.stok_buku}
                    </p>

                    <button
                      className="
                      mt-4
                      w-full
                      bg-green-600
                      hover:bg-green-700
                      text-white
                      p-3
                      rounded-xl
                      "
                    >
                      Pinjam Buku
                    </button>

                  </div>

                </div>

              ))}

          </div>

        )}

      </div>

    </div>
  );
}