import { Variants, motion } from "framer-motion";
import { CardData, Column } from "../../social.types";
import ParallaxCard from "@/components/layout/parallaxCards/parallaxCards";
import Balancer from "react-wrap-balancer";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  return (
    <motion.div
      initial="hidden"
      animate={isContainerInView ? "visible" : "hidden"}
      className="mt-16 flex w-full justify-around gap-8 px-16"
      variants={base_container}
    >
      {columns.map((col: Column[], index) => {
        return (
          <motion.div
            className="h-[35rem] w-[40%]"
            key={col[0].title + index}
            variants={card_container}
          >
            <ParallaxCard
              accentColor="#F0D3D766"
              containerClasses="rounded !border-[0] dark:!border-[0.15rem] dark:!border-[#30363d] !bg-red-700/40 dark:!bg-[#161b22] shadow-lg shadow-red-900/50 dark:shadow-[0] !gap-16 bg-slate-800 px-8 !py-16 items-center justify-between"
            >
              <>
                {col.map((card: Column) => {
                  return (
                    <motion.button
                      onClick={() => router.push(card.redirect)}
                      key={card.title}
                      variants={tech_section_variants}
                      style={{
                        backgroundColor: card.accentColor,
                        color: card.fontColor,
                      }}
                      className={`relative z-10 flex h-[200px] w-[320px] cursor-pointer items-center justify-center rounded-xl px-6 py-2 text-center text-3xl font-bold text-slate-800 shadow-lg shadow-gray-900/70 `}
                    >
                      <Balancer>{card.title}</Balancer>
                    </motion.button>
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
