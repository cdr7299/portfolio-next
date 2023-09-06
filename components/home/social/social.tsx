"use client";

import Image from "next/image";
import TimelineMiddle from "./components/timeline";
import SocialCards from "./components/socialCards/socialCards";
import { useRef } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { EDUCATION_ANIMATION_DURATION } from "../home.constants";
import Parallax from "@/components/layout/parllax";

function Social() {
  const containerRefTop = useRef<HTMLDivElement>(null);
  const containerRefMiddle = useRef<HTMLDivElement>(null);

  const inViewTop = useIntersectionObserver(containerRefTop, {
    threshold: 0.3,
  });
  const inViewMiddle = useIntersectionObserver(containerRefMiddle, {
    threshold: 0.3,
    rootMargin: "-100px",
  });
  const shouldTriggerTimeline = inViewMiddle?.isIntersecting || false;

  return (
    <div className="flex w-full">
      <TimelineMiddle shouldTriggerTimeline={shouldTriggerTimeline} />
      <div className="flex-start flex">
        <Image src="/assets/branch.svg" width={80} height={150} alt="som" />
      </div>
      <div
        className="my-16 flex w-full flex-col gap-16 rounded-2xl"
        ref={containerRefMiddle}
      >
        <Parallax>
          <div className="px-4 py-8 text-5xl font-semibold tracking-tighter text-black dark:text-white">
            <span className="text-red-500">
              This site serves as my portfolio
            </span>{" "}
            but is also a playground for my react/next/framer experiments. Check
            out my social and github!
          </div>
          <SocialCards isContainerInView={shouldTriggerTimeline} />
        </Parallax>
      </div>
    </div>
  );
}

export default Social;
