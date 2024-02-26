import FormStatusAndProducts from "./FormStatusAndProducts";
import RenderData from './RenderData';


const MainTable: React.FC= () => {

    return ( 
        <div className="main-wrapper">
			<div className="container-fluid">
				<div className="admin-heading-1">Все заявки</div>
				<FormStatusAndProducts />
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
						<RenderData />
					</tbody>
				</table>
			</div>
		</div>
     );
    }

    export default MainTable;