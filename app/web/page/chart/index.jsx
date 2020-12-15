import React, {Fragment, Component } from 'react';
import BarComponent from '../../component/ChartG2/Bar/index'
import PieComponent from '../../component/ChartG2/Pie/index'
import TreeComponent from '../../component/ChartG6/Tree/index'
import LineComponent from '../../component/ChartG2Plot/Line/index'
import FructhermanComponent from '../../component/ChartG6/Fructherman/index'
import FishEyeComponent from '../../component/ChartG6/FishEye/index'
import AppleWatchComponent from '../../component/ChartF2/AppleWatch/index'
import FunnelComponent from '../../component/ChartF2/Funnel/index'
import RadarComponent from '../../component/ChartF2/Radar/index'

export default class ListIndex extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }
  // <h1>G2Plot:开箱即用、易于配置、极致体验的通用图表库。</h1>
  // <LineComponent />
  //
  //


  render() {
    return <Fragment>
      <h1>G2:数据驱动，高度易用，可扩展的可视化图形语法。</h1>
      <PieComponent />
      <BarComponent />
      <h1>F2:专注于移动端的可视化解决方案，兼容 H5/小程序/Weex 等多端环境。</h1>
      <AppleWatchComponent />
      <RadarComponent />
      <h1>G6:便捷的关系数据可视化引擎与图分析工具。</h1>
      <TreeComponent />
      <FructhermanComponent />
      <FishEyeComponent />
    </Fragment>;
  }
}
