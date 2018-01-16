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
                <Counter caption="First" />
                <Counter caption="Second" initValue={10}/>
                <Counter caption="Third" />
                <button onClick={ () => this.forceUpdate () }>
                    Click me to repaint!
                </button>
            </div>
        )
    }
}

export default ControlPanel;