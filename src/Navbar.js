import { Link, Outlet } from "react-router-dom";
import navbarStyle from './style/css/navbar.module.css';

function Navbar(){
    return (
        <>
            <div className={navbarStyle.outerOfNavbar}>
                <div className={navbarStyle.navbar}>
                    <Link className={navbarStyle.link} to="/">Home</Link>
                    <Link className={navbarStyle.link} to="/about">About</Link>
                </div>
            </div>
            
            <div>
                <Outlet/>
            </div>
        </>
    )
}

export default Navbar;