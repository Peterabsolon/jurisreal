import React, { Component } from 'react'
import { asyncConnect } from 'redux-connect'
import { connect } from 'react-redux'
// import { isLoaded, load as loadDemoData } from 'main/redux/modules/demo'
import { loadContacts } from 'main/redux/modules/contacts'
// import { CircleLoader } from 'main/components/loaders'

// import PlanetsList from './Planets/PlanetsList'
// import { animate } from 'helpers/decorators'

@asyncConnect([{
  promise: ({ store: { dispatch } }) => {
    // const result = !isLoaded(getState()) ? dispatch(loadDemoData()) : null

    const result = dispatch(loadContacts())

    return __CLIENT__ ? null : result
  }
}])
// @animate
@connect(
  state => ({
    // demo: state.demo
    contacts: state.contacts
  })
)
export default class FetchSample extends Component {
  static propTypes = {
    contacts: React.PropTypes.object
  }

  render() {
    // const {
    //   loading,
    //   data
    // } = this.props.demo

    console.log('yo', this.props.contacts)

    return (
      <div>
        Yo

        {/* <h2>Planets</h2>
        {loading && <CircleLoader size={50} />}

        {data && !data.error && !loading && <PlanetsList data={data.results} />} */}
      </div>
    )
  }
}
