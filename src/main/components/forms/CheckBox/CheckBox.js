import React, { Component } from 'react'

export default class CheckBox extends Component {

  static propTypes = {
    field: React.PropTypes.object.isRequired,
    label: React.PropTypes.string.isRequired,
    checked: React.PropTypes.any,
    disabled: React.PropTypes.bool,
    htmlLabel: React.PropTypes.bool,
    extendClass: React.PropTypes.string,
    onChange: React.PropTypes.func
  }

  static defaultProps = {
    labelless: false,
    disabled: false,
    checked: false,
    htmlLabel: false,
    extendClass: ''
  }

  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.checked)
    }
    // Override onChange
    this.props.field.onChange(event.target.checked)
  }

  createLabelHtml() {
    return {
      __html: this.props.label
    }
  }

  render() {
    const { label, field, checked, disabled, htmlLabel, extendClass } = this.props

    const isDisabled = disabled ? ' is-disabled' : ''

    return (
      <div className={'form-control--checkbox ' + isDisabled + ' ' + extendClass + (field.error && field.touched ? ' has-error' : '')}>
        <input
          id={field.name}
          {...field}
          type="checkbox"
          checked={checked}
          onChange={this.handleChange}
          disabled={disabled}
        />
        <label htmlFor={field.name} className="control-label">
          {!htmlLabel ?
            <span className="cursor--pointer">{label} </span> :
            <span dangerouslySetInnerHTML={this.createLabelHtml()} />
          }
        </label>
        {field.error && field.touched && <div className="text-danger">{field.error}</div>}
      </div>
    )
  }
}
