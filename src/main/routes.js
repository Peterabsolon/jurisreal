import React from 'react'
import { IndexRoute, Route } from 'react-router'
import { isLoaded as isAuthLoaded, load as loadAuth } from 'main/redux/modules/auth'
import App from './app'

import * as Page from 'main/containers/pages'
import * as Auth from 'main/containers/auth'
import { I18n } from 'react-i18nify'
import translations from 'main/constants/i18n'


export default store => {
  const requireLogin = (nextState, replace, cb) => {
    function checkAuth() {
      const { auth: { user } } = store.getState()

      if (!user) {
        // oops, not logged in, so can't be here!
        replace('/')
      }
      cb()
    }

    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(checkAuth)
    } else {
      checkAuth()
    }
  }

  I18n.loadTranslations(translations)
  let selectLanguage =
    store.getState().routing &&
    store.getState().routing.location &&
    store.getState().routing.location.query &&
    store.getState().routing.location.query.lang ||
    store.getState().appState.locale

  switch (selectLanguage) {
    case 'en': break
    case 'de': break
    case 'cs': break
    default:
      selectLanguage = store.getState().appState.locale
  }

  I18n.setLocale(selectLanguage)

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Page.Home} />

      <Route path="auth">
        <Route path="login" component={Auth.Login} />
        <Route path="sign-up" component={Auth.SignUp} />
      </Route>

      <Route path="forms-sample" component={Page.FormsSample} />

      <Route path="fetch-sample" component={Page.FetchSample.List} />
      <Route path="fetch-sample/:detailId" component={Page.FetchSample.Detail} />
      <Route path="login" params={{ fullscreen: true }} component={Auth.Login} />
      <Route path="test" onEnter={requireLogin} component={Page.Home} />
      <Route path="*" component={Page.NotFound} status={404} />
    </Route>
  )
}
