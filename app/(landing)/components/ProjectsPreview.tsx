import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

export function ProjectsPreview() {
  return (
    <div className="flex flex-col gap-10 max-w-4x1 mx-auto mb-10">
    <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
      <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
        Personal Projects
      </h2>
    </div>
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          // icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </div>
  );
}

function ItemImage({ src, href }: {src: string, href: string }) {
  return (
    <Link
      target="_blank"
      href={href ?? ""}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-x1 overflow-hidden" >
        <Image
          className="h-full w-full object-cover"
          width= {500}
          height= {500}
          src={src ?? ""}
          alt="project-img" />
    </Link>
  )
}

const items = [
  {
    title: "Ambros",
    description: "Responsive, Adaptive, Business, One-Page, HTML5, CSS3, JQuerry, Multi-Purpose, Fast",
    header: <ItemImage src="/images/projects/ambros.png" href="https://github.com/TechPenguin5/Ambros"/>,
  },
  {
    title: "Auro-API",
    description: "An API backend system built on node JS and express for interfacing with Auro streaming products",
    header: <ItemImage src="/images/projects/auroservices.png" href="https://github.com/TechPenguin5/Auro-API"/>,
  },
  {
    title: "TechFusion+",
    description: "A custom firmware that integrates the best aspects of Sony, One+ and AOSP to other platforms and devices.",
    header: <ItemImage src="/images/projects/techfusionpluslauncher.jpg" href="https://xdaforums.com/t/rom-kitkat-4-4-4-techfusion-v4.2776563/"/>,
  },
  {
    title: "Auro",
    description:
      "Understand the impact of effective communication in our lives.",
      header: <ItemImage src="/images/projects/auro.png" href="https://github.com/TechPenguin5/Ambros"/>,
  },
  {
    title: "Style Omega",
    description: "Join the quest for understanding and enlightenment.",
    header: <ItemImage src="/images/projects/ambros.png" href="https://github.com/TechPenguin5/Ambros"/>,
  },
];
