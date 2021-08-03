import React from 'react'
import { PokemonDetail } from '../../components';
import withApollo from '../../configs/apolloClient';

const PokemonDetails = () : any => {
  return <PokemonDetail />
}

export default withApollo({ssr : true})(PokemonDetails);
