import { NavLink } from "react-router-dom";

import clsx from "clsx";

import useTheme from "../../../../../hooks/useTheme";

import style from "./style.module.scss";

export const BorderCountries = ({ country }: any) => {
  const { isDark } = useTheme();
  const allCountries = JSON.parse(
    localStorage.getItem("all-countries") as string
  );
  let countriesAbbreviation = {} as any;

  for (const el of allCountries) {
    countriesAbbreviation = {
      ...countriesAbbreviation,
      [el.cca3]: el.name.common,
    };
  }
  const borders = [...country.borders].map((el) => countriesAbbreviation[el]);

  return (
    <div className={style.borderCountriesWrapper}>
      <h2 className={style.borderCountriesWrapper__title}>Border Countries:</h2>
      <ul className={style.borderCountriesWrapper__list}>
        {borders.map((border) => (
          <li
            key={border}
            className={clsx(
              style.borderCountriesWrapper__list__listItem,
              isDark && style.darkItem
            )}>
            <NavLink to={`/country/${border}`}>{border}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
