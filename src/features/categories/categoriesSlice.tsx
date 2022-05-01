import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import { BASE_API } from '../../api/api';


export interface ICategoryData{
  id:number
  name:string
}

interface CategoryState {
    categoryList: ICategoryData[]
    status: 'loading'|'failed'|'succeeded'
    error?:string
  }
  
  const initialState: CategoryState = {
    categoryList:[],
    status: 'loading',
    error:""

  };

  export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const response = await axios.get(`${BASE_API}/categories`)
    return response.data
  })

  const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder
        .addCase(fetchCategories.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
          state.status = 'succeeded'
          state.categoryList = action.payload
        })
        .addCase(fetchCategories.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }
  })
export const selectCategoryList= (state: any) => state.categoriesSlice.categoryList
export const selectStatus=(state:any)=>state.categoriesSlice.status
export default categoriesSlice.reducer;


  