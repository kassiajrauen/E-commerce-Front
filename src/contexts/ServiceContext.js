import React, {useState} from 'react';

const ServiceContext = React.createContext([false, () => {}]);

const ServiceProvider = ({children}) => {
    //const [state, setState] = useState(false);
    const [selected, setSelected] = useState(false);
    const [services, setServices] = useState([{
        id: 1,
        image: "https://www.petz.com.br/blog/wp-content/uploads/2021/03/como-dar-banho-em-cachorro2.jpg",
        description: "Banho",
        price: "39.99",
        selected: false
    },
    {
        id: 2,
        image: "https://www.naturedogh.com.br/imagens/onde-fazer-tosa-higienica-gato.jpg",
        description: "Tosa",
        price: "59.99",
        selected: false
    },
    {
        id: 3,
        image: "https://www.petz.com.br/blog/wp-content/uploads/2019/05/transporte-de-animais-onibus-metro-2.jpg",
        description: "Transporte",
        price: "99.99",
        selected: false
    }]);
    return(
        <ServiceContext.Provider value={{selected, setSelected, services, setServices}}>
            {children}
        </ServiceContext.Provider>
    );
};

export {ServiceContext, ServiceProvider };