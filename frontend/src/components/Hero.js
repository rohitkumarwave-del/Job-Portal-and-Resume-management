// src/components/Hero.js
export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Find Your Dream Job Now
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          5 lakh+ jobs for freshers & experienced | Apply in 1 click
        </p>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-3 bg-white p-2 rounded-lg shadow-xl">
          <input
            type="text"
            placeholder="Job title, skills, company"
            className="flex-1 px-5 py-3 text-gray-800 rounded focus:outline-none"
          />
          <input
            type="text"
            placeholder="Location"
            className="flex-1 px-5 py-3 text-gray-800 rounded focus:outline-none"
          />
          <button className="bg-[var(--primary)] text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition">
            Search Jobs
          </button>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          <span className="bg-white/20 px-4 py-1 rounded-full">IT Jobs</span>
          <span className="bg-white/20 px-4 py-1 rounded-full">Sales</span>
          <span className="bg-white/20 px-4 py-1 rounded-full">Work From Home</span>
          <span className="bg-white/20 px-4 py-1 rounded-full">Fresher Jobs</span>
        </div>
      </div>
    </div>
  );
}