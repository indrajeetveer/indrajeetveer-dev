import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="flex min-h-[80vh] items-center justify-center px-6">
        <div className="grid w-full max-w-6xl items-center gap-10 md:grid-cols-2">

          {/* Left Content */}
          <div>
            <p className="mb-4 text-lg font-semibold text-sky-500">
              Welcome to Our Store
            </p>

            <h1 className="text-5xl font-bold leading-tight text-gray-800 md:text-6xl">
              Find Everything
              <span className="text-sky-500"> You Love</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-7 text-gray-600">
              Explore our collection of quality products at great prices.
              Find your favorite products and discover something new.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="mt-8 rounded-lg bg-sky-500 px-7 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-sky-600 hover:shadow-lg"
            >
              Explore Products →
            </button>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="flex h-80 w-80 items-center justify-center rounded-full bg-sky-200 shadow-lg">
              <span className="text-8xl">🛍️</span>
            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-6 py-16">
        <h2 className="text-center text-3xl font-bold text-gray-800">
          Why Shop With Us?
        </h2>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-gray-50 p-6 text-center shadow-sm">
            <div className="text-4xl">🚚</div>
            <h3 className="mt-4 text-xl font-bold">Fast Delivery</h3>
            <p className="mt-2 text-gray-600">
              Get your products delivered quickly to your doorstep.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-6 text-center shadow-sm">
            <div className="text-4xl">⭐</div>
            <h3 className="mt-4 text-xl font-bold">Quality Products</h3>
            <p className="mt-2 text-gray-600">
              Browse a collection of carefully selected products.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-6 text-center shadow-sm">
            <div className="text-4xl">🔒</div>
            <h3 className="mt-4 text-xl font-bold">Secure Shopping</h3>
            <p className="mt-2 text-gray-600">
              Enjoy a simple and secure shopping experience.
            </p>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-sky-500 px-6 py-14 text-center text-white">
        <h2 className="text-3xl font-bold">
          Ready to Explore?
        </h2>

        <p className="mt-3 text-lg">
          Check out our products and find your next favorite item.
        </p>

        <button
          onClick={() => navigate("/products")}
          className="mt-6 rounded-lg bg-white px-7 py-3 font-bold text-sky-500 transition hover:bg-gray-100"
        >
          View Products
        </button>
      </section>

    </div>
  );
};

export default Home;
