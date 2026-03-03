import React from "react";
import aiImage from "../assets/ai-hero.png";

function HomePage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-pink-50 to-blue-50 flex items-center overflow-hidden">

      {/* BACKGROUND GLOW BLOBS */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-pink-200 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-200 rounded-full blur-[120px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
            NTCPL-AI
          </h1>

          <h2 className="mt-4 text-3xl md:text-4xl text-blue-700 font-semibold">
            Intelligent AI Infrastructure
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            AI-powered tools for training, surveys, and intelligent operations.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={aiImage}
            alt="AI Visual"
            className="rounded-2xl shadow-2xl w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default HomePage;