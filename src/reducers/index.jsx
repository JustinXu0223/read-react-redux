/**
 * @component reducers
 * @description 根reducers
 * @time 2018/3/1
 * @author jokerXu
 */
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	demo: enthusiasm,
	auth: Auth,
	routing: routerReducer,
});

export default rootReducer;