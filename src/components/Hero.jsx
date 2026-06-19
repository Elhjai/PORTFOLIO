import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import HeroScene from "./HeroScene";
import { personal, bio, techStack } from "../data";
import profileImage from "../images/profile.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] },
  }),
};

export default function Hero() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    // GSAP text reveal on load
    gsap.fromTo(
      ".hero-name span",
      { y: "110%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        stagger: 0.06,
        duration: 1.1,
        ease: "power4.out",
        delay: 0.3,
      },
    );
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-8"
    >
      {/* 3D Canvas */}
      <HeroScene />

      {/* Gradient orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-px bg-accent" />
              <span className="font-mono text-accent text-sm tracking-widest uppercase">
                Available for work
              </span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
              {/* Picture and Name */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <img
                  src={profileImage}
                  alt="Elijah Mukwone Paul"
                  className="w-90 h-90 lg:w-60 lg:h-60 rounded-lg object-cover mb-4 border border-border"
                />
                <h2 className="font-display text-2xl tracking-wide text-white text-center">
                  Elijah M. Paul
                </h2>
              </motion.div>

              {/* Text Content */}
              <div>
                <div className="hero-name overflow-hidden mb-2">
                  <h1 className="font-display text-[clamp(2rem,8vw,6rem)] leading-none tracking-wide text-white overflow-hidden">
                    {"".split("").map((c, i) => (
                      <span
                        key={i}
                        className="inline-block"
                        style={{ transform: "translateY(110%)" }}
                      >
                        {c}
                      </span>
                    ))}
                  </h1>
                </div>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={6}
                  className="font-body text-muted text-base md:text-lg leading-relaxed max-w-lg mt-6 mb-8"
                >
                  {bio[0]}
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={7}
                  className="flex flex-wrap gap-4"
                >
                  <button
                    onClick={scrollToProjects}
                    className="font-body text-sm bg-accent text-dark px-8 py-3 font-medium hover:bg-white transition-all duration-300 tracking-wide"
                  >
                    View My Work
                  </button>
                  <a
                    href={`mailto:${personal.email}`}
                    className="font-body text-sm border border-border text-white px-8 py-3 hover:border-accent hover:text-accent transition-all duration-300 tracking-wide"
                  >
                    Get In Touch
                  </a>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={8}
                  className="flex items-center gap-6 mt-10"
                >
                  {[
                    { label: "GitHub", url: personal.github },
                    { label: "LinkedIn", url: personal.linkedin },
                  ].map(({ label, url }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-muted hover:text-accent transition-colors tracking-widest uppercase"
                    >
                      {label} ↗
                    </a>
                  ))}
                  <span className="text-border">|</span>
                  <span className="font-mono text-xs text-muted">
                    {personal.location}
                  </span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right — Stats + Role card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="hidden lg:block"
          >
            <div className="border border-border bg-card/50 backdrop-blur-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-muted tracking-widest uppercase">
                  {personal.role}
                </span>
              </div>

              <div className="space-y-1 mb-8">
                {bio[1].split(". ").map((sentence, i) => (
                  <p
                    key={i}
                    className="font-body text-sm text-muted leading-relaxed"
                  >
                    {sentence}
                    {i < bio[1].split(". ").length - 1 ? "." : ""}
                  </p>
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <p className="font-mono text-xs text-muted mb-4 tracking-widest uppercase">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStack.slice(0, 8).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs border border-border px-3 py-1 text-muted hover:border-accent hover:text-accent transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 mt-16 border-y border-border py-4 overflow-hidden">
        <div className="marquee-track">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              className="font-display text-2xl tracking-widest text-border hover:text-accent transition-colors flex items-center gap-6"
            >
              {tech} <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-12 hidden md:flex items-center gap-3"
      >
        <span className="font-mono text-xs text-muted tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-border relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
