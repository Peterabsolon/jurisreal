import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as authActions from 'main/redux/modules/auth'
import { Link } from 'react-router'
import { SignUp as SignUpForm } from 'main/containers/forms/auth'
import { push } from 'react-router-redux'
import { notification } from 'main/redux/modules/appState'

@connect(
  state => ({ auth: state.auth }),
  { ...authActions, pushState: push, notification })
export default class SignUp extends Component {
  static propTypes = {
    auth: PropTypes.object,
    login: PropTypes.func,
    signUp: PropTypes.func,
    logout: PropTypes.func,
    pushState: PropTypes.func,
    notification: PropTypes.func
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
            <h1 className="alpha">Sign Up</h1>
            {!auth.user &&
              <div>
                <SignUpForm onSubmit={::this.handleSubmit} loading={auth.loading} />
                <p>Already have an account? <Link to="/auth/login">Log in</Link>.</p>
              </div>
            }
            {auth.user &&
              <div>
                <p>You are currently logged in as {auth.user.name}.</p>

                <div>
                  <button className="btn btn-danger" onClick={logout}><i className="fa fa-sign-out" />{' '}Log Out</button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}
