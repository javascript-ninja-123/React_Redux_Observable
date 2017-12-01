import {
  SEARCH_BEER,
  SEARCH_BEER_FUFILLED,
  SEARCH_BEER_ERROR,
  CANCEL_SEARCH_BEER
} from '../actions/type'


const INTIIAL_STATE = {
  loadingState:false,
  text:'',
  individualBeer:[],
  error:'',
  cancel:''
}

export default (state = INTIIAL_STATE,action) => {
  switch(action.type){
    case SEARCH_BEER:
    return {...INTIIAL_STATE, loadingState:true, text:action.payload};
    case SEARCH_BEER_FUFILLED:
    return {loadingState:false,individualBeer:action.payload}
    case SEARCH_BEER_ERROR:
    return {loadingState:false, error:action.payload,individualBeer:[]}
    case CANCEL_SEARCH_BEER:
    return {loadingState:false, individualBeer:[], error:'', cancel:action.payload}
    default:
    return INTIIAL_STATE
  }
}
