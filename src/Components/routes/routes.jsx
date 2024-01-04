import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import KermesseC from '../KermesseC/KermesseC'
import NotFound from '../NotFound/NotFound'
import Pochoclera from '../Pochoclera/Pochoclera'
import KermesseF from '../KermesseF/KermesseF';
import Casino from '../Casino/Casino';
import HotDog from '../HotDogParty/HotDog';
import Alfombra from '../AlfombraRoja/Alfombra';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';



function Rutas() {
    return (
        <Router>
            <Navbar />
            <Banner />
            <Routes>
                <Route path='/' element={<KermesseC />} />
                <Route path='/pochoclera' element={<Pochoclera />} />
                <Route path='/kermesseFull' element={<KermesseF />} />
                <Route path='/hotDogParty' element={<HotDog />} />
                <Route path='/casino' element={<Casino />} />
                <Route path='/alfombraRoja' element={<Alfombra />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default Rutas;