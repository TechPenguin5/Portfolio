"use client";
import { Carousel } from "@/app/components/ui/carousel";

export function CarouselPreview() {
  const slideData = [
    {
      title: "",
      src: "/images/photos/sunset.jpeg",
    },
    {
      title: "",
      src: "/images/photos/hill.jpg",
    },
    {
      title: "",
      src: "/images/photos/cape-town.jpeg",
    },
    {
      title: "",
      src: "/images/photos/boats.jpeg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full pb-20">
      <Carousel slides={slideData} />
    </div>
  );
}
