"use client";
import styles from "./styles.module.css";
import Balancer from "react-wrap-balancer";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const normalShadow = "0px 10px 30px -5px rgba(0, 0, 0, 0.3)";
const liftShadow = "0px 30px 30px -5px rgba(0, 0, 0, 0.3)";

function CodeCards({
  projectTitle,
  accentColor,
  isSelected,
}: {
  projectTitle: string;
  accentColor: string;
  isSelected: boolean;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
    scale: 1,
    shadow: normalShadow,
  });

  function mouseMoveEvent(e: MouseEvent) {
    if (containerRef?.current) {
      const { x, y } = containerRef.current.getBoundingClientRect();
      containerRef.current.style.setProperty("--x", String(e.clientX - x));
      containerRef.current.style.setProperty("--y", String(e.clientY - y));
      containerRef.current.style.setProperty("--back", accentColor);
      const offsetXFromCenter = e.clientX - window.innerWidth / 2;
      const offsetYFromCenter = e.clientY - window.innerHeight / 2;
      const offsetFactor = 30;
      setMouse({
        x: -offsetXFromCenter / offsetFactor,
        y: offsetYFromCenter / offsetFactor,
        scale: 1.03,
        shadow: liftShadow,
      });
    }
  }

  useEffect(() => {
    if (containerRef?.current) {
      containerRef.current.addEventListener("mousemove", mouseMoveEvent);
    }
    return () => {
      if (containerRef?.current) {
        containerRef.current.removeEventListener("mousemove", mouseMoveEvent);
      }
    };
  }, []);

  // useEffect(() => {
  //   const fakeBlobElem = fakeBlobRef.current;

  //   const onMouseMove = (e: MouseEvent) => {
  //     console.log("run");
  //     if (fakeBlobElem) {
  //       const rect = fakeBlobElem.getBoundingClientRect();
  //       console.log(rect);
  //       const x = e.clientX - rect.left - rect.width / 2;
  //       const y = e.clientY - rect.top - rect.height / 2;
  //       setMouse({ x, y });
  //       // blobElem.style.transform = `translate(${x}px, ${y}px) scale(1)`;
  //     }
  //   };
  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  return (
    <motion.div
      style={{
        color: accentColor,
        borderColor: isSelected ? accentColor : "",
      }}
      ref={containerRef}
      key={projectTitle}
      className={`${styles.codeCard} prose text-2xl font-bold shadow shadow-slate-900`}
      animate={{
        rotateX: mouse.x,
        rotateY: mouse.y,
        scale: mouse.scale,
        shadow: mouse.shadow,
      }}
      onMouseLeave={() =>
        setMouse({ x: 0, y: 0, scale: 1, shadow: normalShadow })
      }
    >
      <Balancer>{projectTitle}</Balancer>
    </motion.div>
  );
}

export default CodeCards;
