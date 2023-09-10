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
    // rootMargin: "100px",
  });
  const shouldTriggerTimeline = inViewMiddle?.isIntersecting || false;
  return (
    <div className="flex w-full">
      <TimelineMiddle shouldTriggerTimeline={shouldTriggerTimeline} />
      <div className="flex-start flex">
        <Image src="/assets/branch.svg" width={80} height={150} alt="som" />
      </div>
      <div
        className="my-8 flex w-full flex-col gap-8 rounded-2xl md:my-16 md:gap-16"
        ref={containerRefMiddle}
      >
        <Parallax>
          <div className="p-4 text-2xl font-semibold tracking-tighter text-black  dark:text-white md:px-4 md:py-8 md:text-3xl lg:text-4xl xl:text-5xl">
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
