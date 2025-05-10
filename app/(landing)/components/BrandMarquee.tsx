"use client";

const logos = [
  "/images/brands/birkenstock-logo.png",
  "/images/brands/carhartt-logo.png",
  "/images/brands/wolverine-logo.jpg",
  "/images/brands/colehaan-logo.png",
  "/images/brands/burberry-logo.svg",
  "/images/brands/americo-logo.png",
  "/images/brands/ngvc-logo.png",

];

export default function BrandMarquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap py-8 bg-white">
      <div className="flex animate-scroll max-w-40 space-x-16">
        {[...logos, ...logos].map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`Brand ${idx}`}
            className="h-20 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}
