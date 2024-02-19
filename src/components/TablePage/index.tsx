import '../../css/main.css';
import '../../css/bootstrap.min.css';
import Nav from '../MainNav';
import MainTable from './MainTable';
import LeftPanel from './LeftPanel';
import { useContext, useEffect, useState } from "react";
import { AppContext } from '../App';
import { serverPath } from '../helpers/constants';
import { Filter, Request } from '../../types/types';


const TablePage = () => {
    const { requests, setRequests } = useContext(AppContext);

    const [filter, setFilter] = useState<Filter>({
        product: 'all',
        status: 'all'
    })

    useEffect(() => {
        fetch(serverPath, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then(data => {
            if(JSON.stringify(data) !== JSON.stringify(requests)) {
                setRequests(data)}
        })
        },[requests])
   
  
    const filterData = (dataTable: Request[]): Request[] => {
        let requests: Request[] = [];
        if(filter.product !== 'all') {
            requests = dataTable.filter((request: Request) => request.product === filter.product);

        } else if (filter.product ==='all') {
            requests = [...dataTable];
        }

        if (filter.status !== 'all') {
            requests = requests.filter((request: Request) => request.status === filter.status)   
        }
        return requests;
    }

    return <>
        <Nav/>
        {requests && <LeftPanel 
            filter={filter} 
            setFilter={setFilter} 
        />}
        {requests && <MainTable 
            requests={requests} 
            filter={filter} 
            setFilter={setFilter} 
            filterData={filterData} 
        />}
    </>
     
}
 
export default TablePage;