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
          <div className="residence-card">
            <div className="image-placeholder interior-placeholder" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="residence-info">
              <span className="card-kicker">The signature residence</span>
              <h3>Three bedroom residence</h3>
              <p>1,250–1,450 sq.ft <span>·</span> 03 private balconies</p>
              <a href="#contact" className="text-link">Request floor plan <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="residence-note">
            <KeyRound size={22} />
            <p>“The luxury of a home is not what it contains. It is the life it makes possible.”</p>
            <span>A&Y / Design principle 01</span>
          </div>
        </div>
      </div>
    </section>
  )
}
