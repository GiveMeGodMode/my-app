import style from "./header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <Link to={"/"}>
                <h1 className={style.logo}>LIVE-TYR</h1>
            </Link>
            <nav>
                <ul>
                    <Link to={"/favorites"}>
                        <li className={style.nav_item}>Избранное</li>
                    </Link>
                    <li className={style.nav_item} onClick={props.openOverlay}>
                        Заявки
                        <li>
                            {props.overlayItems.length}
                        </li>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
