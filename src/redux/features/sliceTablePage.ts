import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Filter } from '../../types/types';


const initialState = {
    filter: {
        product: 'all',
        status: 'all'
    }
};
  
export const TableSlice = createSlice({
    name: 'tablePage',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<Filter>) => {
            state.filter = action.payload;
        }
    }
})

export const { setFilter } = TableSlice.actions;
export const state = (state: RootState) => state;

export default TableSlice.reducer;