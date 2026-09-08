import { motion } from 'framer-motion'
import SectionIntro from '../ui/SectionIntro'
import { amenities } from '../../constants'

// Specific heights assigned to match the masonry feel of the reference
const itemHeights = {
  'Gymnasium': 'h-[400px]',
  'Rooftop Lounge': 'h-[400px]',
  'CCTV Security': 'h-[400px]',
  'Generator Backup': 'h-[400px]',
  'Intercom': 'h-[400px]',
  'Air Conditioning': 'h-[400px]',
  'Secure Parking': 'h-[400px]',
  'Concierge Service': 'h-[400px]'
};

export default function Amenities() {
  // Explicitly mapping items to columns to maintain the exact layout
  const columns = [
    [amenities[0], amenities[4]], // Gym, Intercom
    [amenities[1], amenities[5]], // Rooftop, Air Conditioning
    [amenities[2], amenities[6]], // CCTV, Secure Parking
    [amenities[3], amenities[7]]  // Generator, Concierge
  ];

  return (
    <section id="amenities" className="section section-paper">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="amenities-head flex flex-col md:flex-row justify-between mb-16">
          <SectionIntro number="" label="The experience" title={<>The everyday,<br /><i>elevated.</i></>}>
            <p>Quietly useful amenities, intentionally placed. Everything you need, nothing you don't.</p>
          </SectionIntro>
          <span className="vertical-note hidden md:block mt-8 md:mt-0">A considered way of living</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-4 sm:gap-6 w-full">
          {columns.map((colItems, colIdx) => (
            <div
              key={colIdx}
              className={`flex flex-col gap-4 sm:gap-6 flex-1 ${colIdx % 2 !== 0 ? 'md:mt-12' : ''}`}
            >
              {colItems.map(([Icon, title, copy, bgImage], itemIdx) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: (colIdx * 0.1) + (itemIdx * 0.1), ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className={`amenity relative overflow-hidden group rounded-[20px] shadow-lg w-full cursor-pointer ${itemHeights[title]}`}
                  key={title}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${bgImage}')` }}
                  />
                  {/* Subtle dark overlay so images remain visible but text is readable */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#080a09]/90 group-hover:to-[#080a09]/80 transition-colors duration-500" />

                  <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 lg:p-8">
                    {/* Icon Box: Thin gold border, no background, slightly rounded */}
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#c9a227]/60">
                      <Icon size={18} strokeWidth={1.5} className="!text-[#c9a227]" />
                    </div>

                    <div className="mt-auto">
                      {/* Serif Font Title */}
                      <h3
                        className="text-white text-[22px] tracking-wide mb-2 group-hover:text-[#c9a227] transition-colors"
                        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
                      >
                        {title}
                      </h3>
                      {/* Small subtle text */}
                      <p className="text-white/50 text-[13px] leading-relaxed font-light">{copy}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
