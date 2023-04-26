import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

const useTheme = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return { isDark, toggleTheme };
};

export default useTheme;
