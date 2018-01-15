/**
 * @component ControlPanel
 * @description 控制器
 * @time 2018/1/15
 * @author jokerXu
 **/

import React, { Component } from 'react';
import Counter from './Counter';

class ControlPanel extends Component {
    render() {
        return (
            <div>
                <Counter caption="First" initValue={0}/>
                <Counter caption="Second"/>
            </div>
        )
    }
}

export default ControlPanel;