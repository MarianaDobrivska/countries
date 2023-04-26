import React from "react";
import { ImSearch } from "react-icons/im";

import CountriesStore from "../../../../store/countries";

import style from "./style.module.scss";
import useTheme from "../../../../hooks/useTheme";
import clsx from "clsx";

export const SearchBar = () => {
  const { isDark } = useTheme();
  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const country = formData.get("country")?.toString().trim();
    if (country === "" || country === undefined) return;
    CountriesStore.getCountryByName(country);
    (e.target as HTMLFormElement).reset();
  };
  return (
    <form
      className={clsx(style.searchBarWrapper, isDark && style.darkWrapper)}
      onSubmit={handleSubmit}>
      <button>
        <ImSearch className={style.searchBarImage} />
      </button>
      <input placeholder="Search for a country..." name="country" />
    </form>
  );
};
