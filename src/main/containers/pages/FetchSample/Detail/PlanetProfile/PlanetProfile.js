import React from 'react'
import { Link } from 'react-router'

const PlanetProfile = ({ item }) => (
  <div className="cursor--pointer" >
    <h2>{item.name}</h2>
    <p><strong>Terrain</strong>: {item.terrain}</p>
    <p><strong>Population</strong>: {item.population}</p>
    <Link to={'/fetch-sample'} className="">Back to list</Link>
  </div>
)

PlanetProfile.propTypes = {
  item: React.PropTypes.object
}

export default PlanetProfile
