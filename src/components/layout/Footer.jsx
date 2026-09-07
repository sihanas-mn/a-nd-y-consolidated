import { motion } from 'framer-motion'
import { MoveUpRight } from 'lucide-react'

const footerLinks = [
  ['Project', '#project'],
  ['Apartments', '#apartments'],
  ['Location', '#location'],
  ['Amenities', '#amenities'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact'],
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,162,39,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-6 py-14 lg:px-12 relative z-10">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="h-[1px] w-full bg-gradient-to-r from-[#c9a227]/60 via-[#c9a227]/20 to-transparent mb-12"
        />

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <a href="#top" className="group inline-block">
              <div className="logo-mark text-white transition-transform duration-300 group-hover:scale-105">A<span>&</span>Y</div>
            </a>
            <p className="mt-5 max-w-[230px] text-sm leading-6 text-white/50">
              A&Y Consolidated (PVT) Ltd<br />Colombo, Sri Lanka
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-wrap gap-x-7 gap-y-3 text-[10px] uppercase tracking-[0.18em] text-white/50"
          >
            {footerLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="relative transition-colors duration-300 hover:text-[#c9a227] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#c9a227] hover:after:w-full after:transition-all after:duration-300"
              >
                {label}
              </a>
            ))}
            <a href="#gallery" aria-label="Gallery" className="transition-colors duration-300 hover:text-[#c9a227]">
              <MoveUpRight size={15} />
            </a>
          </motion.nav>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[10px] uppercase tracking-[0.18em] text-white/30"
          >
            © {new Date().getFullYear()} A&Y Consolidated
          </motion.span>
        </div>
      </div>
    </footer>
  )
}
