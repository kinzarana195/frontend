import React from "react";
import AboutIntro from "../Components/AboutIntro";
import Footer from "../Components/Footer";
import aboutImg2 from "../assets/about2.png";
import processImg from "../assets/about3.png";
import WhyChoose from "./WhyChoose";

const About = () => {
  return (
    <section id="about" className="bg-white">
      <AboutIntro />
      <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

        <div data-aos="fade-right">
          <img
            src={aboutImg2}
            alt="Who We Are"
            className="w-full h-[420px] object-cover rounded-xl"
          />
        </div>

        <div data-aos="fade-left">
          <p className="text-blue-600 font-semibold tracking-wide mb-3">
            WHO WE ARE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A Team Built on Innovation & Quality
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We are designers, developers, and mentors passionate about
            creating meaningful digital experiences.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our approach focuses on clarity, performance, and long-term
            success for our clients and students.
          </p>
        </div>
      </div>

      <WhyChoose />

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

          <div data-aos="fade-right">
            <p className="text-blue-600 font-semibold tracking-wide mb-3">
              OUR PROCESS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              How We Bring Ideas to Life
            </h2>

            <div className="space-y-8 border-l-2 border-blue-600 pl-8">
              {[
                ["Idea & Research", "Understanding goals and planning strategy."],
                ["Design", "Crafting clean and intuitive interfaces."],
                ["Development", "Building scalable and secure solutions."],
                ["Deployment", "Launching with performance optimization."]
              ].map(([title, desc], i) => (
                <div key={i}>
                  <h4 className="font-semibold text-lg text-gray-900">
                    {title}
                  </h4>
                  <p className="text-gray-600">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left">
            <img
              src={processImg}
              alt="Process"
              className="w-full h-[450px] object-cover rounded-xl"
            />
          </div>

        </div>
      </div>
    <Footer />
    </section>
  );
};

export default About;
