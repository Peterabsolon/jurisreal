import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom/server'
import serialize from 'serialize-javascript'
import Helmet from 'react-helmet'

export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object
  };

  render() {
    const { assets, component, store } = this.props
    const content = component ? ReactDOM.renderToString(component) : ''
    const head = Helmet.rewind()

    return (
      <html lang="en-us">
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}

          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" type="text/css" href="/dist/iconfont.css" />
          {Object.keys(assets.styles).map((style, key) =>
            <link href={assets.styles[style]} key={key} media="screen, projection"
              rel="stylesheet" type="text/css" charSet="UTF-8"
            />
          )}

        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
          <script dangerouslySetInnerHTML={{ __html: `window.__data=${serialize(store.getState())};` }} charSet="UTF-8" />
        </body>
        <script src="https://code.jquery.com/jquery-2.2.4.min.js" />
        <script src={assets.javascript.main} charSet="UTF-8" />
        <script src="/dist/vendor/inspinia.js" type="text/javascript" />
        <script src="/dist/vendor/bootstrap.min.js" type="text/javascript" />
        <script src="/dist/vendor/plugins/metisMenu/jquery.metisMenu.js" type="text/javascript" />
        <script src="/dist/vendor/plugins/slimscroll/jquery.slimscroll.min.js" type="text/javascript" />
        <script src="/dist/vendor/plugins/flot/jquery.flot.js" type="text/javascript" />
        <script src="/dist/vendor/plugins/flot/jquery.flot.tooltip.min.js" type="text/javascript" />
        <script src="/dist/vendor/plugins/flot/jquery.flot.spline.js" type="text/javascript" />
        <script src="/dist/vendor/plugins/flot/jquery.flot.resize.js" type="text/javascript" />
        <script src="/dist/vendor/plugins/flot/jquery.flot.pie.js" type="text/javascript" />
        <script src="/dist/vendor/plugins/peity/jquery.peity.min.js" type="text/javascript" />
        <script src="/dist/vendor/inspinia.js" type="text/javascript" />
        <script src="/dist/vendor/plugins/pace/pace.min.js" type="text/javascript" />
        <script src="/dist/vendor/plugins/jquery-ui/jquery-ui.min.js" type="text/javascript" />
        <script src="/dist/vendor/plugins/gritter/jquery.gritter.min.js" type="text/javascript" />
        <script src="/dist/vendor/plugins/sparkline/jquery.sparkline.min.js" type="text/javascript" />
        <script src="/dist/vendor/plugins/chartJs/Chart.min.js" type="text/javascript" />
        <script src="/dist/vendor/plugins/toastr/toastr.min.js" type="text/javascript" />
      </html>
    )
  }
}
