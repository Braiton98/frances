import logo from '../../Img/LOGO ANIMACIONES EL FRANCES PNG.png'
import menuV from '../../assets/menu.svg'
import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to='/'>Kermesse Clásica</Link>
                    </li>
                    <li>
                        <Link to='/kermesseFull'>Kermesse Full</Link>
                    </li>
                    <li>
                        <Link to='/hotDogParty'>Hot Dog Party</Link>
                    </li>
                    <li>
                        <Link to='/pochoclera'>Pochoclera</Link>
                    </li>
                    <li>
                        <Link to='/alfombraRoja'>Alfombra Roja</Link>
                    </li>
                    <li>
                        <Link to='/casino'>Casino</Link>
                    </li>
                </ul>
            </div>

            <button onClick={handleMenu} type="button" className='boton-menu'>
                <img src={menuV} alt="menu" />
            </button>

            <div className={menu ? 'responsive-On' : 'responsive-Off'}>
                <ul>
                    <li>
                        <Link to='/'>Kermesse Clásica</Link>
                    </li>
                    <li>
                        <Link to='/kermesseFull'>Kermesse Full</Link>
                    </li>
                    <li>
                        <Link to='/hotDogParty'>Hot Dog Party</Link>
                    </li>
                    <li>
                        <Link to='/pochoclera'>Pochoclera</Link>
                    </li>
                    <li>
                        <Link to='/alfombraRoja'>Alfombra Roja</Link>
                    </li>
                    <li>
                        <Link to='/casino'>Casino</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
