import React, { Fragment,Component } from 'react';
import { Scene, PointLayer } from '@antv/l7';
import { Mapbox, GaodeMap } from '@antv/l7-maps';

export default class Header extends Component {
  componentDidMount() {
    console.log('----Header componentDidMount-----');
    const scene = new Scene({
      id: 'map',
      map: new Mapbox({
        pitch: 0,
        style: 'dark',
        center: [20, -3.69],
        zoom: 2.5
      })
    });

    fetch(
      "https://gw.alipayobjects.com/os/basement_prod/c02f2a20-9cf8-4756-b0ad-a054a7046920.csv"
    )
      .then(res => res.text())
      .then(data => {
        const pointLayer = new PointLayer({})
          .source(data, {
            parser: {
              type: "csv",
              x: "Long",
              y: "Lat"
            }
          })
          .size(0.6)
          .color("#ffa842")
          .style({
            opacity: 1
          });

        scene.addLayer(pointLayer);
      });
  }

  render() {
    return <Fragment>
      <div id="map"></div>
    </Fragment>

  }
}
