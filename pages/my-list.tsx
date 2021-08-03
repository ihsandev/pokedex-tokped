import React from 'react'
import { MyListPokemon } from '../components';
import withApollo from '../configs/apolloClient';

const MyListPokemons = () : any => {
  return <MyListPokemon />
}

export default withApollo({ssr : true})(MyListPokemons);
