"use client";

import Image from "next/image";
import TimelineMiddle from "./components/timeline";
import SocialCards from "./components/socialCards/socialCards";
import { useRef } from "react";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import Parallax from "@/components/layout/parllax";
import { social_data } from "./socialConstants";

function Social() {
  const containerRefMiddle = useRef<HTMLDivElement>(null);

  const inViewMiddle = useIntersectionObserver(containerRefMiddle, {
    threshold: 0.5,
    rootMargin: "-100px",
  });
  const shouldTriggerTimeline = inViewMiddle?.isIntersecting || false;

  return (
    <div className="flex min-h-[70rem] w-full">
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
            <span className="text-red-500">{social_data.titleAccent}</span>{" "}
            {social_data.titleDescription}
          </div>
          <SocialCards
            isContainerInView={shouldTriggerTimeline}
            cardData={social_data.cardData}
          />
        </Parallax>
      </div>
    </div>
  );
}

export default Social;
