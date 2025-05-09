"use client";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

const words = `I DESIGN & CREATE DIGITAL EXPERIENCES`;

export function TextGenerateEffectPreview() {
  return <TextGenerateEffect words={words} />;
}