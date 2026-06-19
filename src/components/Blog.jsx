import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { blogs } from '../data'

export default function Blog() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-accent text-xs tracking-widest uppercase mb-3"
          >
            Thoughts & Writing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-none tracking-wide"
          >
            Developer Insights <br />
            <span className="text-accent">&amp; Ideas</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {blogs.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="group border border-border bg-card hover:border-accent/50 transition-all duration-400 p-6 cursor-pointer card-hover"
            >
              {/* Image placeholder */}
              <div className="h-40 bg-dark border border-border/50 mb-5 relative overflow-hidden flex items-center justify-center">
                <span className="font-display text-6xl text-border/10 group-hover:text-accent/5 transition-colors">
                  {String(post.id).padStart(2, '0')}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                {/* Scan line effect */}
                <motion.div
                  animate={{ y: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                  className="absolute inset-x-0 h-px bg-accent/20 pointer-events-none"
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[10px] text-accent tracking-widest uppercase">{post.tag}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="font-mono text-[10px] text-muted">{post.readTime}</span>
              </div>

              <h3 className="font-body text-white text-base font-medium leading-snug mb-4 group-hover:text-accent transition-colors">
                {post.title}
              </h3>

              <div className="flex items-center gap-2 text-muted group-hover:text-accent transition-colors">
                <span className="font-mono text-xs tracking-widest uppercase">Read More</span>
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-sm">↗</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
