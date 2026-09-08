import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Button({ children, href = '#contact', variant = 'default' }) {
  const liquidGlassClass = `group relative overflow-hidden inline-flex items-center justify-center gap-2 border align-middle select-none font-sans font-medium text-center px-6 py-3 text-sm rounded-xl bg-black/20 !text-white border-white/30 hover:bg-white/15 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] transition-all duration-300 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/40 before:via-transparent before:to-transparfent before:opacity-50 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/20 after:via-transparent after:to-transparent after:opacity-30 after:pointer-events-none antialiased [&>span]:relative [&>span]:z-10 [&>svg]:relative [&>svg]:z-10`;

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={liquidGlassClass}
    >
      <span className="tracking-wide">{children}</span>
      <ArrowUpRight
        size={16}
        strokeWidth={1.5}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#c9a227]"
      />
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
    </motion.a>
  )
}
