import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Services from './components/Services';

import { ServiceContext } from './contexts/ServiceContext';
import {TokenProvider} from "./contexts/TokenContext";
import {UserProvider} from "./contexts/UserContext";

function App(){
    return (
        <TokenProvider>
            <UserProvider>                
                    <BrowserRouter>
                        <Routes>
                            <Route exact path='/' element={<Login />} />
                            <Route element path='/sign-up' element={<SignUp />} />
                            <Route element path='/services' element={<Services />} />
                        </Routes>
                    </BrowserRouter>                
            </UserProvider>
        </TokenProvider>
    )
}

export default App;