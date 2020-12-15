import React, { Fragment,Component } from 'react';

export default class Header extends Component {
  componentDidMount() {
    console.log('----Header componentDidMount-----');

  }

  render() {
    return <Fragment>
      <div id="container"></div>
    </Fragment>

  }
}
