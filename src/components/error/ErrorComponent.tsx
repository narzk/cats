import React from "react";
import { FooterContainer } from "../loadMore/LoadMore";

function ErrorComponent({errorMessage="NetWork Error :( "}) {
  return (
    <FooterContainer data-testid="footer">
     {errorMessage}   
    </FooterContainer>
  );
}

export default ErrorComponent;
