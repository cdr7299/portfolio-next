"use client";

import {
  useScroll,
  useTransform,
  motion,
  useAnimation,
  MotionValue,
} from "framer-motion";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { useEffect, useRef } from "react";

function Timeline({
  parentScrollYProgress,
  isParentInView,
}: {
  parentScrollYProgress: MotionValue<number>;
  isParentInView: boolean;
}) {
  //   const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  // console.log("asd", scale);

  //   const containerRef = useRef<HTMLDivElement>(null);
  //   const inViewObj = useIntersectionObserver(containerRef, { threshold: 0.9 });

  return (
    <div className="flex w-1/6 flex-col px-8">
      <Image
        src="assets/lines-hero-first.svg"
        height={100}
        width={700}
        alt="whoops"
        className="mt-[-350px] w-[500px] !max-w-none"
      />
      <div className="relative">
        <motion.div
          //   className="absolute -inset-0.5 h-[40px] w-[40px] rounded-2xl bg-gradient-to-r from-blue-100 to-purple-300 opacity-75 blur"
          style={{ scale: parentScrollYProgress }}
        ></motion.div>
        <GraduationCap
          className="my-3 ml-1 text-black"
          color="#000"
          size={35}
        />
        <motion.div
          style={{
            background:
              "linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364) ",
          }}
          animate={isParentInView ? { height: 700 } : ""}
          className="mx-4 w-[5px] rounded"
        ></motion.div>
      </div>
    </div>
  );
}

export default Timeline;
