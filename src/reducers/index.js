import { combineReducers } from 'redux';
import AdsReducer from './AdsReducer';

export default combineReducers({
	adState: AdsReducer
});