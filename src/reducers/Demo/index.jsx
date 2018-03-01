/**
 * @component reducers
 * @description demo高阶函数
 * @time 2018/3/1
 * @author jokerXu
 */
import * as ActionTypes from '../../actionTypes/demo';

const initState = {
	'First': 0,
	'Second': 10,
	'Third': 20
};
export default function DemoReducer(state= initState, action) {
	const {counterCaption} = action;
    switch (action.type) {
		case ActionTypes.INCREMENT:
			return {...state, [counterCaption]: state[counterCaption] + 1};
		case ActionTypes.DECREMENT:
			return {...state, [counterCaption]: state[counterCaption] - 1};
		default:
			return state
    }
}