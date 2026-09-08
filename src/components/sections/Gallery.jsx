import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SectionIntro from '../ui/SectionIntro';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const galleryItems = [
  { src: "/assests/gallery/gallery_1.jpg", desc: "Elegant living spaces designed for comfort" },
  { src: "/assests/gallery/gallery_2.jpg", desc: "Modern architectural details and finishes" },
  { src: "/assests/gallery/gallery_3.jpg", desc: "Luxurious master suites with city views" },
  { src: "/assests/gallery/gallery_4.jpg", desc: "State-of-the-art kitchen and dining areas" },
  { src: "/assests/gallery/gallery_5.jpg", desc: "Exclusive rooftop amenities and pools" },
  { src: "/assests/gallery/gallery_1.jpg", desc: "Elegant living spaces designed for comfort" },
  { src: "/assests/gallery/gallery_2.jpg", desc: "Modern architectural details and finishes" },
  { src: "/assests/gallery/gallery_3.jpg", desc: "Luxurious master suites with city views" },
];

export default function Gallery() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="gallery" className="section section-paper !px-0 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 mb-12">
        <div className="gallery-head">
          <SectionIntro number="" label="The feeling" title={<>Space for a life<br /><i>well lived.</i></>} />
          <span>Project Gallery<br /><small>Curated visual collection</small></span>
        </div>
      </div>
      
      <div className="w-full relative py-10">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          navigation={{
            prevEl: '.gallery-prev-btn',
            nextEl: '.gallery-next-btn',
          }}
          className="w-full max-w-[100vw] !pb-12"
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index} className="!w-[280px] sm:!w-[400px] md:!w-[550px] lg:!w-[700px]">
              <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl bg-black/10 relative group">
                <img src={item.src} alt={`Gallery ${index}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 md:p-8">
                  <p className="text-white text-sm md:text-lg font-medium tracking-wide translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button 
            className="gallery-prev-btn w-12 h-12 flex items-center justify-center rounded-full border border-[#74746d]/40 text-[#74746d] hover:bg-[#c9a227] hover:text-white hover:border-[#c9a227] transition-colors z-10"
          >
            <ArrowLeft size={18} />
          </button>
          <button 
            className="gallery-next-btn w-12 h-12 flex items-center justify-center rounded-full border border-[#74746d]/40 text-[#74746d] hover:bg-[#c9a227] hover:text-white hover:border-[#c9a227] transition-colors z-10"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
