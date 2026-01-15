import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../Data/CoursesData"; 
import { FaClock, FaSignal, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";

const CourseDetail = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);
  const navigate = useNavigate();

  if (!course) return <p className="text-center mt-20 text-gray-700 text-xl">Course not found</p>;

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            {course.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {course.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <div className="flex items-center gap-3">
              <FaClock className="text-blue-600 text-xl" />
              <p><span className="font-semibold">Duration:</span> {course.duration}</p>
            </div>
            <div className="flex items-center gap-3">
              <FaSignal className="text-blue-600 text-xl" />
              <p><span className="font-semibold">Level:</span> {course.level}</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMoneyBillWave className="text-blue-600 text-xl" />
              <p><span className="font-semibold">Price:</span> {course.price}</p>
            </div>
            <div className="flex items-center gap-3">
              <p><span className="font-semibold">Mode:</span> On Campus</p>
            </div>
            <div className="flex items-center gap-3">
              <p><span className="font-semibold">Class Timing:</span> To be mutually decided</p>
            </div>
          </div>

          <div className="text-center">
            <img
              src={course.image}
              alt={course.title}
              className="rounded-3xl shadow-xl w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of this Course</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {course.benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-3 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="text-gray-700">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Modules & Skills Covered</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-semibold text-xl mb-4 text-blue-600">Modules</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {course.modules.map((mod, i) => <li key={i}>{mod}</li>)}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-semibold text-xl mb-4 text-blue-600">Skills & Tools</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {course.skills?.map((skill, i) => <li key={i}>{skill}</li>)}
                {course.tools?.map((tool, i) => <li key={i}>{tool}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() =>
              navigate(`/enroll?course=${encodeURIComponent(course.title)}`)
            }
            className="px-12 py-4 text-xl font-semibold rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition shadow-lg"
          >
            Enroll Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default CourseDetail;
