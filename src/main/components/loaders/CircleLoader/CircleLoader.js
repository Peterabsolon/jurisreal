import React from 'react'

const CircleLoader = ({ size, extendClass }) => (
  <span className={'circle-loader-wrap ' + extendClass}>
    <svg className="circle-loader" width={size} height={size}>
      <circle cx={size / 2} cy={size / 2} r={size / 4} />
    </svg>
  </span>
)

CircleLoader.propTypes = {
  size: React.PropTypes.number,
  extendClass: React.PropTypes.string
}

CircleLoader.defaultProps = {
  size: 50
}

export default CircleLoader
