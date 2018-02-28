/**
 * @component store
 * @description Store配置
 * @time 2018/3/1
 * @author jokerXu
 */

import {createStore} from 'redux';
import rootReducer from '../reducers'
const initValues = {
 'First': 0,
 'Second': 10,
 'Third': 20
}
const StoreConfig = () => {
	return createStore (rootReducer, initValues);
};

export default StoreConfig ;