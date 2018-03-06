import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './config/registerServiceWorker';
import RouterConfig from './routers';
import {Provider} from 'react-redux';
import store  from './store';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import './index.css';

const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
	<Provider store={store}>
		<RouterConfig history={history} />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
