import styles from "./styles.module.css";
import * as Tabs from "@radix-ui/react-tabs";
import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import BrowserBodyCards from "./browserBodyCards";
import { BODY_VARIANTS } from "./browser.animations";
import BrowserBodyProjects from "./browserBodyProjects";
import React, { useRef, useState } from "react";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { BROWSER_ANIMATION_DURATION } from "../../home.constants";

function BrowserBody({
  work_data,
  selectedTab,
  onTabChange,
}: {
  work_data: any;
  selectedTab: string;
  onTabChange: (arg: string) => void;
}) {
  const { projects } = work_data.find(
    (item: any) => item.value === selectedTab,
  );
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
  console.log(selectedProjectIndex);
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
                        "ml-2 w-[120px] rounded-t-md py-2 text-center text-sm font-bold leading-5 tracking-normal text-slate-500",
                        {
                          "!text-white": selectedTab === item.value,
                        },
                      )}
                    >
                      {item.title}
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
                    <div className="flex flex-col gap-16">
                      {item.description}
                      <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-6">
                        {item.projects.map(
                          (
                            { project_title }: { project_title: string },
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
      <div className={styles.browserBodySections}>
        <BrowserBodyProjects
          shouldAnimate={inViewTop?.isIntersecting}
          projectTitle={projects[selectedProjectIndex].project_title}
          accentColor={projects[selectedProjectIndex].color}
          techUsed={projects[selectedProjectIndex].tech_used}
        />
      </div>
    </div>
  );
}

export default BrowserBody;
