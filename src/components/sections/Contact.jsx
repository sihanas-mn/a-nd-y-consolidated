import { motion } from 'framer-motion'
import { Phone, Mail, ArrowUpRight } from 'lucide-react'
import Button from '../ui/Button'

export default function Contact() {
  return (
    <section id="contact" className="contact-section relative overflow-hidden">
      <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-[#c9a227]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-16 px-6 lg:flex-row lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow">
            <motion.span 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ originX: 0 }}
            /> 
            Begin the conversation
          </div>
          <h2>Make room for<br /><i>what matters.</i></h2>
        </motion.div>
        <motion.div 
          className="contact-side"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>Register your interest for private floor plans, pricing and a personal viewing at A&Y Residences.</p>
          <Button href="mailto:hello@ayconsolidated.com" variant="gold">Request a private viewing</Button>
          <div className="contact-details">
            <motion.a 
              href="tel:+94112760000" 
              whileHover={{ x: 6 }} 
              className="transition-colors duration-300 hover:text-white group flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:border-[#c9a227]/50 transition-colors duration-300">
                <Phone size={14} className="text-[#c9a227]" />
              </div>
              <span>+94 11 276 0000</span>
            </motion.a>
            <motion.a 
              href="mailto:hello@ayconsolidated.com" 
              whileHover={{ x: 6 }} 
              className="transition-colors duration-300 hover:text-white group flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:border-[#c9a227]/50 transition-colors duration-300">
                <Mail size={14} className="text-[#c9a227]" />
              </div>
              <span>hello@ayconsolidated.com</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
