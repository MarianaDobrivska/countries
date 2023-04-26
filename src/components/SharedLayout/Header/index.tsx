import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

import useTheme from "../../../hooks/useTheme";

import style from "./style.module.scss";
import clsx from "clsx";

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header className={clsx(style.header, isDark && style.dark)}>
      <h1>Where in the world?</h1>
      <button onClick={toggleTheme}>
        {isDark ? (
          <>
            <HiOutlineSun /> <>Light Mode</>
          </>
        ) : (
          <>
            <HiOutlineMoon /> <>Dark Mode</>
          </>
        )}
      </button>
    </header>
  );
};
