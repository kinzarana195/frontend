import React from "react";
import { useLocation } from "react-router-dom";

const Enroll = () => {
  const query = new URLSearchParams(useLocation().search);
  const course = query.get("course");

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 bg-white rounded-2xl shadow-xl p-10">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Enroll Now
        </h1>

        <p className="text-gray-600 mb-8">
          You are enrolling in:
          <span className="block mt-2 text-xl font-semibold text-blue-600">
            {course}
          </span>
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border px-4 py-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border px-4 py-3 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full border px-4 py-3 rounded-lg"
          />

          <textarea
            rows="4"
            placeholder="Any message (optional)"
            className="w-full border px-4 py-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                `https://wa.me/923XXXXXXXXX?text=I want to enroll in ${course}`;
            }}
          >
            Submit & Contact
          </button>
        </form>
      </div>
    </section>
  );
};

export default Enroll;
