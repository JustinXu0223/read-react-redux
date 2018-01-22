/**
 * @component Counter
 * @description 子组件
 * @time 2018/1/15
 * @author jokerXu
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CounterStore from '../../stores/counterStore';
import * as Actions from '../../actions/demo';

/*** 暂时去掉stateless组件写法
 const Counter= ({ caption, initValue= 0 })=> {
    return (
        <div>
            {caption}, {initValue}
        </div>
    );
};

 export default Counter;*/

class Counter extends Component{

    constructor(props){
        super(props);

        this.state= {
            count: CounterStore.getCounterValues() [props.caption],
        }
    }
    clickIncrementHandler=() =>{
        Actions.increment(this.props.caption);
    };
    clickDecrementHandler=() =>{
        Actions.decrement(this.props.caption);
    };
    componentDidMount( ) {
        CounterStore.addChangeListener(this.onChange) ;
    }
    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange);
    }
    onChange = () => {
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({count: newCount});
    }
    shouldComponentUpdate(nextProps , nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.count !==this.state.count);
    }

    render(){
        const buttonStyle= {
            marginRight: '15px',
        };
        const { caption }= this.props;
        const { count }= this.state;
        return (
            <div>
                <button style={buttonStyle} onClick={this.clickIncrementHandler}>+</button>
                <button style={buttonStyle} onClick={this.clickDecrementHandler}>-</button>
                <span>{caption} count: {count}</span>
            </div>
        );
    }
}

Counter.propTypes= {
    caption: PropTypes.string.isRequired,
};

export default Counter;



