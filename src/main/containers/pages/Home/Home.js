import React, { Component, PropTypes } from 'react'
import { notification, selectLanguage } from 'main/redux/modules/appState'
import { connect } from 'react-redux'
import { Button } from 'main/components/misc'
import { Translate } from 'react-i18nify'
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
        <h2><Translate value="page.home.titleGrid" /></h2>
        <div className="row">
          <div className="col-xs-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nemo possimus nostrum doloremque odit unde, officia debitis aspernatur ab voluptatibus animi earum facilis ad laborum impedit cumque libero eveniet dicta.</div>
          <div className="col-xs-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati eveniet debitis asperiores quibusdam error inventore dignissimos, ex porro iste quod officia temporibus. Reprehenderit dolore est consequuntur magni, tempora sed autem.</div>
        </div>
        <br />
        <div className="row">
          <div className="col-xs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque atque quasi ipsum eligendi in deserunt neque minima, natus officia. Id alias, ipsa quasi rem aspernatur harum. Dolore vero, molestiae dolor?</div>
          <div className="col-xs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus nesciunt dicta mollitia fugit ab explicabo fugiat, cumque quidem hic voluptatibus ipsum natus, quaerat itaque animi consequatur amet fuga corporis.</div>
          <div className="col-xs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti error hic atque, quod optio esse cumque culpa eius, doloribus corporis, inventore iure aliquam fuga, distinctio! Et ipsam, ut corporis recusandae.</div>
        </div>

        <h2><Translate value="page.home.titleIconFont" /></h2>
        <ul>
          <li><span className="ico ico--facebook"><span className="sr-only">Facebook</span></span></li>
          <li><span className="ico ico--twitter"><span className="sr-only">Twitter</span></span></li>
        </ul>

        <h2><Translate value="page.home.titleNotification" /></h2>
        <ul className="list list--inline">
          <li className="list__item"><Button type="button" className="btn btn--success" onClick={() => this.props.notification('Success message', 'success')} >Success</Button></li>
          <li className="list__item"><Button type="button" className="btn btn--info" onClick={() => this.props.notification('Info message')} >Info</Button></li>
          <li className="list__item"><Button type="button" className="btn btn--error" onClick={() => this.props.notification('Error message', 'error')} >Error</Button></li>
        </ul>

        <h2><Translate value="page.home.titleIntl" /></h2>
        <ul className="list list--inline">
          <li className="list__item"><Button type="button" className="btn btn--success" onClick={() => this.props.selectLanguage('cs')} >CZ</Button></li>
          <li className="list__item"><Button type="button" className="btn btn--success" onClick={() => this.props.selectLanguage('en')} >EN</Button></li>
          <li className="list__item"><Button type="button" className="btn btn--success" onClick={() => this.props.selectLanguage('de')} >DE</Button></li>
        </ul>
      </div>
    )
  }
}
