import React, { useEffect } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaGraduationCap,
  FaPaintBrush,
  FaShoppingCart,
  FaCloud,
  FaUserTie
} from "react-icons/fa";
import servicesImg from "../assets/services.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
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
      icon: <FaPaintBrush />, 
      title: "UI / UX Design", 
      desc: "User-centric design for better engagement. Our team creates intuitive interfaces, visually appealing layouts, and interactive experiences that increase conversion and customer satisfaction." 
    },
    { 
      icon: <FaShoppingCart />, 
      title: "E-Commerce Solutions", 
      desc: "Secure and scalable online store solutions. From product catalog design, payment gateway integration, to order management systems, we provide a complete e-commerce platform." 
    },
    { 
      icon: <FaBullhorn />, 
      title: "Digital Marketing", 
      desc: "SEO, advertising, and social media marketing. We help businesses increase visibility, drive traffic, run paid campaigns, and convert visitors into loyal customers through data-driven strategies." 
    },
    { 
      icon: <FaCloud />, 
      title: "Cloud Solutions", 
      desc: "Cloud setup, deployment, and management. We provide scalable cloud infrastructures, data storage solutions, backup systems, and help your business leverage cloud computing efficiently." 
    },
    { 
      icon: <FaUserTie />, 
      title: "IT Consulting", 
      desc: "Expert advice to grow your digital strategy. We analyze your business needs, suggest technology solutions, improve processes, and help implement IT systems that maximize efficiency and ROI." 
    },
    { 
      icon: <FaGraduationCap />, 
      title: "Professional Training", 
      desc: "Industry-focused IT training programs. Our courses cover web, mobile, and software development, digital marketing, cloud technologies, and provide hands-on experience to boost career growth." 
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <>
      <section
        className="relative bg-cover bg-center h-96 md:h-[500px]"
        style={{ backgroundImage: `url(${servicesImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
            data-aos="fade-down"
          >
            Our Services
          </h1>
        </div>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-6" data-aos="fade-up">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We help businesses succeed digitally with professional solutions
            and bespoke services tailored to your goals. Our team of developers, designers, and marketers ensures high-quality delivery.
          </p>
        </div>
      </section>

      <section className="py-30 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-10 border-2 border-blue-500 rounded-3xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 bg-white"
                data-aos="zoom-in"
                data-aos-delay={i * 200} 
              >
                <div className="text-7xl text-blue-600 mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600 text-center text-white" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition text-lg md:text-xl"
        >
          Contact Us
        </a>
      </section>
    </>
  );
};

export default Services;
