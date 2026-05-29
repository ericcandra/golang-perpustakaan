import SidebarSiswa from "../components/SidebarSiswa";

export default function Katalog() {

  const books = [
    {
      judul: "Belajar Golang",
      penulis: "Afrizal"
    },
    {
      judul: "React Modern",
      penulis: "Erick"
    },
    {
      judul: "TypeScript",
      penulis: "Admin"
    }
  ];

  return (
    <div className="flex bg-slate-100 min-h-screen">

      <SidebarSiswa />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Katalog Buku
        </h1>

        <div className="grid md:grid-cols-3 gap-5">

          {books.map((book, index) => (

            <div
              key={index}
              className="
              bg-white
              p-6
              rounded-2xl
              shadow
              "
            >

              <h2 className="font-bold text-xl">
                {book.judul}
              </h2>

              <p className="text-gray-500 mt-2">
                {book.penulis}
              </p>

              <button
                className="
                mt-4
                bg-green-600
                text-white
                px-4
                py-2
                rounded
                "
              >
                Pinjam Buku
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}