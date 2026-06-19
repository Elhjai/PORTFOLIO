import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { services } from '../data'

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="font-mono text-accent text-xs tracking-widest uppercase mb-3"
            >
              What I Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-none tracking-wide"
            >
              End-to-End Web <br />
              <span className="text-accent">Development</span> <br />
              Services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-muted text-base leading-relaxed mt-6 max-w-md"
            >
              From concept to deployment, I build modern web experiences that are fast, accessible, and built to last.
            </motion.p>
          </div>

          {/* Right — service list */}
          <div className="space-y-0">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
                className="group border-b border-border py-8 flex gap-6 items-start hover:pl-4 transition-all duration-500 cursor-default"
              >
                <span className="font-mono text-xs text-accent mt-1 shrink-0 tracking-widest">{service.id}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-lg">↗</span>
                  </div>
                  <p className="font-body text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
