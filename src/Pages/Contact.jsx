import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
<section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* Left Side Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaPhone className="text-blue-600 text-2xl" />
            <p>+92 300 1234567</p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <p>info@teqtronics.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            <p>Faisalabad, Pakistan</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
