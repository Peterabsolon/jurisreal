import React, { Component, PropTypes } from 'react'
import { notification, selectLanguage } from 'main/redux/modules/appState'
import { connect } from 'react-redux'
import { DemoForm, DemoFormFull } from 'main/containers/forms/samples'
// import { animate } from 'helpers/decorators'

// @animate
@connect(
  () => ({}),
  { notification, selectLanguage })
export default class FormsSample extends Component {

  static propTypes = {
    notification: PropTypes.func,
    selectLanguage: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      formOutput: null
    }
  }

  handleSubmit(model) {
    this.setState({ formOutput: model })
  }

  render() {
    const selectData = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ]

    return (
      <div>
        <h2>Forms</h2>
        <div className="row">
          <div className="col-xs-6">
            <DemoForm
              onSubmit={::this.handleSubmit}
              selectData={selectData}
            />
          </div>
          <div className="col-xs-6">
            {this.state.formOutput && <pre>{JSON.stringify(this.state.formOutput, null, 2)}</pre>}
          </div>
        </div>

        <h3>Data will be sended to second form as initialValues</h3>

        <div className="row">
          <div className="col-xs-6">
            <DemoFormFull
              initialValues={this.state.formOutput}
              onSubmit={::this.handleSubmit}
              selectData={selectData}
            />
          </div>
        </div>
      </div>
    )
  }
}
