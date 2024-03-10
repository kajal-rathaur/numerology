import {React} from "react";
import Calculation from '../screens/Calculation';
import Consult from '../screens/Consult';
import Information from '../screens/Information';
import Home from '../screens/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const RoutingPage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calculate" element={<Calculation />} />
                <Route path="/consult" element={<Consult />} />
                <Route path="/information" element={<Information />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutingPage;



