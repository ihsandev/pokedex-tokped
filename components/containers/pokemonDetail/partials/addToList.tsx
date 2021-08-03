import React, { useState } from "react";
import { WrapperAdd, PokemonImage, Input } from "../styled";
import { useRouter } from "next/router";
import Image from 'next/image';
import { Modal, Button } from "../../../../components";

export interface Props {
  showAdd?: any;
  types?: string;
  setShowAdd?: any;
  name?: string;
  data: any;
}

const AddToList: React.FC<Props> = ({ showAdd, types, setShowAdd, data }) => {
  const router = useRouter();
  const [nickName, setNickName] = useState("");

  const handleAdd = () => {
    const value = {
      name: name,
      nickName: nickName,
      image: data?.sprites?.front_default
    };

    if (localStorage.getItem("list") === null) {
      const list = [];
      list.push(value);
      localStorage.setItem("list", JSON.stringify(list));
    } else {
      const storage: any = localStorage.getItem("list");
      const list = JSON.parse(storage);
      list.push(value);
      localStorage.setItem("list", JSON.stringify(list));
    }
    setShowAdd(false);
    router.push("/my-list");
  };

  return (
    <Modal
      visible={showAdd}
      onClose={() => setShowAdd(false)}
      color={types}
    >
      <WrapperAdd>
        <PokemonImage>
          <Image
            height="100%"
            width="100%"
            src={data?.sprites?.front_default}
            alt="pokemonImage"
          />
        </PokemonImage>
        <Input
          placeholder="Input Your Nickname"
          onChange={(e: any) => setNickName(e.target.value)}
        />
        <Button onClick={handleAdd} top={20}>
          Add Pokemon
        </Button>
      </WrapperAdd>
    </Modal>
  );
};

export default AddToList;
