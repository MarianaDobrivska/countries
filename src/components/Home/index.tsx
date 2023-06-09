import React from "react";

import CountryList from "./components/CountryList";
import { DropDown } from "./components/DropDown";
import { SearchBar } from "./components/SearchBar";

import style from "./style.module.scss";

export const Home = () => {
  return (
    <section>
      <div className={style.searchWrapper}>
        <SearchBar />
        <DropDown />
      </div>
      <CountryList />
    </section>
  );
};
