import { CONTACT } from "../data";
import SectionHeader from "./SectionHeader";
import resumePDF from "../assets/resume.pdf"; // Import the PDF

export default function Contact() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Pheona_Chikwati_Resume.pdf'; // Custom filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader eyebrow="Get in touch" title="Let's Connect" centered />

          <p
            className="text-slate-400 text-base leading-relaxed mb-12"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}
          >
            Open to collaborations, security projects, freelance work, or just a friendly conversation.
            Don't hesitate to reach out — I'd love to hear from you.
          </p>

          {/* Contact buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CONTACT.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5
                           bg-white/[0.02] border border-white/[0.07] rounded-xl
                           font-mono-custom text-xs tracking-wide text-slate-300
                           hover:border-teal-500/40 hover:text-teal-300 hover:bg-teal-500/[0.05]
                           transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="text-base leading-none">{icon}</span>
                {label}
              </a>
            ))}
          </div>

          {/* Resume CTA banner */}
          <div className="relative rounded-2xl border border-teal-500/20 p-8
                          bg-gradient-to-br from-teal-900/20 to-transparent overflow-hidden
                          group hover:border-teal-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-full
                            blur-3xl pointer-events-none" />
            <p className="font-mono-custom text-xs tracking-widest uppercase text-teal-400 mb-2">
              Curriculum Vitae
            </p>
            <h3
              className="text-2xl font-bold text-slate-100 mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Want to know more about my experience?
            </h3>
            
            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="btn-primary group/btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover/btn:animate-bounce" 
                   fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume (PDF)
            </button>

            {/* View in browser option */}
            <p className="mt-4 text-xs text-slate-500">
              <a 
                href={resumePDF} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors underline underline-offset-2 decoration-teal-500/30"
              >
                View in browser
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}