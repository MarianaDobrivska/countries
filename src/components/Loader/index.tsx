import clsx from "clsx";

import useTheme from "../../hooks/useTheme";

import style from "./style.module.scss";

export const Loader = () => {
  const { isDark } = useTheme();
  return <p className={clsx(style.loader, isDark && style.dark)}></p>;
};
