import {
  CLICK,
  CLEAR,
  FETCH_USER,
  FETCH_USER_FUFILLED,
  FETCH_HACKER_NEWS,
  FETCH_HACKER_NEWS_FUFILLED,
  SEARCH_BEER,
  SEARCH_BEER_FUFILLED,
  SEARCH_BEER_ERROR,
  CANCEL_SEARCH_BEER
} from './type';


export const click = () => {
  return{
    type:CLICK,
    payload:'man'
  }
}

export const clearClick = () => {
  return {
    type:CLEAR,
    payload:''
  }
}

export const fetchUser = () => {
  return {
    type:FETCH_USER
  }
}

export const fetchUserFufilled = user => {
  return {
    type:FETCH_USER_FUFILLED,
    payload:user
  }
}

export const fetchHackerNews = () => {
  return{
    type:FETCH_HACKER_NEWS
  }
}
export const fetchHackerNewsFufilled = news => {
  return{
    type:FETCH_HACKER_NEWS_FUFILLED,
    payload:news
  }
}


export const searchBeer = text => {
  return{
    type:SEARCH_BEER,
    payload:text
  }
}

export const searchBeerFufilled = beer => {
  return{
    type:SEARCH_BEER_FUFILLED,
    payload:beer
  }
}


export const serchBeerError = error => {
  return{
    type:SEARCH_BEER_ERROR,
    payload:error
  }
}

export const cancelSearchBeer = () => {
  return{
    type:CANCEL_SEARCH_BEER,
    payload:'canceled'
  }
}
