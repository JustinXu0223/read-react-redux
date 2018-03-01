import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './config/registerServiceWorker';
import RouterConfig from './routers';
import {Provider} from 'react-redux';
import StoreConfig  from './store';
import { browserHistory } from 'react-router';

const store = StoreConfig();

ReactDOM.render(
	<Provider store={store}>
		<RouterConfig history={browserHistory} />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
