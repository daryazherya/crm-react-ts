import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productObj } from "../helpers/constants";
import { AppContext } from "../App";
import { serverPath } from "../helpers/constants";

const Form = () => {

    const navigate = useNavigate();
    const { requests } = useContext(AppContext);
    const requestsID: { id: number }[] = requests;
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [product, setProduct] = useState('course-html');

    const collectDataUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dataUserStatus = {
            name,
            phone,
            email,
            product,
            id: requests.length !== 0 ? requestsID[requests.length - 1].id + 1 : 0,
            date : new Date().toLocaleDateString(),
            status: "new"
        }

        try {
             await fetch(serverPath, {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(dataUserStatus)
            })
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
                onChange={(e) => setName(e.target.value)} 
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
                onChange={(e) => setPhone(e.target.value)} 
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
                onChange={(e)=> setEmail(e.target.value)} 
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
                onChange={(e)=> setProduct(e.target.value)} 
                value={product} 
                id="product" 
                name="product" 
                className="form-control" 
            >
                {productObj.map((product, id) => {
                    const [ name ] = Object.keys(product);
                    const [ title] = Object.values(product)
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