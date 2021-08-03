import React, { useState } from "react";
import { Modal, Button } from "../../../components";
import Link from 'next/link';
import Image from 'next/image';
import { HeadDetail, BodyDetail } from "./styled";

export interface Props {
  onShow: () => void,
  data: any,
  show: boolean
}
const QuickDetail: React.FC<Props> = ({
  onShow,
  data,
  show,
}) => {
  const [types, setTypes] = useState("");

  return (
    <Modal
      visible={show}
      onClose={onShow}
      color={types}
    >
      <HeadDetail>
        <Image
          height="100%"
          width="100%"
          src={data?.image}
          alt="pokemonImage"
        />
        <h2>{data?.name}</h2>
      </HeadDetail>

      <BodyDetail>
        <div className="descript">
          <div>
            <span>ArtWork</span>
            <span>
            <Image
              height={50}
              width={50}
              src={data?.artwork}
              alt="pokemonImage"
            />
            </span>
          </div>
          <div>
            <span>DreamWorld</span>
            <span>
            <Image
              height={50}
              width={50}
              src={data?.dreamworld}
              alt="pokemonImage"
            />
            </span>
          </div>
          <Link href={`/detail/${data?.name}`}>
            <a>
              <Button color={types}>See Full Detail</Button>
            </a>
          </Link>
        </div>
      </BodyDetail>
    </Modal>
  );
};

export default QuickDetail;
