import { makeAutoObservable } from "mobx";
import {
  fetchAllCountries,
  fetchCountriesByName,
  fetchCountriesByRegion,
} from "../services/countriesAPI";

const LS_KEY = "all-countries";

class Store {
  countries = JSON.parse(localStorage.getItem(LS_KEY) as string) ?? [];
  selectedCountry = null;

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  async getAllCountries() {
    const countries = await fetchAllCountries();
    this.countries = countries;
    localStorage.setItem(LS_KEY, JSON.stringify(this.countries));
  }

  async getCountriesByRegion(region: string) {
    const countries = await fetchCountriesByRegion(region);
    this.countries = countries;
  }

  async getCountryByName(name: string) {
    const country = await fetchCountriesByName(name);
    this.selectedCountry = country[0];
    this.countries = [country[0]];
  }
}

const CountriesStore = new Store();
export default CountriesStore;
