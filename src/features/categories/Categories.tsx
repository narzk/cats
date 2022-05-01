import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CategoryNav from "../../components/category/categoryForDesktop/CategoryNav";
import CategorySideBar from "../../components/category/categoryForMobile/CategorySideBar";
import ErrorComponent from "../../components/error/ErrorComponent";
import Loading from "../../components/load/Loading";
import { fetchCategories, selectCategoryList, selectStatus } from "./categoriesSlice";

interface Icategory {
  handleCategoryNumber: (catId: number) => void;
}

const Categories = ({ handleCategoryNumber }: Icategory) => {
  const dispatch = useAppDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  const categories = useAppSelector(selectCategoryList);
  const loading = useAppSelector(selectStatus);
  const ref = useRef(false);

  const handleOpenClose = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    if (!ref.current) {
      dispatch(fetchCategories());
      ref.current = true;
    }
  }, []);

  switch (loading) {
    case "loading":
      return <Loading />;
    case "failed":
      return <ErrorComponent />;
    case "succeeded":
      return (
        <>
          <CategorySideBar
            categoriesList={categories}
            handleCategoryNumber={handleCategoryNumber}
            handleOpenClose={handleOpenClose}
            isOpen={openMenu}
          />
          <CategoryNav
            categoriesList={categories}
            handleCategoryNumber={handleCategoryNumber}
          />
        </>
      );
    default:
      return <></>;
  }
};

export default Categories;
