"use client";
import styles from "./styles.module.css";
import Balancer from "react-wrap-balancer";
import { PARLLAX_OFFSET_UP } from "../../home.constants";
import Parallax from "@/components/layout/parllax";

function CodeCards({
  projectTitle,
  key,
}: {
  key: string;
  projectTitle: string;
}) {
  return (
    <Parallax offset={PARLLAX_OFFSET_UP}>
      <div
        key={key}
        className={`${styles.codeCard} prose text-2xl font-bold text-emerald-300 shadow shadow-slate-900`}
      >
        <Balancer>{projectTitle}</Balancer>
        <div className={styles.blob}></div>
        <div className={styles.fakeBlob}></div>
      </div>
    </Parallax>
  );
}

export default CodeCards;
