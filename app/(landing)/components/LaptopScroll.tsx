import React from "react";
import { MacbookScroll } from "@/app/components/ui/macbook-scroll";

export function LaptopScroll() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            Thanks for checking out my Portfolio. <br /> Lets get in touch.
          </span>
        }
        src={`/images/projects/linkedin/linkedin.png`}
        showGradient={false}
      />
    </div>
  );
}