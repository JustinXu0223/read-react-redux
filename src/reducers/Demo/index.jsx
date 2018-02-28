/**
 * @component reducers
 * @description demo高阶函数
 * @time 2018/3/1
 * @author jokerXu
 */
import * as Constants from '../../actionTypes/demo';

const initState = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
};
export function enthusiasm(state= initState, action) {
    switch (action.type) {
        case Constants.INCREMENT_ENTHUSIASM:
            return {...state, enthusiasmLevel: state.enthusiasmLevel + 1};
        case Constants.DECREMENT_ENTHUSIASM:
            return {...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)};
        default:
            return state;
    }
}