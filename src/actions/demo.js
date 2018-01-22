/**
 * @component actions
 * @description demo动作
 * @time 2018/1/22
 * @author jokerXu
 */

import * as ActionTypes from '../actionTypes/demo';
import AppDispatcher from '../appDispatcher';

export const increment = (counterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.INCREMENT,
        value: counterCaption
    })
};


export const decrement = (counterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.DECREMENT,
        value: counterCaption,
    })
};
