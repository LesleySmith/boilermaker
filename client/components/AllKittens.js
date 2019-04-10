import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const AllKittens = (props) => {
  const { kittens } = props
  if (!kittens || !kittens.length) return <h1>No Kittens</h1>

  const kittenList = kittens.map(kitten => (
    <li key={kitten.id}>
      <Link to={`/kittens/${kitten.id}`}>
        <h1>{kitten.name}</h1>
      </Link>
      <img src={kitten.imageUrl} />
      <h2>My Breed: {kitten.breed}</h2>
      <p>My temperment: {kitten.temperment}</p>
      <p>About me: {kitten.description}</p>
    </li>
  ))
  return (
    <div>
      <ul>{kittenList}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    kittens: state.kittens.kittens
  }
}

export default connect(mapStateToProps)(AllKittens)
