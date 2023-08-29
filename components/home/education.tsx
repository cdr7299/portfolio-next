"use client";

import { useScroll, useTransform, motion, useAnimate } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { useEffect, useRef } from "react";
import Timeline from "../layout/timeline";
import Card from "../home/card";
import { EXIT_ANIMATION_DELAY } from "./home.constants";

const education_data = [
  {
    title: "Master of Engineering",
    school: "BITS Pilani, Goa Campus",
    description:
      "Did masters here, **Did masters here**Did masters here, **Did masters here**Did masters here, **Did masters here**",
  },
  {
    title: "Bachelor of Engineering",
    school: "UPES, Dehradun",
    description:
      "Did bachelors here,Did bachelors hereDid bachelors hereDid bachelors hereDid bachelors hereDid bachelors here",
  },
];

const TITLE_VARIANTS = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    x: -100,
    opacity: 0,
    transition: {
      delay: EXIT_ANIMATION_DELAY,
      duration: 0.3,
    },
  },
};

const INTRO_CARD_VARIANTS = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
  hidden: {
    opacity: 0,
    x: 300,
    transition: {
      delay: EXIT_ANIMATION_DELAY,
      duration: 0.6,
      when: "afterChildren",
    },
  },
};

function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const inViewObj = useIntersectionObserver(containerRef, {
    threshold: 0.3,
  });
  const inViewObj2 = useIntersectionObserver(containerRef2, {
    threshold: 0.9,
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
    <div className="flex min-h-[870px] w-full" ref={containerRef}>
      <Timeline
        parentScrollYProgress={scrollYProgress}
        shouldTriggerTimeline={shouldTriggerTimeline}
        isParentInView={inViewObj?.isIntersecting || false}
      />
      <div className="flex w-5/6 flex-col gap-16 ">
        <div className="w-full font-display text-xl font-bold tracking-[0.01em] drop-shadow-sm md:text-2xl md:leading-[3rem] lg:text-4xl">
          <motion.div
            initial="hidden"
            animate={inViewObj?.isIntersecting ? "visible" : "hidden"}
            variants={INTRO_CARD_VARIANTS}
            className="h-[350px] rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 p-8"
          >
            <Balancer>
              Software Engineer with 3 years of experience writing JavaScript.
              Enjoy working with React, Next and Framer. I love exploring the
              opinionated javascript world.
            </Balancer>
          </motion.div>
        </div>
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
            {education_data.map((card_item) => {
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
      </div>
    </div>
  );
}

export default Education;
