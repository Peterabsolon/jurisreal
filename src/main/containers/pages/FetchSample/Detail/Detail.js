import React, { Component } from 'react'
import { asyncConnect } from 'redux-connect'
import { connect } from 'react-redux'
import { isLoadedDetail, loadDetail as loadDemoData } from 'main/redux/modules/demo'
import { CircleLoader } from 'main/components/loaders'

import PlanetProfile from './PlanetProfile/PlanetProfile'
// import { animate } from 'helpers/decorators'

@asyncConnect([{
  promise: ({ store: { dispatch, getState }, params }) => {
    const result = !isLoadedDetail(params.detailId, getState()) ? dispatch(loadDemoData(params.detailId)) : null

    return __CLIENT__ ? null : result
  }
}])
// @animate
@connect(
  state => ({
    demo: state.demo
  })
)
export default class FetchSample extends Component {
  static propTypes = {
    demo: React.PropTypes.object,
    routeParams: React.PropTypes.object
  }

  render() {
    const {
      loading,
      detail
    } = this.props.demo

    return (
      <div>
        {loading && <CircleLoader size={50} />}
        {!this.props.demo.error && !loading && detail && <PlanetProfile item={detail[this.props.routeParams.detailId]} />}

        {!loading && this.props.demo.error && this.props.demo.error.detail}
      </div>
    )
  }
}
