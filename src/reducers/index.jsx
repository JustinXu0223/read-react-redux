/**
 * @component reducers
 * @description 根reducers
 * @time 2018/3/1
 * @author jokerXu
 */
import Demo from './Demo'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
	demo: Demo,
});

export default rootReducer;