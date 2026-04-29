import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
            {/* Ilustrasi atau Ikon Besar */}
            <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">404</h1>
            
            <div className="bg-white px-2 text-sm rounded rotate-12 absolute border border-blue-600 text-blue-600 font-bold">
                Halaman Tidak Ditemukan
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">
                    Waduh! Sepertinya kamu tersesat.
                </h2>
                <p className="mt-4 text-gray-500 max-w-md">
                    Maaf, halaman yang kamu cari tidak ada atau mungkin telah dipindahkan ke dimensi lain.
                </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                {/* Tombol Kembali ke Beranda */}
                <Link
                    to="/"
                    className="px-6 py-3 text-white font-medium bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
                >
                    Kembali ke Beranda
                </Link>
                
                {/* Tombol Hubungi Bantuan (Opsional) */}
                <button 
                    onClick={() => window.history.back()}
                    className="px-6 py-3 text-blue-600 font-medium border border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200"
                >
                    Kembali ke Sebelumnya
                </button>
            </div>

            {/* Elemen Dekoratif */}
            <div className="mt-16 text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Nama Aplikasi Kamu
            </div>
        </div>
    );
}