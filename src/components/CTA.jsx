import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal } from '../data'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-20 border-t border-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full" />
      </div>

      {/* Big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-display text-[20vw] text-border/5 leading-none select-none whitespace-nowrap">
          LET'S TALK
        </span>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-mono text-accent text-xs tracking-widest uppercase mb-6"
        >
          Open to Opportunities
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="font-display text-[clamp(3rem,9vw,8rem)] text-white leading-none tracking-wide mb-4"
        >
          READY TO TAKE <br />
          YOUR IDEA TO <br />
          <span className="text-accent glow-accent">THE NEXT LEVEL?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-muted text-lg max-w-xl mx-auto mb-12"
        >
          Let's build your next digital experience together. I'm available for freelance projects and full-time roles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`mailto:${personal.email}`}
            className="group font-body text-base bg-accent text-dark px-10 py-4 font-semibold hover:bg-white transition-all duration-300 tracking-wide flex items-center gap-3"
          >
            Hire Me
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-base border border-border text-white px-10 py-4 hover:border-accent hover:text-accent transition-all duration-300 tracking-wide"
          >
            View GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted"
        >
          <a href={`mailto:${personal.email}`} className="font-mono text-sm hover:text-accent transition-colors">
            {personal.email}
          </a>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
          <a href={`tel:${personal.phone}`} className="font-mono text-sm hover:text-accent transition-colors">
            {personal.phone}
          </a>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
          <span className="font-mono text-sm">{personal.location}</span>
        </motion.div>
      </div>
    </section>
  )
}
