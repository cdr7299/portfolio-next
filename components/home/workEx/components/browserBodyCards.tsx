import Balancer from "react-wrap-balancer";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const normalShadow = "0px 10px 30px -5px rgba(0, 0, 0, 0.3)";
const liftShadow = "0px 30px 30px -5px rgba(0, 0, 0, 0.3)";

function BrowserBodyCards({
  projectTitle,
  accentColor,
  isSelected,
  onProjectCardClick,
  shouldUseReducedMotion,
}: {
  projectTitle: string;
  accentColor: string;
  isSelected: boolean;
  onProjectCardClick: () => void;
  shouldUseReducedMotion: boolean;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
    shadow: normalShadow,
  });

  function mouseMoveEvent(e: MouseEvent) {
    if (containerRef?.current) {
      const { height, width } = containerRef.current.getBoundingClientRect();
      let oldRangeY = width - 0.0;
      let newRangeY = 1.5 - -1.5;
      let newY = ((e.offsetX - 0) * newRangeY) / oldRangeY + -1.5;
      let oldRangeX = height - 0.0;
      let newRangeX = 1 - -1;
      let newX = ((e.offsetY - 0) * newRangeX) / oldRangeX + -1;
      containerRef.current.style.setProperty("--x", String(e.offsetX));
      containerRef.current.style.setProperty("--y", String(e.offsetY));
      containerRef.current.style.setProperty("--back", accentColor || "");
      setMouse({
        x: newX,
        y: -newY,
        shadow: liftShadow,
      });
    }
  }

  useEffect(() => {
    const element = containerRef?.current;
    if (element) {
      element.addEventListener("mousemove", mouseMoveEvent);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", mouseMoveEvent);
      }
    };
  }, []);

  return (
    <motion.div
      onClick={onProjectCardClick}
      style={{
        perspective: "700px",
        color: accentColor,
        borderColor: isSelected ? accentColor : "",
      }}
      ref={containerRef}
      key={projectTitle}
      className={`${styles.browserBodyCard} prose text-lg font-bold shadow shadow-slate-900 md:text-2xl`}
      animate={{
        perspective: "700px",
        rotateX: mouse.x * 7,
        rotateY: mouse.y * 4,
        shadow: mouse.shadow,
      }}
      transition={{ duration: 0.2 }}
      whileTap={{ scale: 0.9 }}
      onMouseLeave={() => setMouse({ x: 0, y: 0, shadow: normalShadow })}
    >
      <Balancer>{projectTitle}</Balancer>
    </motion.div>
  );
}

export default BrowserBodyCards;
