import logo from '../Img/LOGO ANIMACIONES EL FRANCES PNG.png'
import menuV from '../assets/menu.svg'
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
const[menu, setMenu] = useState(false)

const handleMenu = ()=>{
    setMenu(!menu);
}

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu">
                <ul>
                    <li>Kermesse Clásica</li>
                    <li>Kermesse Full</li>
                    <li>Hot Dog Party</li>
                    <li>Pochoclera</li>
                    <li>Alfombra Roja</li>
                    <li>Casino</li>
                </ul>
            </div>

            <button onClick = {handleMenu} type="button" className='boton-menu'>
                <img src = {menuV} alt="menu" />
            </button>

            <div className={menu ? 'responsive-On' : 'responsive-Off'}>
                <ul>
                    <li>Kermesse Clásica</li>
                    <li>Kermesse Full</li>
                    <li>Hot Dog Party</li>
                    <li>Pochoclera</li>
                    <li>Alfombra Roja</li>
                    <li>Casino</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
