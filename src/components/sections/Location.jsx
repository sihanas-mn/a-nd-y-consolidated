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
            {distances.map(([place, time]) => (
              <div key={place}><span>{place}</span><b>{time}</b></div>
            ))}
          </div>
          <a href="#contact" className="text-link">View on map <ArrowUpRight size={15} /></a>
        </div>
        <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group">
          <div className="absolute inset-0 bg-[#080a09]/20 pointer-events-none group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-color"></div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.757041785292!2d79.8656!3d6.8511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a507cb81df9%3A0x7d24a0d922f3e8b0!2sDehiwala-Mount%20Lavinia%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            className="w-full h-full border-0 grayscale-[0.8] contrast-[1.1] opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute bottom-6 left-6 z-20 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4 pointer-events-none shadow-lg">
            <div className="text-white font-medium text-sm flex items-center gap-2">
              <MapPin size={14} className="text-[#c9a227]" />
              A&Y Residences
            </div>
            <div className="text-white/60 text-xs mt-1 ml-5">Dehiwala · 06°51' N · 79°52' E</div>
          </div>
        </div>
      </div>
    </section>
  )
}
