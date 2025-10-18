import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { mySocials } from "../constants";

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>

      {/* Responsive grid with auto-growing rows (no clipping) */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 xl:grid-cols-8
                      md:auto-rows-[minmax(18rem,auto)]
                      lg:auto-rows-[minmax(20rem,auto)]
                      xl:auto-rows-[minmax(24rem,auto)]
                      items-stretch mt-12">

        {/* Grid 1 - Intro */}
        <div className="flex items-end grid-default-color grid-1 relative overflow-hidden">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] pointer-events-none"
            alt="coding pov"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Minh Nguyen — UW Seattle</p>
            <p className="headtext">Paul G. Allen School (Direct Admit), CS & Physics</p>
            <p className="subtext">
              I build full-stack software and modern web apps. I also love turning physics ideas
              into interactive tools, simulations, and visualizations.
            </p>

            {/* Quick jumps */}
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="#physics" className="px-3 py-2 rounded-md bg-royal hover:bg-lavender hover-animation text-sm">Physics</a>
              <a href="#education" className="px-3 py-2 rounded-md bg-royal hover:bg-lavender hover-animation text-sm">Education</a>
              <a href="#research" className="px-3 py-2 rounded-md bg-royal hover:bg-lavender hover-animation text-sm">Research</a>
            </div>

            {/* Small social row under intro (wraps & scales) */}
            <div className="mt-4 flex flex-wrap gap-3 md:gap-4">
              {mySocials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg hover:bg-white/5"
                  title={s.name}
                >
                  <img src={s.icon} className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" alt={s.name} />
                  <span className="sr-only">{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 - Principles + draggable chips */}
        <div className="grid-default-color grid-2 relative overflow-hidden">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">CODE IS CRAFT</p>
            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="GRASP" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="SOLID" containerRef={grid2Container} />
            <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="Design Patterns" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="Design Principles" containerRef={grid2Container} />
            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="SRP" containerRef={grid2Container} />
            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/csharp-pink.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/dotnet-pink.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/blazor-pink.png" containerRef={grid2Container} />
          </div>
        </div>

        {/* Grid 3 - Time Zone + Globe */}
        <div className="grid-black-color grid-3 relative overflow-hidden">
          <div className="z-10 w-[60%] max-w-[22rem]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">I'm based in Seattle, WA, and open to remote work worldwide.</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 - Contact quick action */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">Contact for work?</p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 - Tech Stack */}
        <div className="grid-default-color grid-5 relative overflow-hidden">
          <div className="z-10 w-[55%] max-w-[28rem]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in languages, frameworks, and tools that let me ship robust, scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

        {/* Grid 6 – Find me online (bigger on md/xl, no clipping) */}
        <div
          className="grid-default-color grid-6 p-5 flex flex-col justify-center
                     md:col-span-3 xl:col-span-4 md:row-span-2
                     overflow-visible"
        >
          <p className="headtext break-words whitespace-normal hyphens-auto leading-relaxed max-w-full">
            Find me online
          </p>
          <p className="subtext break-words whitespace-normal hyphens-auto leading-relaxed max-w-full">
            Let’s connect — I share projects and notes here:
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3 md:gap-4">
            {mySocials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 md:gap-3 px-2 py-2 md:px-3 md:py-2 rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring focus-visible:ring-white/20"
                title={s.name}
              >
                <img
                  src={s.icon}
                  alt={s.name}
                  className="w-7 h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 xl:w-12 xl:h-12"
                />
                <span className="text-sm md:text-base lg:text-lg text-neutral-300 group-hover:text-white">
                  {s.name}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
