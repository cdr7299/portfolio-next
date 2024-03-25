"use client";
import Image from "next/image";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { MessageCircle } from "lucide-react";
import Buttons from "@/components/shared/buttons/buttons";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { social_data } from "./social.constants";
import SocialCards from "./components/socialCards/socialCards";
import TimelineMiddle from "./components/timeline";
import { useGetInTouchModal } from "./components/getInTouch/getInTouch";
function Social() {
  const containerRefMiddle = useRef<HTMLDivElement>(null);

  const inViewMiddle = useIntersectionObserver(containerRefMiddle, {
    threshold: 0.5,
  });
  const shouldUseReducedMotion = useReducedMotion();

  const shouldTriggerTimeline =
    shouldUseReducedMotion || inViewMiddle?.isIntersecting || false;

  const { GetInTouchModal, setGetInTouchModal } = useGetInTouchModal();

  return (
    <div className="flex min-h-[50rem] w-full">
      <TimelineMiddle shouldTriggerTimeline={shouldTriggerTimeline} />
      <div className="flex-start flex">
        <Image src="/assets/branch.svg" width={80} height={150} alt="som" />
      </div>
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
          customIcon={<MessageCircle />}
          className="!w-fit self-center"
        >
          Get in Touch
        </Buttons>
      </div>
      <GetInTouchModal />
    </div>
  );
}

export default Social;
