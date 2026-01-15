import React from "react";
import { FaUsers, FaLightbulb, FaHandsHelping, FaAward } from "react-icons/fa";

const WhyChoose = () => {
  const features = [
    {
      icon: <FaUsers />,
      title: "Expert Trainers",
      desc: "Learn from industry professionals with real-world experience."
    },
    {
      icon: <FaLightbulb />,
      title: "Practical Learning",
      desc: "Hands-on projects and practical examples for better understanding."
    },
    {
      icon: <FaHandsHelping />,
      title: "Support & Mentorship",
      desc: "Dedicated guidance and support throughout the course."
    },
    {
      icon: <FaAward />,
      title: "Industry Recognition",
      desc: "Certificates recognized by top companies and organizations."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-gray-600">
            We provide the best training and digital services to help you succeed.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border rounded-xl border-blue-700 hover:shadow-lg transition text-center">
              <div className="text-4xl text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
