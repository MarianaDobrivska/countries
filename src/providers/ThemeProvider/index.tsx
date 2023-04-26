import { createContext, useMemo, useState } from "react";

type themeProps = {
  children: JSX.Element;
};

export const ThemeContext = createContext({
  isDark: false,
  setIsDark: (arg: boolean) => {},
});

export const ThemeProvider = ({ children }: themeProps) => {
  const [isDark, setIsDark] = useState(false);

  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
