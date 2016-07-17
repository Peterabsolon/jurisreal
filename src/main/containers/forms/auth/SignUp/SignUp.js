import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import signUpValidation from './SignUpValidation'
import { Input } from 'main/components/forms'
import { Button } from 'main/components/misc'

@reduxForm({
  form: 'survey',
  fields: ['firstName', 'lastName', 'email', 'password'],
  validate: signUpValidation
})
export default class FormSignUp extends Component {
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
    loading: PropTypes.bool
  }

  static defaultProps = {
    loading: false
  }

  render() {
    const {
      fields: {
        firstName,
        lastName,
        email,
        password
      },
      handleSubmit
    } = this.props

    return (
      <div>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <Input field={firstName} label="First Name" />
          <Input field={lastName} label="Last Name" />
          <Input field={email} label="E-mail" />
          <Input field={password} label="Password" type="password" />

          <Button
            type="submit"
            className="btn btn--primary"
            onClick={handleSubmit}
            isLoading={this.props.loading}
          >
            Create Account
          </Button>
        </form>
      </div>
    )
  }
}
