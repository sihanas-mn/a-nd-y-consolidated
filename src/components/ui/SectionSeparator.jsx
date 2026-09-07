import { motion } from 'framer-motion'

const themes = {
  dark: {
    wrapper: 'bg-[#080a09] text-white/80',
    line: 'from-transparent via-[#c9a227]/35 to-[#c9a227]/70',
    lineRev: 'from-[#c9a227]/70 via-[#c9a227]/35 to-transparent',
    badge: 'bg-[#111512]/90 border-[#c9a227]/30 text-[#e9e5dc] shadow-[0_4px_20px_rgba(0,0,0,0.6)]',
    dot: 'bg-[#c9a227]/50',
    glow: 'bg-[#c9a227]/12'
  },
  'dark-to-light': {
    wrapper: 'bg-gradient-to-b from-[#080a09] via-[#080a09]/80 to-[#e9e5dc] text-[#080a09]',
    line: 'from-transparent via-[#c9a227]/40 to-[#c9a227]/80',
    lineRev: 'from-[#c9a227]/80 via-[#c9a227]/40 to-transparent',
    badge: 'bg-[#080a09]/85 border-[#c9a227]/40 text-[#f2f0e8] shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md',
    dot: 'bg-[#c9a227]/60',
    glow: 'bg-[#c9a227]/20'
  },
  'light-to-dark': {
    wrapper: 'bg-gradient-to-b from-[#e9e5dc] via-[#e9e5dc]/40 to-[#111512] text-white',
    line: 'from-transparent via-[#c9a227]/40 to-[#c9a227]/80',
    lineRev: 'from-[#c9a227]/80 via-[#c9a227]/40 to-transparent',
    badge: 'bg-[#111512]/90 border-[#c9a227]/40 text-[#f2f0e8] shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-md',
    dot: 'bg-[#c9a227]/60',
    glow: 'bg-[#c9a227]/20'
  },
  'light-to-dark-investment': {
    wrapper: 'bg-gradient-to-b from-[#e9e5dc] via-[#29352e]/50 to-[#29352e] text-white',
    line: 'from-transparent via-[#c9a227]/40 to-[#c9a227]/80',
    lineRev: 'from-[#c9a227]/80 via-[#c9a227]/40 to-transparent',
    badge: 'bg-[#29352e]/90 border-[#c9a227]/40 text-[#f2f0e8] shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-md',
    dot: 'bg-[#c9a227]/60',
    glow: 'bg-[#c9a227]/20'
  },
  'dark-investment-to-light': {
    wrapper: 'bg-gradient-to-b from-[#29352e] via-[#e9e5dc]/50 to-[#e9e5dc] text-[#080a09]',
    line: 'from-transparent via-[#c9a227]/40 to-[#c9a227]/80',
    lineRev: 'from-[#c9a227]/80 via-[#c9a227]/40 to-transparent',
    badge: 'bg-[#29352e]/90 border-[#c9a227]/40 text-[#f2f0e8] shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-md',
    dot: 'bg-[#c9a227]/60',
    glow: 'bg-[#c9a227]/20'
  },
  'stone-to-dark': {
    wrapper: 'bg-gradient-to-b from-[#d8d4ca] via-[#5b635c]/30 to-[#111512] text-white',
    line: 'from-transparent via-[#c9a227]/40 to-[#c9a227]/80',
    lineRev: 'from-[#c9a227]/80 via-[#c9a227]/40 to-transparent',
    badge: 'bg-[#111512]/90 border-[#c9a227]/40 text-[#f2f0e8] shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-md',
    dot: 'bg-[#c9a227]/60',
    glow: 'bg-[#c9a227]/20'
  },
  stone: {
    wrapper: 'bg-[#d8d4ca] text-[#080a09]',
    line: 'from-transparent via-[#080a09]/15 to-[#c9a227]/60',
    lineRev: 'from-[#c9a227]/60 via-[#080a09]/15 to-transparent',
    badge: 'bg-[#e3dfd6]/95 border-[#080a09]/10 text-[#080a09] shadow-[0_2px_12px_rgba(0,0,0,0.06)]',
    dot: 'bg-[#c9a227]',
    glow: 'bg-[#c9a227]/15'
  },
  light: {
    wrapper: 'bg-[#e9e5dc] text-[#080a09]',
    line: 'from-transparent via-[#080a09]/15 to-[#c9a227]/60',
    lineRev: 'from-[#c9a227]/60 via-[#080a09]/15 to-transparent',
    badge: 'bg-[#f4f1eb]/95 border-[#c9a227]/30 text-[#080a09] shadow-[0_2px_15px_rgba(0,0,0,0.05)]',
    dot: 'bg-[#c9a227]',
    glow: 'bg-[#c9a227]/15'
  }
}

export default function SectionSeparator({ theme = 'light', label, symbol = '✦', className = '' }) {
  const s = themes[theme] || themes.light

  return (
    <div className={`relative w-full overflow-hidden py-8 sm:py-10 select-none z-10 ${s.wrapper} ${className}`}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 flex items-center justify-center">
        <div className="relative flex-1 flex items-center overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 1 }}
            className={`h-[1px] w-full bg-gradient-to-r ${s.line}`}
          />
          <span className={`hidden sm:inline-block absolute left-1/3 w-1 h-1 rounded-full ${s.dot} opacity-60`} />
          <span className={`hidden md:inline-block absolute left-2/3 w-1.5 h-1.5 rounded-full ${s.dot} opacity-80`} />
        </div>

        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-4 sm:mx-6 flex items-center justify-center shrink-0"
        >
          <div className={`absolute -inset-2 w-32 h-10 ${s.glow} blur-xl rounded-full pointer-events-none animate-pulse`} />
          <div className={`relative flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-[10px] font-mono tracking-[0.25em] uppercase transition-all duration-300 hover:scale-105 hover:border-[#c9a227] ${s.badge}`}>
            {symbol && <span className="text-[#c9a227] text-xs leading-none drop-shadow-[0_0_6px_rgba(201,162,39,0.5)]">{symbol}</span>}
            <span className={label ? 'font-semibold tracking-[0.2em]' : 'text-[9px] opacity-70 tracking-[0.3em]'}>{label || 'A&Y'}</span>
            {symbol && <span className="text-[#c9a227] text-xs leading-none opacity-60 drop-shadow-[0_0_6px_rgba(201,162,39,0.5)]">{symbol}</span>}
          </div>
        </motion.div>

        <div className="relative flex-1 flex items-center overflow-hidden">
          <span className={`hidden md:inline-block absolute right-2/3 w-1.5 h-1.5 rounded-full ${s.dot} opacity-80`} />
          <span className={`hidden sm:inline-block absolute right-1/3 w-1 h-1 rounded-full ${s.dot} opacity-60`} />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className={`h-[1px] w-full bg-gradient-to-r ${s.lineRev}`}
          />
        </div>
      </div>
    </div>
  )
}
