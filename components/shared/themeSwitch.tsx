import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon } from "lucide-react";

const modes = ["system", "light", "dark"];

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
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
    <button
      className="mr-3 rounded-2xl bg-transparent px-4 py-1 text-base text-slate-400"
      onClick={() => setCurrentIndex((prev) => (prev + 1) % modes.length)}
    >
      <span className="flex items-center gap-2">
        <Moon
          strokeWidth="0.02rem"
          fill={theme === "system" || theme === "dark" ? "#222" : "#fff"}
        />
        {theme} mode
      </span>
    </button>
  );
};

export default ThemeSwitch;
