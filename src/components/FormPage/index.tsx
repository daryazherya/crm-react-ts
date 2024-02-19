import '../../css/main.css';
import '../../css/bootstrap.min.css';
import Nav from '../MainNav';
import Form from './Form';


const FormPage: React.FC = () => {

    return ( 
            <>
            <Nav/>
            <div className="white-plate white-plate--payment">
                <div className="container-fluid">

        
                    <div className="white-plate__header text-center">
                        <p className="white-plate__logo">
                            <span>Форма</span> заявок
                        </p>
                    </div>
                    <div className="white-plate__line-between white-plate__line-between--main"></div>
                    <Form/>
                </div>
            </div>
        </>
     );
}
 
export default FormPage;