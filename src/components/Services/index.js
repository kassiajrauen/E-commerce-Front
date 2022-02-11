import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
//import { ServiceContext } from "../../contexts/ServiceContext";
import {TokenContext} from '../../contexts/TokenContext';
//import {UserContext} from '../../contexts/UserContext';

import { StyledServices } from "./styles";


function Services() {

    const {token} = useContext(TokenContext);
   // const {user} = useContext(UserContext);
   // const { setPrice, setImage, setId, setDescription } = useContext(ServiceContext)
    const [selected, setSelected] = useState();

    const [services, setServices] = useState([{
        id: 1,
        image: "https://www.petz.com.br/blog/wp-content/uploads/2021/03/como-dar-banho-em-cachorro2.jpg",
        description: "Banho",
        price: "39.99"
    },
    {
        id: 2,
        image: "https://www.naturedogh.com.br/imagens/onde-fazer-tosa-higienica-gato.jpg",
        description: "Tosa",
        price: "59.99"
    },
    {
        id: 3,
        image: "https://www.petz.com.br/blog/wp-content/uploads/2019/05/transporte-de-animais-onibus-metro-2.jpg",
        description: "Transporte",
        price: "99.99"
    }]);

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    } 

    const navigate = useNavigate();

    useEffect(()=> {

        const promise = axios.get('https://localhost:5000/services', config)

        promise.then(response => {
            setServices(response.data)
        }, []);

    }, []);

    if(services === null) {
        return <h1>Carregando...</h1>
    }
   
    function dataService(e, service) {
       // e.preventDefault();
        console.log(service);
        // setPrice(service.price);
        // setImage(service.image);
         //setId(service.id);
        // setDescription(service.description);       
        setSelected(service.id);
        
    }

    function openShoppingCart(e){
        e.preventDefault();
        navigate("/shopping-cart");
    }

    return(
        <StyledServices>
            <h1> <img src='../../assets/logo.png' alt="logo"/> Escolha os serviços para seu Pet </h1>

            <div className="services-list">
                {services.map(service => (
                    <div onClick={(event)=> dataService(event, service)} key={service.id} className={`service ${selected === service.id? "selected": ""}`}> 
                        <img src={service.image} alt="logo"/>
                        <h2>{service.description}</h2>
                        <h3>R$ {service.price}</h3>
                    </div>
                ))}
            </div>
            <button  onClick={(event)=> openShoppingCart(event)}> Carrinho de compras </button>
        </StyledServices>
    )
}

export default Services;