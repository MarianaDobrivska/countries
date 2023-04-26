import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import clsx from "clsx";

import CountriesStore from "../../../../store/countries";
import useTheme from "../../../../hooks/useTheme";

import style from "./style.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";

const LIMIT = 8;

const CountryList = observer(() => {
  let data = CountriesStore.countries;
  const newdata = data.slice(0, LIMIT);
  const [postData, setPostData] = useState([...data.slice(0, LIMIT)]);
  const [visible, setVisible] = useState(LIMIT);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = () => {
    const newLimit = visible + LIMIT;
    const dataToAdd = data.slice(visible, newLimit);

    if (data.length > postData.length) {
      setTimeout(() => {
        setPostData((prev) => [...prev, ...dataToAdd]);
      }, 2000);
      setVisible(newLimit);
    } else {
      setHasMore(false);
    }
  };
  const { isDark } = useTheme();
  useEffect(() => {
    if (CountriesStore.countries.length === 0) {
      CountriesStore.getAllCountries();
    }
  }, []);
  console.log(postData);
  return (
    <ul className={style.countryListWrapper}>
      <InfiniteScroll
        dataLength={postData.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>
        {postData.map((country: any) => (
          <li
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
          </li>
        ))}
      </InfiniteScroll>
    </ul>
  );
});

export default memo(CountryList);
