import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { clients } from '../data'

export default function Clients() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-border bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-accent text-xs tracking-widest uppercase mb-3"
          >
            Trusted By
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-[clamp(2rem,4vw,3.5rem)] text-white leading-none tracking-wide"
          >
            Worked With <span className="text-accent">Amazing</span> Clients
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="group border border-border bg-dark hover:border-accent/60 transition-all duration-400 p-8 flex items-center justify-center"
            >
              <span className="font-display text-xl md:text-2xl tracking-widest text-muted group-hover:text-accent transition-colors text-center">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
