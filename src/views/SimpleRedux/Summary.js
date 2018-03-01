import React from 'react';
import {connect} from 'react-redux';

const Summary = ({value}) => {
  return (
    <div>Total Count: {value}</div>
  );
}

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


export default connect(mapStateToProps)(Summary);


