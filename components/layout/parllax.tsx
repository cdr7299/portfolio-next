import { useState, useRef, useLayoutEffect, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  offset?: number;
  clampInitial?: boolean;
  clampFinal?: boolean;
};

const Parallax = ({
  children,
  offset = 50,
  clampInitial,
  clampFinal,
}: ParallaxProps): JSX.Element => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(
    scrollY,
    [initial, final],
    [clampInitial ? 0 : offset, clampFinal ? 0 : -offset],
  );
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(
        /* @ts-ignore-next */
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset,
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  // Don't parallax if the user has "reduced motion" enabled

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default Parallax;
