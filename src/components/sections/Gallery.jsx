import SectionIntro from '../ui/SectionIntro'

const row1Images = [
  "/assests/gallery/gallery_1.jpg",
  "/assests/gallery/gallery_2.jpg",
  "/assests/gallery/gallery_3.jpg",
  "/assests/gallery/gallery_4.jpg",
  "/assests/gallery/gallery_5.jpg",
];

const row2Images = [
  "/assests/gallery/gallery_3.jpg",
  "/assests/gallery/gallery_4.jpg",
  "/assests/gallery/gallery_5.jpg",
  "/assests/gallery/gallery_1.jpg",
  "/assests/gallery/gallery_2.jpg",
];

const GalleryRow = ({ images, direction = "left" }) => {
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  
  // Quadruple images to ensure single TrackContent is extremely wide for 4K screens
  const repeatedImages = [...images, ...images, ...images, ...images];

  const TrackContent = () => (
    <div className="flex shrink-0 gap-3 sm:gap-4 px-1.5 sm:px-2">
      {repeatedImages.map((src, idx) => (
        <div 
          key={idx} 
          className="w-[220px] h-[160px] sm:w-[320px] sm:h-[220px] lg:w-[420px] lg:h-[280px] rounded-xl overflow-hidden shrink-0 relative group/item cursor-pointer shadow-md"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/item:scale-110"
            style={{ backgroundImage: `url('${src}')` }}
          />
          <div className="absolute inset-0 bg-black/10 group-hover/item:bg-transparent transition-colors duration-500" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full relative flex overflow-hidden py-2 pause-marquee">
      <div className={`flex shrink-0 ${animationClass}`}>
        <TrackContent />
      </div>
      <div className={`flex shrink-0 ${animationClass}`}>
        <TrackContent />
      </div>
    </div>
  );
};

export default function Gallery() {
  return (
    <section id="gallery" className="section section-paper !px-0 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 mb-8">
        <div className="gallery-head">
          <SectionIntro number="" label="The feeling" title={<>Space for a life<br /><i>well lived.</i></>} />
          <span>Project Gallery<br /><small>Curated visual collection</small></span>
        </div>
      </div>
      
      <div className="flex flex-col gap-1 -mx-2">
        <GalleryRow images={row1Images} direction="left" />
        <GalleryRow images={row2Images} direction="right" />
      </div>
    </section>
  )
}
