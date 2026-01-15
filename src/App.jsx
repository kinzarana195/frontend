import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Trainings from "./Pages/Trainings";
import CourseDetail from "./Pages/CourseDetail";
import Enroll from "./Pages/Enroll";
import WhyChoose from "./Pages/WhyChoose";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="trainings" element={<Trainings />} />
          <Route path="/trainings/:slug" element={<CourseDetail />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="whychoose" element={<WhyChoose />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
