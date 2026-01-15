import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";
import webImg from "../assets/training1.jfif";
import cyberImg from "../assets/training2.jfif";
import marketingImg from "../assets/training4.jfif";
import ccnaImg from "../assets/training3.jfif";

const Trainings = () => {
  const navigate = useNavigate();

  const trainings = [
    {
      title: "Web Development Bootcamp",
      slug: "web-development",
      image: webImg,
      duration: "3 Months",
      level: "Beginner - Advanced",
      price: "22,900 PKR",
      desc: "Learn HTML, CSS, JavaScript, React, Node.js, and launch your career as a web developer.",
    },
    {
      title: "Cyber Security",
      slug: "cyber-security",
      image: cyberImg,
      duration: "2.5 Months",
      level: "Beginner – Intermediate",
      price: "22,900 PKR",
      desc: "Master network security, ethical hacking, penetration testing, and protect systems from attacks.",
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      image: marketingImg,
      duration: "2 Months",
      level: "Beginner",
      price: "22,900 PKR",
      desc: "Learn SEO, social media marketing, Google Ads, content marketing, and analytics.",
    },
    {
      title: "CCNA Certification",
      slug: "ccna",
      image: ccnaImg,
      duration: "3 Months",
      level: "Beginner – Intermediate",
      price: "22,900 PKR",
      desc: "Gain practical networking skills, configure routers & switches, and prepare for CCNA certification.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Training Programs
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Industry-focused programs designed to help you gain real-world skills and build a successful career.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {trainings.map((course, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  {course.duration}
                </span>
              </div>

              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">Level: {course.level}</p>
                <p className="text-gray-600 mb-6">{course.desc}</p>

                <button
                  onClick={() => navigate(`/trainings/${course.slug}`)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
          <Footer />
          </div>
    </section>
  );
};

export default Trainings;
