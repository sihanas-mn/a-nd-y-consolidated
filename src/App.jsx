import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import { iconLiquidGlass } from './constants'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <button 
        className={`fixed right-5 bottom-5 z-10 ${iconLiquidGlass}`} 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={15} />
      </button>
    </BrowserRouter>
  )
}
