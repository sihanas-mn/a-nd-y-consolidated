import { Dumbbell, Waves, ShieldCheck, Zap, Phone, Sparkles, CarFront, Bell } from 'lucide-react'

export const GOLD = '#c9a227'
export const frameCount = 300
export const framePath = (index) => `/assests/img-sequence/ezgif-frame-${String(index + 1).padStart(3, '0')}.png`
export const investmentFrameCount = 241
export const investmentFramePath = (index) => `/assests/investment-img-sequence/ezgif-frame-${String(index + 1).padStart(3, '0')}.png`

export const iconLiquidGlass = "flex items-center justify-center w-10 h-10 rounded-full border border-white/50 text-white bg-white/[0.025] backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none [&>svg]:relative [&>svg]:z-10"

export const navLinks = [['Project', '#project'], ['Apartments', '#apartments'], ['Location', '#location'], ['Amenities', '#amenities'], ['Investment', '#investment'], ['Gallery', '#gallery']]

export const highlights = [['05', 'Floors'], ['10', 'Private residences'], ['3BR', 'Apartment typology'], ['1,250–1,450', 'Sq.ft living space']]

export const amenities = [
  [Dumbbell, 'Gymnasium', 'State-of-the-art fitness center for your daily wellness.', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop'],
  [Waves, 'Rooftop Lounge', 'Open-air spaces designed for evenings that linger.', 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=800&auto=format&fit=crop'],
  [ShieldCheck, 'CCTV Security', '24/7 surveillance and secure access for peace of mind.', 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop'],
  [Zap, 'Generator Backup', 'Uninterrupted power supply for all residences.', 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=800&auto=format&fit=crop'],
  [Phone, 'Intercom', 'Direct communication to security and front desk.', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop'],
  [Sparkles, 'Air Conditioning', 'Premium climate control throughout the residence.', 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop'],
  [CarFront, 'Secure Parking', 'Allocated parking with generous, easy movement.', 'https://images.unsplash.com/photo-1590674899484-131297bc6ce1?q=80&w=800&auto=format&fit=crop'],
  [Bell, 'Concierge Service', 'Personalized assistance for your everyday needs.', 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop']
]

export const distances = [['Marine Drive', '02 min'], ['Galle Road', '03 min'], ['Colombo Fort', '18 min'], ['Bandaranaike Airport', '45 min']]
