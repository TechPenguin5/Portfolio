"use client";
import React from "react";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
import { h2 } from "motion/react-client";
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
    <div className="mt-20">
      <h2 className="text-center text-4xl font-semibold">Skills</h2>
      <div className="flex flex-row items-center justify-center mt-10 mb-20 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}
