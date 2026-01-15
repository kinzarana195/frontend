import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HomeServices from "../Components/HomeServices";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import heroBg from "../assets/hero.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <>
      <section
        className="relative bg-cover bg-center h-[90vh]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-36 text-white text-center">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Empowering Businesses & Students <br />
            with Digital Solutions
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 mb-8"
          >
            We provide professional web development services and industry-level
            training programs to help you grow in the digital world.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex justify-center gap-4"
          >
            <a
              href="/contact"
              className="bg-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Get Started
            </a>

            <a
              href="/services"
              className="bg-gray-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="py-24 bg-gray-50">
        <HomeServices />
      </section>

      <section data-aos="fade-up" className="py-24 bg-white">
        <About />
      </section>

      <section data-aos="fade-up" className="py-24 bg-gray-50">
        <Testimonials />
      </section>

      <section data-aos="fade-up" className="py-24 bg-white">
        <Contact />
      </section>
    </>
  );
};

export default Home;
