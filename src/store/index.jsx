/**
 * @component store
 * @description Store配置
 * @time 2018/3/1
 * @author jokerXu
 */

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import {reducer as todoReducer} from '../pages/Todo/TodoList';
import {reducer as filterReducer} from '../pages/Todo/Filter';

const win = window;

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
  // middlewares.push(require('redux-immutable-state-invariant')());
}

const storeEnhancers = compose(
	applyMiddleware(...middlewares),
	(win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, storeEnhancers);
