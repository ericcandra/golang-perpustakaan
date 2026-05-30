import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

export default function Buku() {

  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [isbn, setIsbn] = useState("");
  const [judul, setJudul] = useState("");
  const [tahun, setTahun] = useState("");
  const [stok, setStok] = useState("");
  const [kategori, setKategori] = useState("");
  const [penulis, setPenulis] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [rak, setRak] = useState("");
  const [kondisi, setKondisi] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState<File | null>(null);

  const [showModal, setShowModal] = useState(false);

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

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  const tambahBuku = async () => {
  try {

    const formData = new FormData();

    formData.append("isbn", isbn);
    formData.append("judul_buku", judul);
    formData.append("tahun_terbit", tahun);
    formData.append("stok_buku", stok);

    formData.append("id_kategori_buku", "1");
    formData.append("id_penulis_buku", "1");
    formData.append("id_penerbit_buku", "1");

    formData.append("rak_buku", "A01");
    formData.append("deskripsi_buku", "Buku Baru");
    formData.append("kondisi_buku", "Baik");

    // backend wajib gambar_buku
    const blob = new Blob(["dummy"], {
      type: "image/png",
    });

    formData.append(
      "gambar_buku",
      blob,
      "cover.png"
    );

    await api.post(
      "/api/buku",
      formData,
      {
        headers: {
          Authorization:
            `Bearer ${localStorage.getItem("token")}`,
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

    alert("Buku berhasil ditambah");

    setIsbn("");
    setJudul("");
    setTahun("");
    setStok("");

    loadBooks();

  } catch (error: any) {

    console.log(error);

    if (error.response) {
      console.log(error.response.data);
    }

    alert("Gagal tambah buku");
  }
};

  const hapusBuku = async (id: number) => {

    if (!confirm("Hapus buku?")) return;

    try {

      await api.delete(
        `/api/buku?id=${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      loadBooks();

    } catch (error) {

      console.log(error);

      alert("Gagal hapus buku");
    }
  };


  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-6">
          Data Buku
        </h1>

        <div className="flex justify-end mb-6">
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
          >
            Tambah Buku
          </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl p-6 max-h-[90vh] overflow-y-auto">

              <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold">
                  Tambah Buku
                </h2>

                <button
                  onClick={() => setShowModal(false)}
                  className="text-red-600 text-2xl"
                >
                  ✖
                </button>

              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  placeholder="ISBN"
                  value={isbn}
                  onChange={(e)=>setIsbn(e.target.value)}
                  className="border p-3 rounded-xl"
                />

                <input
                  placeholder="Judul Buku"
                  value={judul}
                  onChange={(e)=>setJudul(e.target.value)}
                  className="border p-3 rounded-xl"
                />

                <input
                  placeholder="Tahun Terbit"
                  value={tahun}
                  onChange={(e)=>setTahun(e.target.value)}
                  className="border p-3 rounded-xl"
                />

                <input
                  placeholder="Stok Buku"
                  value={stok}
                  onChange={(e)=>setStok(e.target.value)}
                  className="border p-3 rounded-xl"
                />

                <input
                  placeholder="ID Kategori"
                  value={kategori}
                  onChange={(e)=>setKategori(e.target.value)}
                  className="border p-3 rounded-xl"
                />

                <input
                  placeholder="ID Penulis"
                  value={penulis}
                  onChange={(e)=>setPenulis(e.target.value)}
                  className="border p-3 rounded-xl"
                />

                <input
                  placeholder="ID Penerbit"
                  value={penerbit}
                  onChange={(e)=>setPenerbit(e.target.value)}
                  className="border p-3 rounded-xl"
                />

                <input
                  placeholder="Rak Buku"
                  value={rak}
                  onChange={(e)=>setRak(e.target.value)}
                  className="border p-3 rounded-xl"
                />

                <input
                  placeholder="Kondisi Buku"
                  value={kondisi}
                  onChange={(e)=>setKondisi(e.target.value)}
                  className="border p-3 rounded-xl"
                />

                <textarea
                  placeholder="Deskripsi Buku"
                  value={deskripsi}
                  onChange={(e)=>setDeskripsi(e.target.value)}
                  className="border p-3 rounded-xl md:col-span-2"
                />

                <input
                  type="file"
                  onChange={(e)=>
                    setGambar(
                      e.target.files
                        ? e.target.files[0]
                        : null
                    )
                  }
                  className="border p-3 rounded-xl md:col-span-2"
                />

              </div>

              <div className="flex justify-end gap-3 mt-6">

                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 px-5 py-3 rounded-xl"
                >
                  Batal
                </button>

                <button
                  onClick={async () => {
                    await tambahBuku();
                    setShowModal(false);
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
                >
                  Simpan Buku
                </button>

              </div>

            </div>

          </div>
        )}

        {loading ? (

          <div>Loading...</div>

        ) : (

          <div className="bg-white rounded-2xl shadow overflow-hidden">

            <table className="w-full">

              <thead className="bg-slate-900 text-white">

                <tr>

                  <th className="p-4">ISBN</th>
                  <th>Judul</th>
                  <th>Kategori</th>
                  <th>Penulis</th>
                  <th>Tahun</th>
                  <th>Stok buku</th>
                  <th>Rak buku</th>
                  <th>Deskripsi buku</th>
                  <th>Aksi</th>

                </tr>

              </thead>

              <tbody>

                {books.map((book) => (

                  <tr
                    key={book.id_buku}
                    className="border-b"
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
                      {book.penulis_buku?.penulis_buku}
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

                    <td>
                      {book.deskripsi_buku}
                    </td>

                    <td className="space-x-2">

  <button
    onClick={() => {
      setIsbn(book.isbn);
      setJudul(book.judul_buku);
      setTahun(book.tahun_terbit);
      setStok(book.stok_buku);
    }}
    className="
    bg-yellow-500
    text-white
    px-3
    py-2
    rounded-lg
    "
  >
    Edit
  </button>

  <button
    onClick={() => hapusBuku(book.id_buku)}
    className="
    bg-red-600
    text-white
    px-3
    py-2
    rounded-lg
    "
  >
    Hapus
  </button>

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