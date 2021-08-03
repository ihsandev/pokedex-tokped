import React from "react";
import { Tags } from "../../../../components";
import { Moredetail, TitleMore, Moves } from "../styled";

export interface Props {
  data: any
}
const MoreDetail: React.FC<Props> = ({ data }) => {
  const firstTypeName = data?.types[0]?.type?.name;
  return (
    <>
      <TitleMore>More Information</TitleMore>
      <Moredetail>
        <div>
          <span>Base Experience</span>
          <span>{data?.base_experience}</span>
        </div>
        <div className="abilities">
          <span>Abilities</span>
          <div>
            {data?.abilities &&
              data?.abilities.map((item: any, i: number) => {
                return (
                  <Tags color={firstTypeName} key={i}>
                    {item.ability.name}
                  </Tags>
                );
              })}
          </div>
        </div>
        <div>
          <span>Types</span>
          {data?.types &&
            data?.types.map((item: any, i: number) => {
              return (
                <Tags key={i} color={item.type.name}>
                  {item.type.name}
                </Tags>
              );
            })}
        </div>
        <div className="moves">
          <span>Moves</span>
          <Moves>
            {data?.moves &&
              data?.moves.map((item: any, i: number) => {
                return (
                  <Tags key={i} color={firstTypeName}>
                    {item.move.name}
                  </Tags>
                );
              })}
          </Moves>
        </div>
      </Moredetail>
    </>
  );
};

export default MoreDetail;
