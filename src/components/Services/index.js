import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

import {TokenContext} from '../../contexts/TokenContext';
import {ServiceContext} from "../../contexts/ServiceContext";
//import {UserContext} from '../../contexts/UserContext';

import { StyledServices } from "./styles";


function Services() {

    const {token} = useContext(TokenContext);
   // const {user} = useContext(UserContext);
    const { selected, setSelected, services, setServices } = useContext(ServiceContext);  
    
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
        // setPrice(service.price);
        // setImage(service.image);
         //setId(service.id);
        // setDescription(service.description);  
        if (service.selected === false){
            service.selected = true;
        }else{
            service.selected = false;
        }
        
        setSelected(service.selected)
        
    }

    function openShoppingCart(e){
        e.preventDefault();
        console.log(services.filter(services => services.selected ==true))
        navigate("/shopping-cart");
    }
    
    return(
        <StyledServices>
            <h1> <img src='../../assets/logo.png' alt="logo"/> Escolha os serviços para seu Pet </h1>

            <div className="services-list">
                {services.map(service => (
                    <div onClick={(event)=> dataService(event, service)} key={service.id} className={`service ${ service.selected? "selected": ""}`}> 
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