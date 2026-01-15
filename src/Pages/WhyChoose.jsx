import React from "react";
import { FaUsers, FaLightbulb, FaHandsHelping, FaAward } from "react-icons/fa";
import chooseImg from "../assets/about4.png"; 

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
      desc: "Hands-on projects that prepare you for real industry challenges."
    },
    {
      icon: <FaHandsHelping />,
      title: "Support & Mentorship",
      desc: "Continuous guidance to help you grow with confidence."
    },
    {
      icon: <FaAward />,
      title: "Industry Recognition",
      desc: "Certificates valued by companies and organizations."
    }
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center px-30">

        <div data-aos="fade-right">
          <p className="text-blue-600 font-semibold tracking-wide mb-3">
            WHY CHOOSE US
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Why Students & Businesses Trust Us
          </h2>

          <div className="space-y-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 items-start group"
              >
                <div className="text-blue-600 text-3xl transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div data-aos="fade-left">
<img
            src={chooseImg}
            alt="Why Choose Us"
            className="w-full h-[420px] object-cover rounded-xl"
          />
          
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
