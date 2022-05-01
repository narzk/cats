import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_API } from "../../api/api";
import { ICategoryData } from "../categories/categoriesSlice";

export type statusType = "loading" | "failed" | "succeeded";

export interface IData {
  breeds: [];
  categories: ICategoryData[];
  height: number;
  id: string;
  url: string;
  width: number;
}

interface CatsState {
  catsList: IData[];
  status: statusType;
  error?: string;
}
interface IFetchCats {
  pageLimit: number;
  categoryNumber: number;
}

const initialState: CatsState = {
  catsList: [],
  status: "loading",
  error: "",
};
export const fetchCats = createAsyncThunk<IData, IFetchCats>(
  "cats/fetchCats",
  async ({ pageLimit = 10, categoryNumber }) => {
    const response = await axios.get(
      `${BASE_API}/images/search?limit=${pageLimit}&category_ids=${categoryNumber}`
    );
    return response.data;
  }
);

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    clearList(state) {
      state.catsList = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCats.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.catsList = state.catsList.concat(action.payload);
      })
      .addCase(fetchCats.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { clearList } = catsSlice.actions;

export const selectCatsList = (state: any) => state.catsSlice.catsList;
export const selectStatus = (state: any) => state.catsSlice.status;

export default catsSlice.reducer;
