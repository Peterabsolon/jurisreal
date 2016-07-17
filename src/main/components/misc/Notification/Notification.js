import React, { Component } from 'react'
import { connect } from 'react-redux'
import { notification } from 'main/redux/modules/appState'
import NotificationSystem from 'react-notification-system'

@connect(state => ({
  appState: state.appState
}))
export default class Notification extends Component {
  static propTypes = {
    appState: React.PropTypes.object,
    dispatch: React.PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {}
    this.notify = null
  }

  componentDidMount() {
    this.notify = this.refs.notificationSystem
  }

  componentWillReceiveProps(nextProps) {
    const { message, level, active } = nextProps.appState.notification

    // return if notification has not been set as active
    if (!active) {
      return
    }

    this.notify.addNotification({
      message,
      level,
      position: 'tc',
      autoDismiss: 4,
      onRemove: this.handleRemove()
    })
  }

  handleRemove() {
    this.props.dispatch(notification('', '', false))
  }

  render() {
    return (
      <NotificationSystem ref="notificationSystem" />
    )
  }
}

