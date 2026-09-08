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

  const darkCardClass = "return-panel bg-[#0a0a0c] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#c9a227]/15 via-transparent to-transparent border border-white/5 rounded-[24px] text-white relative overflow-hidden p-5 sm:p-6 lg:p-7 shadow-2xl"

  const Header = ({ title }) => (
    <div className="flex justify-between items-center mb-4 sm:mb-5">
      <div className="flex items-center gap-2.5">
        <div className="w-2 h-2 bg-[#c9a227]"></div>
        <span className="text-[#c9a227] tracking-[0.2em] text-[10px] sm:text-xs font-bold uppercase">{title}</span>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-white/70">
        <span>Verified Projections</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      </div>
    </div>
  )

  const Title = ({ prefix, highlight, subtitle }) => (
    <div className="mb-4 sm:mb-5">
      <strong className="block text-[26px] sm:text-3xl lg:text-4xl font-serif mb-2 text-white font-light tracking-tight">
        {prefix} <i className="text-[#c9a227] italic font-serif">{highlight}</i>
      </strong>
      <p className="text-white/50 text-xs sm:text-sm font-light leading-snug">{subtitle}</p>
    </div>
  )

  const BottomButton = ({ text }) => (
    <button className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 mt-2 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-colors text-[11px] sm:text-xs text-white/80 font-medium">
      {text}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a227" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
    </button>
  )

  return (
    <section ref={sectionRef} id="investment" className="investment-section relative h-[250vh] !p-0">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-[#29352e]">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" aria-label="Investment cinematic sequence" />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 w-full mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 pt-6 sm:pt-10 md:pt-12 lg:pt-16">
          <div className="investment-layout">
            <div className="[&_.section-intro_h2]:!text-[3rem] [&_.section-intro_h2]:!leading-[0.85] sm:[&_.section-intro_h2]:!text-[4rem] md:[&_.section-intro_h2]:!text-[clamp(4.5rem,8vw,8.5rem)]">
              <SectionIntro number="" label="The outlook" title={<>A place to live.<br /><i>A decision to keep.</i></>}>
                <p className="hidden md:block">Dehiwala's enduring connectivity and limited premium supply make A&Y Residences a home with lasting value.</p>
                <div className="mt-6 lg:mt-8 hidden md:block">
                  <Button href="#contact" variant="gold">Request investment brief</Button>
                </div>
              </SectionIntro>
            </div>
            <div className="relative grid max-w-xl w-full mx-auto md:mx-0 mt-2 sm:mt-4 md:mt-0">

              <motion.div className="col-start-1 row-start-1" style={{ x: block1X, opacity: block1Opacity, visibility: block1Visibility }}>
                <div className={darkCardClass}>
                  <div className="relative z-10">
                    <Header title="Strategic Location" />
                    <Title prefix="The Dehiwala" highlight="Advantage." subtitle="Located at the nexus of Colombo's southern expansion." />

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 mt-4 sm:mt-6">
                      <div className="bg-[#050507] border border-white/5 rounded-2xl p-4 sm:p-5">
                        <span className="text-white/50 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mb-1 sm:mb-2 block">Value Index</span>
                        <div className="flex items-baseline gap-1.5 sm:gap-2">
                          <b className="text-white text-2xl sm:text-3xl lg:text-4xl font-serif">↑ <Counter from={0} to={48} suffix="%" duration={1.5} /></b>
                          <span className="text-[#4ade80] text-[9px] sm:text-[10px] font-bold">5 Yrs</span>
                        </div>
                      </div>
                      <div className="bg-[#050507] border border-white/5 rounded-2xl p-4 sm:p-5">
                        <span className="text-white/50 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mb-1 sm:mb-2 block">Foreign Mix</span>
                        <div className="flex items-baseline gap-1.5 sm:gap-2">
                          <b className="text-[#c9a227] text-2xl sm:text-3xl lg:text-4xl font-serif"><Counter from={0} to={35} suffix="%" duration={1.5} /></b>
                          <span className="text-white/40 text-[9px] sm:text-[10px] font-bold">Total</span>
                        </div>
                      </div>
                    </div>
                    <BottomButton text="View Location Analysis (PDF)" />
                  </div>
                </div>
              </motion.div>


              <motion.div className="col-start-1 row-start-1" style={{ x: block2X, opacity: block2Opacity, visibility: block2Visibility }}>
                <div className={darkCardClass}>
                  <div className="relative z-10">
                    <Header title="Wealth Generation" />
                    <Title prefix="Capital" highlight="Appreciation." subtitle="Consistent compounded yields driven by scarcity." />

                    <div className="relative h-16 sm:h-24 w-full mt-2 sm:mt-4 mb-2 sm:mb-4">
                      <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible preserve-3d">
                        <defs>
                          <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#c9a227" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#c9a227" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />

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
                        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }} cx="80" cy="110" r="4" fill="#c9a227" />
                        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }} cx="160" cy="85" r="4" fill="#c9a227" />
                        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.9 }} viewport={{ once: true }} cx="240" cy="90" r="4" fill="#c9a227" />
                        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.2 }} viewport={{ once: true }} cx="320" cy="40" r="4" fill="#c9a227" />
                        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.5 }} viewport={{ once: true }} cx="400" cy="10" r="5" fill="#fff" className="drop-shadow-[0_0_10px_rgba(201,162,39,1)]" />
                      </svg>
                      <div className="flex justify-between text-[8px] sm:text-[10px] text-white/30 mt-2 sm:mt-3 font-mono tracking-widest">
                        <span>'24</span><span>'25</span><span>'26</span><span>'27</span><span>'28</span><span className="text-[#c9a227] font-bold">'29</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                      <div className="bg-[#050507] border border-white/5 rounded-2xl p-4 sm:p-5">
                        <span className="text-white/50 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mb-1 sm:mb-2 block">Projected 5-Yr ROI</span>
                        <div className="flex items-baseline gap-1.5 sm:gap-2">
                          <b className="text-white text-2xl sm:text-3xl lg:text-4xl font-serif"><Counter from={0} to={62} suffix="%" duration={2} /></b>
                          <span className="text-[#4ade80] text-[9px] sm:text-[10px] font-bold">Net Est.</span>
                        </div>
                      </div>
                      <div className="bg-[#050507] border border-white/5 rounded-2xl p-4 sm:p-5">
                        <span className="text-white/50 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mb-1 sm:mb-2 block">Annual Growth</span>
                        <div className="flex items-baseline gap-1.5 sm:gap-2">
                          <b className="text-[#c9a227] text-2xl sm:text-3xl lg:text-4xl font-serif">+<Counter from={0} to={12} suffix="%" duration={1.5} /></b>
                          <span className="text-white/40 text-[9px] sm:text-[10px] font-bold">YoY</span>
                        </div>
                      </div>
                    </div>
                    <BottomButton text="Download Detailed Yield Model (PDF)" />
                  </div>
                </div>
              </motion.div>


              <motion.div className="col-start-1 row-start-1" style={{ x: block3X, opacity: block3Opacity, visibility: block3Visibility }}>
                <div className={darkCardClass}>
                  <div className="relative z-10">
                    <Header title="Passive Income" />
                    <Title prefix="Rental" highlight="Revenues." subtitle="Premium coastal properties maintain incredibly high occupancy rates." />

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 mt-4 sm:mt-6">
                      <div className="bg-[#050507] border border-white/5 rounded-2xl p-4 sm:p-5">
                        <span className="text-white/50 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mb-1 sm:mb-2 block">Annual Rev (3BR)</span>
                        <div className="flex items-baseline gap-1.5 sm:gap-2">
                          <b className="text-white text-2xl sm:text-3xl lg:text-4xl font-serif"><Counter from={15000} to={42500} prefix="$" duration={2.5} /></b>
                          <span className="text-[#4ade80] text-[9px] sm:text-[10px] font-bold">/ yr</span>
                        </div>
                      </div>
                      <div className="bg-[#050507] border border-white/5 rounded-2xl p-4 sm:p-5">
                        <span className="text-white/50 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mb-1 sm:mb-2 block">Occupancy</span>
                        <div className="flex items-baseline gap-1.5 sm:gap-2">
                          <b className="text-[#c9a227] text-2xl sm:text-3xl lg:text-4xl font-serif"><Counter from={50} to={95} suffix="%" duration={2} /></b>
                          <span className="text-white/40 text-[9px] sm:text-[10px] font-bold">Target</span>
                        </div>
                      </div>
                    </div>
                    <BottomButton text="Download Rental Yields (PDF)" />
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
