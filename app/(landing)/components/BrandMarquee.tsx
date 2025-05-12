"use client";

const logos = [
  "/images/brands/americo-logo.png",
  "/images/brands/ngvc-logo.png",
  "/images/brands/wolverine-logo.jpg",
  "/images/brands/birkenstock-logo.png",
  "/images/brands/burberry-logo.svg",
  "/images/brands/crocs-logo.jpg",
  "/images/brands/colehaan-logo.png",
  "/images/brands/capezio-logo.svg",
  "/images/brands/centricbrands-logo.png",
  "/images/brands/gbg-logo.png",
  "/images/brands/carhartt-logo.png",
];

export default function BrandMarquee() {
  return (
    <div>
      <h2 className="text-center text-4xl font-semibold">Brands I have worked with</h2>
      <div className="relative overflow-hidden whitespace-nowrap py-8 bg-white bg-opacity-50 backdrop-blur-lg mt-10">
        <div className="animate-scroll space-x-16">
          {[...logos, ...logos].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Brand ${idx}`}
              className="h-20 max-w-40 w-auto object-contain inline-block"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
