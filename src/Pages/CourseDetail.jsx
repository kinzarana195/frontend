import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../Data/Coursesdata"; 

const CourseDetail = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);
    const navigate = useNavigate();

  if (!course) return <p className="text-center mt-20">Course not found</p>;

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 bg-white shadow-xl rounded-2xl p-10">
        
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">{course.title}</h1>
          <p className="text-gray-600 mt-2">{course.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div>
            <p><span className="font-semibold">Duration:</span> {course.duration}</p>
            <p><span className="font-semibold">Level:</span> {course.level}</p>
            <p><span className="font-semibold">Price:</span> {course.price}</p>
            <p><span className="font-semibold">Mode:</span> Online & On Campus</p>
            <p><span className="font-semibold">Class Timing:</span> To be mutually decided</p>
          </div>
          <div className="text-center">
            <img
              src={course.image}
              alt={course.title}
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits of this course</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {course.benefits?.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Modules & Skills Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Modules</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {course.modules.map((mod, i) => (
                  <li key={i}>{mod}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Skills & Tools</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {course.skills?.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
                {course.tools?.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
<button
  onClick={() =>
                navigate(`/enroll?course=${encodeURIComponent(course.title)}`)
          }
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition"
        >
          Enroll Now
</button>       
      </div>
    </section>
  );
};

export default CourseDetail;
