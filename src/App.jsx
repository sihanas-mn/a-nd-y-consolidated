import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Loader from './components/Loader'

export default function App() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <BrowserRouter>
      <Loader />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <motion.button
        style={{ opacity }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed right-5 bottom-5 z-10 w-11 h-11 rounded-xl bg-[#c9a227]/90 text-[#080a09] flex items-center justify-center shadow-[0_4px_20px_rgba(201,162,39,0.4)] backdrop-blur-sm border border-[#c9a227]/40 transition-colors duration-300 hover:bg-[#c9a227] cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} strokeWidth={2.5} />
      </motion.button>
    </BrowserRouter>
  )
}
