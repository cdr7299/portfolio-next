import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon } from "lucide-react";
import { motion } from "framer-motion";

const modes = {
  SYSTEM: "system",
  LIGHT: "light",
  DARK: "dark",
};

const modes_list = [modes.SYSTEM, modes.LIGHT, modes.DARK];

const modes_vs_labels = {
  [modes.SYSTEM]: "Auto",
  [modes.LIGHT]: "Light",
  [modes.DARK]: "Dark",
};

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const setNextTheme = () => {
    const currentThemeIndex = modes_list.findIndex((item) => item === theme);
    setTheme(modes_list[(currentThemeIndex + 1) % modes_list.length]);
  };
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mr-3 rounded-full border border-gray-300 bg-transparent bg-white px-5 py-2 text-sm text-gray-600 shadow-md  transition-colors dark:bg-black  dark:text-white"
      onClick={() => setNextTheme()}
    >
      <span className="flex items-center gap-2">
        {modes_vs_labels[theme || ""]} mode
        <Moon
          strokeWidth="0.02rem"
          size={20}
          fill={resolvedTheme === "dark" ? "#222" : "#fff"}
        />
      </span>
    </motion.button>
  );
};

export default ThemeSwitch;
