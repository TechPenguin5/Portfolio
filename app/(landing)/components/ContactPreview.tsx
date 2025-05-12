"use client";
import React from "react";
import { WavyBackground } from "@/app/components/ui/wavy-background";

export function ContactPreview() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 contact-me">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Thanks for checking out my Portfolio.
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Lets get in touch.
      </p>
      <div className="flex justify-center mt-6">
          <a
            href="https://www.linkedin.com/in/malindrap/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
              LinkedIn
            </button>
          </a>
        </div>
    </WavyBackground>
  );
}
