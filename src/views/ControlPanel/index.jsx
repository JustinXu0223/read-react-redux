/**
 * @component ControlPanel
 * @description 控制器
 * @time 2018/1/15
 * @author jokerXu
 **/

import React, { Component } from 'react';
import Counter from './Counter';
import Summary from './Summary';

class ControlPanel extends Component {

    constructor (props) {
        super(props);
        this.initValues = [
            {
                title: 'First',
            },{
                title: 'Second',
            },{
                title: 'Third',
            }
        ];
    }

    // 遍历子组件
    mapCounter=() =>{
        return this.initValues.map((value,index)=>{
            return <Counter key={index} caption={value.title} />;
        })
    };

    render() {
        return (
            <div>
                {this.mapCounter()}
                <hr/>
                <Summary />
            </div>
        )
    }
}

export default ControlPanel;