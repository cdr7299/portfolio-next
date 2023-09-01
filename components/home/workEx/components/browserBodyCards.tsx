import styles from "./styles.module.css";
import Balancer from "react-wrap-balancer";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BROWSER_ANIMATION_DURATION } from "../../home.constants";

const normalShadow = "0px 10px 30px -5px rgba(0, 0, 0, 0.3)";
const liftShadow = "0px 30px 30px -5px rgba(0, 0, 0, 0.3)";

function BrowserBodyCards({
  projectTitle,
  accentColor,
  isSelected,
  onProjectCardClick,
}: {
  projectTitle: string;
  accentColor: string;
  isSelected: boolean;
  onProjectCardClick: () => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
    shadow: normalShadow,
  });

  function mouseMoveEvent(e: MouseEvent) {
    if (containerRef?.current) {
      const { x, y } = containerRef.current.getBoundingClientRect();
      const offsetXFromCenter = e.clientX - x;
      const offsetYFromCenter = e.clientY - y;
      containerRef.current.style.setProperty("--x", String(offsetXFromCenter));
      containerRef.current.style.setProperty("--y", String(offsetYFromCenter));
      containerRef.current.style.setProperty("--back", accentColor);
      setMouse({
        x: -offsetXFromCenter / 330,
        y: offsetYFromCenter / 10,
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
      className={`${styles.browserBodyCard} prose text-2xl font-bold shadow shadow-slate-900`}
      animate={{
        rotateX: mouse.x,
        rotateY: mouse.y,
        shadow: mouse.shadow,
      }}
      transition={{ duration: BROWSER_ANIMATION_DURATION }}
      onMouseLeave={() => setMouse({ x: 0, y: 0, shadow: normalShadow })}
    >
      <Balancer>{projectTitle}</Balancer>
    </motion.div>
  );
}

export default BrowserBodyCards;