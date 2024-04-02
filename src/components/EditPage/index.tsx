import Nav from '../MainNav';
import RenderRequest from './RenderRequest';
import { Link, useParams } from "react-router-dom";
import { Request } from '../../types/types';
import {  useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect} from 'react';
import { setRequest } from '../../redux/features/sliceEditPage';


const EditPage: React.FC = () => {
	const requests  = useAppSelector(state => state.AppSlice.requests);
	const dispatch = useAppDispatch();
	const { id } = useParams();

    useEffect(() => {
        const foundRequest = requests.find((request: Request) => id !== undefined && request.id === +id);
        if (foundRequest) {
            dispatch(setRequest(foundRequest))
        } 
    }, [requests, id]);

    return ( 
        <>
        <Nav/>
        <div className="form-wrapper">
			<div className="container-fluid">
			
				<div className="row justify-content-between align-items-center">
					<div className="col">
						<div className="admin-heading-1">Работа с заявкой</div>
					</div>
					<div className="col text-right">
						<Link to="/table" className="btn btn-link">Вернуться назад</Link>
					</div>
				</div>
				
				<div className="row">
					
					<div className="col">
						<RenderRequest/>
					</div>
				</div>	
			</div>
		</div>
        </>
    );
}
 
export default EditPage;