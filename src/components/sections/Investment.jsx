import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform, useInView, animate } from 'framer-motion'
import SectionIntro from '../ui/SectionIntro'
import Button from '../ui/Button'
import { investmentFrameCount, investmentFramePath } from '../../constants'

function Counter({ from, to, duration = 2, prefix = "", suffix = "" }) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (value) => {
          if (nodeRef.current) {
            nodeRef.current.textContent = `${prefix}${Math.round(value).toLocaleString()}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView, prefix, suffix]);

  return <span ref={nodeRef}>{prefix}{from.toLocaleString()}{suffix}</span>;
}

export default function Investment() {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const frameRef = useRef(0)
  const rafRef = useRef(null)
  const [loaded, setLoaded] = useState(0)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const frameProgress = useTransform(scrollYProgress, [0, 1], [0, investmentFrameCount - 1])

  const block1X = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.33], ["-50vw", "0vw", "0vw", "50vw"])
  const block1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.33], [0, 1, 1, 0])
  const block1Visibility = useTransform(scrollYProgress, v => v > 0.33 ? 'hidden' : 'visible')

  const block2X = useTransform(scrollYProgress, [0.33, 0.45, 0.55, 0.66], ["-50vw", "0vw", "0vw", "50vw"])
  const block2Opacity = useTransform(scrollYProgress, [0.33, 0.45, 0.55, 0.66], [0, 1, 1, 0])
  const block2Visibility = useTransform(scrollYProgress, v => (v < 0.33 || v > 0.66) ? 'hidden' : 'visible')

  const block3X = useTransform(scrollYProgress, [0.66, 0.78, 1], ["-50vw", "0vw", "0vw"])
  const block3Opacity = useTransform(scrollYProgress, [0.66, 0.78, 1], [0, 1, 1])
  const block3Visibility = useTransform(scrollYProgress, v => v < 0.66 ? 'hidden' : 'visible')

  useEffect(() => {
    const images = Array.from({ length: investmentFrameCount }, (_, index) => {
      const image = new Image()
      image.src = investmentFramePath(index)
      image.onload = () => setLoaded((value) => value + 1)
      imagesRef.current[index] = image
      return image
    })
    return () => images.forEach((image) => { image.onload = null })
  }, [])

  useMotionValueEvent(frameProgress, 'change', (value) => {
    frameRef.current = Math.max(0, Math.min(investmentFrameCount - 1, Math.round(value)))
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

  const glassPanelClass = "return-panel bg-white/[0.025] hover:bg-white/[0.05] transition-colors duration-500 border border-white/50 rounded-2xl backdrop-blur-md shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] text-white relative overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none p-5 lg:p-6"

  return (
    <section ref={sectionRef} id="investment" className="investment-section relative h-[250vh] !p-0">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-[#29352e]">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" aria-label="Investment cinematic sequence" />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 w-full mx-auto max-w-[1440px] px-6 lg:px-12 pt-24">
          <div className="investment-layout">
            <SectionIntro number="" label="The outlook" title={<>A place to live.<br /><i>A decision to keep.</i></>}>
              <p>Dehiwala's enduring connectivity and limited premium supply make A&Y Residences a home with lasting value.</p>
              <Button href="#contact" variant="gold">Request investment brief</Button>
            </SectionIntro>
            <div className="relative grid mt-12 lg:mt-0 max-w-xl w-full">
              {/* Block 1: Outlook */}
              <motion.div className="col-start-1 row-start-1" style={{ x: block1X, opacity: block1Opacity, visibility: block1Visibility }}>
                <div className={glassPanelClass}>
                  <div className="relative z-10">
                    <span className="text-[#c9a227] tracking-widest text-[10px] uppercase font-bold mb-3 block">Strategic Location</span>
                    <strong className="block text-3xl sm:text-4xl font-serif mt-2 mb-4 text-white font-light tracking-tight">The Dehiwala <i className="text-white/70 italic font-serif">Advantage.</i></strong>
                    <p className="text-white/70 text-sm mb-4 leading-relaxed font-light">Located at the nexus of Colombo's southern expansion, Dehiwala offers unprecedented connectivity and high-net-worth demographic migration.</p>
                    <div className="space-y-5">
                      <div className="flex justify-between items-end border-b border-white/10 pb-3">
                        <span className="text-white/60 text-sm font-light">Property Value Index (5 Yrs)</span>
                        <b className="text-[#c9a227] text-xl font-light">↑ <Counter from={0} to={48} suffix="%" duration={1.5} /></b>
                      </div>
                      <div className="flex justify-between items-end border-b border-white/10 pb-3">
                        <span className="text-white/60 text-sm font-light">Infrastructure Rating</span>
                        <b className="text-white text-xl font-light">Tier 1</b>
                      </div>
                      <div className="flex justify-between items-end border-b border-white/10 pb-3">
                        <span className="text-white/60 text-sm font-light">Foreign Investment Mix</span>
                        <b className="text-white text-xl font-light"><Counter from={0} to={35} suffix="%" duration={1.5} /></b>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Block 2: Capital Appreciation */}
              <motion.div className="col-start-1 row-start-1" style={{ x: block2X, opacity: block2Opacity, visibility: block2Visibility }}>
                <div className={glassPanelClass}>
                  <div className="relative z-10">
                    <span className="text-[#c9a227] tracking-widest text-[10px] uppercase font-bold mb-3 block">Wealth Generation</span>
                    <strong className="block text-3xl sm:text-4xl font-serif mt-2 mb-2 text-white font-light tracking-tight">Capital <i className="text-white/70 italic font-serif">Appreciation.</i></strong>

                    <div className="relative h-32 w-full mt-4 mb-4">
                      <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible preserve-3d">
                        <defs>
                          <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#c9a227" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#c9a227" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Grid lines */}
                        <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />

                        {/* Area Path */}
                        <motion.path
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 0.8 }}
                          viewport={{ once: true, margin: "-50px" }}
                          d="M0,120 L80,110 L160,85 L240,90 L320,40 L400,10 L400,150 L0,150 Z"
                          fill="url(#goldGradient)"
                        />
                        <motion.path
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                          viewport={{ once: true, margin: "-50px" }}
                          d="M0,120 L80,110 L160,85 L240,90 L320,40 L400,10"
                          fill="none"
                          stroke="#c9a227"
                          strokeWidth="3"
                        />
                        {/* Data Points */}
                        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }} cx="80" cy="110" r="4" fill="#c9a227" />
                        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }} cx="160" cy="85" r="4" fill="#c9a227" />
                        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.9 }} viewport={{ once: true }} cx="240" cy="90" r="4" fill="#c9a227" />
                        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.2 }} viewport={{ once: true }} cx="320" cy="40" r="4" fill="#c9a227" />
                        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.5 }} viewport={{ once: true }} cx="400" cy="10" r="5" fill="#fff" className="drop-shadow-[0_0_10px_rgba(201,162,39,1)]" />
                      </svg>
                      <div className="flex justify-between text-[10px] text-white/30 mt-3 font-mono tracking-widest">
                        <span>24</span>
                        <span>25</span>
                        <span>26</span>
                        <span>27</span>
                        <span>28</span>
                        <span>29</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex flex-col">
                        <span className="text-white/50 text-xs font-light mb-1">Projected 5-Year ROI</span>
                        <b className="text-white text-2xl font-light"><Counter from={0} to={62} suffix="%" duration={2} /></b>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-white/50 text-xs font-light mb-1">Annual Growth</span>
                        <b className="text-[#c9a227] text-2xl font-light">+<Counter from={0} to={12} suffix="%" duration={1.5} /></b>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Block 3: Rental Yield */}
              <motion.div className="col-start-1 row-start-1" style={{ x: block3X, opacity: block3Opacity, visibility: block3Visibility }}>
                <div className={glassPanelClass}>
                  <div className="relative z-10">
                    <span className="text-[#c9a227] tracking-widest text-[10px] uppercase font-bold mb-3 block">Passive Income</span>
                    <strong className="block text-3xl sm:text-4xl font-serif mt-2 mb-4 text-white font-light tracking-tight">Rental <i className="text-white/70 italic font-serif">Revenues.</i></strong>
                    <p className="text-white/70 text-sm mb-4 leading-relaxed font-light">Premium coastal properties maintain incredibly high occupancy rates, generating reliable, inflation-hedged passive income.</p>

                    <div className="bg-white/[0.03] rounded-xl p-6 border border-white/10 relative overflow-hidden group hover:border-[#c9a227]/40 transition-colors duration-500">
                      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#c9a227" strokeWidth="1"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                      </div>
                      <div className="flex flex-col relative z-10">
                        <span className="text-white/60 text-sm font-light mb-2">Projected Annual Revenue (3BR)</span>
                        <b className="text-[#c9a227] text-4xl sm:text-5xl font-light tracking-tight flex items-baseline">
                          <Counter from={15000} to={42500} prefix="$" duration={2.5} />
                          <span className="text-lg text-white/40 ml-2 font-serif italic">/ yr</span>
                        </b>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="flex flex-col p-5 bg-white/[0.02] rounded-xl border border-white/5">
                        <span className="text-white/50 text-xs font-light mb-1">Monthly Rent</span>
                        <b className="text-white text-xl font-light"><Counter from={1000} to={3540} prefix="$" duration={2} /></b>
                      </div>
                      <div className="flex flex-col p-5 bg-white/[0.02] rounded-xl border border-white/5">
                        <span className="text-white/50 text-xs font-light mb-1">Occupancy Target</span>
                        <b className="text-white text-xl font-light"><Counter from={50} to={95} suffix="%" duration={2} /></b>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
