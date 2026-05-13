import { products } from "../../Data/Products";
import { testimonials } from "../../Data/testimonials";

import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

export default function VisitorLandingPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-3xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-black text-xl shadow-sm">
              S
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-slate-900">Sedap</p>
              <p className="text-xs text-slate-500">Food Delivery</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-emerald-600 transition">Home</a>
            <a href="#menu" className="hover:text-emerald-600 transition">Menu</a>
            <a href="#promo" className="hover:text-emerald-600 transition">Promo</a>
            <a href="#about" className="hover:text-emerald-600 transition">Tentang</a>
            <a href="#contact" className="hover:text-emerald-600 transition">Kontak</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="rounded-full border border-slate-300 bg-white px-5 py-2 text-slate-700 hover:border-emerald-400 hover:text-emerald-600 transition">
              Sign In
            </button>
            <button className="rounded-full bg-emerald-600 px-5 py-2 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="pt-28 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                #SedapDelivery - Segar, Cepat, Higienis
              </span>

              <div className="space-y-6">
                <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                  Nikmati Kelezatan Otentik di Setiap Gigitan.
                </h1>
                <p className="max-w-xl text-lg leading-8 text-slate-600">
                  Pesan makanan favoritmu dengan mudah, cepat, dan higienis langsung ke depan pintu rumahmu.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition">
                  Pesan Sekarang
                </a>
                <a href="#promo" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-700 hover:border-emerald-400 hover:text-emerald-600 transition">
                  Lihat Promo
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-2xl font-semibold text-emerald-600">4.8</p>
                  <p className="text-sm text-slate-500">Rating Pelanggan</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-2xl font-semibold text-emerald-600">30+</p>
                  <p className="text-sm text-slate-500">Daerah Terkirim</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-2xl font-semibold text-emerald-600">100%</p>
                  <p className="text-sm text-slate-500">Bahan Segar</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-emerald-200/60 blur-3xl"></div>
              <div className="absolute -right-10 bottom-10 h-44 w-44 rounded-full bg-slate-200/70 blur-3xl"></div>
              <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-emerald-500/10 to-slate-100 shadow-2xl ring-1 ring-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=1200&auto=format&fit=crop"
                  alt="Sedap food delivery"
                  className="h-[520px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Mengapa Sedap?</p>
              <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">Layanan Kuliner Modern untuk Setiap Kesempatan.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900">Tujuan</h3>
                <p className="mt-4 text-slate-600">Menghubungkan pecinta kuliner dengan rasa terbaik melalui pengalaman pesan yang cepat dan nyaman.</p>
              </div>
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900">Layanan</h3>
                <p className="mt-4 text-slate-600">Pengiriman instan & katering eksklusif untuk acara kecil hingga besar dengan pilihan menu premium.</p>
              </div>
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900">Keunggulan</h3>
                <p className="mt-4 text-slate-600">Bahan organik pilihan & koki profesional menjamin rasa otentik di setiap gigitan.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="promo" className="pb-20 px-6 bg-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Pilihan Favorit</p>
              <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">Menu Favorit</h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {products.slice(0, 3).map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-[32px] bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <img src={product.image} alt={product.name} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-slate-900">{product.name}</h3>
                    <p className="mt-3 text-lg font-semibold text-emerald-600">{product.price}</p>
                    <p className="mt-4 text-slate-500">Nikmati sajian istimewa dengan bahan segar dan rasa khas rumahan.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="review" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Apa Kata Mereka</p>
              <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">Testimonial Pelanggan</h2>
            </div>

            <div className="flex snap-x gap-6 overflow-x-auto pb-4">
              {testimonials.map((item) => (
                <article
                  key={item.id}
                  className="min-w-[280px] snap-start rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <div className="flex items-center gap-4">
                    <img src={item.avatar} alt={item.name} className="h-16 w-16 rounded-full object-cover" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                      <p className="text-sm text-emerald-600">★★★★★</p>
                    </div>
                  </div>
                  <p className="mt-5 text-slate-600">{item.review}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="bg-slate-950 text-slate-100 py-20 px-6">
          <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-3">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-500">Sedap</p>
              <h2 className="text-3xl font-bold">Nikmati Hidangan Spesial Tanpa Ribet.</h2>
              <p className="text-slate-400">Pesan sekarang dan rasakan layanan terbaik dengan dukungan pengiriman cepat dan bahan higienis.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-100">Kontak</h3>
              <ul className="space-y-3 text-slate-400">
                <li>Email: halo@sedap.id</li>
                <li>Telepon: +62 812 3456 7890</li>
                <li>Alamat: Jl. Kuliner No. 12, Jakarta</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-100">Partner</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <span className="rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-200">Cafe Fresh</span>
                <span className="rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-200">Rasa Nusantara</span>
                <span className="rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-200">Green Kitchen</span>
                <span className="rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-200">Urban Grill</span>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-slate-800 pt-6 text-sm text-slate-500 text-center">
            © 2026 Sedap. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
