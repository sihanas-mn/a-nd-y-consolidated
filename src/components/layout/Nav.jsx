import { useState } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import Button from '../ui/Button'
import { iconLiquidGlass, navLinks } from '../../constants'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-6 left-0 right-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-[1440px] transition-all duration-500">
      {/* Glass Navbar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-8 w-full rounded-[20px] bg-black/40 border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_24px_50px_-26px_rgba(0,0,0,.7)] backdrop-blur-[24px] backdrop-saturate-[190%]">
        <a href="#top" className="flex items-center gap-3 text-white">
          <span className="logo-mark">A<span>&</span>Y</span>
          <span className="hidden text-[10px] uppercase tracking-[0.22em] text-white/70 sm:block">Consolidated<br /><b className="font-normal text-white">Private Residences</b></span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="nav-link min-h-[40px] flex items-center px-4 rounded-xl no-underline text-white opacity-90 transition-all duration-200 hover:opacity-100 hover:bg-white/[.18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block"><Button href="#contact" variant="gold">Book private viewing</Button></div>
        <button aria-label="Toggle menu" className={`relative lg:hidden ${iconLiquidGlass}`} onClick={() => setOpen(!open)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
      </div>
      {open && (
        <nav className="absolute top-full left-0 right-0 mt-4 p-6 lg:hidden flex flex-col gap-2 bg-black/40 backdrop-blur-xl border border-white/30 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-50">
          {navLinks.map(([label, href]) => (
            <a 
              onClick={() => setOpen(false)} 
              key={label} 
              href={href} 
              className="nav-link min-h-[40px] flex items-center justify-between px-4 py-3 rounded-xl no-underline text-white opacity-90 transition-all duration-200 hover:opacity-100 hover:bg-white/[.18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              <span>{label}</span>
              <ChevronRight size={16} />
            </a>
          ))}
          <div className="mt-4 flex justify-center"><Button href="#contact">Book private viewing</Button></div>
        </nav>
      )}
    </header>
  )
}
