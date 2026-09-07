import { motion } from 'framer-motion'
import { ArrowUpRight, KeyRound } from 'lucide-react'
import SectionIntro from '../ui/SectionIntro'

export default function Apartments() {
  return (
    <section id="apartments" className="section section-dark">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionIntro number="" label="The residences" title={<>Room to arrive<br /><i>at yourself.</i></>}>
          <p>One considered floor plan, refined in three ways. Explore a home designed around the way you want to live.</p>
        </SectionIntro>
        <div className="apartment-grid">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="residence-card rounded-2xl overflow-hidden group shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-500"
          >
            <div 
              className="image-placeholder interior-placeholder transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            <div className="residence-info bg-[#111512]">
              <span className="card-kicker">The signature residence</span>
              <h3 className="group-hover:text-[#c9a227] transition-colors duration-300">Three bedroom residence</h3>
              <p>1,250–1,450 sq.ft <span>·</span> 03 private balconies</p>
              <motion.a 
                href="#contact" 
                className="text-link group/link inline-flex items-center gap-2"
                whileHover={{ x: 3 }}
              >
                <span>Request floor plan</span> 
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-[#c9a227]" />
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="residence-note rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#c9a227]/40 transition-colors duration-300 group"
          >
            <KeyRound size={22} className="text-[#c9a227] transition-transform duration-500 group-hover:rotate-45" />
            <p className="leading-relaxed">“The luxury of a home is not what it contains. It is the life it makes possible.”</p>
            <span className="tracking-widest">A&Y / Design principle 01</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
