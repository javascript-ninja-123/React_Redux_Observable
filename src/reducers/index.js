import { combineReducers } from 'redux';
import ClickReducer from './reducer_click';
import UserReducer from './reducer_user';
import NewsReducer from './reducer_news';
import BeerReducer from './reducer_beer';


const rootReducer = combineReducers({
  clickman:ClickReducer,
  user:UserReducer,
  news:NewsReducer,
  beer:BeerReducer
});

export default rootReducer;
