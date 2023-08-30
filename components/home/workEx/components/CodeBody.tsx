"use client";
import styles from "./styles.module.css";
import * as Tabs from "@radix-ui/react-tabs";
import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import CodeCards from "./codeCards";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function CodeBody({
  work_data,
  selectedTab,
  onTabChange,
}: {
  work_data: any;
  selectedTab: string;
  onTabChange: any;
}) {
  return (
    <div className={styles.codeBody}>
      <div className={styles.codeBodySections}>
        <Tabs.Root
          defaultValue={selectedTab}
          className="h-[calc(100%-1.5rem)] py-4"
          onValueChange={(arg) => {
            onTabChange(arg);
          }}
        >
          <Tabs.List>
            {work_data.map((item: any) => {
              return (
                <Tabs.Trigger key={item.title} value={item.value}>
                  <AnimatePresence>
                    <motion.div
                      key={item.title}
                      animate={
                        selectedTab === item.value
                          ? { backgroundColor: "#0d1117" }
                          : { backgroundColor: "rgb(22, 27, 34)" }
                      }
                      transition={{ duration: 0.6 }}
                      className={cx(
                        "ml-6 rounded-t-md  px-8 py-2 text-sm font-normal leading-5 tracking-normal text-slate-500",
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
                <motion.div
                  className="h-full bg-[#0d1117] p-4 text-white"
                  custom={700}
                  key={item.title}
                  variants={sidebar}
                  animate={selectedTab === item.value ? "open" : "closed"}
                  // initial={{ scaleY: 0 }}
                  // animate={
                  //   selectedTab === item.value ? { scaleY: 1 } : { scaleY: 0 }
                  // }
                  transition={{
                    duration: 0.5,
                    ease: "easeIn",
                  }}
                >
                  <div className="flex flex-col gap-16">
                    {item.description}
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                      {item.projects.map(
                        ({ project_title }: { project_title: string }) => (
                          <CodeCards
                            key={project_title}
                            projectTitle={project_title}
                          />
                        ),
                      )}
                    </div>
                  </div>
                </motion.div>
              </Tabs.Content>
            );
          })}
        </Tabs.Root>
      </div>
      <div className={styles.codeBodySections}>c</div>
    </div>
  );
}

export default CodeBody;
