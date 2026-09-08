import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, MapPin, Heart, Expand, MoreHorizontal } from 'lucide-react'
import SectionIntro from '../ui/SectionIntro'

const spaces = [
  {
    id: 1,
    title: 'The Living Space',
    subtitle: 'Signature Residence',
    description: 'Sun-drenched open spaces designed for seamless transitions between quiet family mornings and evening entertaining.',
    location: 'Dehiwala, Sri Lanka',
    coords: '6.8511° N, 79.8680° E',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800'
  },
  {
    id: 2,
    title: 'Master Suite',
    subtitle: 'Private Sanctuary',
    description: 'A private sanctuary offering unparalleled comfort, designed with dedicated walk-in closet space and panoramic views.',
    location: 'Ocean Facing',
    coords: 'Level 14-42',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800'
  },
  {
    id: 3,
    title: 'Culinary Kitchen',
    subtitle: 'European Design',
    description: 'European-styled fitted kitchens with sprawling quartz countertops. Built for the ambitious home chef.',
    location: 'Open Concept',
    coords: 'Custom Fittings',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=800'
  },
  {
    id: 4,
    title: 'Private Balcony',
    subtitle: 'Unobstructed Views',
    description: 'The perfect vantage point to take in the ocean breeze and watch the sunset over the Dehiwala coastline.',
    location: 'West Facing',
    coords: 'Glass Balustrades',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800'
  },
  {
    id: 5,
    title: 'Luxury Bathrooms',
    subtitle: 'Spa-Inspired',
    description: 'Spa-inspired bathrooms featuring premium European fittings, ambient lighting, and bespoke vanity mirrors.',
    location: 'En-suite',
    coords: 'Premium Finish',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800'
  },
  {
    id: 6,
    title: 'Entrance Lobby',
    subtitle: 'Grand Arrival',
    description: 'A grand arrival experience with double-height ceilings and a dedicated 24/7 concierge desk.',
    location: 'Ground Level',
    coords: 'Secure Access',
    image: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?q=80&w=800'
  }
]

export default function Apartments() {
  const [activeIndex, setActiveIndex] = useState(2)

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % spaces.length)
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + spaces.length) % spaces.length)

  // Auto-play functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext()
    }, 4500) // Slide every 4.5 seconds
    return () => clearTimeout(timer)
  }, [activeIndex])

  return (
    <section id="apartments" className="section bg-[#0a0a0c] text-white py-12 lg:py-20 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <SectionIntro number="" label="The residences" title={<>Explore your<br /><i>new home.</i></>}>
          <p className="text-white/60 text-sm sm:text-base max-w-md">Swipe through the signature spaces of our 3-bedroom residences.</p>
        </SectionIntro>

        {/* 3D Carousel Container */}
        <div className="relative mt-8 sm:mt-12 h-[450px] sm:h-[550px] w-full flex items-center justify-center" style={{ perspective: '1200px' }}>
          
          {spaces.map((space, index) => {
            // Endless circular looping logic
            const half = Math.floor(spaces.length / 2)
            let offset = index - activeIndex
            if (offset > half) offset -= spaces.length
            if (offset < -half) offset += spaces.length

            const absOffset = Math.abs(offset)
            const isActive = offset === 0

            // 3D Transformations based on offset
            const x = `${offset * 75}%`
            const rotateY = offset * -22
            const z = absOffset * -120
            const scale = isActive ? 1 : Math.max(1 - absOffset * 0.15, 0.6)
            const opacity = isActive ? 1 : Math.max(1 - absOffset * 0.35, 0)
            const zIndex = 50 - absOffset

            if (opacity === 0) return null

            return (
              <motion.div
                key={space.id}
                onClick={() => setActiveIndex(index)}
                initial={false}
                animate={{
                  rotateY,
                  x,
                  z,
                  scale,
                  opacity,
                  zIndex
                }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className={`absolute w-[280px] sm:w-[350px] h-[400px] sm:h-[480px] lg:h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#111] border ${isActive ? 'border-white/20' : 'border-white/5'}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Background Image */}
                <img 
                  src={space.image} 
                  alt={space.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlays */}
                <div className={`absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-60'}`} />
                
                {/* Vision Pro style Expand / More buttons (Active only) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="absolute top-4 left-0 right-0 px-4 flex justify-between items-center z-20"
                    >
                      <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] text-white/90">
                        <Expand size={12} />
                        <span className="font-medium tracking-wide">Expand</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center">
                        <MoreHorizontal size={14} className="text-white/90" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.div 
                        key="active-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 shadow-xl"
                      >
                        <div className="flex justify-between items-start mb-2 sm:mb-3">
                          <h3 className="text-xl sm:text-[22px] font-serif text-white tracking-wide">{space.title}</h3>
                          <span className="text-[10px] text-white/50 font-mono mt-1">{index + 1} / {spaces.length}</span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-white/70 leading-relaxed mb-4 sm:mb-5">
                          {space.description}
                        </p>
                        <div className="flex items-center gap-2 text-[9px] sm:text-[10px] text-white/50 border-t border-white/10 pt-3">
                          <MapPin size={12} className="text-[#c9a227]" />
                          <span>{space.location} · {space.coords}</span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="inactive-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-2 mb-2"
                      >
                        <h3 className="text-lg font-serif text-white/90 drop-shadow-md">{space.title}</h3>
                        <p className="text-[10px] text-white/60 drop-shadow-md">{space.subtitle}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </motion.div>
            )
          })}
        </div>

        {/* Bottom Navigation Pill */}
        <div className="flex justify-center mt-2 sm:mt-4">
          <div className="flex items-center gap-4 sm:gap-6 bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-full p-2 pr-5 sm:pr-8 shadow-2xl relative z-[100]">
            {/* Arrows */}
            <div className="flex gap-1">
              <button 
                onClick={handlePrev}
                className="p-2 sm:p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={handleNext}
                className="p-2 sm:p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Thumbnail */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-white/20 shrink-0 shadow-lg">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={spaces[activeIndex].image} 
                  alt="thumb" 
                  className="w-full h-full object-cover" 
                />
              </AnimatePresence>
            </div>

            {/* Nav Text */}
            <div className="flex flex-col min-w-[100px] sm:min-w-[140px]">
              <AnimatePresence mode="wait">
                <motion.span 
                  key={activeIndex + 'title'}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-xs sm:text-sm font-medium text-white tracking-wide"
                >
                  {spaces[activeIndex].title}
                </motion.span>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.span 
                  key={activeIndex + 'sub'}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-[9px] sm:text-[10px] text-white/50"
                >
                  {spaces[activeIndex].subtitle}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Heart Icon */}
            <button className="ml-auto p-2 sm:p-2.5 rounded-full hover:bg-white/10 transition-colors">
              <Heart size={16} className="text-white/60" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
