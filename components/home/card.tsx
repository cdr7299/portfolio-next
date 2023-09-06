import { Variants, motion, useAnimate } from "framer-motion";
import Balancer from "react-wrap-balancer";
import {
  EDUCATION_ANIMATION_DURATION,
  EXIT_ANIMATION_DELAY,
} from "./home.constants";
import { useEffect } from "react";
import { EducationData } from "./education/education.types";

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
}: {
  title: EducationData["title"];
  description: EducationData["description"];
  school: EducationData["school"];
  large?: boolean;
  isRendered?: boolean;
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
            className="text-md prose w-1/2 font-bold tracking-tight md:text-3xl md:tracking-normal"
          >
            <div className=" text-green-500">
              <Balancer>{title}</Balancer>
            </div>
            <div className=" text-green-900">
              <Balancer>{school}</Balancer>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isRendered ? "visible" : "hidden"}
            exit="hidden"
            variants={card_variants}
            className="flex w-1/2 flex-col items-end justify-start gap-1 text-right text-base leading-normal text-gray-500 lg:text-2xl"
          >
            {description}
            <motion.button
              className={
                "relative rounded-2xl bg-gray-800/60 px-6 py-2  text-sm text-white disabled:cursor-not-allowed lg:text-lg"
              }
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              disabled
              // onClick={(prev) => setShowDemoModal(true)}
            >
              See My Projects
            </motion.button>
          </motion.div>
          {/* <motion.div
          initial="hidden"
          animate={isRendered ? "visible" : "hidden"}
          exit="hidden"
          variants={card_variants}
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal"
          >
          
        </motion.div> */}
        </div>
      </div>
    </>
  );
}
