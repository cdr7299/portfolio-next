"use client";
import Image from "next/image";
import TimelineMiddle from "./components/timeline";
import SocialCards from "./components/socialCards/socialCards";
import { useRef } from "react";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import Parallax from "@/components/layout/parllax";
import { social_data } from "./socialConstants";
import { useReducedMotion } from "framer-motion";
import Balancer from "react-wrap-balancer";
function Social() {
  const containerRefMiddle = useRef<HTMLDivElement>(null);

  const inViewMiddle = useIntersectionObserver(containerRefMiddle, {
    threshold: 0.5,
    // rootMargin: "100px",
  });
  const shouldUseReducedMotion = useReducedMotion();

  const shouldTriggerTimeline =
    shouldUseReducedMotion || inViewMiddle?.isIntersecting || false;

  // const getBigDiv = () => {
  //   return (
  //     <div className=" z-100 flex h-[600px] w-[1000px] flex-col items-center justify-start rounded-3xl bg-neutral-300 p-4">
  //       <button
  //         onClick={() => setTest((test) => !test)}
  //         className="self-end"
  //         // customIcon={<MessageCircleIcon />}
  //       >
  //         <X style={{ color: "gray" }} />
  //       </button>
  //       <div className="flex h-full items-center text-xl font-bold text-slate-900">
  //         Coming Soon!
  //       </div>
  //     </div>
  //   );
  // };
  // const [test, setTest] = useState(false);

  return (
    <div className="flex min-h-[50rem] w-full">
      <TimelineMiddle shouldTriggerTimeline={shouldTriggerTimeline} />
      <div className="flex-start flex">
        <Image src="/assets/branch.svg" width={80} height={150} alt="som" />
      </div>
      <Parallax offset={shouldUseReducedMotion ? 0 : 20}>
        <div
          className="my-8 flex w-full flex-col gap-8 rounded-2xl md:gap-16"
          ref={containerRefMiddle}
        >
          <div className="p-4 text-2xl font-semibold  tracking-[-0.05rem]  text-black dark:text-white md:px-8 md:pt-8  md:text-3xl lg:text-4xl xl:text-5xl">
            <Balancer ratio={0.5}>
              <span className="text-red-600">{social_data.titleAccent}</span>{" "}
              {social_data.titleDescription}
            </Balancer>
          </div>
          <SocialCards
            isContainerInView={shouldTriggerTimeline}
            cardData={social_data.cardData}
          />
          {/* <motion.div
            layout
            className="self-center"
            initial={{ y: 0 }}
            animate={!test ? { y: 0 } : { y: -600 }}
            transition={{ layout: { duration: 0.3 }, y: { duration: 0.3 } }}
          >
            {!test && (
              <Buttons
                onClick={() => setTest((test) => !test)}
                customIcon={<MessageCircleIcon />}
              >
                Get in Touch
              </Buttons>
            )}
            {test && getBigDiv()}
          </motion.div> */}
        </div>
      </Parallax>
    </div>
  );
}

export default Social;
