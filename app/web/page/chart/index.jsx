import React, { Fragment, Component } from 'react'
import G2PieComponent from '@component/ChartG2/Pie/index'
import G2BarComponent from '@component/ChartG2/Bar/index'
import G2PlotLineComponent from '@component/ChartG2Plot/Line/index'
import G2PlotTrendComponent from '@component/ChartG2Plot/Trend/index'
import G2FunnelComponent from '@component/ChartG2Plot/Funnel/index'
import G6TreeComponent from '@component/ChartG6/Tree/index'
import G6FructhermanComponent from '@component/ChartG6/Fructherman/index'
import G6FishEyeComponent from '@component/ChartG6/FishEye/index'
import F2AppleWatchComponent from '@component/ChartF2/AppleWatch/index'
import F2FunnelComponent from '@component/ChartF2/Funnel/index'
import F2RadarComponent from '@component/ChartF2/Radar/index'

export default class ListIndex extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----')
  }
  // <h1>G2Plot:开箱即用、易于配置、极致体验的通用图表库。</h1>
  // <LineComponent />
  //
  //

  render() {
    return (
      <Fragment>
        <h1>G2:数据驱动，高度易用，可扩展的可视化图形语法。</h1>
        <G2PieComponent />
        <G2BarComponent />
        <h1>
          F2:专注于移动端的可视化解决方案，兼容 H5/小程序/Weex 等多端环境。
        </h1>
        <F2AppleWatchComponent />
        <F2RadarComponent />
        <h1>G6:便捷的关系数据可视化引擎与图分析工具。</h1>
        <G6TreeComponent />
        <G6FructhermanComponent />
        <G6FishEyeComponent />
        <h1>G2Plot:便捷的关系数据可视化引擎与图分析工具。</h1>
        <G2PlotTrendComponent />
        <G2FunnelComponent />
      </Fragment>
    )
  }
}
