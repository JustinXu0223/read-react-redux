/**
 * @component Summary
 * @description
 * @time 2018/1/22
 * @author jokerXu
 */

import React, { Component } from 'react';

import SummaryStore from '../../stores/summaryStore.js';

class Summary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sum: SummaryStore.getSummary()
        }
    }

    componentDidMount() {
        SummaryStore.addChangeListener(this.onUpdate);
    }

    componentWillUnmount() {
        SummaryStore.removeChangeListener(this.onUpdate);
    }

    onUpdate=() => {
        this.setState({
            sum: SummaryStore.getSummary(),
        })
    }

    render() {
        return (
            <div>Total Count: {this.state.sum}</div>
        );
    }
}

export default Summary;