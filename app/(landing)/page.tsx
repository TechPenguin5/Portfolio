import Image from "next/image";
import { SpotlightPreview } from "./components/SpotlightPreview";
import { ToolTipPreview } from "./components/TooltipPreview";
import { ProjectsPreview } from "./components/ProjectsPreview";

export default function Home() {
  return (
    <div>
      <SpotlightPreview />
      <ToolTipPreview />
      <ProjectsPreview />
    </div>
  );
}
