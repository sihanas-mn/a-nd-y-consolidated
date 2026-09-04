import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Button from '../ui/Button'
import { frameCount, framePath } from '../../constants'

export default function Hero() {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const frameRef = useRef(0)
  const rafRef = useRef(null)
  const [loaded, setLoaded] = useState(0)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const frameProgress = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1])

  const text1Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.95, 1], [1, 0, 0, 1])
  const text1Scale = useTransform(scrollYProgress, [0.15, 0.25, 0.95, 1], [1, 1.15, 0.85, 1])
  const text1Y = useTransform(scrollYProgress, [0.15, 0.25, 0.95, 1], [0, -30, 30, 0])
  const text1Visibility = useTransform(scrollYProgress, v => (v >= 0.25 && v <= 0.95) ? 'hidden' : 'visible')

  const text2Opacity = useTransform(scrollYProgress, [0.30, 0.40, 0.55, 0.65], [0, 1, 1, 0])
  const text2Scale = useTransform(scrollYProgress, [0.30, 0.40, 0.55, 0.65], [0.85, 1, 1, 1.15])
  const text2Y = useTransform(scrollYProgress, [0.30, 0.40, 0.55, 0.65], [30, 0, 0, -30])
  const text2Visibility = useTransform(scrollYProgress, v => (v < 0.30 || v > 0.65) ? 'hidden' : 'visible')

  const text3Opacity = useTransform(scrollYProgress, [0.70, 0.80, 0.90, 0.95], [0, 1, 1, 0])
  const text3Scale = useTransform(scrollYProgress, [0.70, 0.80, 0.90, 0.95], [0.85, 1, 1, 1.15])
  const text3Y = useTransform(scrollYProgress, [0.70, 0.80, 0.90, 0.95], [30, 0, 0, -30])
  const text3Visibility = useTransform(scrollYProgress, v => (v < 0.70 || v > 0.95) ? 'hidden' : 'visible')

  useEffect(() => {
    const images = Array.from({ length: frameCount }, (_, index) => {
      const image = new Image()
      image.src = framePath(index)
      image.onload = () => setLoaded((value) => value + 1)
      imagesRef.current[index] = image
      return image
    })
    return () => images.forEach((image) => { image.onload = null })
  }, [])

  useMotionValueEvent(frameProgress, 'change', (value) => {
    frameRef.current = Math.max(0, Math.min(frameCount - 1, Math.round(value)))
    if (!rafRef.current) rafRef.current = requestAnimationFrame(() => {
      const canvas = canvasRef.current
      const image = imagesRef.current[frameRef.current]
      if (canvas && image?.complete) {
        const context = canvas.getContext('2d')
        const scale = Math.max(canvas.width / image.width, canvas.height / image.height)
        const width = image.width * scale
        const height = image.height * scale
        context.clearRect(0, 0, canvas.width, canvas.height)
        context.drawImage(image, (canvas.width - width) / 2, (canvas.height - height) / 2, width, height)
      }
      rafRef.current = null
    })
  })

  useEffect(() => {
    const canvas = canvasRef.current
    const resize = () => {
      if (!canvas) return
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * ratio
      canvas.height = window.innerHeight * ratio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      const image = imagesRef.current[frameRef.current]
      if (image?.complete) {
        const context = canvas.getContext('2d')
        const scale = Math.max(canvas.width / image.width, canvas.height / image.height)
        context.drawImage(image, (canvas.width - image.width * scale) / 2, (canvas.height - image.height * scale) / 2, image.width * scale, image.height * scale)
      }
    }
    resize(); window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [loaded])

  return (
    <section ref={sectionRef} id="top" className="hero-sequence">
      <div className="sticky top-0 h-screen overflow-hidden">
        <canvas ref={canvasRef} className="hero-canvas" aria-label="Cinematic view through an A&Y residence" />
        <div className="hero-overlay" />
        <div className="hero-content mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-3xl">
            <div className="relative grid">
              {/* Text 1 */}
              <motion.div className="col-start-1 row-start-1 pointer-events-none" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
                <motion.div style={{ opacity: text1Opacity, scale: text1Scale, y: text1Y, visibility: text1Visibility }} className="origin-bottom-left">
                  <div className="eyebrow"><span /> Dehiwala · Colombo, Sri Lanka</div>
                  <h1>Live above<br /><i>the ordinary.</i></h1>
                  <p className="hero-copy">A considered collection of ten private residences, shaped for calm, connected living in the heart of Dehiwala.</p>
                </motion.div>
              </motion.div>

              {/* Text 2 */}
              <motion.div className="col-start-1 row-start-1 pointer-events-none">
                <motion.div style={{ opacity: text2Opacity, scale: text2Scale, y: text2Y, visibility: text2Visibility }} className="origin-bottom-left">
                  <div className="eyebrow"><span /> Uncompromising quality</div>
                  <h1>Crafted for<br /><i>the future.</i></h1>
                  <p className="hero-copy">Every detail has been meticulously considered to create a home that stands the test of time, blending modern elegance with enduring quality.</p>
                </motion.div>
              </motion.div>

              {/* Text 3 */}
              <motion.div className="col-start-1 row-start-1 pointer-events-none">
                <motion.div style={{ opacity: text3Opacity, scale: text3Scale, y: text3Y, visibility: text3Visibility }} className="origin-bottom-left">
                  <div className="eyebrow"><span /> The signature collection</div>
                  <h1>Your legacy<br /><i>begins here.</i></h1>
                  <p className="hero-copy">More than just an address, it is a statement of intent. A foundation for the life you've built, ready for generations to come.</p>
                </motion.div>
              </motion.div>
            </div>

            {/* Buttons (always visible) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-3 relative z-10"
            >
              <Button href="#apartments" variant="gold">Explore apartments</Button>
              <Button href="#contact" variant="ghost">Schedule private viewing</Button>
            </motion.div>
          </div>
          <div className="mt-12 flex items-center justify-between border-t border-white/20 pt-4 text-[10px] uppercase tracking-[0.22em] text-white/60"><span>Scroll to explore</span><ArrowDown size={15} className="animate-bounce text-[#c9a227]" /></div>
        </div>
      </div>
    </section>
  )
}
