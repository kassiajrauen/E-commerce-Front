import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

import {TokenContext} from '../../contexts/TokenContext';
import {ServiceContext} from "../../contexts/ServiceContext";
import { StyledShoppingCart } from "./styles";
import { CloseOutline } from "react-ionicons";


function ShoppingCart() {

    const {token} = useContext(TokenContext);
   // const {user} = useContext(UserContext);
    const { selected, setSelected, services, setServices } = useContext(ServiceContext);  
    const [showConfirmation, setShowConfirmation] = useState(false);
   
    const navigate = useNavigate();

    function total(services){
        let sum = 0;        
        services.forEach((service)=>{
            sum += service.price;
        } );
        return sum
    }

    function confirmation(e) {

        e.preventDefault();

        setShowConfirmation(!showConfirmation);
    }

    function goToHome(e) {
        let servicesPuchased = services.filter(services => services.selected ==true);
        servicesPuchased = {...servicesPuchased, dateService: "28/11/1993", total: total(servicesPuchased)};
        e.preventDefault();      
        //handleService(e); feat:checkout
        console.log(servicesPuchased);
        navigate('/home');
    }
    
    return(
        <StyledShoppingCart>
            <h1> <img src='../../assets/logo.png' alt="logo"/> Serviços para seu adoravel Pet: </h1>

            <div className="services-list">
                {services.filter(services => services.selected ==true).map(service => (
                    <div key={service.id} className={`service`}> 
                        <img src={service.image} alt="logo"/>
                        <h2>{service.description}</h2>
                        <h3>R$ {service.price}</h3>
                    </div>
                ))}
            </div>
            <button  onClick={(event) => confirmation(event)}> Confirmar Serviço(s) </button>
            {showConfirmation && (<div className='confirmation'>
                <div className='close' onClick={(event) => confirmation(event)}>
                    <CloseOutline color={'#000000'} height='25px' width='25px'/>
                </div>
                <div className='container-confirmation'>
                    <h1>Tem certeza que deseja nossos serviços pelo total de (R$ {total(services.filter(services => services.selected ==true))})?</h1>
                    <div className='yes-no'>
                        <button onClick={(event) => confirmation(event)} className="yes">Não</button>
                        <button onClick={(event) => goToHome(event)} className="no" >Sim</button>
                    </div>
                </div>
            </div>)}
        </StyledShoppingCart>
    )
}

export default ShoppingCart;