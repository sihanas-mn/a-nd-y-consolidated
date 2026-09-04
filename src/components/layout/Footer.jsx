import { MoveUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-12 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div>
          <div className="logo-mark text-white">A<span>&</span>Y</div>
          <p className="mt-5 max-w-[230px] text-sm leading-6 text-white/50">A&Y Consolidated (PVT) Ltd<br />Colombo, Sri Lanka</p>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-3 text-[10px] uppercase tracking-[0.18em] text-white/50">
          <a href="#project">Project</a>
          <a href="#apartments">Apartments</a>
          <a href="#location">Location</a>
          <a href="#contact">Contact</a>
          <a href="#gallery" aria-label="Gallery"><MoveUpRight size={15} /></a>
        </div>
        <span className="text-[10px] uppercase tracking-[0.18em] text-white/30">© 2025 A&Y Consolidated</span>
      </div>
    </footer>
  )
}
