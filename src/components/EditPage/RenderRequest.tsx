import { MouseEvent} from "react";
import { useNavigate } from "react-router-dom";
import { productObj, serverPath } from "../helpers/constants";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setEmail, setName, setPhone, setProduct, setStatus } from "../../redux/features/sliceEditPage";

const RenderRequest: React.FC = () => {
    const findedRequest = useAppSelector(state => state.EditSlice.findedRequest);
    // console.log(findedRequest,'LLLL')
    const dispatch = useAppDispatch();

    const  name  = useAppSelector(state => state.EditSlice.findedRequest?.name);
    const  phone  = useAppSelector(state => state.EditSlice.findedRequest?.phone);
    const  email  = useAppSelector(state => state.EditSlice.findedRequest?.email);
    const  product  = useAppSelector(state => state.EditSlice.findedRequest?.product);
    const  status  = useAppSelector(state => state.EditSlice.findedRequest?.status);

	const navigate = useNavigate();
    
	const collectDataEditor = async (e: MouseEvent) => {
        e.preventDefault();
        const newReq = {
            ...findedRequest,
            name,
            phone,
            email,
            product,
            status
        }

        try {
            await fetch(serverPath + `/${findedRequest?.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(newReq)
         })
            navigate('/table');
        } catch(error) {
            console.log(error)
        }

	}
    
	const deleteRequest = async (e: MouseEvent) => {
        e.preventDefault();
        try {
            await fetch(serverPath + `/${findedRequest?.id}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json' }
            })
            navigate('/table');
        } catch(error) {
            console.log(error)
        }	
	}
   
      
    return findedRequest && <form id="form">
        <div className="card mb-4">
            <div className="card-header">Данные о заявке</div>
            <div className="card-body">
                <div className="row mb-3">
                    <div className="col-md-2">
                        <strong>ID:{findedRequest.id}</strong>
                    </div>
                    <div className="col">
                        Заявка №{findedRequest.id}
                        <span id="number"></span>
                    </div>
                    <input name="id" type="hidden" id="id" />
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <strong
                        >
                            Дата создания:{new Date(findedRequest.date).toLocaleDateString()}
                        </strong>
                    </div>
                    <div className="col" id="date"></div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-2">
                        <strong>Продукт:</strong>
                    </div>
                    <div className="col">
                        <select 
                            onChange={(e)=> dispatch(setProduct(e.target.value))} 
                            id="product" 
                            name="product" 
                            className="custom-select" 
                            value={findedRequest.product}
                        >
                            {productObj.map((product, id) => {
                                const [ name ] = Object.keys(product);
                                const [ title ] = Object.values(product)
                                return <option value={name} key={id}>{title}</option>
                            })} 

                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-2">
                        <strong>Имя:</strong>
                    </div>
                    <div className="col">
                        <input onChange={(e)=> dispatch(setName(e.target.value))} 
                            type="text"
                            className="form-control"
                            value={name}
                            id="name"
                            name="name"
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-2">
                        <strong>Email:</strong>
                    </div>
                    <div className="col">
                        <input onChange={(e)=> dispatch(setEmail(e.target.value))} 
                            type="text"
                            className="form-control"
                            value={email}
                            id="email"
                            name="email"
                            />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-2">
                        <strong>Телефон:</strong>
                    </div>
                    <div className="col">
                        <input onChange={(e)=> dispatch(setPhone(e.target.value))} 
                            type="text"
                            className="form-control"
                            value={phone}
                            id="phone"
                            name="phone"
                            />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-2">
                        <strong>Статус заявки:</strong>
                    </div>
                    <div className="col">
                        <select
                            onChange={(e)=>dispatch(setStatus(e.target.value))}
                            className="custom-select" 
                            id="status" 
                            name="status" 
                            value={status}
                        >
                            <option value="">Выберите...</option>
                            <option value="new">Новая</option>
                            <option value="inwork">В работе</option>
                            <option value="complete">Завершена</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-between">
            <div className="col">
                <button 
                    onClick={(e) => collectDataEditor(e)}
                    type="submit" 
                    className="btn btn-primary"
                >
                    Сохранить изменения
                </button>
            </div>
            <div className="col text-right">
                <button 
                    onClick={(e) => deleteRequest(e)}
                    type="submit" 
                    className="btn btn-primary"
                >
                    Удалить
                </button>
            </div>
        </div> 
    </form>
}
export default RenderRequest;