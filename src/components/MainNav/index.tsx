import { Link } from "react-router-dom";

const Nav = () => {
    return (
      <nav className="project-nav">
        <div className="project-nav__links-wrapper">
            <Link to="/crm-react-ts/">Форма добавления заявок</Link>
            <Link to="/crm-react-ts/table">Таблица с заявками</Link>
        </div>
    </nav>
    )
}

export default Nav;