import { Outlet, Link } from "react-router-dom";

export default function VisitorLayout() {
  return (
    <div className="w-full min-h-screen bg-white text-slate-900 text-left">
      {/* 1. NAVIGATION BAR (20 Poin) */}
      

      {/* AREA KONTEN UTAMA (Hero, Menu, Testimoni akan muncul di sini) */}
      <main className="w-full">
        <Outlet />
      </main>

      {/* 6. FOOTER (10 Poin) */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-6">Sedap<span className="text-emerald-400">.</span></h3>
            <p className="text-slate-400 max-w-sm mb-6">Menyajikan kelezatan bintang lima langsung ke meja makanmu. Cepat, sehat, dan terpercaya.</p>
            <div className="flex gap-4">
              {/* Social Media Placeholder */}
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 transition cursor-pointer">IG</div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 transition cursor-pointer">TW</div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 transition cursor-pointer">FB</div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>support@sedap.com</li>
              <li>+62 812 3456 7890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Partner Kami</h4>
            <div className="grid grid-cols-2 gap-4 grayscale opacity-50">
              <span className="text-xs font-bold border border-slate-700 p-2 text-center rounded">FOODIES</span>
              <span className="text-xs font-bold border border-slate-700 p-2 text-center rounded">GRABFOOD</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; 2026 Sedap App. UTS Pemrograman Web.
        </div>
      </footer>
    </div>
  );
}