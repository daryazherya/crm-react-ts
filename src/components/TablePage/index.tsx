import Nav from '../MainNav';
import MainTable from './MainTable';
import LeftPanel from './LeftPanel';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchRequests } from '../../redux/features/sliceApp';


const TablePage = () => {
    const requests  = useAppSelector(state => state.AppSlice.requests);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchRequests());
    }, [dispatch]);
    
   
    return <>
        <Nav/>
        {requests && <LeftPanel />}
        {requests && <MainTable />}
    </>
     
}
 
export default TablePage;