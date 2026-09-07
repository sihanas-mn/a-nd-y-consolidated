import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Button({ children, href = '#contact', variant = 'default' }) {
  const liquidGlassClass = `relative overflow-hidden inline-flex items-center justify-center gap-2 border align-middle select-none font-sans font-medium text-center px-6 py-3 text-sm rounded-xl bg-black/20 !text-white border-white/30 hover:bg-white/10 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] transition-all duration-300 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/40 before:via-transparent before:to-transparent before:opacity-50 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/20 after:via-transparent after:to-transparent after:opacity-30 after:pointer-events-none antialiased [&>span]:relative [&>span]:z-10 [&>svg]:relative [&>svg]:z-10`;

  return (
    <motion.a
      href={href}
      whileTap={{ scale: 0.97 }}
      className={liquidGlassClass}
    >
      <span>{children}</span><ArrowUpRight size={16} strokeWidth={1.5} />
    </motion.a>
  )
}
