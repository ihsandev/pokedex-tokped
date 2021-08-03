import React, { useContext } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Context } from './../../context/store'
import { HeaderStyle, Nav, Brand, Container, Search } from "./styled";

const Header: React.FC = () => {
  const [state, dispatch] = useContext(Context);
  return (
      <HeaderStyle>
        <Container>
          <Nav>
            <Link href="/">
              <a>
                <Brand>
                  <Image height={34} width="100%" src="/pokedex.png" alt="logo_pokedex" />
                </Brand>
              </a>
            </Link>
            <Search>
              <input
                placeholder="Search pokemon.."
                onChange={(e: any) => dispatch({type: 'SET_KEYWORD', payload: e.target.value})}
              />
            </Search>
          </Nav>
        </Container>
      </HeaderStyle>
    );
}


export default Header;
