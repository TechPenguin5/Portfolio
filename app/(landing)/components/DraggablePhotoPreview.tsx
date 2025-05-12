import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/app/components/ui/draggable-card";

export function DraggablePhotoPreview() {
  const items = [
    {
        title: "April 18, 2023",
        image: "/images/photos/12-05-19.jpg",
        className: "absolute top-10 left-[0%] rotate-[-5deg]",
    },
    {
        title: "April 2, 2023",
        image: "/images/photos/04-03-23.jpg",
        className: "absolute top-25 left-[53%] rotate-[8deg]",
    },
    {
        title: "April 13, 2023",
        image: "/images/photos/04-13-23.jpeg",
        className: "absolute top-12 left-[25%] rotate-[10deg]",
    },
    {
        title: "May 10, 2023",
        image: "/images/photos/05-10-23.jpeg",
        className: "absolute top-66 right-[43%] rotate-[2deg]",
    },
    {
        title: "June 03, 2023",
        image: "/images/photos/06-03-23.jpg",
        className: "absolute top-67 left-[57%] rotate-[-7deg]",
    },
    {
        title: "December 05, 2019",
        image: "/images/photos/04-18-23.jpg",
        className: "absolute top-65 left-[2%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      {items.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
