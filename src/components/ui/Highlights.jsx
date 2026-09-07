import { motion } from 'framer-motion'
import { highlights } from '../../constants'

export default function Highlights() {
  return (
    <div className="stats-grid">
      {highlights.map(([value, label], idx) => (
        <motion.div 
          className="stat transition-colors duration-300 hover:border-r-[#c9a227]/60 group cursor-default" 
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
