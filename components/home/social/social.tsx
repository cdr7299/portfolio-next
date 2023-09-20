"use client";
import Image from "next/image";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { MessageCircleIcon } from "lucide-react";
import Buttons from "@/components/shared/buttons/buttons";
import Parallax from "@/components/layout/parllax";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { social_data } from "./socialConstants";
import SocialCards from "./components/socialCards/socialCards";
import TimelineMiddle from "./components/timeline";
import { useGetInTouchModal } from "./components/getInTouch/getInTouch";
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

  const { GetInTouchModal, setGetInTouchModal } = useGetInTouchModal();

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

          <Buttons
            onClick={() => setGetInTouchModal((prev) => !prev)}
            customIcon={<MessageCircleIcon />}
            className="!w-fit self-center"
          >
            Get in Touch
          </Buttons>
        </div>
      </Parallax>
      <GetInTouchModal />
    </div>
  );
}

export default Social;
