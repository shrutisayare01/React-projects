import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* NAVBAR */}
      <nav className="bg-white shadow p-4">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="p-6 md:p-12 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold 
                         bg-gradient-to-r from-blue-500 to-purple-600 
                         bg-clip-text text-transparent">
            Build Fast with Tailwind CSS
          </h2>

          <p className="mt-4 text-gray-600">
            Utility-first CSS framework for modern React apps.
          </p>

          <button className="mt-6 px-6 py-2 rounded bg-gray-200 
                             hover:bg-gray-300 active:bg-gray-400 transition">
            Get Started
          </button>
        </div>

        <div className="rounded-lg shadow-lg overflow-hidden 
                        transform transition hover:scale-105">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Hero"
            className="w-full"
          />
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="p-6 md:p-12">
        <h3 className="text-2xl font-bold mb-6">Features</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded shadow p-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="card"
                className="rounded mb-4"
              />
              <h4 className="font-bold text-lg">Card {item}</h4>
              <p className="text-gray-600 text-sm mt-2">
                Responsive card component using Tailwind.
              </p>
              <button className="mt-4 px-4 py-2 rounded bg-gray-200 
                                 hover:bg-gray-300 active:bg-gray-400">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* LIST */}
      <section className="p-6 md:p-12">
        <h3 className="text-2xl font-bold mb-4">Why Tailwind?</h3>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li className="hover:text-blue-600">Utility-first CSS</li>
          <li className="hover:text-blue-600">Responsive design</li>
          <li className="hover:text-blue-600">Easy customization</li>
        </ul>
      </section>

      {/* TABLE */}
      <section className="p-6 md:p-12 overflow-x-auto">
        <h3 className="text-2xl font-bold mb-4">Pricing</h3>

        <table className="w-full bg-white border">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Plan</th>
              <th className="border p-2">Users</th>
              <th className="border p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Basic", "1", "$10"],
              ["Pro", "5", "$25"],
              ["Team", "10", "$50"],
              ["Enterprise", "Unlimited", "$99"],
            ].map((row, index) => (
              <tr key={index} className="odd:bg-gray-50 hover:bg-gray-100">
                {row.map((cell, i) => (
                  <td key={i} className="border p-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* FORM */}
      <section className="p-6 md:p-12 max-w-xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>

        <form className="bg-white p-6 rounded shadow space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full py-2 rounded bg-gray-200 
                       hover:bg-gray-300 active:bg-gray-400 transition"
          >
            Submit
          </button>
        </form>
      </section>

    </div>
  );
}

export default App;
