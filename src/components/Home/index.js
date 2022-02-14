import axios from 'axios';
import React, {useState, useContext, useEffect} from 'react';
import { Container } from './styles';
import dayjs from 'dayjs';
import {useNavigate} from 'react-router-dom';
import {UserContext} from '../../contexts/UserContext';

function Home(){
    const navigate = useNavigate();
    const [historic, setHistoric] = useState([]);
    const {user} = useContext(UserContext);

    useEffect(() => {
        axios.get('http://localhost:5000/home')

    .then((response) => {
        console.log(response);
        setHistoric(response.data);
    }).catch((error) => {
        alert(error.response.data.message);
    });
}, []);    

    function Refresh(){
        document.reload();
    }
    console.log(historic);

    return(
        <Container>
            <div className="header">
                <h1>Olá!</h1>
                <img onClick={() => {<Refresh/>}} src='../../assets/Exit.png' alt=""/>
            </div>
            <div className="historic">
            {historic[0] ? historic?.map((object) => {
                   return(
                   <div>
                        <span className="date">{dayjs(object.date).format("DD/MM/AA")}</span>
                        <span className="services">{object.services}</span>
                        <span className="value">{object.value}</span>
                    </div>
                   ) 
                }): <span>hmmm... ainda não foi contratado nenhum serviço :(</span>}
            </div>
            <div className="buttons">
                <button onClick={() => navigate('/services')}>
                    Novo serviço
                </button>
                <button onClick={() => navigate('/shopping-cart')}>
                    Seu carrinho
                </button>
            </div>
        </Container>
    )
}

export default Home;