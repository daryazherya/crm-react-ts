import { useAppSelector } from "../../redux/hooks";
import { Request, StatusKey, StatusKeyClass, StatusKeyProduct } from "../../types/types"
import { productObj1, statusClass, statusObj } from "../helpers/constants"
import { Link } from "react-router-dom";

  

const RenderData: React.FC = () => {
    const requests  = useAppSelector(state => state.AppSlice.requests);
    const filter = useAppSelector(state => state.TableSlice.filter);

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
        
    return filterData(requests).map((item: Request)=>{
        return (
            <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.date}</td>
            <td>{productObj1[item.product as StatusKeyProduct]}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>
                <div 
                    className={`badge badge-pill ${statusClass[item.status as StatusKeyClass]}`}
                >
                    {statusObj[item.status as StatusKey]}
                </div>
            </td>
            <td>
                <Link to={`/edit/${item.id}`} 
                >
                    Редактировать
                </Link>
            </td>
        </tr> 
        )
    })
}

export default RenderData;