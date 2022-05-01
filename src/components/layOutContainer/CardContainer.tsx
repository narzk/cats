import React from "react";
import styled from "styled-components";
import { IData } from "../../features/cats/CatsSlice";
import ItemCard from "../card/ItemCard";

interface ICardContainer {
  listItems: IData[];
}

  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    margin: 0px;
    padding: 0px;
    grid-auto-rows: 5px;
    justify-content: center;
    grid-gap: 4px;
  `;
function CardContainer({ listItems }: ICardContainer) {

  return (
    <Container data-testid="container">
      {listItems.map((item: any) => {
        return <ItemCard src={item.url} />;
      })}
    </Container>
  );
}

export default CardContainer;
