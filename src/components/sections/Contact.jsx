import { Phone } from 'lucide-react'
import Button from '../ui/Button'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-16 px-6 lg:flex-row lg:px-12">
        <div>
          <div className="eyebrow"><span /> Begin the conversation</div>
          <h2>Make room for<br /><i>what matters.</i></h2>
        </div>
        <div className="contact-side">
          <p>Register your interest for private floor plans, pricing and a personal viewing at A&Y Residences.</p>
          <Button href="mailto:hello@ayconsolidated.com" variant="gold">Request a private viewing</Button>
          <div className="contact-details">
            <a href="tel:+94112760000"><Phone size={15} /> +94 11 276 0000</a>
            <a href="mailto:hello@ayconsolidated.com">hello@ayconsolidated.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}
