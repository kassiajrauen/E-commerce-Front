import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import {TokenProvider} from "./contexts/TokenContext";
import {UserProvider} from "./contexts/UserContext";

function App(){
    return (
        <TokenProvider>
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </TokenProvider>
    )
}

export default App;