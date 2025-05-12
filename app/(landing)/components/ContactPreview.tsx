"use client";
import React from "react";
import { BackgroundBeams } from "@/app/components/ui/background-beams";

export function ContactPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased contact-me">
      <div className="max-w-2xl mx-auto p-4">
        <p className="mb-20 text-center text-3xl font-bold text-neutral-800 dark:text-white">
        Thanks for checking out my Portfolio.
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
      </div>
      <BackgroundBeams />
    </div>
  );
}
