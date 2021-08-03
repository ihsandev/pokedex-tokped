import React from 'react'
import { Pokemon } from '../components';
import withApollo from '../configs/apolloClient';

const Pokemons = () : any => {
  return <Pokemon />
}

export default withApollo({ssr : true})(Pokemons);
