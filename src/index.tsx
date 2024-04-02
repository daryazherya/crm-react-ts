import FormPage from "./components/FormPage"
import TablePage from "./components/TablePage";
import EditPage from "./components/EditPage";
import NotFound from './components/NotFound';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { fetchRequests } from "./redux/features/sliceApp";
import { useAppDispatch,  } from "./redux/hooks";
import { useEffect } from "react";


const App:React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchRequests());
    },[dispatch])

    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/crm-react-ts/" 
                    element={<FormPage />}>
                </Route>
                <Route 
                    path="/crm-react-ts/table" 
                    element={<TablePage
                />}></Route>
                <Route 
                    path="/crm-react-ts/edit/:id" 
                    element={<EditPage 
                />}></Route>
                <Route 
                    path="*" 
                    element={<NotFound
                />}></Route>
            </Routes>
        </BrowserRouter>
        
    );
}
    
export default App;
