import {
  FETCH_HACKER_NEWS,
  FETCH_HACKER_NEWS_FUFILLED
} from '../actions/type';

const INTIAL_STATE = {
  newsLoadingState:false,
  newsCurrent:null
}

export default (state = INTIAL_STATE,action) => {
  switch(action.type){
    case FETCH_HACKER_NEWS:
    return {...INTIAL_STATE, newsLoadingState:true};
    case FETCH_HACKER_NEWS_FUFILLED:
    return {...INTIAL_STATE, newsLoadingState:false, newsCurrent:action.payload};
    default:
    return state;
  }
}
