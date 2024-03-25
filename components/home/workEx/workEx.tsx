"use client";

import { useCallback, useState } from "react";
import { useReducedMotion } from "framer-motion";
import styles from "./styles.module.css";
import BrowserHeader from "./components/browserHeader";
import BrowserBody from "./components/browserBody";
import { work_data } from "./workEx.constants";

function WorkEx() {
  const [selectedTab, setSelectedTab] = useState<string>(work_data[0].value);
  const selectedTabData = work_data.find((item) => item.value === selectedTab);
  const onTabChange = useCallback((item: string) => {
    setSelectedTab(item);
  }, []);
  const shouldUseReducedMotion = useReducedMotion();
  return (
    <div className={styles.baseContainer}>
      <div className={styles.browserContainer}>
        <BrowserHeader title={selectedTabData?.title || ""} />
        <BrowserBody
          work_data={work_data}
          selectedTab={selectedTab}
          onTabChange={onTabChange}
          shouldUseReducedMotion={shouldUseReducedMotion || false}
        />
      </div>
    </div>
  );
}

export default WorkEx;
