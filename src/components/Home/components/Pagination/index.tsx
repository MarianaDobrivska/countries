import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { TiChevronLeft, TiChevronRight, TiSocialFlickr } from "react-icons/ti";
import { observer } from "mobx-react-lite";

import CountriesStore from "../../../../store/countries";

import style from "./style.module.scss";

export const Pagination = observer(() => {
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 8;
  const items = CountriesStore.countries;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    CountriesStore.getPaginatedCountries(currentItems);
  }, [items.length, currentItems]);

  useEffect(() => {
    setItemOffset(0);
  }, [items.length]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    CountriesStore.getPaginatedCountries(currentItems);

    const params = new URLSearchParams(window.location.search);
    params.set("page", String(event.selected + 1));
    window.history.pushState({}, "", `${window.location.pathname}?${params}`);
  };

  return (
    <>
      {items.length > 8 && (
        <ReactPaginate
          breakLabel={<TiSocialFlickr />}
          nextLabel={<TiChevronRight />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel={<TiChevronLeft />}
          renderOnZeroPageCount={null}
          containerClassName={style.paginationContainer}
          pageClassName={style.page}
          pageLinkClassName={style.pageLink}
          activeClassName={style.activePage}
          disabledClassName={style.disabledPage}
          previousLinkClassName={style.previousPage}
          nextLinkClassName={style.nextPage}
          breakLinkClassName={style.breakLabel}
          disableInitialCallback={true}
        />
      )}
    </>
  );
});
