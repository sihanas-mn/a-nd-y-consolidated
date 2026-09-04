import React from "react";

const textRow1 = "ELEVATING URBAN LIVING WITH UNCOMPROMISING LUXURY, CUTTING-EDGE DESIGN, AND MODERN ARCHITECTURAL ELEGANCE AT EVERY TURN";
const textRow2 = "A PRESTIGIOUS AND HIGHLY CONNECTED ADDRESS IN DEHIWALA, METICULOUSLY DESIGNED FOR AN EXCLUSIVE AND ELITE LIFESTYLE";
const textRow3 = "AWAKEN EVERY MORNING TO BREATHTAKING PANORAMIC OCEAN VIEWS COMBINED WITH SERENE AND PEACEFUL COASTAL SURROUNDINGS";
const textRow4 = "EXPERIENCE STATE OF THE ART AMENITIES FEATURING LUXURIOUS INFINITY POOLS, MODERN GYMNASIUMS, AND EXCLUSIVE ROOFTOP LOUNGES";
const textRow5 = "DISCOVER METICULOUSLY CRAFTED AND INCREDIBLY SPACIOUS FLOOR PLANS FEATURING ONLY THE FINEST PREMIUM FINISHES AND SMART FIXTURES";
const textRow6 = "AN EXCEPTIONAL AND RARE SECURE INVESTMENT OPPORTUNITY GUARANTEEING HIGH YIELD RETURNS AND LONG-TERM PROPERTY VALUE APPRECIATION";

const MarqueeRow = ({ text, direction = "left" }) => {
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  
  const MarqueeContent = () => (
    <div className="flex items-center px-8 sm:px-16 shrink-0 min-w-full justify-between">
      <span className="marquee-text-outline font-serif text-[clamp(2.5rem,4.5vw,5.5rem)] italic leading-tight tracking-normal uppercase whitespace-nowrap">
        {text}
      </span>
      <span className="ml-8 sm:ml-16 text-[#C9A227] text-xl sm:text-3xl opacity-50">✦</span>
    </div>
  );

  return (
    <div className="marquee-row group relative flex overflow-hidden whitespace-nowrap py-3 sm:py-4 hover:z-10 cursor-pointer">
      <div className={`flex shrink-0 ${animationClass}`}>
        <MarqueeContent />
      </div>
      <div className={`flex shrink-0 ${animationClass}`}>
        <MarqueeContent />
      </div>
    </div>
  );
};

export default function LuxuryMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#080a09] border-y border-[#C9A227]/20 flex items-center justify-center h-[50vh] sm:h-[70vh]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.06)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Angled container, absolute centered to prevent pushing section height, widened to cover corners */}
      <div className="absolute top-1/2 left-1/2 w-[200%] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-4 -rotate-[10deg] scale-110 transform-gpu">
        <MarqueeRow text={textRow1} direction="left" />
        <MarqueeRow text={textRow2} direction="right" />
        <MarqueeRow text={textRow3} direction="left" />
        <MarqueeRow text={textRow4} direction="right" />
        <MarqueeRow text={textRow5} direction="left" />
        <MarqueeRow text={textRow6} direction="right" />
      </div>
    </section>
  );
}
