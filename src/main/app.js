import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'main/redux/modules/auth'
import { push } from 'react-router-redux'
import config from '../config'
import { asyncConnect } from 'redux-connect'
import { Notification } from 'main/components/misc'

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    const promises = []

    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()))
    }

    return Promise.all(promises)
  }
}])
@connect(
  state => ({
    user: state.auth.user,
    locale: state.appState.locale
  }),
  { logout, pushState: push })
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired,
    store: PropTypes.object
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props)
    this.state = {
      locale: 'en'
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      this.props.pushState('/')
    } else if (this.props.user && !nextProps.user) {
      this.props.pushState('/')
    }

    if (this.props.locale !== nextProps.locale) {
      this.props.pushState('?lang=' + nextProps.locale)
    }
  }

  isFullscreen(pathname: ?string): bool {
    let fullscreen = false
    const fullscreenList = [
      '/auth'
    ]

    fullscreenList.map(path => {
      if (pathname.indexOf(path) > -1) {
        fullscreen = true
      }
    })
    return fullscreen
  }

  render() {
    // const {user} = this.props;
    // const { location: { pathname } } = this.props
    // const isFullscreen = this.isFullscreen(pathname)

    return (
      <div className="page__wrapper">
        <Helmet {...config.app.head} />
        <div>
          {this.props.children}
        </div>
        <Notification />
      </div>
    )
  }
}
