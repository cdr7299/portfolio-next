import styles from "./styles.module.css";
import * as Tabs from "@radix-ui/react-tabs";
import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import BrowserBodyCards from "./browserBodyCards";
import { BODY_VARIANTS } from "./browser.animations";
import BrowserBodyProjects from "./browserBodyProjects";

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
  const selectedProjectTitle = projects[0].project_title;

  return (
    <div className={styles.browserBody}>
      <div className={styles.browserBodySections}>
        <Tabs.Root
          defaultValue={selectedTab}
          className="h-[calc(100%-1rem)] py-4"
          onValueChange={onTabChange}
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
                          ? { backgroundColor: item.color }
                          : { backgroundColor: "rgb(22, 27, 34)" }
                      }
                      transition={{ duration: 0.3 }}
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
                <motion.div
                  className="h-full bg-[#0d1117] p-4 text-white"
                  key={item.title}
                  variants={BODY_VARIANTS}
                  animate={selectedTab === item.value ? "open" : "closed"}
                  transition={{
                    duration: 0.5,
                    ease: "easeIn",
                  }}
                >
                  <div className="flex flex-col gap-16">
                    {item.description}
                    <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-6">
                      {item.projects.map(
                        ({ project_title }: { project_title: string }) => (
                          <BrowserBodyCards
                            key={project_title}
                            projectTitle={project_title}
                            accentColor={item.color}
                            isSelected={project_title === selectedProjectTitle}
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
      <div className={styles.browserBodySections}>
        <BrowserBodyProjects
          projectTitle={selectedProjectTitle}
          accentColor={projects[0].color}
        />
      </div>
    </div>
  );
}

export default BrowserBody;
