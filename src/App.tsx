import React, { useState } from "react";

import Categories from "./features/categories/Categories";
import Cats from "./features/cats/Cats";


function App() {
  const [categoryNumber, setCategoryNumber] = useState(2);

  return (
    <>
      <Categories handleCategoryNumber={(catId:number)=>setCategoryNumber(catId)}/>
      <Cats categoryNumber={categoryNumber} />
    </>
  );
}

export default App;
