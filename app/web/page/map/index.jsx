import React, { Fragment, Component } from 'react';
import AfricaComponent from '@component/ChartL7/Africa/index'
import ArcComponent from '@component/ChartL7/Arc/index'

export default class ListIndex extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }

  render() {
    return <Fragment>
      <AfricaComponent />
    </Fragment>;
  }
}
