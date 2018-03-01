import React from 'react';
import * as Actions from '../../actions/demoActions';
import {connect} from 'react-redux';

const buttonStyle = {
  margin: '10px'
};
//presentational component
function Counter({caption, onIncrement, onDecrement, value}) {
  return (
    <div>
      <button style={buttonStyle} onClick={onIncrement}>+</button>
      <button style={buttonStyle} onClick={onDecrement}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  const { demo } = state;
  return {
    value: demo[ownProps.caption]
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption));
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption));
    }
  }
}
//export connect object
//容器组件，把store上的状态转化为内层傻瓜组件的prop，把内层傻瓜组件中的用户动作转化为派送给store的动作
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

