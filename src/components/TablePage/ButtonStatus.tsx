import { Link } from "react-router-dom";
import { statusName } from "../helpers/constants";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setFilter } from "../../redux/features/sliceTablePage";

const ButtonStatus:React.FC =()=>{
    const filter = useAppSelector(state => state.TableSlice.filter);
    const dispatch = useAppDispatch();
    
    return statusName.map((name)=>{
        return (
            <div  key={name.id} id="topStatusBar" className="btn-group" role="group" aria-label="...">
                <Link onClick={()=>dispatch(setFilter({...filter,status: name.attr}))} 
                to="" 
                className={`btn btn-light ${filter.status === name.attr? 'active' : ''}`} 
                data-value={name.attr}>{name.name}</Link>
            </div>
            )
    })
   
}

export default ButtonStatus;
