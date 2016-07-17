import React from 'react'
import { Link } from 'react-router'

const PlanetsListItem = ({ item }) => (
  <li className="cursor--pointer" >
    <Link to={'/fetch-sample/' + item.url.slice(0, -1).slice(28)} className="" activeClassName="navbar__link--active">{item.name}</Link>
  </li>
)

PlanetsListItem.propTypes = {
  item: React.PropTypes.object
}

export default PlanetsListItem
