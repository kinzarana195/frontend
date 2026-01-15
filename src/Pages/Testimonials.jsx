import React, { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Raza",
      role: "Business Owner",
      message:
        "TeqTronics helped us build a professional website that increased our online presence. Their team is very cooperative and skilled.",
      avatar: "https://i.pravatar.cc/100?img=1", 
    },
    {
      name: "Sara Khan",
      role: "Web Development Student",
      message:
        "The training program was very practical and easy to understand. I gained real-world skills and confidence.",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Usman Ali",
      role: "Startup Founder",
      message:
        "Excellent services and professional support. Highly recommended for startups and businesses.",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
            Trusted by businesses and students across Pakistan. We help transform ideas into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative">
          {testimonials.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200} 
              className="bg-white rounded-3xl p-8 shadow-xl transform hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 relative z-10"
            >
              <div className="absolute -top-6 left-6 bg-blue-600 text-white p-4 rounded-full shadow-lg">
                <FaQuoteLeft className="text-2xl" />
              </div>

              <p className="text-gray-700 mt-6 mb-6 text-lg leading-relaxed">
                {item.message}
              </p>

              <div className="flex items-center gap-4 mt-6 border-t pt-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
