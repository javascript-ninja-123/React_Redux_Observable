import {
  FETCH_USER,
  FETCH_USER_FUFILLED
}from '../actions/type';

const INITIAL_STATE = {
  loadingState:false,
  current:null
};


export default (state =INITIAL_STATE ,action) => {
  switch(action.type){
    case FETCH_USER:
    return {...INITIAL_STATE,loadingState:true};
    case FETCH_USER_FUFILLED:
    return {...INITIAL_STATE, loadingState:false, current:action.payload}
    default:
    return state
  }
}
