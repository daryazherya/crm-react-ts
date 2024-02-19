import '../../css/main.css';
import '../../css/bootstrap.min.css';
import { Link } from "react-router-dom";
import photo from '../../avatars/avatar-128.jpg';
import {  StatusName } from '../../types/types';
import { statusName } from '../helpers/constants';
import { LeftPanelProps } from '../../types/types';

const LeftPanel: React.FC<LeftPanelProps> = ({filter, setFilter}) => {	
   
    return ( 
        <div className="left-panel blue-skin">
            <div className="left-panel__logo">
                <div className="left-panel__logo-title">CRM заявки</div>
            </div>
            
            <div className="left-panel__user clearfix">
                <div className="left-panel__user-photo">
                    <img src={photo} alt="Avatar" />
                </div>
                <div className="left-panel__user-name">Петр <br />Васильевич</div>
            </div>
            
            <div  className="left-panel__navigation">
                <div className="left-panel__navigation-title">Заявки</div>
                <ul>
                    {statusName.map((name: StatusName) => {
                        return <li key={name.id}>
                            <Link 
                            onClick={()=> setFilter({...filter, status: name.attr})}
                            data-value="all" 
                            data-role="left-status" 
                            to="" 
                            className={`${filter.status === `${name.attr}`? 'active' : ''}`}
                            >
                                {name.name}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
            
        </div>
    );
}

export default LeftPanel;
