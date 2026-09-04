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
        <div className="amenity-grid">
          {amenities.map(([Icon, title, copy, bgImage]) => (
            <motion.div
              whileHover={{ y: -8 }}
              className="amenity relative overflow-hidden group !bg-transparent border border-white/10"
              key={title}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${bgImage}')` }}
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="relative z-10">
                <Icon size={25} strokeWidth={1.2} className="!text-[#c9a227]" />
                <h3 className="text-white">{title}</h3>
                <p className="!text-white/80">{copy}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
