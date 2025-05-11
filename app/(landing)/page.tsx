import Image from "next/image";
import { SpotlightPreview } from "./components/SpotlightPreview";
import { ToolTipPreview } from "./components/TooltipPreview";
import { ProjectsPreview } from "./components/ProjectsPreview";
import { DraggablePhotoPreview } from "./components/DraggablePhotoPreview";
import { TimelinePreview } from "./components/Timeline";
import { CarouselPreview } from "./components/CarouselPreview";
import BrandMarquee from "./components/BrandMarquee";
import { ContactPreview } from "./components/ContactPreview";

export default function Home() {
  return (
    <div>
      <SpotlightPreview />
      <ToolTipPreview />
      <BrandMarquee />
      <TimelinePreview />
      {/* <ProjectsPreview /> */}
      <DraggablePhotoPreview />
      <CarouselPreview/>
      <ContactPreview />
    </div>
  );
}
