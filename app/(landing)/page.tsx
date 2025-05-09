import Image from "next/image";
import { SpotlightPreview } from "./components/SpotlightPreview";
import { ToolTipPreview } from "./components/TooltipPreview";
import { ProjectsPreview } from "./components/ProjectsPreview";
import { DraggablePhotoPreview } from "./components/DraggablePhotoPreview";
import { TimelinePreview } from "./components/Timeline";
import { CarouselPreview } from "./components/CarouselPreview";

export default function Home() {
  return (
    <div>
      <SpotlightPreview />
      <ToolTipPreview />
      <TimelinePreview />
      <ProjectsPreview />
      <DraggablePhotoPreview />
      <CarouselPreview/>
    </div>
  );
}
