import { motion } from 'framer-motion'
import SectionIntro from '../ui/SectionIntro'
import { amenities } from '../../constants'

export default function Amenities() {
  return (
    <section id="amenities" className="section section-paper">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="amenities-head">
          <SectionIntro number="" label="The experience" title={<>The everyday,<br /><i>elevated.</i></>}>
            <p>Quietly useful amenities, intentionally placed. Everything you need, nothing you don't.</p>
          </SectionIntro>
          <span className="vertical-note">A considered way of living</span>
        </div>
        <div className="amenity-grid rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
          {amenities.map(([Icon, title, copy, bgImage], idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="amenity relative overflow-hidden group !bg-transparent border border-white/10 hover:border-[#c9a227]/40 transition-colors duration-300 cursor-pointer"
              key={title}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${bgImage}')` }}
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:border-[#c9a227]/40 transition-colors duration-300">
                  <Icon size={22} strokeWidth={1.5} className="!text-[#c9a227] transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-white group-hover:text-[#f3df9b] transition-colors duration-300">{title}</h3>
                <p className="!text-white/80">{copy}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
