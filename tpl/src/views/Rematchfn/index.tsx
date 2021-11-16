import React , { Component } from 'react';
import { connect } from 'react-redux';

const View = (props) => {
    const {app,increment,incrementAsync} = props;
  return(
      <React.Fragment>
          The count is {app}
          <button onClick={increment}>increment</button>
          <button onClick={incrementAsync}>incrementAsync</button>
      </React.Fragment>
  )
}

const mapState = state => ({
  app: state.app
})
const mapDispatch = ({ app: { increment, incrementAsync }}) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1)
})
export default connect(mapState,mapDispatch)(View);
