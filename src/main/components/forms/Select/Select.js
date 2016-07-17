import React, { Component } from 'react'
import ReactSelect from 'react-select'

export default class Select extends Component {

  static propTypes = {
    field: React.PropTypes.object.isRequired,
    onSelectChange: React.PropTypes.func,
    options: React.PropTypes.array,
    label: React.PropTypes.string.isRequired,
    labelless: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string
  }

  static defaultProps = {
    field: {
      error: '',
      touched: ''
    },
    placeholder: '',
    labelless: false
  }

  constructor(props) {
    super(props)
    this.state = {
      hasFocus: '',
      element: null
    }
  }

  componentDidMount() {

  }

  handleChange(val) {
    this.props.field.onChange(val)

    if (this.props.onSelectChange) {
      this.props.onSelectChange(val)
    }
  }

  handleFocus() {
    this.setState({
      hasFocus: 'has-focus'
    })
    this.props.field.onFocus()
  }

  handleBlur() {
    this.setState({
      hasFocus: ''
    })
    this.props.field.onBlur()
  }

  render() {
    const {
      field,
      label,
      placeholder,
      disabled
    } = this.props

    const srClass = (this.props.labelless) ? 'sr-only' : ''
    const hasSuccess = (field.valid && field.touched) ? 'has-success' : ''
    const hasError = (field.error && field.touched) ? 'has-error' : ''
    const isOptional = !field.error && field.pristine && !field.defaultValue && !disabled
    const isOptionalClass = isOptional ? ' is-optional is-optional--select' : ''

    return (
      <div className={'form-group ' + hasError + ' ' + hasSuccess + ' ' + this.state.hasFocus + isOptionalClass}>
        <label htmlFor={field.name} className={'control-label ' + srClass}>{label}</label>
        <ReactSelect
          value={field.value || ''}
          className="form-control--select"
          options={this.props.options}
          onChange={val => this.handleChange(val)}
          placeholder={placeholder}
          {...this.props}
          onFocus={() => this.handleFocus()}
          onBlur={() => this.handleBlur()}
        />
        {field.error && field.touched && <div className="text-danger">{field.error}</div>}
        {isOptional && <div className="text-optional">Optional</div>}
      </div>
    )
  }
}
