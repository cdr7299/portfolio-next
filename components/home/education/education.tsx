"use client";

import { motion, useAnimate } from "framer-motion";
import Balancer from "react-wrap-balancer";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { useEffect, useRef } from "react";
import Timeline from "../../layout/timeline";
import Card from "../card";
import {
  EXIT_ANIMATION_DELAY,
  PARLLAX_OFFSET_DOWN,
  PARLLAX_OFFSET_UP,
} from "../home.constants";
import { EDUCATION_DATA } from "./education.constants";
import { INTRO_CARD_VARIANTS, TITLE_VARIANTS } from "./education.anim";
import Parallax from "@/components/layout/parllax";

function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);

  const inViewObj = useIntersectionObserver(containerRef, {
    threshold: 0.3,
  });
  const inViewObj2 = useIntersectionObserver(containerRef2, {
    threshold: 0.3,
    rootMargin: "-100px",
  });
  const shouldTriggerTimeline = inViewObj2?.isIntersecting || false;
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (shouldTriggerTimeline) {
      animate(
        scope.current,
        { opacity: 1, x: 0 },
        { delay: 0.3, duration: 0.3 },
      );
    } else {
      animate(
        scope.current,
        { opacity: 0, x: -100 },
        { delay: EXIT_ANIMATION_DELAY, duration: 0.3 },
      );
    }
  }, [animate, shouldTriggerTimeline, scope]);

  return (
    <div className="flex min-h-[850px] w-full" ref={containerRef}>
      <Timeline
        shouldTriggerTimeline={shouldTriggerTimeline}
        isParentInView={inViewObj?.isIntersecting || false}
      />
      <div className="flex w-5/6 flex-col gap-10 ">
        <div className="w-full font-display text-xl font-bold tracking-[0.01em] drop-shadow-sm md:text-2xl md:leading-[3rem] lg:text-4xl">
          <motion.div
            initial="hidden"
            animate={inViewObj?.isIntersecting ? "visible" : "hidden"}
            variants={INTRO_CARD_VARIANTS}
            className="h-[350px] rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 p-6"
          >
            <Parallax offset={PARLLAX_OFFSET_DOWN}>
              <Balancer>
                Software Engineer with 3 years of experience writing JavaScript.
                Enjoy working with React, Next and Framer. I love exploring the
                opinionated javascript world.
              </Balancer>
            </Parallax>
          </motion.div>
        </div>
        <Parallax offset={PARLLAX_OFFSET_UP}>
          <div ref={containerRef2}>
            <motion.div
              initial="hidden"
              animate={shouldTriggerTimeline ? "visible" : "hidden"}
              variants={TITLE_VARIANTS}
              className="mb-8 font-display text-xl font-bold tracking-[0.01em] drop-shadow-sm md:text-2xl md:leading-[3rem] lg:text-4xl"
            >
              <Balancer>Education</Balancer>
            </motion.div>
            <motion.div
              className="flex w-full flex-col"
              initial={{ opacity: 0 }}
              ref={scope}
            >
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
            </motion.div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default Education;