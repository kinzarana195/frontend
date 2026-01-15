import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Raza",
      role: "Business Owner",
      message:
        "TeqTronics helped us build a professional website that increased our online presence. Their team is very cooperative and skilled."
    },
    {
      name: "Sara Khan",
      role: "Web Development Student",
      message:
        "The training program was very practical and easy to understand. I gained real-world skills and confidence."
    },
    {
      name: "Usman Ali",
      role: "Startup Founder",
      message:
        "Excellent services and professional support. Highly recommended for startups and businesses."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-600">
            Trusted by businesses and students across Pakistan.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />

              <p className="text-gray-600 mb-6">
                "{item.message}"
              </p>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">
                  {item.name}
                </h4>
                <span className="text-sm text-gray-500">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
