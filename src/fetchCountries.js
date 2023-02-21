const BASE_URL = `https://restcountries.com/v3.1/name`
const BASE_OPTIONS = `name,capital,population,flags,languages`

function fetchCountries(countryName) {
  const url = `${BASE_URL}/${countryName}?fields=${BASE_OPTIONS}`

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json()
  })
}

export default { fetchCountries }