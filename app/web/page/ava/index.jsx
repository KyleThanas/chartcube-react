import React, { Fragment, Component } from 'react';
import { autoChart } from '@antv/chart-advisor';

export default class ListIndex extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');

    const container = document.getElementById('mountNode');

    const data = [
      {field1: 'a', field2: '100'},
      {field1: 'b', field2: '300'},
      {field1: 'c', field2: '800'}
    ];

    autoChart(container, data, {toolbar: true, development: true});
  }

  render() {
    return <Fragment>
      <div id="mountNode"></div>
    </Fragment>;
  }
}
