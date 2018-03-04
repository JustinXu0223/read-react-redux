import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './config/registerServiceWorker';
import RouterConfig from './routers';
import {Provider} from 'react-redux';
import store  from './store';
import { browserHistory } from 'react-router';

ReactDOM.render(
	<Provider store={store}>
		<RouterConfig history={browserHistory} />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
