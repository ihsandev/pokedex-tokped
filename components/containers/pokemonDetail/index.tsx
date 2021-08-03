import React from "react";
import { useRouter } from 'next/router';
import MainLayout from "../../layouts";
import { More } from "./styled";
import HeadLine from "./partials/headLine";
import MoreDetail from "./partials/moreDetail";
import { gql, useQuery } from "@apollo/client";

const DetailPokemon: React.FC = () => {

  const GET_DETAIL = gql`
    query pokemon($name: String!) {
      pokemon(name: $name) {
        id
        name
        height
        weight
        base_experience
        abilities {
          ability {
            name
          }
        }
        species {
          name
        }
        sprites {
          front_default
        }
        moves {
          move {
            name
          }
        }
        types {
          type {
            name
          }
        }
      }
    }
  `

  const router = useRouter();
  const { id } = router.query;

  const detailPokemon = useQuery(GET_DETAIL, {
    variables: {
      name: id
    },
    notifyOnNetworkStatusChange: true,
  });
  
  // const { types = [], moves = [], name, sprites = {} } = data
  return (
    <MainLayout>
      <>
        <HeadLine data={detailPokemon?.data?.pokemon} />
        <More>
          <MoreDetail data={detailPokemon?.data?.pokemon} />
        </More>
      </>
    </MainLayout>
  );
};

export default DetailPokemon;
