import { motion } from 'framer-motion'
import { highlights } from '../../constants'

export default function Highlights() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-black/15 mt-16 lg:mt-[125px] gap-y-8 lg:gap-y-0">
      {highlights.map(([value, label], idx) => (
        <motion.div 
          className={`stat pt-6 lg:pt-7 pr-4 lg:pr-5 transition-colors duration-300 hover:border-r-[#c9a227]/60 group cursor-default ${idx % 2 === 0 ? 'border-r border-black/15' : 'border-r-0'} lg:border-r ${idx !== 3 ? 'lg:border-black/15' : 'lg:border-transparent'}`} 
          key={label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
        >
          <strong className="transition-transform duration-300 group-hover:text-[#c9a227] group-hover:translate-x-1">{value}</strong>
          <span>{label}</span>
        </motion.div>
      ))}
    </div>
  )
}
