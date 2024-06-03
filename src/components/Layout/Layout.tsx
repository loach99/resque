import { Link, Outlet } from "react-router-dom";
import './layout.css'
const Layout = () => {
    return (
        <>
            <header className="header">
                <Link className="link" to={"/"}>Главная</Link>
                <Link className="link" to={"/docs"}>Документация</Link>
            </header>
            <Outlet />
        </>
    );
}

export default Layout;
