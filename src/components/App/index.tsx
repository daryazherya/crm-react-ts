import FormPage from "../FormPage"
import TablePage from "../TablePage";
import EditPage from "../EditPage";
import NotFound from '../NotFound';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { fetchRequests } from "../../redux/features/sliceApp";
import { useAppDispatch,  } from "../../redux/hooks";
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
                    path="/" 
                    element={<FormPage />}>
                </Route>
                <Route 
                    path="/table" 
                    element={<TablePage
                />}></Route>
                <Route 
                    path="/edit/:id" 
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
