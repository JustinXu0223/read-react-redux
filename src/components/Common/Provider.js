/**
 * @component Common
 * @description Provider组件
 * @time 2018/3/3
 * @author jokerXu
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Provider extends Component {
  
  getChildContext() {
	return {
	  store: this.props.store
	};
  }
  
  render() {
	return this.props.children;
  }
  
}

Provider.propTypes = {
  store: PropTypes.object.isRequired
}

// 指定 Provider 的 childContextTypes 属性
Provider.childContextTypes = {
  store: PropTypes.object
};

export default Provider;