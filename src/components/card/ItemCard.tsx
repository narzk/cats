import React from "react";
import styled from "styled-components";

const Image = styled.img`
  padding: 0;
  border-radius: 16px;
  grid-row-end: span 26;
  max-width: 200px;
  max-height: 200px;

  position: absolute;
  overflow: hidden;
  cursor: zoom-in;
  z-index: 1111;
  
  &:hover{
    opacity: 0.5;
  }
  `;
const Container=styled.div`
margin: 15px 10px;
padding: 0;
border-radius: 16px;
grid-row-end: span 26;
max-height: 200px;
max-width: 200px;
position: relative;
background-color: #F7F5F2;
  &:hover{

    /* background-color: #BFBFBF; */
  }
`

function ItemCard({ src }:any) {

  return (
    <Container data-testid="card">
      <Image src={src}  data-testid="image"/>
    </Container>
  );
}

export default ItemCard;