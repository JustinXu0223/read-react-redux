import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Summary = ({sum}) => {
  return (
    <div>Total Count: {sum}</div>
  );
}

Summary.propTypes = {
  sum: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  const { demo } = state
  let sum = 0;
  for (const key in demo) {
    if (demo.hasOwnProperty(key)) {
      sum += demo[key];
    }
  }
  return {value: sum};
}

class SummaryContainer extends Component {
  constructor(props, context) {
	super(props, context);
	this.state = this.getOwnState();
  }
  
  onChange = () => {
	this.setState(this.getOwnState());
  }
  
  getOwnState = () => {
	const { demo } = this.context.store.getState();
	let sum = 0;
	for (const key in demo) {
	  if (demo.hasOwnProperty(key)) {
		sum += demo[key];
	  }
	}
	
	return { sum: sum };
  }
  
  shouldComponentUpdate(nextProps, nextState) {
	return nextState.sum !== this.state.sum;
  }
  
  componentDidMount() {
	this.context.store.subscribe(this.onChange);
  }
  
  componentWillUnmount() {
	this.context.store.unsubscribe(this.onChange);
  }
  
  render() {
	const sum = this.state.sum;
	return (
        <Summary sum={sum} />
	);
  }
}

SummaryContainer.contextTypes = {
  store: PropTypes.object
}

export default SummaryContainer

