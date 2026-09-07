import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import SectionIntro from '../ui/SectionIntro'
import { distances } from '../../constants'

export default function Location() {
  return (
    <section id="location" className="section location-section">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:px-12">
        <div>
          <SectionIntro number="" label="The location" title={<>Close to everything.<br /><i>True to itself.</i></>}>
            <p>Set in Dehiwala, where the city meets the sea. A connected address for workdays, weekends and all the quiet moments between.</p>
          </SectionIntro>
          <div className="distance-list">
            {distances.map(([place, time], idx) => (
              <motion.div 
                key={place}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.08, ease: "easeOut" }}
                whileHover={{ x: 6 }}
                className="transition-transform duration-200 cursor-default"
              >
                <span>{place}</span>
                <b>{time}</b>
              </motion.div>
            ))}
          </div>
          <motion.a 
            href="#contact" 
            className="text-link group"
            whileHover={{ x: 3 }}
          >
            <span>View on map</span> 
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#c9a227]" />
          </motion.a>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group"
        >
          <div className="absolute inset-0 bg-[#080a09]/20 pointer-events-none group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-color"></div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.757041785292!2d79.8656!3d6.8511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a507cb81df9%3A0x7d24a0d922f3e8b0!2sDehiwala-Mount%20Lavinia%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            className="w-full h-full border-0 grayscale-[0.8] contrast-[1.1] opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute bottom-6 left-6 z-20 bg-black/70 backdrop-blur-md border border-white/15 rounded-xl p-4 pointer-events-none shadow-xl transition-transform duration-300 group-hover:scale-105">
            <div className="text-white font-medium text-sm flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a227] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c9a227]"></span>
              </span>
              <MapPin size={14} className="text-[#c9a227]" />
              A&Y Residences
            </div>
            <div className="text-white/60 text-xs mt-1 ml-5">Dehiwala · 06°51' N · 79°52' E</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
