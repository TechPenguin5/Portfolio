import Image from "next/image";
import { SpotlightPreview } from "./components/SpotlightPreview";
import { ToolTipPreview } from "./components/TooltipPreview";

export default function Home() {
  return (
    <div>
      <SpotlightPreview />
      <ToolTipPreview />
    </div>
  );
}
