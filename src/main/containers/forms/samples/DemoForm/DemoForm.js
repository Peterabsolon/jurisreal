import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import demoValidation from './DemoValidation'
import { Input, Select, CheckBox } from 'main/components/forms'
import { Button } from 'main/components/misc'

@reduxForm({
  form: 'demoFull',
  fields: ['firstName', 'lastName', 'selection', 'checkbox'],
  validate: demoValidation
})
export default class DemoForm extends Component {
  static propTypes = {
    active: PropTypes.string,
    asyncValidating: PropTypes.bool.isRequired,
    fields: PropTypes.object.isRequired,
    dirty: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
    selectData: PropTypes.object
  }

  static defaultProps = {
    loading: false,
    selectData: {}
  }

  render() {
    const {
      fields: {
        firstName,
        lastName,
        selection,
        checkbox
      },
      handleSubmit,
      selectData
    } = this.props

    return (
      <div>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <Input field={firstName} label="firstName" />
          <Input field={lastName} label="lastName" />
          <Select field={selection} label="Select" options={selectData} />
          <CheckBox
            field={checkbox}
            checked={checkbox.checked}
            label="CheckBox"
          />

          <Button
            type="submit"
            className="btn btn--primary"
            onClick={handleSubmit}
            isLoading={this.props.loading}
          >
            Submit
          </Button>
        </form>
      </div>
    )
  }
}
