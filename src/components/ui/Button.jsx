import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Button({ children, href = '#contact', variant = 'default' }) {
  const isGold = variant === 'gold';
  const bgClass = isGold ? 'bg-[oklch(79.5%_0.184_86.047)] !text-white border-[oklch(79.5%_0.184_86.047)]/50 hover:bg-[oklch(79.5%_0.184_86.047)]/80' : 'bg-white/[0.025] !text-white border-white/50 hover:bg-white/30';
  const liquidGlassClass = `relative inline-flex items-center justify-center gap-2 border align-middle select-none font-sans font-medium text-center px-6 py-3 text-sm rounded-full ${bgClass} backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none antialiased [&>span]:relative [&>span]:z-10 [&>svg]:relative [&>svg]:z-10`;

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
