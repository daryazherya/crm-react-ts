import FormPage from "../FormPage"
import TablePage from "../TablePage";
import EditPage from "../EditPage";
import NotFound from '../NotFound';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useEffect } from "react";
import { useState } from "react";
import { serverPath } from '../helpers/constants';
import { State } from "../../types/types";


export const AppContext = createContext<State>({
    requests: [],
    setRequests: () => {},
});

const App:React.FC = () => {
    const [requests, setRequests] = useState<[]>([]);

    useEffect(() => {
        async function fetchRequests() {
            try {
                const response = await fetch(serverPath);
                const data = await response.json();
                setRequests(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchRequests()
    },[])
    console.log(requests,'<<<')

    return (
        <AppContext.Provider value = {{requests, setRequests}}>
            <Router>
            <Routes>
                <Route 
                    path="/" 
                    element={<FormPage />}
                ></Route>
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
            </Router>
        </AppContext.Provider> 
    );
}
    
export default App;
