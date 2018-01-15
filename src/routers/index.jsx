/**
 * @component routers
 * @description 路由配置
 * @time 2018/1/15
 * @author jokerXu
 **/
import * as React from 'react';
import { Router,Route, IndexRoute } from 'react-router';

import App from '../views/app';
import Error from '../views/Error';
import ControlPanel from '../views/ControlPanel';

const RouterConfig = ({ history })=> {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute />
                <Route path="/demo-01" component={ControlPanel}/>
            </Route>

            <Route path="/404" component={Error} />
            <Route path="*" component={Error} />
        </Router>
    )
};

export default RouterConfig;
