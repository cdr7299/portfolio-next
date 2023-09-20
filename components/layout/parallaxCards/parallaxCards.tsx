"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./parallaxCards.module.css";

const normalShadow = "0px 10px 30px -5px rgba(0, 0, 0, 0.3)";
const liftShadow = "0px 30px 30px -5px rgba(0, 0, 0, 0.3)";

function ParallaxCard({
  accentColor,
  isSelected,
  onProjectCardClick,
  children,
  containerClasses,
  backgroundHighlight,
}: {
  accentColor?: string;
  isSelected?: boolean;
  onProjectCardClick?: () => void;
  children: React.ReactElement;
  containerClasses: string;
  backgroundHighlight: boolean;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current)
      containerRef.current.style.setProperty("--back1", accentColor || "");
  }, [accentColor]);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
    shadow: normalShadow,
  });

  function mouseMoveEvent(e: MouseEvent) {
    if (containerRef?.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      let oldRangeY = width - 0.0;
      let newRangeY = 1.5 - -1.5;
      let newY = ((e.offsetX - 0) * newRangeY) / oldRangeY + -1.5;
      let oldRangeX = height - 0.0;
      let newRangeX = 1 - -1;
      let newX = ((e.offsetY - 0) * newRangeX) / oldRangeX + -1;
      if (backgroundHighlight) {
        containerRef.current.style.setProperty("--x1", String(e.offsetX));
        containerRef.current.style.setProperty("--y1", String(e.offsetY));
        containerRef.current.style.setProperty("--back1", accentColor || "");
      }
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
        borderColor: isSelected ? accentColor : "",
      }}
      ref={containerRef}
      className={`${styles.parallaxCardBase} ${containerClasses}`}
      animate={{
        perspective: "700px",
        rotateX: mouse.x * 7,
        rotateY: mouse.y * 2,
        shadow: mouse.shadow,
      }}
      transition={{ duration: 0.3 }}
      onMouseLeave={() => setMouse({ x: 0, y: 0, shadow: normalShadow })}
    >
      {children}
    </motion.div>
  );
}

export default ParallaxCard;
