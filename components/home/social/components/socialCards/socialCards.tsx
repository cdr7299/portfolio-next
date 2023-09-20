import { Variants, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ParallaxCard from "@/components/layout/parallaxCards/parallaxCards";
import styles from "./socialCards.module.css";
import { CardData, Column } from "../../social.types";
const base_container: Variants = {
  visible: {
    transition: {
      duration: 0.5,
      staggerChildren: 0.7,
      delayChildren: 0.7,
    },
  },
  hidden: {
    transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 1 },
  },
};

const card_container: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.3, delayChildren: 0 },
  },
  hidden: {
    x: -100,
    opacity: 0,
    transition: { duration: 0.5, staggerChildren: 0.3, delayChildren: 0 },
  },
};

const tech_section_variants: Variants = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hidden: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  hover: {
    scale: 0.98,
  },
};

function SocialCards({
  isContainerInView,
  cardData,
}: {
  isContainerInView: boolean;
  cardData: CardData;
}) {
  const { columns } = cardData;
  return (
    <motion.div
      initial="hidden"
      animate={isContainerInView ? "visible" : "hidden"}
      className="flex w-full flex-col justify-around gap-4 md:flex-col md:gap-16 md:px-8"
      variants={base_container}
    >
      {columns.map((col: Column[], index) => {
        return (
          <motion.div
            className="h-[15rem]"
            key={col[0].title + index}
            variants={card_container}
          >
            <ParallaxCard
              accentColor="#A0A1DC"
              containerClasses="rounded !border-[0] dark:!border-[0.15rem] dark:!border-[#30363d] !bg-red-700/40 dark:!bg-[#161b22] shadow-lg shadow-red-900/50 dark:shadow-[0] !gap-8 bg-slate-800 p-4 md:px-8 md:!py-16 md:!flex-row items-center justify-around"
              backgroundHighlight={false}
            >
              <>
                {col.map((card: Column) => {
                  return (
                    <motion.div
                      key={card.title}
                      variants={tech_section_variants}
                      style={{
                        backgroundColor: card.accentColor,
                        color: card.fontColor,
                      }}
                      className={`relative z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-6 py-2 text-center text-2xl font-bold text-slate-800 shadow-lg  shadow-gray-900/70 md:h-[160px] md:w-[40%] `}
                    >
                      {card.icon && (
                        <Image
                          src={card.icon}
                          width={50}
                          height={50}
                          alt="failed"
                          className={card.iconClasses}
                        />
                      )}
                      <Link
                        className={styles.link}
                        target="_blank"
                        href={card.redirect}
                      >
                        {card.title}
                      </Link>
                    </motion.div>
                  );
                })}
              </>
            </ParallaxCard>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default SocialCards;
