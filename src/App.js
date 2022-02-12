import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Services from './components/Services';
import ShoppingCart from './components/ShoppingCart'


import {TokenProvider} from "./contexts/TokenContext";
import {UserProvider} from "./contexts/UserContext";
import {ServiceProvider} from './contexts/ServiceContext';

function App(){
    return (
        <TokenProvider>
            <UserProvider>  
                <ServiceProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route exact path='/' element={<Login />} />
                            <Route element path='/sign-up' element={<SignUp />} />
                            <Route element path='/services' element={<Services />} />
                            <Route element path='/shopping-cart' element={<ShoppingCart />} />
                        </Routes>
                    </BrowserRouter>
                </ServiceProvider>                
            </UserProvider>
        </TokenProvider>
    )
}

export default App;