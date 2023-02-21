
// // make li for ul class="country-list"
function makeRenderList(evt) {
    return evt.map(el => {
      return `
        <li class="country-item">
          <img src="${el.flags.svg}" width="30" height="20">
          <b class="country-name">${el.name.official}</b>
        </li>`
    }).join('')
}
// make ul for div class="country-info"
function makeRenderCountryInfoForDiv(evt) {
    return evt.map(el => {
      const language = Object.values(el.languages).join(', ')
      return `
        <ul class="div-info-list">
          <li><p class="div-info-text">Capital: <span class="div-info-span">${el.capital}</span></p></li>
          <li><p class="div-info-text">Population: <span class="div-info-span">${el.population}</span></p></li>
          <li><p class="div-info-text">Languages: <span class="div-info-span">${language}</span></p></li>
        </ul>`
    }).join('')
}

export default { makeRenderList,makeRenderCountryInfoForDiv }