import { BorderCountries } from "./BorderCountries";

import style from "./style.module.scss";

export const CountryMeta = ({ country }: any) => {
  const {
    capital,
    currencies,
    flags,
    languages,
    name,
    population,
    region,
    subregion,
    tld,
  } = country;

  const languagesList = [...Object.values(languages)].join(", ");
  const formattedPopulation = population.toLocaleString("en-US");
  const currenciesList = [...Object.values(currencies)]
    .map((el: any) => el.name)
    .join(", ");
  const nativeName = name?.nativeName?.bar?.common ?? name?.common;

  return (
    <div className={style.countryMetaWrapper}>
      <img src={flags.png} alt={flags.alt} className={style.countryImage} />
      <div>
        <h2>{name.common}</h2>
        <div className={style.countryMetaWrapper__infoList}>
          <ul>
            <li>
              <span>Native Name: </span>
              {nativeName}
            </li>
            <li>
              <span>Population: </span>
              {formattedPopulation}
            </li>
            <li>
              <span>Region: </span>
              {region}
            </li>
            <li>
              <span>Sub Region: </span>
              {subregion}
            </li>
            <li>
              <span>Capital: </span>
              {capital}
            </li>
          </ul>
          <ul>
            <li>
              <span>Top Level Domain: </span>
              {tld}
            </li>
            <li>
              <span>Currencies: </span>
              {currenciesList}
            </li>
            <li>
              <span>Languages: </span>
              {languagesList}
            </li>
          </ul>
        </div>
        <BorderCountries country={country} />
      </div>
    </div>
  );
};
