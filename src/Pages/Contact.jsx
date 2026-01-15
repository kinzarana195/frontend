import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-2xl mb-16">
          <p className="text-blue-600 font-semibold tracking-wide mb-3">
            CONTACT US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Let’s Start a Conversation
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Have a project in mind? Reach out to us anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20">

          <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-right">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border-b border-gray-300 bg-transparent px-2 py-3 focus:outline-none focus:border-blue-600"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border-b border-gray-300 bg-transparent px-2 py-3 focus:outline-none focus:border-blue-600"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              className="w-full border-b border-gray-300 bg-transparent px-2 py-3 focus:outline-none focus:border-blue-600 resize-none"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          <div data-aos="fade-left" className="flex flex-col justify-center space-y-10">
            <div className="flex gap-5">
              <FaPhone className="text-blue-600 text-2xl" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">+92 300 1234567</p>
              </div>
            </div>

            <div className="flex gap-5">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">info@teqtronics.com</p>
              </div>
            </div>

            <div className="flex gap-5">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600">Faisalabad, Pakistan</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
