import {  PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { EditState, Request } from '../../types/types';
import { serverPath } from '../../components/helpers/constants';


export const updateRequest = createAsyncThunk('editPage/updateRequest', async (payload: {request: Request, id: number}) => {
    const { request, id } = payload;

    await fetch(serverPath + `/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    });
});


export const dropRequest = createAsyncThunk('editPage/dropRequest', async (payload: {id: number}) => {
    const { id } = payload;
    await fetch(serverPath + `/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        }
    });
});


const initialState: EditState = {
    findedRequest: {
        name: '',
        phone: '',
        email: '',
        product: '',
        id: 0,
        date: '',
        status: ''
    }
};
  
export const EditSlice = createSlice({
    name: 'editPage',
    initialState,
    reducers: {
        setRequest: (state, action: PayloadAction<Request>) => {
            state.findedRequest = action.payload;
        },
        setName: (state, action: PayloadAction<string>) => {
            if (state.findedRequest) {
            state.findedRequest.name = action.payload;
            }
        },
        setPhone: (state, action: PayloadAction<string>) => { 
            if (state.findedRequest) {
                state.findedRequest.phone = action.payload;
            }           
        },
        setEmail: (state, action: PayloadAction<string>) => {  
            if (state.findedRequest) {
                state.findedRequest.email = action.payload;
            }    
        },
        setProduct: (state, action: PayloadAction<string>) => {
            if (state.findedRequest) {
                state.findedRequest.product = action.payload;
            }       
        },
        setStatus: (state, action: PayloadAction<string>) => {
            if (state.findedRequest) {
                state.findedRequest.status = action.payload;
            }       
        }
    }
})

export const { setRequest, setEmail, setName, setPhone, setProduct, setStatus } = EditSlice.actions;
export const state = (state: RootState) => state;

export default EditSlice.reducer;