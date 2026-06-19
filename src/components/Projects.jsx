import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../data";

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.15,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="group block border border-border bg-card card-hover p-6 relative overflow-hidden"
    >
      {/* Number */}
      <span className="font-mono text-xs text-muted mb-4 block">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Glow bg on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${project.color} 0%, transparent 70%)`,
        }}
      />

      {/* IMAGE PREVIEW (FIXED) */}
      <div className="h-36 md:h-44 mb-6 border border-border/50 bg-dark/60 relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.name}
          className="
            w-full 
            h-full 
            object-cover 
            opacity-90 
            group-hover:opacity-100 
            group-hover:scale-105 
            transition duration-500
          "
        />

        {/* Browser chrome dots */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-border" />
          <div className="w-2 h-2 rounded-full bg-border" />
          <div className="w-2 h-2 rounded-full bg-border" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative">
        <p className="font-mono text-xs text-accent mb-1 tracking-widest uppercase">
          {project.subtitle}
        </p>

        <h3 className="font-display text-2xl text-white mb-3 tracking-wide group-hover:text-accent transition-colors">
          {project.name}
        </h3>

        <p className="font-body text-sm text-muted leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] border border-border px-2 py-0.5 text-muted group-hover:border-accent/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-4 flex items-center gap-2 text-muted group-hover:text-accent transition-colors">
        <span className="font-mono text-xs tracking-widest uppercase">
          View Project
        </span>
        <span className="text-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 lg:px-20">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="font-mono text-accent text-xs tracking-widest uppercase mb-3"
      >
        Selected Work
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-none tracking-wide mb-12"
      >
        A Showcase of My Latest Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
