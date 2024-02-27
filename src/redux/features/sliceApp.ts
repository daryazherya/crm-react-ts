import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {   Requests } from '../../types/types';
import { serverPath } from '../../components/helpers/constants';


const initialState: Requests = {
    requests: [],
    status: null,
    error: null
};

export const fetchRequests = createAsyncThunk('appPage/fetchRequests', async () => {
    const response = await fetch(serverPath)
    const data = await response.json();
    return data
    
})
  
export const AppSlice = createSlice({
    name: 'appPage',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchRequests.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchRequests.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.requests = action.payload;
        })
        .addCase(fetchRequests.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })   
    }
})

// export const {  } = AppSlice.actions;
export const select = (state: RootState) => state;

export default AppSlice.reducer;