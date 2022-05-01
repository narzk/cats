import React from "react";
import styled from "styled-components";

interface ILoadMore{
  handleLoading:()=>void
}
export const FooterContainer=styled.div`
  display: flex;
  height: 50px;
  padding: 10px 20px;
  width: 100%;
  align-items: center;
  margin: 10px 0px;
  justify-content: center;

`
const LoadMoreButton=styled.div`
   padding: 10px 0px;
  border-radius: 36px;
  min-width: 100px;
  margin: 0px 10px;
  text-align: center;
  border: none;
  background-color: #ccc;
  color: black;
  cursor: pointer;
`


function LoadMore({handleLoading}:ILoadMore) {
  return (
    <FooterContainer data-testid="footer">
        <LoadMoreButton onClick={handleLoading} data-testid="loader">LoadMore</LoadMoreButton>
    </FooterContainer>
  );
}

export default LoadMore;