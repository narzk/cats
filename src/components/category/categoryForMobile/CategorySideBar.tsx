import React from "react";
import styled from "styled-components";
import { ICategoryData } from "../../../features/categories/categoriesSlice";
import { IData } from "../../../features/cats/CatsSlice";
import ItemCard from "../../card/ItemCard";

interface ICategorySideBar {
    categoriesList: ICategoryData[];
    handleCategoryNumber: (catId:number)=>void
    handleOpenClose:()=>void
    isOpen:boolean
}
interface Iresponsive {
    open: boolean;
  }
  interface IHumbergerMenu {
    handelSideMenu: () => void;
  }


const HumbergerButton = styled.div`
  border: none;
  padding: 24px 0px 0px 24px;
  & > div {
    width: 20px;
    height: 2px;
    background-color: black;
    margin-bottom: 5px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

    const CategoryMenuItem = styled.div`
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
    padding: 10px 0px;
  
    @media (min-width: 768px) {
      display: none;
    }
  `;
  
  const SideBarMenu = styled.ul<Iresponsive>`
    width: 50%;
    height: 100vh;
    background-color: white;
    border-right: 2px solid #ccc;
    position: absolute;
    top: 55px;
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    padding: 70px 20px;
    align-items: center;
    z-index: 99999999;
    margin-top: 0;
    & > i {
      margin-bottom: 20px;
      border-bottom: 2px solid #ccc;
    }
  
    @media (min-width: 768px) {
      display: none;
    }
  `;


const HumbergerMenu = ({ handelSideMenu }: IHumbergerMenu) => (
    <div onClick={handelSideMenu}>
      <HumbergerButton>
        <div></div>
        <div></div>
        <div></div>
      </HumbergerButton>
    </div>
  );
function CategorySideBar({ categoriesList, handleCategoryNumber,handleOpenClose, isOpen }: ICategorySideBar) {
  return (
    <>
    <HumbergerMenu handelSideMenu={handleOpenClose} />
    <SideBarMenu open={isOpen} data-testid="sideBar">
      {categoriesList.map((item: any) => {
        return (
          <CategoryMenuItem
            onClick={() => {
              handleOpenClose();
              handleCategoryNumber(item.id);
            }}
            data-testid="item-id"
          >
            {item.name}
          </CategoryMenuItem>
        );
      })}
    </SideBarMenu>
  </>
  );
}

export default CategorySideBar;
