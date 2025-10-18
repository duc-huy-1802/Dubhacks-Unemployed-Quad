import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Report from "./sections/Report";
import Volunteer from "./sections/Volunteer";
import Map from "./sections/Map";
import Projects from "./sections/Projects";
import Physics from "./sections/Physics";
import Education from "./sections/Education";
import Research from "./sections/Research";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";


const App = () => {
return (
<div className="container mx-auto max-w-7xl">
<Navbar />
<Hero />
<About />
<Report />
<Volunteer />
<Map />
<Projects />
<Physics />
<Education />
<Research />
<Experiences />
<Testimonial />
<Contact />
<Footer/>
</div>
);
};


export default App;