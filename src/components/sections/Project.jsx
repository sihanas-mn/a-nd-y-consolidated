import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import SectionIntro from '../ui/SectionIntro'
import Highlights from '../ui/Highlights'

export default function Project() {
  return (
    <section id="project" className="section section-paper">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="project-grid">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="image-placeholder architecture-placeholder rounded-2xl overflow-hidden group shadow-[0_12px_40px_rgba(0,0,0,0.08)] cursor-pointer" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
          </motion.div>
          <div>
            <SectionIntro number="" label="The project" title={<>Designed for<br /><i>modern urban living.</i></>}>
              <p className="lead">A&Y Residences is a rare balance of architecture and ease. Every detail is composed to give daily life more room to breathe.</p>
            </SectionIntro>
            <ul className="feature-list">
              {['Contemporary architecture', 'Spacious, light-filled apartments', 'Premium fixtures and finishes', 'Secure, private living', 'Smart lifestyle facilities'].map((item, idx) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.08, ease: "easeOut" }}
                  whileHover={{ x: 4 }}
                  className="transition-transform duration-200 cursor-default"
                >
                  <span className="p-1 rounded-md bg-[#c9a227]/10 text-[#c9a227] flex items-center justify-center">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.a 
              href="#apartments" 
              className="text-link group"
              whileHover={{ x: 3 }}
            >
              <span>Discover the residences</span> 
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#c9a227]" />
            </motion.a>
          </div>
        </div>
        <Highlights />
      </div>
    </section>
  )
}
