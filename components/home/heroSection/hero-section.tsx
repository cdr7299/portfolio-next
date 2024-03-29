"use client";
import { Code2 } from "lucide-react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useState } from "react";
import cx from "classnames";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import Buttons from "@/components/shared/buttons/buttons";
import styles from "./styles.module.css";

const heartVariants: Variants = {
  hover: {
    scale: 1.4,
    transition: {
      repeat: Infinity,
      duration: 0.7,
      type: "tween",
      repeatType: "mirror",
    },
  },
};

const backgroundVariants: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
};

function HeroSection() {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("startTimeline");
    window.scrollTo({
      top: Number(elem?.getBoundingClientRect().top) - 500,
      behavior: "smooth",
    });
  };
  return (
    <div className="mt-24 flex h-[calc(100vh-8rem)] w-full flex-col items-center justify-center px-2 text-left md:mx-0">
      {isHovering && <div className={styles.overlay}></div>}
      <AnimatePresence>
        {isHovering && (
          <motion.video
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backgroundVariants}
            transition={{ duration: 0.5 }}
            src="assets/heroVideoBg2.mp4"
            muted
            loop
            autoPlay
            className={styles.videoBg}
          />
        )}
      </AnimatePresence>
      <motion.h1
        layout
        className={cx(
          "w-full animate-slide-from-left bg-clip-text font-display text-4xl font-bold tracking-[0.01em] text-transparent opacity-0 drop-shadow-sm  md:text-7xl md:leading-[5rem]",
          {
            "bg-text-gradient-dark dark:bg-text-gradient-light": !isHovering,
          },
          { "bg-text-gradient-light": isHovering },
        )}
        style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
      >
        <Balancer>
          {isHovering ? "<Vineet Sawhney />" : "Vineet Sawhney"}
        </Balancer>
      </motion.h1>
      <p
        className=" ml-2 mt-6 w-full animate-slide-from-left  text-gray-500 opacity-0 md:text-2xl"
        style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
      >
        <Balancer> Software Engineer.</Balancer>
      </p>
      <div
        className="z-10 ml-2 mt-6 flex  w-full animate-slide-from-left items-center text-gray-500 opacity-0 md:text-2xl"
        style={{ animationDelay: "1s", animationFillMode: "forwards" }}
      >
        i{" "}
        <div className="mx-4">
          <Code2
            className=" inline w-full text-slate-500"
            onMouseEnter={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
            size={35}
          />
        </div>
        <Image
          priority
          src={"/assets/tech/js.png"}
          alt="js"
          width={40}
          height={10}
        />
      </div>
      <Buttons className="mt-8 self-start" onClick={handleScroll}>
        Start
      </Buttons>
    </div>
  );
}

export default HeroSection;
