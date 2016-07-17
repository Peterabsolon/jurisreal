import React, { Component, PropTypes } from 'react'
import { notification, selectLanguage } from 'main/redux/modules/appState'
import { connect } from 'react-redux'
// import { Button } from 'main/components/misc'
// import { Translate } from 'react-i18nify'
// import { animate } from 'helpers/decorators'

// @animate
@connect(
  () => ({}),
  { notification, selectLanguage }
)

export default class Page extends Component {

  static propTypes = {
    notification: PropTypes.func,
    selectLanguage: PropTypes.func
  }

  render() {
    return (
      <div>
        <nav className="navbar-default navbar-static-side" role="navigation">
          <div className="sidebar-collapse">
            <ul className="nav metismenu">
              <li className="nav-header">
                <div className="dropdown profile-element">
                  <span>
                    <img alt="image" className="img-circle" src={require('main/assets/img/profile_small.jpg')} />
                  </span>
                  <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                    <span className="clear">
                      <span className="block m-t-xs">
                        <strong className="font-bold">David Williams</strong>
                      </span>
                      <span className="text-muted text-xs block">Art Director <b className="caret"></b></span>
                    </span>
                  </a>
                  <ul className="dropdown-menu animated fadeInRight m-t-xs">
                    <li><a href="profile.html">Profile</a></li>
                    <li><a href="contacts.html">Contacts</a></li>
                    <li><a href="mailbox.html">Mailbox</a></li>
                    <li className="divider"></li>
                    <li><a href="login.html">Logout</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
