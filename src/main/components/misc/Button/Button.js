import React, { PropTypes } from 'react'
import { CircleLoader } from 'main/components/loaders'

const Button = ({ className, isLoading = false, onClick, children, type = 'submit' }) => (
  <button type={type} className={className} onClick={onClick} disabled={isLoading}>
    {!isLoading ? children : <CircleLoader size={26} />}
  </button>
)

Button.propTypes = {
  className: PropTypes.string,

  /**
   * display CircleLoader icon
   */
  isLoading: PropTypes.bool,

  /**
   * handle Click event
   */
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  type: PropTypes.string
}

Button.defaultProps = {
  className: 'btn',
  type: 'submit',
  onClick: () => {},
  isLoading: false
}

export default Button
