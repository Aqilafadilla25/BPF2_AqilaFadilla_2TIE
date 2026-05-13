import { products } from "../Data/Products";
import { testimonials } from "../Data/testimonials";

import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

export default function VisitorPage() {
  return (
    <div className="pt-20">



      {/* HERO */}
      <section
        id="home"
        className="pt-36 pb-24 px-6 bg-gradient-to-br from-orange-50 to-pink-50"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              #1 Food Delivery
            </span>

            <h1 className="text-6xl font-black leading-tight mt-6">
              Nikmati Makanan Favoritmu
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Foodies membantu kamu menemukan makanan terbaik.
            </p>

            <button className="mt-8 px-7 py-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white">
              Pesan Sekarang
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
              alt="food"
              className="rounded-[40px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-white">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Tentang Foodies
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-orange-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-3">
                Tujuan
              </h3>

              <p>
                Membantu pengguna menemukan makanan favorit.
              </p>
            </div>

            <div className="bg-pink-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-3">
                Layanan
              </h3>

              <p>
                Delivery cepat dan promo menarik.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-3">
                Keunggulan
              </h3>

              <p>
                UI modern dan responsive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="menu" className="py-24 px-6 bg-orange-50">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16">
            Menu Favorit
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    {product.name}
                  </h3>

                  <p className="text-orange-500 mt-2">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section id="review" className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16">
            Review Pelanggan
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-[#fff8f2] p-8 rounded-3xl"
              >
                <div className="flex items-center gap-4 mb-5">

                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-16 h-16 rounded-full"
                  />

                  <div>
                    <h4 className="font-bold">
                      {item.name}
                    </h4>

                    <p>★★★★★</p>
                  </div>
                </div>

                <p>{item.review}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-[#1e1e1e] text-white py-16 px-6"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Foodies
            </h2>

            <p className="text-gray-400">
              Platform makanan modern terbaik.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-5">
              Kontak
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Email: support@foodies.com</li>
              <li>Phone: +62 812 3456 7890</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-5">
              Social Media
            </h3>

            <div className="flex gap-5 text-2xl">

              <FaInstagram />
              <FaFacebook />
              <FaTwitter />

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}