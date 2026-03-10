import { useEffect, useState } from "react";
import profileImage from "../assets/profile.jpg";
import resumePDF from "../assets/resume.pdf";


export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full
                      bg-teal-500/[0.07] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full
                      bg-emerald-500/[0.05] blur-[90px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-14 md:gap-20">

          
          <div className={`flex-1 transition-all duration-700 ease-out
                           ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5
                            bg-teal-500/10 border border-teal-500/25 rounded-full mb-8 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="font-mono-custom text-xs text-teal-300 tracking-widest uppercase">
                Open to opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]
                           text-slate-100 mb-6 animate-fade-up animate-delay-100">
              Hi, I'm{" "}
              <span className="block text-gradient">
                Pheona Chikwati
              </span>
            </h1>

            {/* Role */}
            <p className="font-mono-custom text-sm tracking-[0.15em] uppercase text-teal-400
                          mb-5 animate-fade-up animate-delay-200">
              Software Developer &amp; Cybersecurity Analyst
            </p>

            {/* Bio */}
            <p className="text-slate-400 text-base leading-relaxed max-w-xl mb-10
                          animate-fade-up animate-delay-300"
               style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
              A detail-oriented cybersecurity analyst with critical thinking and programming skills.
              Passionate about information security and building solutions that protect organizations
              and the people they serve.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-400">
              {/* View Resume — opens PDF in new tab */}
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                View Resume
              </a>

              <a href="#projects" className="btn-outline">
                See My Work ↓
              </a>
            </div>
          </div>

          <div className={`flex-shrink-0 transition-all duration-700 ease-out delay-200
                           ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="relative">
            {/* Photo - Responsive with max constraints */}
            <div className="relative flex justify-center">
              <div className="relative w-[clamp(16rem,50vw,30rem)] 
                              rounded-3xl overflow-hidden 
                              border border-white/10 shadow-2xl shadow-black/40
                              hover:shadow-teal-500/10 transition-shadow duration-500">
                {!imageError ? (
                  <img
                    src={profileImage}
                    alt="Pheona Chikwati"
                    className="w-full h-full object-cover object-center 
                              hover:scale-105 transition-transform duration-700"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center
                                  bg-gradient-to-br from-teal-900/50 to-slate-900">
                    <span className="font-display text-[clamp(3rem,15vw,6rem)] 
                                    font-bold text-teal-300">
                      PC
                    </span>
                  </div>
                )}
                
                {/* Gradient edge */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 
                                bg-gradient-to-t from-[#0a0f0f]/80 via-[#0a0f0f]/20 to-transparent" />
              </div>
            </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#0d1a1a] border border-teal-500/30
                              rounded-xl px-4 py-2.5 shadow-xl shadow-black/30">
                <p className="font-mono-custom text-xs text-teal-300 tracking-wide">
                  💻 Dev + 🛡️ Security
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex items-center gap-3 mt-20 text-slate-600">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-teal-500/50" />
          <span className="font-mono-custom text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}

