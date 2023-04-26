import React from "react";
import Select, { SingleValue } from "react-select";

import clsx from "clsx";

import CountriesStore from "../../../../store/countries";
import useTheme from "../../../../hooks/useTheme";

import style from "./style.module.scss";

type OptionType = {
  value: string;
  label: string;
};

const options = [
  { value: "africa", label: "Africa" },
  { value: "america", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Ocenia" },
];

export const DropDown = () => {
  const { isDark } = useTheme();
  const handleSelectChange = (
    selectedOption: SingleValue<OptionType>
  ): void => {
    if (selectedOption) {
      CountriesStore.getCountriesByRegion(selectedOption.value);
    }
  };
  return (
    <div className={style.dropDownWrapper}>
      <Select
        options={options}
        placeholder="Filter by Region"
        onChange={handleSelectChange}
        classNames={{
          control: () => clsx(style.select, isDark && style.darkSelect),
          option: ({ isSelected, isFocused }) =>
            clsx(
              isSelected && style.selectOption,
              isFocused && style.focusedOption
            ),
        }}
      />
    </div>
  );
};
