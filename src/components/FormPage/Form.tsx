import { useNavigate } from "react-router-dom";
import { productObj } from "../helpers/constants";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addRequestEmail, addRequestName, addRequestPhone, addRequestProduct, sendDataUser } from "../../redux/features/sliceFormPage";

const Form = () => {

    const navigate = useNavigate();
    const  requests  = useAppSelector(state => state.AppSlice.requests);
    const dispatch = useAppDispatch();

    const requestsID: { id: number }[] = requests;
    const  name  = useAppSelector(state => state.FormSlice.name);
    const  phone  = useAppSelector(state => state.FormSlice.phone);
    const  email  = useAppSelector(state => state.FormSlice.email);
    const  product  = useAppSelector(state => state.FormSlice.product);
    const  status  = useAppSelector(state => state.FormSlice.status);

    const collectDataUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dataUserStatus = {
            name,
            phone,
            email,
            product,
            status,
            id: requests.length !== 0 ? requestsID[requests.length - 1].id + 1 : 0,
            date : new Date().toLocaleDateString(),
        }
        try {
             await dispatch(sendDataUser(dataUserStatus))
            navigate('/table');
        } catch(err) {
            console.log(err)
        }
    }
    

    return <form 
        onSubmit={(e) => collectDataUser(e)} 
        id="form" 
        method="POST" 
    >
        <label>Ваши данные:</label>
        <div className="form-group">
            <input 
                onChange={(e) => dispatch(addRequestName(e.target.value))} 
                value={name} 
                id="name" 
                type="text" 
                name="name" 
                autoComplete="on" 
                className="form-control" 
                placeholder="Имя и Фамилия" 
                required 
            />
        </div>
        <div className="form-group">
            <input 
                onChange={(e) => dispatch(addRequestPhone(e.target.value))} 
                value={phone} 
                id="phone" 
                type="text" 
                name="phone" 
                autoComplete="on" 
                className="form-control" 
                placeholder="Телефон" 
            />
        </div>
        <div className="form-group">
            <input 
                onChange={(e)=> dispatch(addRequestEmail(e.target.value))} 
                value={email} 
                id="email" 
                type="email" 
                name="email" 
                autoComplete="on" 
                className="form-control" 
                placeholder="Email" 
                required 
            />
        </div>
        <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Продукт:</label>
            <select 
                onChange={(e)=> dispatch(addRequestProduct(e.target.value))} 
                value={product} 
                id="product" 
                name="product" 
                className="form-control" 
            >
                {productObj.map((product, id) => {
                    const [ name ] = Object.keys(product);
                    const [ title ] = Object.values(product);
                    return <option value={name} key={id}>{title}</option>
                })}    
            </select>
        </div>
        <div className="form-group">
            <button 
                type="submit" 
                className="btn btn-lg btn-primary btn-block"
            >
                Оформить заявку
            </button>
        </div>
    </form>
}
 
export default Form;