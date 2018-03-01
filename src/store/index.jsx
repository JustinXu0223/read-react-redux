/**
 * @component store
 * @description Store配置
 * @time 2018/3/1
 * @author jokerXu
 */

import {createStore} from 'redux';
import rootReducer from '../reducers'

const StoreConfig = () => {
	return createStore (rootReducer);
};

export default StoreConfig;