import React from "react";
import aboutImg1 from "../assets/about1.jpg";

const AboutIntro = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

        <div data-aos="fade-right">
          <p className="text-blue-600 font-semibold tracking-wide mb-3">
            ABOUT US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Empowering Businesses <br /> Through Technology
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            TeqTronics is an IT solutions and training company focused on
            delivering modern digital services and industry-ready skills.
          </p>
        </div>

        <div data-aos="fade-left">
          <img
            src={aboutImg1}
            alt="About TeqTronics"
            className="w-full h-[420px] object-cover rounded-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutIntro;
