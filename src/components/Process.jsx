import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { process } from '../data'

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" className="py-24 px-6 md:px-12 lg:px-20 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-accent text-xs tracking-widest uppercase mb-3"
          >
            How I Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-none tracking-wide"
          >
            My Development <br />
            <span className="text-accent">Work Process</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0 relative">
          {/* connector line */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-border z-0" />

          {process.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="group relative z-10 flex flex-col items-center md:items-start text-center md:text-left p-8 border border-border hover:border-accent/40 bg-dark transition-all duration-500 hover:bg-card"
            >
              {/* Step number large bg */}
              <div className="absolute top-4 right-4 font-display text-7xl text-border/10 leading-none select-none group-hover:text-accent/5 transition-colors">
                {item.step}
              </div>

              {/* Circle indicator */}
              <div className="w-10 h-10 rounded-full border-2 border-border group-hover:border-accent flex items-center justify-center mb-6 transition-colors duration-300 relative">
                <div className="w-2 h-2 rounded-full bg-muted group-hover:bg-accent transition-colors duration-300" />
              </div>

              <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">{item.step}</p>
              <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide mb-3 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
