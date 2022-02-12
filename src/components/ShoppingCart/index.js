import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

import {TokenContext} from '../../contexts/TokenContext';
import {ServiceContext} from "../../contexts/ServiceContext";
import { StyledShoppingCart } from "./styles";


function ShoppingCart() {

    const {token} = useContext(TokenContext);
   // const {user} = useContext(UserContext);
    const { selected, setSelected, services, setServices } = useContext(ServiceContext);  
    
   
    const navigate = useNavigate();    
        
    return(
        <StyledShoppingCart>
            <h1> <img src='../../assets/logo.png' alt="logo"/> Serviços para seu adoravel Pet: </h1>

            <div className="services-list">
                {services.filter(services => services.selected ==true).map(service => (
                    <div /*onClick={(event)=> dataService(event, service)}*/ key={service.id} className={`service`}> 
                        <img src={service.image} alt="logo"/>
                        <h2>{service.description}</h2>
                        <h3>R$ {service.price}</h3>
                    </div>
                ))}
            </div>
            <button  /*onClick={(event)=> openShoppingCart(event)}*/> Confirmar Serviço(s) </button>
        </StyledShoppingCart>
    )
}

export default ShoppingCart;