import React, { useEffect } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaGraduationCap,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeServices = () => {
  const services = [
    { 
      icon: <FaLaptopCode />, 
      title: "Web Development", 
      desc: "Modern responsive websites built with industry-standard tech. We create custom designs, optimize for SEO, and ensure fast, secure, and mobile-friendly websites that scale with your business." 
    },
    { 
      icon: <FaMobileAlt />, 
      title: "App Development", 
      desc: "High-performance mobile apps for Android & iOS. We focus on user experience, seamless integration with APIs, and maintaining high performance for both startups and enterprises."  
    },
    { 
      icon: <FaBullhorn />, 
      title: "Digital Marketing", 
      desc: "SEO, advertising, and social media marketing. We help businesses increase visibility, drive traffic, run paid campaigns, and convert visitors into loyal customers through data-driven strategies."  
    },
    { 
      icon: <FaGraduationCap />, 
      title: "Professional Training", 
      desc: "Industry-focused IT training programs. Our courses cover web, mobile, and software development, digital marketing, cloud technologies, and provide hands-on experience to boost career growth." 
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <section id="services" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          data-aos="fade-up"
        >
          Services We Can Help You With
        </h2>
        <p 
          className="text-gray-700 mb-16 max-w-2xl mx-auto text-lg md:text-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our Team comprises of developers, software engineers, and digital marketers, making our services diverse and exceptional.
        </p>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-10 border-2 border-blue-600 rounded-3xl hover:shadow-2xl transition bg-white"
              data-aos="zoom-in"
              data-aos-delay={index * 200} // stagger animation
            >
              <div className="text-6xl text-blue-600 mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base md:text-lg">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
