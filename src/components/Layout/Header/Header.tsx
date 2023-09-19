import { Link } from "react-router-dom";
import style from "./../../../styles/components/header.module.scss";
const Header = () => {
  return (
    <div className={style.header}>
      <div>
        <Link to="/">Main logo</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/bye">Movies</Link>
          </li>
          <li>
            <Link to="/bye">TV Shows</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
