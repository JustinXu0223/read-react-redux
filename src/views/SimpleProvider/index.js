import React, {Component} from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';
const style = {
	margin: '20px'
};

class ControlPanel extends Component {
	constructor (props) {
		super(props)
		this.state = {
			list: ['First', 'Second', 'Third']
		}
	}
	
	mapCounter = () => {
		const {list} = this.state
		if (list && list.length > 0)
			return list.map((value, index) => (<Counter key={index} caption={value}/>))
	}
	
	render () {
		return (
			<div style={style}>
				{this.mapCounter()}
				<hr/>
				<Summary/>
			</div>
		);
	}
}

export default ControlPanel;

