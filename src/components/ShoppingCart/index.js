import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

import {TokenContext} from '../../contexts/TokenContext';
import {ServiceContext} from "../../contexts/ServiceContext";
import {UserContext} from "../../contexts/UserContext"
import { StyledShoppingCart } from "./styles";
import { CloseOutline } from "react-ionicons";


function ShoppingCart() {

    const {token} = useContext(TokenContext);
    const {user} = useContext(UserContext);
    const { selected, setSelected, services, setServices } = useContext(ServiceContext);  
    const [showConfirmation, setShowConfirmation] = useState(false);
   
    const navigate = useNavigate();

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    } 

    async function handleServices(e, buy) {

        e.preventDefault();

        //console.log(config);
        console.log("compra:" + buy);
        let databuy = {
            servicesPurchased: buy,
            dateService: "28/12/2022",
            total: total(buy)
        };
        console.log(databuy);
        
        const promise = axios.post('http://localhost:5000/registry', databuy /*, config*/);

        promise.then();

        promise.catch(error => console.log(error.response));

    }

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

    function deleteService(e,service) {

        e.preventDefault();
        
        service.selected = false;
        navigate('/shopping-cart');
        
    }

    function goToHome(e) {
        let servicesPurchased = services.filter(services => services.selected ==true);        
        e.preventDefault();      
        handleServices(e, servicesPurchased);        
        navigate('/home');
    }

    function goToServices(e) {
        e.preventDefault();      
        navigate('/services');
    }
    
    return(
        <StyledShoppingCart>
            <h1> <img src='../../assets/logo.png' alt="logo"/> Serviços para seu adoravel Pet: </h1>

            <div className="services-list">
                {services.filter(services => services.selected ==true).map(service => (
                    <div key={service.id} className={`service`}>
                        <div> 
                            <img src={service.image} alt="logo"/>
                            <h2>{service.description}</h2>                         
                            <h3>R$ {service.price}</h3>
                        </div>       
                        <button  onClick={(event) => deleteService(event,service)}> Excluir </button>
                    </div>
                ))}
            </div>
            <div> </div>
            <div className="confirmation-services">
                <button  onClick={(event) => confirmation(event)} className="checkout"> Confirmar? Total: {total(services.filter(services => services.selected ==true))}</button>
                <button  onClick={(event) => goToServices(event)} className="backServices"> Serviços </button>
            </div>
            
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