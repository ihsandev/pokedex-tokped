import React, { useState, useEffect, useContext } from "react";
import MainLayout from "../../layouts";
import { CardListPokemon, Skeleton } from "../../../components";
import { Total, LoadingMore } from "./styled";
import QuickDetail from "./quickDetail";
import Loading from "./loading";
import { Context } from "../../../context/store";
import { gql, useQuery } from "@apollo/client";

const Pokemon = () => {

  const GET_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
        count
        results {
          id
          url
          name
          image
          artwork
          dreamworld
        }
      }
    }  
  `
  const [state, dispatch] = useContext(Context);
  const perPage = 20;
  const [pokemonList, setPokemonList] = useState<any>([]);
  const [first, setFirst] = useState(perPage);
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const {
    loading, data, fetchMore,
  } = useQuery(GET_POKEMONS, {
    variables: {
      offset: 0,
      limit: first
    } ,
    ssr: true,
    notifyOnNetworkStatusChange: true,
  });

  const handleScroll = () => {
    const element = document.documentElement;
    let size = Math.ceil(window.innerHeight + element.scrollTop);
    if (size === element.offsetHeight && !loading) {
      setFirst(first + perPage); // load more data
      fetchMore({
        variables: {
          offset: first,
          limit: first
        },
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    if (data !== undefined) {
      setPokemonList(data.pokemons);
    }
  }, [data]);

  const handleDetail = (detail:any) => {
    setShowDetail(true);
    setPokemonDetail(detail);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  const filterData = pokemonList?.results && pokemonList?.results.filter((filt: any) =>
    filt.name.toLowerCase().includes(state?.keyword?.toLowerCase())
  );

  const itemPokemons = pokemonList?.results && filterData?.map((item: any) => {
    return (
     <CardListPokemon
       onClick={() => handleDetail(item)}
       key={item.id}
       name={item.name}
       id={item.id}
       src={item.image}
     />
    )
  })

  return (
    <MainLayout>
      {pokemonDetail && (
        <QuickDetail
          data={pokemonDetail}
          onShow={handleCloseDetail}
          show={showDetail}
        />
      )}
      <Total>
        Total Owned:{" "}
        {!loading ? <span>{pokemonList?.count} data</span>
        : <span><Skeleton.Line width={25} /> </span>}
      </Total>
      <div>
        {pokemonList?.results?.length ? itemPokemons : <Loading />}
        {loading && (
          <LoadingMore>
            <Skeleton.Line width={80} height={80} />
            <Skeleton.Line height={20} />
          </LoadingMore>
        )}
      </div>
    </MainLayout>
  );
};

export default Pokemon;
