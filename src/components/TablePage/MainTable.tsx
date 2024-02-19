import FormStatusAndProducts from "./FormStatusAndProducts";
import RenderData from './RenderData';
import { MainTableProps } from "../../types/types";


const MainTable: React.FC<MainTableProps> = ({requests, setFilter, filter, filterData}) => {

    return ( 
        <div className="main-wrapper">
			<div className="container-fluid">
				<div className="admin-heading-1">Все заявки</div>
				<FormStatusAndProducts filter={filter} setFilter={setFilter} />
				<table className="table fs-14">
					<thead>
						<tr>
							<th>ID</th>
							<th>дата</th>
							<th>продукт</th>
							<th>имя</th>
							<th>email</th>
							<th>телефон</th>
							<th>статус</th>
							<th></th>
						</tr>
					</thead>
					<tbody id="tbody">
						<RenderData requests={requests} filterData={filterData}/>
					</tbody>
				</table>
			</div>
		</div>
     );
    }

    export default MainTable;