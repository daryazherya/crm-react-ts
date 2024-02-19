import { StatusAndProducts } from "../../types/types";
import ButtonStatus from "./ButtonStatus";

const FormStatusAndProducts:React.FC<StatusAndProducts> = ({setFilter, filter}) => {
   
    return (
        <form action="">
            <div className="row mb-3 justify-content-start">
                <div className="col">
                    <ButtonStatus filter={filter} setFilter={setFilter}/>
                </div>
                <div className="col">
                    <select onChange={(e)=>{setFilter({...filter,product: e.target.value})}} value={filter.product}
                        className="custom-select" id="productSelect">
                        <option value='all'>Все продукты</option>
                        <option value="course-html">Курс по верстке</option>
                        <option value="course-js">Курс по JavaScript</option>
                        <option value="course-vue">Курс по VUE JS</option>
                        <option value="course-php">Курс по PHP</option>
                        <option value="course-wordpress">Курс по WordPress</option>
                    </select>
                </div>
            </div>
        </form>
    )
}
export default FormStatusAndProducts;