import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import clsx from "clsx";

import CountriesStore from "../../store/countries";
import useTheme from "../../hooks/useTheme";

import { CountryMeta } from "./CountryMeta";
import { Loader } from "../Loader";

import style from "./style.module.scss";

export const FullCountryInfo = observer(() => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const country = CountriesStore.selectedCountry;

  useEffect(() => {
    if (name) {
      CountriesStore.getCountryByName(name);
    }
  }, [name]);

  const handleBackButtonClick = () => {
    navigate(-1);
    CountriesStore.getAllCountries();
  };

  if (!country)
    return (
      <div className={style.loaderWrapper}>
        <Loader />
      </div>
    );

  return (
    <section className={style.sectionWrapper}>
      <button
        className={clsx(style.backButton, isDark && style.darkButton)}
        onClick={handleBackButtonClick}>
        <BsArrowLeft />
        Back
      </button>
      <CountryMeta country={country} />
    </section>
  );
});
