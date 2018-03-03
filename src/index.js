import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './config/registerServiceWorker';
import {Provider} from './components/Common'
import ControlPanel from './views/SimpleProvider'
import StoreConfig  from './store';

const store = StoreConfig();

ReactDOM.render(
	<Provider store={store}>
	  <ControlPanel />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
