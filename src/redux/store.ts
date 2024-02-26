import {  configureStore } from '@reduxjs/toolkit';
import  AppSlice    from './features/sliceApp';
import  FormSlice from './features/sliceFormPage';
import  TableSlice from './features/sliceTablePage';
import  EditSlice from './features/sliceEditPage';



export const store = configureStore({
    reducer: {
    AppSlice,
    FormSlice,
    TableSlice,
    EditSlice
    }
});
  

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;