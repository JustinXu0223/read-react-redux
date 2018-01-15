import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './config/registerServiceWorker';
import RouterConfig from './routers';

import { browserHistory } from 'react-router';

ReactDOM.render(<RouterConfig history={browserHistory} />, document.getElementById('root'));
registerServiceWorker();
