import {  PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { EditState, Request } from '../../types/types';


const initialState: EditState = {
    findedRequest: null,
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