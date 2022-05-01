import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CardContainer from "../../components/layOutContainer/CardContainer";
import ErrorComponent from "../../components/error/ErrorComponent";
import Loading from "../../components/load/Loading";
import LoadMore from "../../components/loadMore/LoadMore";
import {
  clearList,
  fetchCats,
  selectCatsList,
  selectStatus,
  statusType,
} from "./CatsSlice";

interface ICats {
  categoryNumber: number;
}

const Cats = ({ categoryNumber }: ICats) => {
  const [laodingPage, setLoadingPage] = useState(1);

  const dispatch = useAppDispatch();
  const catsList = useAppSelector(selectCatsList);
  const loading: statusType = useAppSelector(selectStatus);
  const pageLimit = 10;

  const ref = useRef(false);
  useEffect(() => {
    if (!ref.current) {
      dispatch(fetchCats({ pageLimit, categoryNumber }));
      ref.current = true;
    }
  }, []);

  useEffect(() => {
    catsList.length > 0 && dispatch(fetchCats({ pageLimit, categoryNumber }));
  }, [laodingPage, categoryNumber, dispatch]);

  useEffect(() => {
    dispatch(clearList());
  }, [categoryNumber, dispatch]);

  switch (loading) {
    case "loading":
      return (
        <>
          <CardContainer listItems={catsList} />
          <Loading />
        </>
      );
    case "failed":
      return <ErrorComponent />;
    case "succeeded":
      return (
        <>
          <CardContainer listItems={catsList} />
          <LoadMore
            handleLoading={() => setLoadingPage((prevLoad) => prevLoad + 1)}
          />
        </>
      );
    default:
      return <></>;
  }
};

export default Cats;
