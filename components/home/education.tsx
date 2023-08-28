"use client";

import { useScroll, useTransform, motion, useAnimate } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { useEffect, useRef } from "react";
import Timeline from "../layout/timeline";
import Card from "../home/card";

const education_data = [
  {
    title: "Master of Engineering, BITS Pilani 21",
    description: "Did masters here",
  },
  {
    title: "Bachelor of Engineering, UPES 18",
    description: "Did bachelors here",
  },
];

function Education() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 2]);
  // console.log("asd", scale);1

  const containerRef = useRef<HTMLDivElement>(null);
  const inViewObj = useIntersectionObserver(containerRef, { threshold: 0.7 });
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (inViewObj?.isIntersecting) {
      console.log("i raaan");
      animate(scope.current, { opacity: 1, x: 0 }, { duration: 0.3 });
    } else {
      animate(scope.current, { opacity: 0, x: -100 }, { duration: 0.3 });
    }
  }, [animate, inViewObj, scope]);

  return (
    <div className="flex min-h-[calc(100vh-8rem)] w-full" ref={containerRef}>
      <Timeline
        parentScrollYProgress={scrollYProgress}
        isParentInView={inViewObj?.isIntersecting || false}
      />
      <div className="w-5/6">
        <motion.h2 className="w-full bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold tracking-[0.01em] drop-shadow-sm md:text-4xl md:leading-[5rem]">
          <div className="h-[370px] rounded-2xl bg-purple-200 p-8">
            <Balancer>
              Some intro Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem
            </Balancer>
          </div>
          <Balancer>Education</Balancer>
        </motion.h2>
        <motion.div
          className="grid w-full gap-3"
          initial={{ opacity: 0 }}
          ref={scope}
        >
          {education_data.map((card_item) => {
            return (
              <Card
                key={card_item.title}
                description={card_item.description}
                title={card_item.title}
                demo={<div>Hello</div>}
              ></Card>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
