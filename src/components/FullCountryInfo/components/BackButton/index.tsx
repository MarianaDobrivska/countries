import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import clsx from "clsx";

import useTheme from "../../../../hooks/useTheme";

import style from "./style.module.scss";

export const BackButton = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const handleBackButtonClick = () => navigate(-1);

  return (
    <button
      className={clsx(style.backButton, isDark && style.darkButton)}
      onClick={handleBackButtonClick}>
      <BsArrowLeft />
      Back
    </button>
  );
};
