"use client";

import styles from "./styles.module.css";
import BrowserHeader from "./components/browserHeader";
import BrowserBody from "./components/browserBody";
import { useCallback, useState } from "react";
import { work_data } from "./workEx.constants";
import Parallax from "@/components/layout/parllax";
import { PARLLAX_OFFSET_DOWN } from "../home.constants";

function WorkEx() {
  const [selectedTab, setSelectedTab] = useState<string>(work_data[0].value);
  const selectedTabData = work_data.find((item) => item.value === selectedTab);

  const onTabChange = useCallback((item: string) => {
    setSelectedTab(item);
  }, []);

  return (
    <Parallax offset={PARLLAX_OFFSET_DOWN}>
      <div className={styles.baseContainer}>
        <div className={styles.browserContainer}>
          <BrowserHeader title={selectedTabData?.title || ""} />
          <BrowserBody
            work_data={work_data}
            selectedTab={selectedTab}
            onTabChange={onTabChange}
          />
        </div>
      </div>
    </Parallax>
  );
}

export default WorkEx;
