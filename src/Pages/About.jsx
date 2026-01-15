import React from "react";
import aboutImg1 from "../assets/about1.jpg"; 
import aboutImg2 from "../assets/about2.png"; 
import aboutImg3 from "../assets/about3.png"; 
import aboutImg4 from "../assets/about4.png"; 

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE: Text + Stats */}
        <div data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About TeqTronics
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
            We are a professional IT solutions and training provider committed to empowering businesses and students with the latest digital skills. Our goal is to provide quality services and hands-on learning to help you succeed in the digital world.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow text-center">
              <h2 className="text-3xl font-bold text-blue-600">200+</h2>
              <p className="text-gray-600 mt-1">Projects Completed</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow text-center">
              <h2 className="text-3xl font-bold text-blue-600">500+</h2>
              <p className="text-gray-600 mt-1">Students Trained</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow text-center">
              <h2 className="text-3xl font-bold text-blue-600">10+</h2>
              <p className="text-gray-600 mt-1">Years Experience</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow text-center">
              <h2 className="text-3xl font-bold text-blue-600">50+</h2>
              <p className="text-gray-600 mt-1">Expert Trainers</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Staggered Images like Enablers */}
        <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
          <img
            src={aboutImg1}
            alt="Team"
            className="w-full h-[180px] md:h-[220px] rounded-lg shadow-lg object-cover"
          />
          <img
            src={aboutImg2}
            alt="Office"
            className="w-full h-[180px] md:h-[220px] rounded-lg shadow-lg object-cover mt-6 md:mt-12"
          />
          <img
            src={aboutImg3}
            alt="Project"
            className="w-full h-[180px] md:h-[220px] rounded-lg shadow-lg object-cover"
          />
          <img
            src={aboutImg4}
            alt="Training"
            className="w-full h-[180px] md:h-[220px] rounded-lg shadow-lg object-cover mt-6 md:mt-12"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
