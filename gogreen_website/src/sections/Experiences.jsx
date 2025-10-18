"use client";
import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <section id="work" className="c-space section-spacing">
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;
