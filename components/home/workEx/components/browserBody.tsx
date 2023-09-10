import styles from "./styles.module.css";
import * as Tabs from "@radix-ui/react-tabs";
import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import BrowserBodyCards from "./browserBodyCards";
import { BODY_VARIANTS } from "./browser.animations";
import Balancer from "react-wrap-balancer";
import BrowserBodyProjects from "./browserBodyProjects";
import React, { useRef, useState } from "react";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { BROWSER_ANIMATION_DURATION } from "../../home.constants";
import { WorkData } from "../workEx.types";

function BrowserBody({
  work_data,
  selectedTab,
  onTabChange,
}: {
  work_data: WorkData[];
  selectedTab: string;
  onTabChange: (arg: string) => void;
}) {
  const { projects } = work_data.find(
    (item: any) => item.value === selectedTab,
  ) || { projects: [] };
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inViewTop = useIntersectionObserver(containerRef, {
    threshold: 0.2,
  });

  const onTabClick = (nextSelectedTab: string) => {
    setSelectedProjectIndex(0);
    onTabChange(nextSelectedTab);
  };

  return (
    <div className={styles.browserBody} ref={containerRef}>
      <div className={styles.browserBodySections}>
        <Tabs.Root
          defaultValue={selectedTab}
          className="h-[calc(100%-1rem)] py-4"
          onValueChange={onTabClick}
        >
          <Tabs.List>
            {work_data.map((item: any) => {
              return (
                <Tabs.Trigger key={item.title} value={item.value}>
                  <AnimatePresence>
                    <motion.div
                      key={item.title}
                      animate={
                        selectedTab === item.value && inViewTop?.isIntersecting
                          ? { backgroundColor: item.color }
                          : { backgroundColor: "rgb(22, 27, 34)" }
                      }
                      transition={{ duration: BROWSER_ANIMATION_DURATION }}
                      whileHover={{ color: "#fff" }}
                      className={cx(
                        "relative ml-2 w-[120px] rounded-t-md py-2 text-center text-sm font-bold leading-7 tracking-normal text-slate-400",
                        {
                          "!text-white": selectedTab === item.value,
                        },
                      )}
                    >
                      {item.title}
                      {selectedTab === item.value && (
                        <motion.div
                          className={styles.underline}
                          layoutId="underline"
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
          {work_data.map((item: any) => {
            return (
              <Tabs.Content
                className="h-full"
                key={item.title}
                value={item.value}
              >
                <AnimatePresence mode="popLayout">
                  <motion.div
                    className="h-full bg-[#0d1117] p-4 text-white"
                    key={item.title}
                    initial="closed"
                    custom={inViewTop?.isIntersecting}
                    variants={BODY_VARIANTS}
                    animate={
                      selectedTab === item.value && inViewTop?.isIntersecting
                        ? "open"
                        : "closed"
                    }
                    exit="closed"
                    transition={{
                      duration: BROWSER_ANIMATION_DURATION,
                      ease: "easeIn",
                    }}
                  >
                    <div className="flex flex-col gap-8 text-white">
                      <div className="mt-2 w-full rounded-2xl bg-[#30363D] px-4 py-4 text-white">
                        <Balancer>
                          <span
                            className="text-lg font-bold"
                            style={{ color: item.color }}
                          >
                            {item.descriptionTitle}
                          </span>
                          {item.description}
                        </Balancer>
                      </div>

                      <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-6">
                        {item.projects.map(
                          (
                            {
                              project_title,
                            }: {
                              project_title: string;
                            },
                            index: number,
                          ) => (
                            <BrowserBodyCards
                              key={project_title}
                              projectTitle={project_title}
                              accentColor={item.color}
                              isSelected={index === selectedProjectIndex}
                              onProjectCardClick={() => {
                                setSelectedProjectIndex(index);
                              }}
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </Tabs.Content>
            );
          })}
        </Tabs.Root>
      </div>
      <div className={`${styles.browserBodySections} hidden lg:block`}>
        <BrowserBodyProjects
          shouldAnimate={inViewTop?.isIntersecting || false}
          projectTitle={projects[selectedProjectIndex]?.project_title}
          techUsed={projects[selectedProjectIndex]?.tech_used}
          projectDescription={projects[selectedProjectIndex].description}
        />
      </div>
    </div>
  );
}

export default BrowserBody;
