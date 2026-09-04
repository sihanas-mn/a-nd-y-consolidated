import { useState } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import Button from '../ui/Button'
import { iconLiquidGlass, navLinks } from '../../constants'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const navLiquidGlass = "bg-black/20 backdrop-blur-md border border-white/50 rounded-full shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] relative before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none"

  return (
    <header className="fixed top-6 left-0 right-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-[1440px] transition-all duration-500">
      <div className={`${navLiquidGlass} w-full`}>
        <div className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3 text-white">
            <span className="logo-mark">A<span>&</span>Y</span>
            <span className="hidden text-[10px] uppercase tracking-[0.22em] text-white/70 sm:block">Consolidated<br /><b className="font-normal text-white">Private Residences</b></span>
          </a>
          <nav className="hidden items-center gap-3 lg:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="nav-link relative inline-flex items-center justify-center align-middle select-none text-center px-5 py-4 !text-white rounded-full bg-white/[0.025] border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none"
              >
                <span className="relative z-10">{label}</span>
              </a>
            ))}
          </nav>
          <div className="hidden lg:block"><Button href="#contact" variant="gold">Book private viewing</Button></div>
          <button aria-label="Toggle menu" className={`relative lg:hidden ${iconLiquidGlass}`} onClick={() => setOpen(!open)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </div>
      {open && (
        <nav className="absolute top-full left-0 right-0 mt-4 p-6 lg:hidden flex flex-col gap-2 bg-black/40 backdrop-blur-xl border border-white/30 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-50">
          {navLinks.map(([label, href]) => (
            <a 
              onClick={() => setOpen(false)} 
              key={label} 
              href={href} 
              className="relative inline-flex items-center justify-between align-middle select-none px-5 py-4 !text-white rounded-full bg-white/[0.025] border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none uppercase tracking-[0.15em] font-mono text-[10px]"
            >
              <span className="relative z-10">{label}</span>
              <ChevronRight className="relative z-10" size={16} />
            </a>
          ))}
          <div className="mt-4 flex justify-center"><Button href="#contact">Book private viewing</Button></div>
        </nav>
      )}
    </header>
  )
}
