import React from "react";

import clsx from "clsx";

import useTheme from "../../hooks/useTheme";

import style from "./style.module.scss";

type layoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: layoutProps) => {
  const { isDark } = useTheme();

  return (
    <div className={clsx(style.appWrapper, isDark && style.dark)}>
      {children}
    </div>
  );
};

export default Layout;
