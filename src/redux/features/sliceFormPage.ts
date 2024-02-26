import {  createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Request } from '../../types/types';
import { serverPath } from '../../components/helpers/constants';

export const sendDataUser = createAsyncThunk('formPage/sendDataUser', async (dataUser: Request) => {
    await fetch(serverPath, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUser)
    });
});
  
const initialState: Request = {
    name: '',
    phone: '',
    email: '',
    product: 'course-html',
    id: 0,
    date: new Date().toLocaleDateString(),
    status: 'new'
};

  
export const FormSlice = createSlice({
    name: 'formPage',
    initialState,
    reducers: {
        addRequestName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        addRequestPhone: (state, action: PayloadAction<string>) => {            
            state.phone = action.payload;
        },
        addRequestEmail: (state, action: PayloadAction<string>) => {           
            state.email = action.payload;
        },
        addRequestProduct: (state, action: PayloadAction<string>) => {
            state.product = action.payload;
        }
    }
})

export const { addRequestName, addRequestPhone, addRequestEmail, addRequestProduct } = FormSlice.actions;
export const state = (state: RootState) => state;

export default FormSlice.reducer;