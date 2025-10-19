import HeroText from "../components/HeroText";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Background layer */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/tree.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      />
      
      <div className="relative z-10 c-space">
        <HeroText />
      </div>
    </section>
  );
};

export default Hero;