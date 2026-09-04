import { Check, ArrowUpRight } from 'lucide-react'
import SectionIntro from '../ui/SectionIntro'
import Highlights from '../ui/Highlights'

export default function Project() {
  return (
    <section id="project" className="section section-paper">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="project-grid">
          <div className="image-placeholder architecture-placeholder" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div>
            <SectionIntro number="" label="The project" title={<>Designed for<br /><i>modern urban living.</i></>}>
              <p className="lead">A&Y Residences is a rare balance of architecture and ease. Every detail is composed to give daily life more room to breathe.</p>
            </SectionIntro>
            <ul className="feature-list">
              {['Contemporary architecture', 'Spacious, light-filled apartments', 'Premium fixtures and finishes', 'Secure, private living', 'Smart lifestyle facilities'].map((item) => (
                <li key={item}><Check size={15} />{item}</li>
              ))}
            </ul>
            <a href="#apartments" className="text-link">Discover the residences <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <Highlights />
      </div>
    </section>
  )
}
