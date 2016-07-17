import React, { PropTypes } from 'react'

const Input = ({ field, label, type, disabled = false }) =>
  <div className={'form__group' + (field.error && field.touched ? ' has-error' : '')}>
    <label htmlFor={field.name} className="form__label" >{label}</label>
    <div className={'form__input-wrapper '}>
      <input type={type || 'text'} className="form__control" id={field.name} {...field} disabled={disabled} />
      {field.error && field.touched && <div className="form__error">{field.error}</div>}
    </div>
  </div>

Input.propTypes = {
  field: PropTypes.object,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string
}

export default Input
