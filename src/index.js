import './css/styles.css';
import { debounce } from 'debounce';
import API from './fetchCountries'
import templates from './templates/country-list'
import Notiflix from 'notiflix';


const DEBOUNCE_DELAY = 300;

const input = document.querySelector(`#search-box`)
const list = document.querySelector(`.country-list`)
const divInfoCountry = document.querySelector(`.country-info`)

input.addEventListener(`input`, debounce(countrySearch,DEBOUNCE_DELAY))

// fetchCountry
function countrySearch(e) {
  const formSearch = e.target.value.trim()

  if(formSearch) {
    API.fetchCountries(formSearch)
      .then(ifSuccessful)
      .catch(ifError)
  }

  clearInput(formSearch)
}

// common function
function ifSuccessful(result) {
  ifResultIsOne(result)
  ifResultBetweenTwoAndTen(result)
  ifResultMoreThanTen(result)
}

// if result = 1
function ifResultIsOne(result) {
  if(result.length === 1) {
    list.innerHTML = templates.makeRenderList(result)
    divInfoCountry.innerHTML = templates.makeRenderCountryInfoForDiv(result)
  }
}

// if result > 2 and < 10
function ifResultBetweenTwoAndTen(result) {
  if(result.length >= 2 && result.length <= 10) {
    divInfoCountry.innerHTML = ''
    list.innerHTML = templates.makeRenderList(result)
  }
}

//  if result > 10
function ifResultMoreThanTen(result) {
  if(result.length > 10) {
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
  }
}

// if error 
function ifError() {
  Notiflix.Notify.failure("Oops, there is no country with that name")
}

// if input value = ''
function clearInput(formSearch){
  if(formSearch === ''){
    list.innerHTML = ''
    divInfoCountry.innerHTML = ''
  }
}



