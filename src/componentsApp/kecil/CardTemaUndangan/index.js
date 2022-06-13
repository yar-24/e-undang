import React from 'react'
import styled from 'styled-components'
import { Background2 } from '../../../config/Tema/tema 1/assets';
import { Iphone } from '../../../img';
import { mobile } from '../../../responsive';
import { colors, fonts } from '../../../utils';

const Container = styled.div``

const WrapperTema = styled.div`
  width: 250px;
  height: 390px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  -webkit-box-shadow: 0px 14px 21px -7px #000000;
  box-shadow: 0px 14px 21px -7px #000000;
  cursor: pointer;
  margin: 20px ;
  ${mobile({width:"120px", height: "200px", marginBottom: "40px", margin: "10px 20px 40px"})}
  `;

const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  :hover {
    background-color: ${colors.btnPink} ;
  }
`;

const ImageTema = styled.img`
  width: 250px;
  height: 350px;
  z-index: 2;

  ${mobile({width:"120px", height: "200px"})}
`;

const ImageHp = styled.img`
  position: absolute;
  ${mobile({width:"100px", height: "150px", zIndex: 3})}
`;

const Tema = styled.p`
  margin-left: 20px;
  font-family: ${fonts.josefinSans};
  font-weight: bold;
  ${mobile({fontSize: "13px", marginLeft: "5px"})}
`;


const CardTemaUndangan = ({namaTema, style}) => {
  return (
    <Container>
        <WrapperTema>
          <ContainerImage style={style} >
            <ImageTema src={Background2} />
            <ImageHp src={Iphone} />
          </ContainerImage>
          <Tema>{namaTema}</Tema>
        </WrapperTema>
    </Container>
  )
}

export default CardTemaUndangan