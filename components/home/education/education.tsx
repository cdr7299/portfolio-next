"use client";

import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { useRef } from "react";
import Timeline from "./components/timeline";
import Card from "../card";
import { PARLLAX_OFFSET_DOWN, PARLLAX_OFFSET_UP } from "../home.constants";
import { EDUCATION_DATA } from "./education.constants";
import { INTRO_CARD_VARIANTS, TITLE_VARIANTS } from "./education.anim";
import Parallax from "@/components/layout/parllax";
import ParallaxCard from "@/components/layout/parallaxCards/parallaxCards";

function Education() {
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
    <div
      className="flex min-h-[45rem] w-full md:min-h-[53rem]"
      ref={containerRefTop}
    >
      <Timeline
        shouldTriggerTimeline={shouldTriggerTimeline}
        isParentInView={inViewTop?.isIntersecting || false}
      />
      <div className="flex w-5/6 flex-col gap-10 ">
        <Parallax offset={PARLLAX_OFFSET_DOWN}>
          <div className="w-full font-display text-xl font-bold tracking-[0.01em] drop-shadow-sm md:text-2xl md:leading-[3rem] lg:text-4xl">
            <motion.div
              initial="hidden"
              animate={inViewTop?.isIntersecting ? "visible" : "hidden"}
              className="h-[250px] lg:h-[350px]"
              variants={INTRO_CARD_VARIANTS}
            >
              <ParallaxCard
                accentColor="rgb(100 241 123)"
                containerClasses="p-8 rounded-xl !border-[0] dark:!border-[0.15rem] dark:!border-[#30363d] !bg-purple-200 dark:!bg-[#161b22] shadow-md"
              >
                {/* <Parallax offset={PARLLAX_OFFSET_DOWN}> */}
                <Balancer ratio={0.5}>
                  Software Engineer with 3 years of experience writing
                  JavaScript. Enjoy working with React, Next and Framer. I love
                  exploring the opinionated javascript world.
                </Balancer>
              </ParallaxCard>
            </motion.div>
          </div>
        </Parallax>
        <Parallax offset={PARLLAX_OFFSET_UP}>
          <div ref={containerRefMiddle}>
            <motion.div
              initial="hidden"
              animate={shouldTriggerTimeline ? "visible" : "hidden"}
              variants={TITLE_VARIANTS}
              className="mb-8 mt-2 font-display text-xl font-bold tracking-[0.01em] md:text-2xl md:leading-[3rem] lg:text-4xl"
            >
              <Balancer>Education</Balancer>
            </motion.div>
            <div className="flex w-full flex-col">
              {EDUCATION_DATA.map((card_item) => {
                return (
                  <Card
                    school={card_item.school}
                    key={card_item.title}
                    description={card_item.description}
                    title={card_item.title}
                    isRendered={shouldTriggerTimeline}
                  ></Card>
                );
              })}
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default Education;
