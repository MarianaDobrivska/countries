import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import InfiniteScroll from "react-infinite-scroll-component";

import clsx from "clsx";

import CountriesStore from "../../../../store/countries";
import useTheme from "../../../../hooks/useTheme";

import { Loader } from "../../../Loader";

import style from "./style.module.scss";

const LIMIT = 8;

const CountryList = observer(() => {
  const [countries, setCountries] = useState([] as object[]);
  const [paginatedCountries, setPaginatedCountries] = useState([] as object[]);
  const [visible, setVisible] = useState(LIMIT);
  const [hasMore, setHasMore] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    setCountries(CountriesStore.countries);
    setPaginatedCountries(CountriesStore.countries.slice(0, LIMIT));
    setHasMore(true);
    setVisible(LIMIT);

    if (CountriesStore.countries.length === 0) {
      CountriesStore.getAllCountries();
    }
    // eslint-disable-next-line
  }, [CountriesStore.countries.length]);

  const getMoreCountries = () => {
    const newLimit = visible + LIMIT;
    const countriesToAdd = countries.slice(visible, newLimit);

    if (countries.length > paginatedCountries.length) {
      setTimeout(() => {
        setPaginatedCountries((prev) => [...prev, ...countriesToAdd]);
      }, 2000);
      setVisible(newLimit);
    } else {
      setHasMore(false);
    }
  };

  return (
    <div className={style.countryListWrapper}>
      <InfiniteScroll
        dataLength={paginatedCountries.length}
        next={getMoreCountries}
        hasMore={hasMore}
        loader={
          <div className={style.loaderPosition}>
            <Loader />
          </div>
        }
        endMessage={
          <div className={style.endMessage}>
            <p>Yay! You have seen it all</p>
          </div>
        }>
        {paginatedCountries.map((country: any) => (
          <div
            key={Math.random()}
            className={clsx(style.countryListItem, isDark && style.dark)}>
            <Link
              to={`/country/${country.name.common}`}
              className={style.linkWrapper}>
              <img src={country.flags.png} alt={country.flags.alt} />
              <div className={style.countryContentWrapper}>
                <h2>{country.name.official}</h2>
                <p>
                  <span>Population:</span>{" "}
                  {country.population.toLocaleString("en-US")}
                </p>
                <p>
                  <span>Region:</span> {country.region}
                </p>
                <p>
                  <span>Capital:</span> {country.capital}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
});

export default memo(CountryList);
