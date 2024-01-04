import logo from '../../assets/Img/LOGO ANIMACIONES EL FRANCES PNG.png'
import menuV from '../../assets/Img/menu.svg'
import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // const [menu, setMenu] = useState(false)

    // const handleMenu = () => {
    //     setMenu(!menu);
    // }


    const [isOpen, setIsopen] = useState(false);

    const handleIsOpen = () => {
        setIsopen(!isOpen);
    }

    const hamburguerIcon =
        <svg onClick={handleIsOpen} className="bi bi-list" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>;

    const closeIcon =
        <svg onClick={handleIsOpen} className="bi bi-x" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>;

    return (

        <header>
            <nav className="navBar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className={`navItems ${isOpen && "open"}`}>
                    <Link className='links' to='/' onClick={handleIsOpen}>Kermesse Clásica</Link>
                    <Link className='links' to='/kermesseFull' onClick={handleIsOpen} >Kermesse Full</Link>
                    <Link className='links' to='/hotDogParty' onClick={handleIsOpen} >Hot Dog Party</Link>
                    <Link className='links' to='/pochoclera' onClick={handleIsOpen} >Pochoclera</Link>
                    <Link className='links' to='/alfombraRoja' onClick={handleIsOpen} >Alfombra Roja</Link>
                    <Link className='links' to='/casino' onClick={handleIsOpen} >Casino Party</Link>
                    <div className="logo logoResponsive">
                        <img src={logo} alt="logo"/>
                    </div>
                </div>
                <div className="toggles">
                    {isOpen ? closeIcon : hamburguerIcon}
                </div>
            </nav>
        </header>


        // <nav className="navbar">
        //     <div className="logo">
        //         <img src={logo} alt="logo" />
        //     </div>
        //     <div className="menu">
        //         <ul>
        //             <li>
        //                 <Link to='/'>Kermesse Clásica</Link>
        //             </li>
        //             <li>
        //                 <Link to='/kermesseFull'>Kermesse Full</Link>
        //             </li>
        //             <li>
        //                 <Link to='/hotDogParty'>Hot Dog Party</Link>
        //             </li>
        //             <li>
        //                 <Link to='/pochoclera'>Pochoclera</Link>
        //             </li>
        //             <li>
        //                 <Link to='/alfombraRoja'>Alfombra Roja</Link>
        //             </li>
        //             <li>
        //                 <Link to='/casino'>Casino Party</Link>
        //             </li>
        //         </ul>
        //     </div>

        //     <button onClick={handleMenu} type="button" className='boton-menu'>
        //         <img src={menuV} alt="menu" />
        //     </button>

        //     <div className={menu ? 'responsive-On' : 'responsive-Off'}>
        //         <ul>
        //             <li>
        //                 <Link to='/'>Kermesse Clásica</Link>
        //             </li>
        //             <li>
        //                 <Link to='/kermesseFull'>Kermesse Full</Link>
        //             </li>
        //             <li>
        //                 <Link to='/hotDogParty'>Hot Dog Party</Link>
        //             </li>
        //             <li>
        //                 <Link to='/pochoclera'>Pochoclera</Link>
        //             </li>
        //             <li>
        //                 <Link to='/alfombraRoja'>Alfombra Roja</Link>
        //             </li>
        //             <li>
        //                 <Link to='/casino'>Casino</Link>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    );
};

export default Navbar;
