/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Tags, Button } from "../../../../components";
import { Box, BodyDetail, HeadDetail, PokemonImage } from "../styled";
import Image from 'next/image';
import AddToList from "./addToList";

export interface Props {
  data: any
}
const HeadLine: React.FC<Props> = ({ data }) => {
  const [showAdd, setShowAdd] = useState(false);
  const firstTypeName = data?.types[0]?.type?.name;
  console.log(data)
  return (
    <>
      <AddToList
        types={firstTypeName}
        showAdd={showAdd}
        setShowAdd={setShowAdd}
        data={data}
      />
      <Button bottom={15} color={firstTypeName} onClick={() => setShowAdd(!showAdd)}>
        Add To My List
      </Button>
      <Box color={firstTypeName}>
        <div>
          <BodyDetail>
            <HeadDetail>
              <h2>{data?.name}</h2>
              <div>
                {data?.types &&
                  data?.types.map((item: any, i: number) => {
                    return (
                      <Tags
                        key={i}
                        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                      >
                        {item.type.name}
                      </Tags>
                    );
                  })}
              </div>
            </HeadDetail>
            <div className="descript">
              <div>
                <span>Height</span>
                <span>{data?.height}</span>
              </div>
              <div>
                <span>Weight</span>
                <span>{data?.weight}</span>
              </div>
            </div>
          </BodyDetail>
          <PokemonImage color={firstTypeName}>
            <img
              src={data?.sprites?.front_default}
              alt="pokemonImage"
            />
          </PokemonImage>
        </div>
      </Box>
    </>
  );
};

export default HeadLine;
