import { Variants, motion, useAnimate } from "framer-motion";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import {
  EDUCATION_ANIMATION_DURATION,
  EXIT_ANIMATION_DELAY,
} from "./home.constants";
import { useEffect } from "react";

const card_variants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: EDUCATION_ANIMATION_DURATION,
      when: "beforeChildren",
    },
  },
  hidden: {
    opacity: 0,
    y: -100,
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
  title: string;
  description: string;
  school: string;
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

        <div className="w-1/2">
          <motion.div
            initial="hidden"
            animate={isRendered ? "visible" : "hidden"}
            exit="hidden"
            variants={card_variants}
            className="prose-sm -mt-2 leading-normal text-gray-500 md:prose "
          >
            <Balancer>
              <ReactMarkdown
                components={{
                  a: ({ node, ...props }) => (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                      className="!text-sm font-medium text-gray-800 underline transition-colors md:text-lg "
                    />
                  ),
                  code: ({ node, ...props }) => (
                    <code
                      {...props}
                      // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                      inline="true"
                      className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                    />
                  ),
                }}
              >
                {description}
              </ReactMarkdown>
            </Balancer>
          </motion.div>
        </div>
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
  );
}
