import { Dumbbell, Waves, ShieldCheck, Zap, Phone, Sparkles, CarFront, Bell } from 'lucide-react'

export const GOLD = '#c9a227'
export const frameCount = 300
export const framePath = (index) => `/assests/img-sequence/ezgif-frame-${String(index + 1).padStart(3, '0')}.webp`
export const investmentFrameCount = 241
export const investmentFramePath = (index) => `/assests/investment-img-sequence/ezgif-frame-${String(index + 1).padStart(3, '0')}.webp`

export const iconLiquidGlass = "flex items-center justify-center w-10 h-10 rounded-full border border-white/50 text-white bg-white/[0.025] backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none [&>svg]:relative [&>svg]:z-10"

export const navLinks = [['Project', '#project'], ['Apartments', '#apartments'], ['Location', '#location'], ['Amenities', '#amenities'], ['Investment', '#investment'], ['Gallery', '#gallery']]

export const highlights = [['05', 'Floors'], ['10', 'Private residences'], ['3BR', 'Apartment typology'], ['1,250–1,450', 'Sq.ft living space']]

export const amenities = [
  [Dumbbell, 'Gymnasium', 'State-of-the-art fitness center for your daily wellness.', '/assests/amenities/gymnasium.jpg'],
  [Waves, 'Rooftop Lounge', 'Open-air spaces designed for evenings that linger.', '/assests/amenities/rooftop_lounge.jpg'],
  [ShieldCheck, 'CCTV Security', '24/7 surveillance and secure access for peace of mind.', '/assests/amenities/cctv_security.jpg'],
  [Zap, 'Generator Backup', 'Uninterrupted power supply for all residences.', '/assests/amenities/generator_backup.jpg'],
  [Phone, 'Intercom', 'Direct communication to security and front desk.', '/assests/amenities/intercom.jpg'],
  [Sparkles, 'Air Conditioning', 'Premium climate control throughout the residence.', '/assests/amenities/air_conditioning.jpg'],
  [CarFront, 'Secure Parking', 'Allocated parking with generous, easy movement.', '/assests/amenities/secure_parking.jpg'],
  [Bell, 'Concierge Service', 'Personalized assistance for your everyday needs.', '/assests/amenities/concierge_service.jpg']
]

export const distances = [['Marine Drive', '02 min'], ['Galle Road', '03 min'], ['Colombo Fort', '18 min'], ['Bandaranaike Airport', '45 min']]
