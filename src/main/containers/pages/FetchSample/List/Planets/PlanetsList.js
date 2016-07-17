import React, { Component } from 'react'
import PlanetsListItem from './PlanetsListItem'

export default class PlanetsList extends Component {

  static propTypes = {
    data: React.PropTypes.array
  };

  static defaultProps = {};

  render() {
    return (
      <ul>
        {this.props.data.map(item => <PlanetsListItem
          item={item}
          key={item.url}
        />)}
      </ul>
    )
  }
}
