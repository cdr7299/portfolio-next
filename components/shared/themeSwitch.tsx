import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon } from "lucide-react";
import { motion } from "framer-motion";
const modes = ["system", "light", "dark"];

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [index, setCurrentIndex] = useState(0);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setTheme(modes[index]);
  }, [index]);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mr-3 rounded-full border border-gray-300 bg-transparent bg-white px-5 py-2 text-sm text-gray-600 shadow-md  transition-colors dark:bg-black  dark:text-white"
      onClick={() => setCurrentIndex((prev) => (prev + 1) % modes.length)}
    >
      <span className="flex items-center gap-2">
        {theme} mode
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