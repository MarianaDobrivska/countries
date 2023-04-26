const common_fields = "fields=name,capital,region,population,flags,cca3";

export function fetchAllCountries() {
  const countries = fetch(`https://restcountries.com/v3.1/all?${common_fields}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log("error in fetch" + error));

  return countries;
}

export function fetchCountriesByRegion(region: string) {
  const countries = fetch(
    `https://restcountries.com/v3.1/region/${region}?${common_fields}`
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log("error in fetch" + error));

  return countries;
}

export function fetchCountriesByName(name: string) {
  const countries = fetch(
    `https://restcountries.com/v3.1/name/${name}?${common_fields},subregion,currencies,languages,borders,tld`
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log("error in fetch" + error));

  return countries;
}
