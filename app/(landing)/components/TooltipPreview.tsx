"use client";
import React from "react";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Javascript",
    designation: "Fullstack",
    image:
      "/images/tooltips/js-logo.png",
  },
  {
    id: 2,
    name: ".NET",
    designation: "Core/Framework",
    image:
      "/images/tooltips/dotnet-logo.png",
  },
  {
    id: 3,
    name: "SAP",
    designation: "Techno Functional Consultant",
    image:
      "/images/tooltips/sap-logo.png",
  },
  {
    id: 4,
    name: "SQL",
    designation: "MySQL/PostgreSQL",
    image:
    "/images/tooltips/sql-logo.png",  
  },
  {
    id: 5,
    name: "Tailwind",
    designation: "CSS3/SCSS",
    image:
      "/images/tooltips/tailwind-logo.png",
  },
  {
    id: 6,
    name: "Cross Platform Development",
    designation: "React Native, Flutter & Electron",
    image:
    "/images/tooltips/crossplatform-logo.png",    },
];

export function ToolTipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mt-30 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
