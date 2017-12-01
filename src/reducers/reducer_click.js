import {
  CLICK,
  CLEAR
} from '../actions/type';


export default (state= '',action) => {
  switch(action.type){
    case CLICK:
    return action.payload;
    case CLEAR:
    return action.payload
    default:
    return state
  }
}
