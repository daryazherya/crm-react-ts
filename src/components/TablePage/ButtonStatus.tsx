import { Link } from "react-router-dom";
import { statusName } from "../helpers/constants";
import { StatusAndProducts } from "../../types/types";

const ButtonStatus:React.FC<StatusAndProducts> =({filter, setFilter})=>{
    
    return statusName.map((name)=>{
        return (
            <div  key={name.id} id="topStatusBar" className="btn-group" role="group" aria-label="...">
                <Link onClick={()=>setFilter({...filter,status: name.attr})} 
                to="" 
                className={`btn btn-light ${filter.status === name.attr? 'active' : ''}`} 
                data-value={name.attr}>{name.name}</Link>
            </div>
            )
    })
   
}

export default ButtonStatus;
