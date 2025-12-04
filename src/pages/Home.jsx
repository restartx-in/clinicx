

export const Home = () => {
  return (
    <div className="w-full bg-[#1a1a1a] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center z-10">
        <h1 className="font-poppins font-[200] text-5xl md:text-7xl lg:text-8xl text-white tracking-[0.08em] leading-tight uppercase mb-4">
          Model Portfolio
        </h1>
        <p className="font-poppins font-[300] text-base md:text-lg lg:text-xl text-white/80 tracking-[0.25em] uppercase mb-12">
          Showcasing{" "}
          <span className="font-poppins font-[600] text-base md:text-lg lg:text-xl text-white/80 tracking-[0.25em] uppercase mb-12">
            Talent and Training
          </span>
          <br />
          for Aspiring Models
        </p>

        {/* Center Hero Image */}
        <div className="relative w-full max-w-xl aspect-video md:aspect-[16/9] mb-12 shadow-2xl overflow-hidden group">
          <img
            src="https://royalrunway.my.canva.site/_assets/media/972518e913ca8bc28f2a573344a4a5b6.jpg"
            alt="Runway Model Red Dress"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {/* Overlay gradient to blend bottom slightly if needed, purely aesthetic */}
          <div className="absolute inset-0 ring-1 ring-white/10"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-[#c4a484] flex flex-col md:flex-row min-h-[90vh]">
        {/* Left Content */}
        <div className="flex-1 p-12 md:p-20 flex flex-col justify-center items-start text-left order-2 md:order-1">
          <span className="text-sm font-bold text-white/90 uppercase tracking-[0.15em] mb-2 animate-in fade-in slide-in-from-left-10 duration-700 view-transition">
            My Fashion Journey
          </span>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white mb-12 leading-tight animate-in fade-in slide-in-from-left-10 duration-700 delay-100 view-transition">
            About Me
          </h2>

          <div className="max-w-md text-white/90 text-lg leading-relaxed font-light animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200 view-transition">
            <p className="mb-6">
              With a passion for{" "}
              <strong className="font-semibold text-white">
                elegance and creativity
              </strong>
              , I have dedicated my career to shaping the future of fashion.
            </p>
            <p>
              My commitment to{" "}
              <strong className="font-semibold text-white">
                excellence and skill development
              </strong>{" "}
              ensures that aspiring models receive the highest level of training
              and support, preparing them for success on the runway and beyond.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative min-h-[50vh] md:min-h-auto order-1 md:order-2 overflow-hidden">
          <img
            src="https://royalrunway.my.canva.site/_assets/media/586f619d6c1be9574e0ca3e8117d0d75.jpg"
            alt="Fashion Portrait"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>
      </section>
    </div>
  );
};
