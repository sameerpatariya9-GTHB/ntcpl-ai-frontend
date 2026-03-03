import React from "react";

function ServicesPage() {
  return (
    <section className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Scalable AI-powered solutions designed to transform operations,
            automate workflows, and enable intelligent decision-making.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="group bg-gradient-to-br from-white to-blue-50 border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-900">
              Intelligent Training Systems
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              AI-driven learning environments that adapt, assess, and scale
              across enterprise ecosystems.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group bg-gradient-to-br from-white to-pink-50 border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-900">
              Smart Survey Automation
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Intelligent survey engines with real-time analytics and automated
              insight generation.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group bg-gradient-to-br from-white to-indigo-50 border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-900">
              Catalogue Intelligence
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Upload product data, automate link generation, and manage
              digital catalog workflows with AI precision.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ServicesPage;