import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../data'

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-16 px-6 md:px-12 lg:px-20 border-b border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6 md:gap-12">
        {stats.map(({ value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-center md:text-left"
          >
            <p className="font-display text-[clamp(2.5rem,7vw,5rem)] text-accent leading-none glow-accent">{value}</p>
            <p className="font-body text-sm text-muted mt-1 tracking-wide">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
