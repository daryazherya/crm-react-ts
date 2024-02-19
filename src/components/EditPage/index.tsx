import '../../css/main.css';
import '../../css/bootstrap.min.css';
import Nav from '../MainNav';
import RenderRequest from './RenderRequest';
import { AppContext } from '../App';
import { Link,useParams} from "react-router-dom";
import { useContext } from 'react';
import { Request } from '../../types/types';

const EditPage: React.FC = () => {

	const { requests } = useContext(AppContext);

	const { id } = useParams();
	const findedRequest = requests.filter((request: Request) => id !== undefined && request.id === +id);
	
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
						{findedRequest && 
						<RenderRequest 
							findedRequest={findedRequest[0]}
						/>}	
					</div>
				</div>	
			</div>
		</div>
        </>
     );
}
 
export default EditPage;