import {combineReducers} from 'redux';
import photoReducer from './photo';

const rootReducers = combineReducers({
  photo: photoReducer,
});

export default rootReducers;
