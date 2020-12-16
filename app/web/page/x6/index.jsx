import React, { Fragment, Component } from 'react';
import FlowComponent from '@component/ChartX6/Flow/index'

export default class ListIndex extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }

  render() {
    return <Fragment>
      <h1>X6:极易定制、开箱即用、数据驱动的图编辑引擎。</h1>
      <FlowComponent />
    </Fragment>;
  }
}
