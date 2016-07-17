import React, { Component, PropTypes } from 'react'
import { notification, selectLanguage } from 'main/redux/modules/appState'
import { connect } from 'react-redux'
// import { Button } from 'main/components/misc'
// import { Translate } from 'react-i18nify'
// import { animate } from 'helpers/decorators'

// @animate
@connect(
  () => ({}),
  { notification, selectLanguage })
export default class Home extends Component {

  static propTypes = {
    notification: PropTypes.func,
    selectLanguage: PropTypes.func
  }

  render() {
    return (
      <div>
        Yo
      </div>
    )
  }
}
