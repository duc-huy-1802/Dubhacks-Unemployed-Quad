import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ onNavigate }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li"><a className="nav-link" href="#home" onClick={onNavigate}>Home</a></li>
  <li className="nav-li"><a className="nav-link" href="#projects" onClick={onNavigate}>Learn more</a></li>
      <li className="nav-li"><a className="nav-link" href="#report" onClick={onNavigate}>Report</a></li>
      <li className="nav-li"><a className="nav-link" href="#volunteer" onClick={onNavigate}>Volunteer</a></li>
      <li className="nav-li"><a className="nav-link" href="#map" onClick={onNavigate}>Map</a></li>
      <li className="nav-li"><a className="nav-link" href="#education" onClick={onNavigate}>Education</a></li>
      <li className="nav-li"><a className="nav-link" href="#research" onClick={onNavigate}>Research</a></li>
      <li className="nav-li"><a className="nav-link" href="#work" onClick={onNavigate}>Work</a></li>
      <li className="nav-li"><a className="nav-link" href="#contact" onClick={onNavigate}>Contact</a></li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a href="#home" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
            Minh
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} className="w-6 h-6" alt="toggle" />
          </button>
          <nav className="hidden sm:flex">
            <Navigation onNavigate={undefined} />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation onNavigate={closeMenu} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
