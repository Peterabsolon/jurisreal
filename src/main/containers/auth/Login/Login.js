import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as authActions from 'main/redux/modules/auth'
import { notification } from 'main/redux/modules/appState'
import { Link } from 'react-router'
import { Login as LoginForm } from 'main/containers/forms/auth'

@connect(
  state => ({ auth: state.auth }),
  { ...authActions, notification })
export default class Login extends Component {
  static propTypes = {
    auth: PropTypes.object,
    saveUser: PropTypes.func,
    login: PropTypes.func,
    logout: PropTypes.func,
    notification: PropTypes.func
  }

  componentDidMount() {
  }

  handleSubmit(model) {
    console.log(model)
    this.props.notification('Check console')
  }

  render() {
    const { auth, logout } = this.props

    return (
      <div className="container">
        <div className="wrapper--auth">
          <Link to="/">STRV Template</Link>
          <br />
          <div className="box box--white">
            <h1 className="beta">Login</h1>
            {!auth.user &&
              <div>
                <LoginForm onSubmit={::this.handleSubmit} loading={auth.loading} />
                <p>Don’t have an account? <Link to="/auth/sign-up">Sign up</Link>.</p>
              </div>
            }
            {auth.user &&
              <div>
                <p>You are logged as {auth.user.name}.</p>

                <div>
                  <button className="btn btn-danger" onClick={logout}><i className="fa fa-sign-out" />{' '}Logout</button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}
