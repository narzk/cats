import React from "react";
import styled from "styled-components";
import { ICategoryData } from "../../../features/categories/categoriesSlice";
import { IData } from "../../../features/cats/CatsSlice";
import ItemCard from "../../card/ItemCard";

interface ICategoryNav {
    categoriesList: ICategoryData[];
    handleCategoryNumber: (catId:number)=>void
}

  const Button = styled.button`
    padding: 20px 0px;
    border-radius: 36px;
    min-width: 100px;
    margin: 0px 10px;
    text-align: center;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;
    &:active {
      background-color: #fff;
      color: black;
      border: 1px solid black;
    }
    @media (max-width: 768px) {
      display: none;
    }
  `;

  const CategoryTopBar = styled.div`
    display: flex;
    height: 50px;
    padding: 20px 40px;
    width: 100%;
    align-items: center;
    margin: 10px 0px;
    justify-content: center;
    @media (max-width: 768px) {
      display: none;
    }
  `;
function CategoryNav({ categoriesList, handleCategoryNumber }: ICategoryNav) {

  return (
    <CategoryTopBar data-testid="topBar">
      {categoriesList.map((item: ICategoryData) => {
        return (
          <Button  key={item.id} onClick={() => handleCategoryNumber(item.id)} data-testid="button-id">
            {item.name}
          </Button>
        );
      })}
    </CategoryTopBar>
  );
}

export default CategoryNav;
