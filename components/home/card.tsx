import { Variants, motion, useAnimate } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { useEffect } from "react";
import { Briefcase } from "lucide-react";
import {
  EDUCATION_ANIMATION_DURATION,
  EXIT_ANIMATION_DELAY,
} from "./home.constants";
import { EducationData } from "./education/education.types";
import Buttons from "../shared/buttons/buttons";

const card_variants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: EDUCATION_ANIMATION_DURATION,
      when: "beforeChildren",
    },
  },
  hidden: {
    opacity: 0,
    x: -100,
    transition: {
      when: "afterChildren",
      duration: EDUCATION_ANIMATION_DURATION,
      delay: EXIT_ANIMATION_DELAY,
    },
  },
};

export default function Card({
  title,
  description,
  school,
  large,
  isRendered = false,
  setShowProjectsModal,
  projects,
  setSelectedProjectList,
}: {
  title: EducationData["title"];
  description: EducationData["description"];
  school: EducationData["school"];
  large?: boolean;
  isRendered?: boolean;
  setShowProjectsModal: any;
  setSelectedProjectList: any;
  projects: EducationData["projects"];
}) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isRendered) {
      animate(
        scope.current,
        { opacity: 1, x: 0 },
        { delay: 0.3, duration: EDUCATION_ANIMATION_DURATION },
      );
    } else {
      animate(
        scope.current,
        { opacity: 0, x: -100 },
        { delay: EXIT_ANIMATION_DELAY, duration: EDUCATION_ANIMATION_DURATION },
      );
    }
  }, [animate, isRendered, scope]);

  return (
    <>
      <div
        className={`relative col-span-1 mb-4 h-[150px] ${
          large ? "md:col-span-2" : ""
        }`}
      >
        <div className="flex w-full">
          <motion.div
            initial={{ opacity: 0 }}
            ref={scope}
            className="prose w-1/2 text-base font-bold tracking-tight md:text-3xl md:tracking-normal"
          >
            <div className=" text-emerald-500">
              <Balancer>{title}</Balancer>
            </div>
            <div className=" text-emerald-800">
              <Balancer>{school}</Balancer>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isRendered ? "visible" : "hidden"}
            exit="hidden"
            variants={card_variants}
            className="mt-1 flex w-1/2 flex-col items-end justify-start gap-1 text-right text-sm leading-normal text-gray-500 lg:text-2xl"
          >
            {description}
            {projects.length ? (
              <Buttons
                className="mt-2"
                customIcon={<Briefcase />}
                onClick={() => {
                  setShowProjectsModal(true);
                  setSelectedProjectList(projects);
                }}
              >
                See My Projects
              </Buttons>
            ) : null}
          </motion.div>
        </div>
      </div>
    </>
  );
}
