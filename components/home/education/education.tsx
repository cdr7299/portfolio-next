"use client";

import { motion, useReducedMotion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { useRef, useState } from "react";
import Timeline from "./components/timeline";
import Card from "../card";
import { PARLLAX_OFFSET_DOWN, PARLLAX_OFFSET_UP } from "../home.constants";
import { EDUCATION_DATA } from "./education.constants";
import { INTRO_CARD_VARIANTS, TITLE_VARIANTS } from "./education.anim";
import Parallax from "@/components/layout/parllax";
import ParallaxCard from "@/components/layout/parallaxCards/parallaxCards";
import { EducationData, EducationProject } from "./education.types";
import { useProjectsModal } from "./components/projects-modal";

function Education() {
  const containerRefTop = useRef<HTMLDivElement>(null);
  const containerRefMiddle = useRef<HTMLDivElement>(null);
  const shouldUseReducedMotion = useReducedMotion();
  const inViewTop = useIntersectionObserver(containerRefTop, {
    threshold: 0.3,
  });
  const inViewMiddle = useIntersectionObserver(containerRefMiddle, {
    threshold: 0.3,
    rootMargin: "-100px",
  });
  const shouldTriggerTimeline = inViewMiddle?.isIntersecting || false;

  const [selectedProjectList, setSelectedProjectList] =
    useState<EducationProject[]>();
  const { ProjectsModal, setShowProjectsModal } =
    useProjectsModal(selectedProjectList);

  return (
    <div
      className="flex  min-h-[20rem] w-full lg:min-h-[53rem]"
      ref={containerRefTop}
      id="startTimeline"
    >
      <ProjectsModal />
      <Timeline
        shouldTriggerTimeline={shouldUseReducedMotion || shouldTriggerTimeline}
        isParentInView={
          shouldUseReducedMotion || inViewTop?.isIntersecting || false
        }
      />
      <div className="flex w-5/6 flex-col gap-16 md:ml-6">
        <Parallax offset={shouldUseReducedMotion ? 0 : PARLLAX_OFFSET_DOWN}>
          <div className="w-full font-display text-xl font-bold tracking-[0.01em] drop-shadow-sm md:text-2xl md:leading-[3rem] lg:text-4xl">
            <motion.div
              initial="hidden"
              animate={
                shouldUseReducedMotion || inViewTop?.isIntersecting
                  ? "visible"
                  : "hidden"
              }
              className="h-[250px] lg:h-[350px]"
              variants={INTRO_CARD_VARIANTS}
            >
              <ParallaxCard
                accentColor="rgb(100 241 123)"
                containerClasses="p-8 rounded-xl !border-[0] dark:!border-[0.15rem] dark:!border-[#30363d] !bg-purple-200 dark:!bg-[#161b22] shadow-md"
                backgroundHighlight={true}
              >
                {/* <Parallax offset={PARLLAX_OFFSET_DOWN}> */}
                <Balancer ratio={0.5}>
                  <span className="text-purple-600">Software Engineer</span>{" "}
                  with 3 years of experience writing JavaScript. I enjoy working
                  with React and building products from concept to delivery.
                </Balancer>
              </ParallaxCard>
            </motion.div>
          </div>
        </Parallax>
        <Parallax offset={shouldUseReducedMotion ? 0 : PARLLAX_OFFSET_UP}>
          <div ref={containerRefMiddle}>
            <motion.div
              initial="hidden"
              animate={
                shouldUseReducedMotion || shouldTriggerTimeline
                  ? "visible"
                  : "hidden"
              }
              variants={TITLE_VARIANTS}
              className="-mt-4 mb-4 font-display text-xl font-bold tracking-[0.01em] md:mb-16 md:mt-0 md:text-3xl md:leading-[3rem] lg:text-4xl"
            >
              <Balancer>Education</Balancer>
            </motion.div>
            <div className="flex w-full flex-col">
              {EDUCATION_DATA.map((card_item: EducationData) => {
                return (
                  <Card
                    school={card_item.school}
                    key={card_item.title}
                    description={card_item.description}
                    projects={card_item.projects}
                    title={card_item.title}
                    isRendered={shouldUseReducedMotion || shouldTriggerTimeline}
                    setShowProjectsModal={setShowProjectsModal}
                    setSelectedProjectList={setSelectedProjectList}
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
