import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

import CountriesStore from "../../store/countries";

import { BackButton } from "./components/BackButton";
import { CountryMeta } from "./components/CountryMeta";

import style from "./style.module.scss";

export const FullCountryInfo = observer(() => {
  const { name } = useParams();
  const country = CountriesStore.selectedCountry;

  useEffect(() => {
    if (name) {
      CountriesStore.getCountryByName(name);
    }
  }, [name]);

  if (!country) return <div>...Loading</div>;

  return (
    <section className={style.sectionWrapper}>
      <BackButton />
      <CountryMeta country={country} />
    </section>
  );
});
