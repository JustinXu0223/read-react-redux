/**
 * @component stores
 * @description demo的总数store
 * @time 2018/1/22
 * @author jokerXu
 */

import CounterStore from './counterStore';

import * as ActionTypes from '../actionTypes/demo';
import AppDispatcher from '../appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';

function computeSumrnary(counterValues) {
    let summary = 0;
    for (const key in counterValues) {
        if (counterValues.hasOwnProperty(key)) {
            summary += counterValues[key];
        }
    }
    return summary;
}

const SumrnaryStore = Object.assign({}, EventEmitter.prototype, {
    getSummary: function () {
        return computeSumrnary(CounterStore.getCounterValues());
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

SumrnaryStore.dispatchToken = AppDispatcher.register((action) => {
    if ((action.type === ActionTypes.INCREMENT) ||
        (action.type === ActionTypes.DECREMENT)
    ) {
        AppDispatcher.waitFor([CounterStore.dispatchToken]);
        SumrnaryStore.emitChange();
    }
});

export default SumrnaryStore;