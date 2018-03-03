import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../../actions/demoActions';

const buttonStyle = {
  margin: '10px'
};
//presentational component
const Counter = ({caption, onIncrement, onDecrement, value}) => {
  return (
    <div>
      <button style={buttonStyle} onClick={onIncrement}>+</button>
      <button style={buttonStyle} onClick={onDecrement}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  );
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

class CounterContainer extends Component {
  constructor (props, context) {
    super(props, context);
	this.state = this.getOwnState();
  }
  
  // 箭头函数, 不用在构造器bind this
  getOwnState = () => {
	const { demo } = this.context.store.getState();
	const { caption } = this.props;
    return {
      value: demo[caption]
    }
  }
  
  onIncrement = () => {
	const { caption } = this.props;
	this.context.store.dispatch(Actions.increment(caption));
  }
  
  onDecrement = () => {
	const { caption } = this.props;
	this.context.store.dispatch(Actions.decrement(caption));
  }
  
  onChange = () => {
	this.setState(this.getOwnState());
  }
  
  shouldComponentUpdate(nextProps, nextState) {
	return (nextProps.caption !== this.props.caption) ||
		(nextState.value !== this.state.value);
  }
  
  componentDidMount() {
	this.context.store.subscribe(this.onChange);
  }
  
  componentWillUnmount() {
	this.context.store.unsubscribe(this.onChange);
  }
  
  render() {
    const { caption } = this.props;
	const onIncrement = this.onIncrement;
	const onDecrement = this.onDecrement;
	const { value } =this.state;
	const counterProps = { caption, value, onIncrement, onDecrement };
	return <Counter {...counterProps}/>
  }
  
}

CounterContainer.propTypes = {
  caption: PropTypes.string.isRequired
};

CounterContainer.contextTypes = {
  store: PropTypes.object
}
export default CounterContainer;